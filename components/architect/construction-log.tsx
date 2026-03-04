"use client";

import * as React from "react";
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';

import { IntentInput } from "@/components/architect/intent-input";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import { motion, AnimatePresence } from "framer-motion";
import { Icons } from "@/components/icons";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ConstructionZeroScreen } from "@/components/architect/construction-zero-screen";
import { useRoadmapState } from "@/hooks/use-roadmap-state";
import { Roadmap } from "@/lib/types";
import { RoadmapSummaryCard } from "./roadmap-summary-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ConstructionLogProps {
    inputRef: React.RefObject<HTMLTextAreaElement | null>;
}

export function ConstructionLog({ inputRef }: ConstructionLogProps) {
    const { messages, sendMessage, status } = useChat({
        transport: new DefaultChatTransport({
            api: '/api/chat',
        }),
    });

    const [input, setInput] = React.useState("");
    const { setRoadmap, setGenerating, setError } = useRoadmapState();

    // Extract roadmap from AI messages
    React.useEffect(() => {
        const lastAiMessage = messages.filter(m => m.role === 'assistant').pop();

        if (lastAiMessage?.parts) {
            for (const part of lastAiMessage.parts) {
                let roadmapData: any = null;

                try {
                    if ((part as any).type === 'object') {
                        roadmapData = (part as any).object;
                    } else if ((part as any).type === 'tool-result') {
                        roadmapData = (part as any).result;
                    } else if ((part as any).type === 'text' && (part as any).text) {
                        const text = (part as any).text;
                        const jsonMatch = text.match(/\{[\s\S]*\}/);
                        if (jsonMatch) {
                            roadmapData = JSON.parse(jsonMatch[0]);
                        }
                    }

                    if (roadmapData && typeof roadmapData === 'object') {
                        if (roadmapData.title || (Array.isArray(roadmapData.nodes) && roadmapData.nodes.length > 0)) {
                            setRoadmap(roadmapData as Roadmap);
                        }
                    }
                } catch (err) {
                    console.error(err)
                }
            }
        }
    }, [messages, setRoadmap, setError]);

    React.useEffect(() => {
        setGenerating(status === 'streaming');
    }, [status, setGenerating]);

    const handleSend = (text: string) => {
        if (text.trim()) {
            sendMessage({ text });
            setInput("");
            setGenerating(true);
        }
    };

    const scrollRef = React.useRef<HTMLDivElement>(null);
    React.useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, status]);

    const handleView = (roadmap: Roadmap) => {
        setRoadmap(roadmap);
    };

    const handleConstruct = (roadmap: Roadmap) => {
        console.log("Constructing Roadmap State:", roadmap);
    };

    return (
        <div className="flex flex-col h-full relative overflow-hidden bg-linear-to-b from-background via-background/50 to-background/20">

            {/* Chat Area */}
            <div className="flex-1 min-h-0 z-10 flex flex-col relative overflow-hidden">
                <div className="h-full overflow-y-auto custom-scrollbar">
                    <div className={cn(
                        "w-full min-h-full flex flex-col px-4 py-6 md:px-6",
                        messages.length === 0 ? "justify-center" : "justify-start"
                    )}>
                        <AnimatePresence initial={true}>
                            {messages.length === 0 ? (
                               <ConstructionZeroScreen key="zero-screen" inputRef={inputRef} onInputChange={setInput} />
                            ) : (
                                <div key="messages" className="space-y-6 pb-4">
                                    {messages.map((msg, idx) => {
                                        // If streaming AND this is the last message AND it's from assistant, 
                                        // we DO NOT render the text content yet. We show the skeleton card.
                                        const isStreamingThisMessage = status === 'streaming' && idx === messages.length - 1 && msg.role === 'assistant';

                                        if (isStreamingThisMessage) return null;

                                        return (
                                            <motion.div
                                                key={msg.id}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.4 }}
                                                className={cn(
                                                    "flex gap-4 w-full max-w-3xl mx-auto",
                                                    msg.role === "user" ? "flex-row-reverse" : "flex-row"
                                                )}
                                            >
                                                {/* Avatar Area */}
                                                <div className="flex-none flex flex-col items-center">
                                                    {msg.role === 'user' ? (
                                                        <Avatar className="h-8 w-8 border border-border shadow-sm">
                                                            <AvatarImage src="/placeholder-user.jpg" />
                                                            <AvatarFallback className="bg-muted text-xs text-muted-foreground">U</AvatarFallback>
                                                        </Avatar>
                                                    ) : (
                                                        <div className="h-8 w-8 rounded-lg bg-linear-to-tr from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20 shadow-inner mt-0.5">
                                                            <Icons.logo className="h-4 w-4" />
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Message Bubble */}
                                                <div className={cn(
                                                    "flex-1 min-w-0 flex flex-col gap-2",
                                                    msg.role === "user" ? "items-end" : "items-start"
                                                )}>
                                                    {/* Name Label */}
                                                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/50 font-semibold px-1">
                                                        {msg.role === 'user' ? 'You' : 'Architect AI'}
                                                    </span>

                                                    <div className={cn(
                                                        "relative px-5 py-3.5 text-sm leading-relaxed shadow-sm max-w-full",
                                                        msg.role === "user"
                                                            ? "bg-foreground text-background rounded-2xl rounded-tr-sm"
                                                            : "bg-muted/40 border border-border/50 text-foreground rounded-2xl rounded-tl-sm backdrop-blur-sm"
                                                    )}>
                                                        <article className="prose prose-sm max-w-none prose-p:leading-relaxed prose-pre:bg-muted/50 prose-pre:border prose-pre:border-border/50 prose-code:text-primary prose-code:bg-primary/5 prose-code:px-1 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none dark:prose-invert">
                                                            {msg.parts.map((part, index) => {
                                                                if ((part as any).type === 'text') {
                                                                    const text = (part as any).text;

                                                                    // Check for JSON in text
                                                                    const jsonMatch = text.match(/\{[\s\S]*\}/);
                                                                    let cleanText = text;
                                                                    let inlineRoadmapVal = null;

                                                                    if (jsonMatch) {
                                                                        try {
                                                                            const potentialJson = JSON.parse(jsonMatch[0]);
                                                                            if (potentialJson && (potentialJson.title || potentialJson.nodes)) {
                                                                                console.log("Successfully parsed embedded JSON roadmap:", potentialJson);
                                                                                inlineRoadmapVal = potentialJson;
                                                                                cleanText = text.replace(jsonMatch[0], '').trim();
                                                                            }
                                                                        } catch (e) {
                                                                            console.warn("Failed to parse regex-matched JSON in message:", e);
                                                                        }
                                                                    } else {
                                                                        // fallback cleanup if we just want to hide braces if they were malformed 
                                                                        // (but better to leave text if not valid JSON)
                                                                        // cleanText = text.replace(/\{[\s\S]*\}/g, '').trim(); 
                                                                        // Actually, let's just stick to the robust check above.
                                                                    }

                                                                    return (
                                                                        <React.Fragment key={index}>
                                                                            {cleanText && (
                                                                                <ReactMarkdown
                                                                                    components={{
                                                                                        ul: ({ node, ...props }) => <ul className="list-disc pl-4 space-y-1 my-2 marker:text-primary/50" {...props} />,
                                                                                        ol: ({ node, ...props }) => <ol className="list-decimal pl-4 space-y-1 my-2 marker:text-primary/50" {...props} />,
                                                                                    }}
                                                                                >
                                                                                    {cleanText}
                                                                                </ReactMarkdown>
                                                                            )}
                                                                            {inlineRoadmapVal && (
                                                                                <div className="mt-4 not-prose">
                                                                                    <RoadmapSummaryCard
                                                                                        roadmap={inlineRoadmapVal}
                                                                                        isGenerating={false} // If we are rendering final message, it's done. 
                                                                                        onView={handleView}
                                                                                        onConstruct={handleConstruct}
                                                                                    />
                                                                                </div>
                                                                            )}
                                                                        </React.Fragment>
                                                                    );
                                                                }

                                                                if ((part as any).type === 'object' || (part as any).type === 'tool-result') {
                                                                    const data = (part as any).type === 'object' ? (part as any).object : (part as any).result;
                                                                    if (data && typeof data === 'object') {
                                                                        console.log("Rendering object/tool-result roadmap:", data);
                                                                        return (
                                                                            <div key={index} className="mt-4 first:mt-0 not-prose">
                                                                                <RoadmapSummaryCard
                                                                                    roadmap={data}
                                                                                    isGenerating={status === 'streaming'}
                                                                                    onView={handleView}
                                                                                    onConstruct={handleConstruct}
                                                                                />
                                                                            </div>
                                                                        );
                                                                    }
                                                                }
                                                                return null;
                                                            })}
                                                        </article>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        );
                                    })}

                                    {/* SKELETON CARD FOR STREAMING STATE */}
                                    {status === 'streaming' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            className="flex gap-4 w-full max-w-3xl mx-auto"
                                        >
                                            <div className="flex-none flex flex-col items-center">
                                                <div className="h-8 w-8 rounded-lg bg-linear-to-tr from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20 shadow-inner mt-0.5 animate-pulse">
                                                    <Icons.sparkles className="h-4 w-4 text-primary animate-spin-slow" />
                                                </div>
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <Card className="bg-muted/30 border-primary/20 overflow-hidden relative">
                                                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-primary/5 to-transparent -translate-x-full animate-shimmer" />
                                                    <CardHeader className="pb-3">
                                                        <CardTitle className="h-5 w-1/3 bg-primary/10 rounded animate-pulse" />
                                                        <CardDescription className="h-4 w-2/3 bg-muted rounded animate-pulse mt-2" />
                                                    </CardHeader>
                                                    <CardContent>
                                                        <div className="h-10 w-full bg-primary/5 rounded-lg border border-primary/10 flex items-center justify-center">
                                                            <div className="flex items-center gap-2 text-xs font-medium text-primary/70">
                                                                <span className="h-2 w-2 rounded-full bg-primary animate-ping" />
                                                                Generating Architecture...
                                                            </div>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                            )}
                        </AnimatePresence>
                        <div ref={scrollRef} />
                    </div>
                </div>
            </div>

            {/* Input Area */}
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
                        isLoading={status === 'streaming'}
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
