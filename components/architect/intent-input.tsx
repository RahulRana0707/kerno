"use client";

import * as React from "react";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface IntentInputProps {
    input: string;
    handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    handleSubmit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.KeyboardEvent<HTMLTextAreaElement>) => void;
    isLoading: boolean;
}

export const IntentInput = React.forwardRef<HTMLTextAreaElement, IntentInputProps>(
    ({ input, handleInputChange, handleSubmit, isLoading }, ref) => {

        const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
            }
        };

        return (
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="relative rounded-[20px] border border-border bg-background/40 shadow-[0_8px_32px_-8px_rgba(0,0,0,1)] focus-within:border-primary/40 focus-within:shadow-[0_0_20px_-5px_rgba(var(--primary),0.2)] transition-all duration-500 backdrop-blur-3xl group"
            >
                <div className="absolute inset-0 rounded-[20px] bg-linear-to-b from-white/3 to-transparent pointer-events-none" />

                <div className="relative flex flex-col">
                    <Textarea
                        ref={ref}
                        value={input}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        placeholder="Make changes, ask for anything..."
                        className="min-h-[50px] max-h-[200px] w-full resize-none border-0 bg-transparent px-5 pt-4 pb-12 text-[14px] placeholder:text-muted-foreground focus-visible:ring-0 text-foreground selection:bg-primary/30 leading-relaxed overflow-y-auto font-medium"
                        disabled={isLoading}
                    />

                    <div className="absolute left-2.5 bottom-2.5 flex items-center gap-0.5">
                        <Button
                            variant="ghost"
                            size="icon-xs"
                            className="text-muted-foreground hover:text-foreground h-8 w-8 rounded-lg hover:bg-foreground/5 transition-colors"
                            disabled={isLoading}
                        >
                            <Icons.plus className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon-xs"
                            className="text-muted-foreground hover:text-foreground h-8 w-8 rounded-lg hover:bg-foreground/5 transition-colors"
                            disabled={isLoading}
                        >
                            <Icons.mic className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon-xs"
                            className="text-muted-foreground hover:text-foreground h-8 w-8 rounded-lg hover:bg-foreground/5 transition-colors"
                            disabled={isLoading}
                        >
                            <Icons.pencil className="h-4 w-4" />
                        </Button>
                    </div>

                    <div className="absolute right-2.5 bottom-2.5">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                size="icon"
                                onClick={(e) => handleSubmit(e)}
                                disabled={isLoading || !input.trim()}
                                className={cn(
                                    "h-8 w-8 rounded-xl transition-all duration-500 shadow-xl border border-border",
                                    input.trim()
                                        ? "bg-primary text-primary-foreground hover:opacity-90 shadow-primary/10"
                                        : "bg-muted text-muted-foreground opacity-40"
                                )}
                            >
                                {isLoading ? (
                                    <div className="h-3 w-3 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                                ) : (
                                    <Icons.arrowUp className="h-4 w-4 stroke-[2.5px]" />
                                )}
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        );
    });
IntentInput.displayName = "IntentInput";
