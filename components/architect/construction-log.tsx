"use client";

import { useMemo, useState, useEffect, useCallback, useRef } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";

import { IntentInput } from "@/components/architect/intent-input";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import { AnimatePresence } from "framer-motion";
import { Icons } from "@/components/icons";
import { ConstructionZeroScreen } from "@/components/architect/construction-zero-screen";
import { GenerationStatus, useRoadmapState } from "@/hooks/use-roadmap-state";
import { Roadmap } from "@/lib/types";
import { RoadmapSummaryCard } from "./roadmap-summary-card";
import { type UIMessage } from "ai";
import { ThinkingLoader } from "@/components/ai/thinking-loader";
import type { ArchitectResponse } from "@/lib/schemas/architect-response";
import { UserAvatar } from "@/components/user-avatar";
interface ConstructionLogProps {
  inputRef: React.RefObject<HTMLTextAreaElement | null>;
}

function extractPartialMessage(text: string): string {
  const match = text.match(/"message"\s*:\s*"((?:[^"\\]|\\.)*?)(?:"(?=\s*[,}])|$)/);
  if (!match) return "";
  return match[1].replace(/\\(.)/g, "$1");
}

function hasRoadmapInStream(text: string): boolean {
  return /"intent"\s*:\s*"roadmap"/.test(text) || /"roadmap"\s*:/.test(text);
}

function getContentAndRoadmap(parts: UIMessage["parts"]): {
  content: string;
  roadmap: Roadmap | null;
  hasRoadmap: boolean;
} {
  for (const part of parts) {
    const p = part as {
      type: string;
      text?: string;
      object?: ArchitectResponse;
      architectResponse?: ArchitectResponse;
    };

    if (p.type === "object") {
      const data = p.object ?? p.architectResponse;
      if (data) {
        const msg = data.message ?? "";
        const roadmap =
          data.intent === "roadmap" && data.roadmap ? (data.roadmap as Roadmap) : null;
        const hasRoadmap = data.intent === "roadmap" && !!data.roadmap;
        return { content: msg, roadmap, hasRoadmap };
      }
    }

    if (p.type === "text" && p.text) {
      try {
        const data = JSON.parse(p.text) as ArchitectResponse;
        if (data && typeof data.message === "string") {
          const msg = data.message;
          const roadmap =
            data.intent === "roadmap" && data.roadmap ? (data.roadmap as Roadmap) : null;
          const hasRoadmap = data.intent === "roadmap" && !!data.roadmap;
          return { content: msg, roadmap, hasRoadmap };
        }
      } catch {
        // Streaming: incomplete JSON — extract partial content and detect intent
        const content = extractPartialMessage(p.text);
        const hasRoadmap = hasRoadmapInStream(p.text);
        return { content, roadmap: null, hasRoadmap };
      }
    }
  }
  return { content: "", roadmap: null, hasRoadmap: false };
}

/** User messages: plain text from the first text part. */
function getUserText(parts: UIMessage["parts"]): string {
  for (const part of parts) {
    const p = part as { type: string; text?: string };
    if (p.type === "text" && p.text) return p.text;
  }
  return "";
}

