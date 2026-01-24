"use client";

import * as React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { IntentInput } from "@/components/architect/intent-input";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import { motion, AnimatePresence } from "framer-motion";
import {
    History,
    Settings,
    RotateCw,
    Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SUGGESTIONS } from "@/lib/constants";

type Message = {
    id: string;
    role: "user" | "ai";
    content: string;
    timestamp: Date;
    thought?: string;
    duration?: number;
    model?: string;
    processingTime?: number;
};

export function ConstructionLog() {
    const [messages, setMessages] = React.useState<Message[]>([]);
    const [input, setInput] = React.useState("");
    const [isThoughtExpanded, setIsThoughtExpanded] = React.useState<Record<string, boolean>>({});

    const toggleThought = (id: string) => {
        setIsThoughtExpanded(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const handleSend = (text: string) => {
        const userMsg: Message = {
            id: Date.now().toString(),
            role: "user",
            content: text,
            timestamp: new Date()
        };
        setMessages(prev => [...prev, userMsg]);
        setInput("");

        // Mock response
        setTimeout(() => {
            const aiMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: "ai",
                content: `Analyzing "**${text}**"...\n\nProcessing your intent. We should focus on building the foundations first. Shall we proceed with a **conceptual map**?`,
                timestamp: new Date()
            };
            setMessages(prev => [...prev, aiMsg]);
        }, 1200);
    };

    const scrollRef = React.useRef<HTMLDivElement>(null);
    React.useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    return (
        <div className="flex flex-col h-full relative overflow-hidden">

            <div className="h-16 flex-none flex items-center justify-between px-6 border-b border-border backdrop-blur-xl z-20">
                <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                        <Sparkles className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs font-bold tracking-tight">Architect AI</span>
                        <div className="flex items-center gap-1.5">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                            <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Ready</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon-sm">
                        <History className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon-sm">
                        <Settings className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon-sm" onClick={() => setMessages([])}>
                        <RotateCw className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            <div className="flex-1 min-h-0 z-10 flex flex-col relative overflow-hidden">
                <ScrollArea className="h-full">
                    <div className={cn(
                        "max-w-3xl mx-auto px-6 py-10 w-full min-h-full flex flex-col",
                        messages.length === 0 ? "justify-center" : "justify-start"
                    )}>
                        <AnimatePresence mode="popLayout" initial={false}>
                            {messages.length === 0 ? (
                                <motion.div
                                    key="zero-screen"
                                    initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
                                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                                    transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                                    className="flex flex-col items-center justify-center w-full"
                                >
                                    <div className="h-16 w-16 rounded-[2rem] bg-primary/5 flex items-center justify-center border border-primary/10 mb-8 shadow-2xl relative group">
                                        <div className="absolute inset-0 bg-primary/10 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <Sparkles className="h-8 w-8 text-primary/50 group-hover:text-primary transition-colors z-10" />
                                    </div>

                                    <h2 className="text-2xl font-black mb-3 tracking-tight">How shall we construct?</h2>
                                    <p className="text-muted-foreground text-sm max-w-[360px] leading-relaxed mb-12 text-center font-medium px-4">
                                        I can architect complex systems, analyze deep internals, or generate code from first principles.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full px-4">
                                        {SUGGESTIONS.map((s, i) => (
                                            <Card
                                                key={i}
                                                className="cursor-pointer hover:bg-muted/50 transition-colors border-primary/10 group/card"
                                                onClick={() => handleSend(s.description)}
                                            >
                                                <CardHeader className="p-4 gap-1">
                                                    <CardTitle className="text-sm font-bold group-hover/card:text-primary transition-colors">{s.title}</CardTitle>
                                                    <CardDescription className="text-xs line-clamp-2">{s.description}</CardDescription>
                                                </CardHeader>
                                            </Card>
                                        ))}
                                    </div>
                                </motion.div>
                            ) : (
                                <div className="space-y-8 pb-10">
                                    {messages.map((msg) => (
                                        <div
                                            key={msg.id}
                                            className={cn(
                                                "flex flex-col gap-4 group animate-in fade-in slide-in-from-bottom-2 duration-500",
                                                msg.role === "user" ? "items-end" : "items-start"
                                            )}
                                        >
                                            <div className={cn(
                                                "max-w-[85%] rounded-[1.25rem] p-4 text-[14.5px] leading-relaxed transition-all shadow-sm",
                                                msg.role === "user"
                                                    ? "bg-foreground text-background font-medium ml-auto rounded-tr-none"
                                                    : "bg-muted/50 border border-border text-foreground mr-auto rounded-tl-none"
                                            )}>
                                                <article className={cn(
                                                    "prose prose-sm max-w-none",
                                                    msg.role === "user" ? "prose-zinc prose-invert-0" : "prose-emerald prose-invert"
                                                )}>
                                                    <ReactMarkdown
                                                        components={{
                                                            h3: (props) => <h3 className="text-inherit font-bold mb-2 mt-4 first:mt-0 tracking-tight text-base" {...props} />,
                                                            p: (props) => <p className="mb-2 last:mb-0 leading-relaxed" {...props} />,
                                                            ul: (props) => <ul className="space-y-1.5 mb-2 list-none" {...props} />,
                                                            li: (props) => (
                                                                <li className="flex items-center gap-2 py-0.5" {...props}>
                                                                    <div className="h-1 w-1 rounded-full bg-primary/50 shrink-0" />
                                                                    <span className="text-inherit opacity-90">{props.children}</span>
                                                                </li>
                                                            ),
                                                            strong: (props) => <strong className="font-bold text-inherit" {...props} />,
                                                            code: (props) => <code className="bg-muted px-1 py-0.5 rounded font-mono text-[12px]" {...props} />,
                                                        }}
                                                    >
                                                        {msg.content}
                                                    </ReactMarkdown>
                                                </article>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </AnimatePresence>
                        <div ref={scrollRef} />
                    </div>
                </ScrollArea>
            </div>

            <div className="p-4 sm:p-6 pb-10 flex-none z-20">
                <div className="max-w-2xl mx-auto w-full">
                    <IntentInput
                        input={input}
                        handleInputChange={(e) => setInput(e.target.value)}
                        handleSubmit={(e) => {
                            e.preventDefault();
                            if (input.trim()) handleSend(input);
                        }}
                        isLoading={false}
                    />
                </div>
            </div>
        </div>
    );
}
