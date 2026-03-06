"use client";

import * as React from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";

import { IntentInput } from "@/components/architect/intent-input";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import { motion, AnimatePresence } from "framer-motion";
import { Icons } from "@/components/icons";
import { ConstructionZeroScreen } from "@/components/architect/construction-zero-screen";
import { useRoadmapState } from "@/hooks/use-roadmap-state";
import { Roadmap } from "@/lib/types";
import { RoadmapSummaryCard } from "./roadmap-summary-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { type UIMessage } from "ai";
import { ThinkingLoader } from "@/components/ai/thinking-loader";
import type { ArchitectResponse } from "@/lib/schemas/architect-response";

interface ConstructionLogProps {
  inputRef: React.RefObject<HTMLTextAreaElement | null>;
}

/** Single source of truth: get content and optional roadmap from assistant message parts. */
function getContentAndRoadmap(parts: UIMessage["parts"]): {
  content: string;
  roadmap: Roadmap | null;
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
          data.intent === "roadmap" && data.roadmap
            ? (data.roadmap as Roadmap)
            : null;
        return { content: msg, roadmap };
      }
    }

    if (p.type === "text" && p.text) {
      try {
        const data = JSON.parse(p.text) as ArchitectResponse;
        if (data && typeof data.message === "string") {
          const msg = data.message;
          const roadmap =
            data.intent === "roadmap" && data.roadmap
              ? (data.roadmap as Roadmap)
              : null;
          return { content: msg, roadmap };
        }
      } catch {
        // not JSON or wrong shape — ignore
      }
    }
  }
  return { content: "", roadmap: null };
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
  const transport = React.useMemo(() => new DefaultChatTransport({ api: "/api/chat" }), []);
  const { messages, sendMessage, status } = useChat({
    messages: [],
    transport,
  });

  const [input, setInput] = React.useState("");
  const { setRoadmap, roadmap, setGenerating } = useRoadmapState();
  console.log(messages, roadmap, "roadmap");

  React.useEffect(() => {
    const lastAssistant = messages.filter((m) => m.role === "assistant").pop();
    if (!lastAssistant?.parts) return;
    const { roadmap } = getContentAndRoadmap(lastAssistant.parts);
    if (roadmap) setRoadmap(roadmap);
  }, [messages, setRoadmap]);

  React.useEffect(() => {
    setGenerating(status === "streaming");
  }, [status, setGenerating]);

  const handleSend = (text: string) => {
    if (text.trim()) {
      sendMessage({ text });
      setInput("");
    }
  };

  const scrollRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, status]);

  const handleView = (roadmap: Roadmap) => setRoadmap(roadmap);
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
                      <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className={cn(
                          "flex gap-4 w-full max-w-3xl mx-auto",
                          isUser ? "flex-row-reverse" : "flex-row"
                        )}
                      >
                        <div className="flex-none flex flex-col items-center">
                          {isUser ? (
                            <Avatar className="h-8 w-8 border border-border shadow-sm">
                              <AvatarImage src="/placeholder-user.jpg" />
                              <AvatarFallback className="bg-muted text-xs text-muted-foreground">
                                U
                              </AvatarFallback>
                            </Avatar>
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
                                ? "bg-foreground text-background rounded-2xl rounded-tr-sm"
                                : "bg-muted/40 border border-border/50 text-foreground rounded-2xl rounded-tl-sm backdrop-blur-sm"
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
                                <div className="mt-4 first:mt-0 not-prose">
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
                      </motion.div>
                    );
                  })}

                  <ThinkingLoader isLoading={status === "streaming"} />
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
            isLoading={status === "streaming"}
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