export function ConstructionLog({ inputRef }: ConstructionLogProps) {
  const transport = useMemo(() => new DefaultChatTransport({ api: "/api/chat" }), []);
  const { messages, sendMessage, status } = useChat({
    messages: [],
    transport,
  });

  const [input, setInput] = useState("");
  const [creatingRoadmap, setCreatingRoadmap] = useState(false);
  const { setRoadmap, setGenerationStatus, generationStatus } = useRoadmapState();

  useEffect(() => {
    const lastAssistant = messages.filter((m) => m.role === "assistant").pop();
    if (!lastAssistant?.parts) return;
    const { roadmap, hasRoadmap = false } = getContentAndRoadmap(lastAssistant.parts);
    if (hasRoadmap) {
      queueMicrotask(() => setCreatingRoadmap(true));
    }
    if (roadmap) {
      setRoadmap(roadmap);
    }
  }, [messages, setRoadmap, setCreatingRoadmap]);

  useEffect(() => {
    if (status === "streaming") {
      setGenerationStatus(GenerationStatus.GENERATING);
    } else if (status === "ready") {
      setGenerationStatus(GenerationStatus.COMPLETED);
    } else if (status === "error") {
      setGenerationStatus(GenerationStatus.ERROR);
    }
  }, [setGenerationStatus, status]);

  const handleSend = useCallback(
    (text: string) => {
      if (text.trim()) {
        setCreatingRoadmap(false);
        setGenerationStatus(GenerationStatus.SUBMITTED);
        sendMessage({ text });
        setInput("");
      }
    },
    [sendMessage, setGenerationStatus]
  );

  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, status]);

  const handleView = useCallback((roadmap: Roadmap) => setRoadmap(roadmap), [setRoadmap]);
  const handleConstruct = () => {
    // TODO: wire to construction flow
  };

  return (
    <div className="flex flex-col h-full relative overflow-hidden bg-linear-to-b from-background via-background/50 to-background/20">
      <div className="flex-1 min-h-0 z-10 flex flex-col relative overflow-hidden">
        <div className="h-full overflow-y-auto custom-scrollbar">
          <div
            className={cn(
              "w-full min-h-full flex flex-col px-4 pt-6 md:px-6",
              messages.length === 0 ? "justify-center" : "justify-end"
            )}
          >
            <AnimatePresence initial={true}>
              {messages.length === 0 ? (
                <ConstructionZeroScreen
                  key="zero-screen"
                  inputRef={inputRef}
                  onInputChange={setInput}
                />
              ) : (
                <div key="messages" className="space-y-6 pb-4">
                  {messages.map((msg, idx) => {
                    const isStreamingLast =
                      status === "streaming" &&
                      idx === messages.length - 1 &&
                      msg.role === "assistant";
                    if (isStreamingLast) return null;

                    const isUser = msg.role === "user";
                    const { content: assistantContent, roadmap: assistantRoadmap } =
                      getContentAndRoadmap(msg.parts);
                    const content = isUser ? getUserText(msg.parts) : assistantContent;
                    const roadmap = isUser ? null : assistantRoadmap;

                    return (
                      <div
                        key={msg.id}
                        className={cn(
                          "flex gap-4 w-full max-w-3xl mx-auto",
                          isUser ? "flex-row-reverse" : "flex-row"
                        )}
                      >
                        <div className="flex-none flex flex-col items-center">
                          {isUser ? (
                            <UserAvatar />
                          ) : (
                            <div className="h-8 w-8 rounded-lg bg-linear-to-tr from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20 shadow-inner mt-0.5">
                              <Icons.logo className="h-4 w-4" />
                            </div>
                          )}
                        </div>

                        <div
                          className={cn(
                            "flex-1 min-w-0 flex flex-col gap-2",
                            isUser ? "items-end" : "items-start"
                          )}
                        >
                          <span className="text-[10px] uppercase tracking-wider text-muted-foreground/50 font-semibold px-1">
                            {isUser ? "You" : "Architect AI"}
                          </span>
                          <div
                            className={cn(
                              "relative px-3 py-2 text-sm leading-relaxed shadow-sm w-full",
                              isUser
                                ? "bg-primary/10 rounded-2xl rounded-tr-sm"
                                : "bg-muted/30 border border-border/50 text-foreground rounded-2xl rounded-tl-sm backdrop-blur-sm"
                            )}
                          >
                            <article className="prose prose-sm max-w-none prose-p:leading-relaxed prose-pre:bg-muted/50 prose-pre:border prose-pre:border-border/50 prose-code:text-primary prose-code:bg-primary/5 prose-code:px-1 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none dark:prose-invert">
                              {content ? (
                                <ReactMarkdown
                                  components={{
                                    ul: ({ ...props }) => (
                                      <ul
                                        className="list-disc pl-4 space-y-1 my-2 marker:text-primary/50"
                                        {...props}
                                      />
                                    ),
                                    ol: ({ ...props }) => (
                                      <ol
                                        className="list-decimal pl-4 space-y-1 my-2 marker:text-primary/50"
                                        {...props}
                                      />
                                    ),
                                  }}
                                >
                                  {content}
                                </ReactMarkdown>
                              ) : null}
                              {roadmap ? (
                                <div className="mt-5 first:mt-4 not-prose">
                                  <RoadmapSummaryCard
                                    roadmap={roadmap}
                                    isGenerating={status === "streaming"}
                                    onView={handleView}
                                    onConstruct={handleConstruct}
                                  />
                                </div>
                              ) : null}
                            </article>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  <ThinkingLoader
                    isLoading={
                      generationStatus === GenerationStatus.GENERATING ||
                      generationStatus === GenerationStatus.SUBMITTED
                    }
                    text={creatingRoadmap ? "Creating roadmap..." : "Thinking....."}
                  />
                </div>
              )}
            </AnimatePresence>
            <div ref={scrollRef} />
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-5 pb-8 flex-none z-20 bg-linear-to-t from-background via-background to-transparent">
        <div className="max-w-3xl mx-auto w-full">
          <IntentInput
            ref={inputRef}
            input={input}
            handleInputChange={(e) => setInput(e.target.value)}
            handleSubmit={(e) => {
              e.preventDefault();
              if (input.trim()) handleSend(input);
            }}
            isLoading={
              generationStatus === GenerationStatus.GENERATING ||
              generationStatus === GenerationStatus.SUBMITTED
            }
          />
          <div className="mt-3 text-center">
            <p className="text-xs text-muted-foreground font-medium">
              AI can make mistakes. Review generated architectures carefully.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
