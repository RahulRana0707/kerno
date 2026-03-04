import { motion } from "framer-motion";
import React from "react";
import { Icons } from "@/components/icons";
import { SUGGESTIONS } from "@/lib/constants";

interface ConstructionZeroScreenProps {
  inputRef: React.RefObject<HTMLTextAreaElement | null>;
  onInputChange: (input: string) => void;
}

export const ConstructionZeroScreen = ({
  inputRef,
  onInputChange,
}: ConstructionZeroScreenProps) => {
  return (
    <motion.div
      key="zero-screen"
      initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto min-h-[50vh]"
    >
      <div className="mb-2 relative group cursor-default">
        <div className="absolute -inset-4 bg-linear-to-r from-primary/20 to-purple-500/20 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-1000" />
        <div className="relative h-20 w-24 flex items-center justify-center">
          <Icons.logo className="h-14 w-14" variant="brand" />
        </div>
      </div>

      <h2 className="text-3xl font-medium mb-3 tracking-tight text-center bg-clip-text text-transparent bg-linear-to-b from-foreground to-foreground/50">
        Structure your thoughts
      </h2>
      <p className="text-muted-foreground text-sm max-w-[400px] leading-relaxed mb-8 text-center text-balance">
        I can architect complex systems or break down topics into a mastery path.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-2xl px-4">
        {SUGGESTIONS.map((suggestion, i) => (
          <button
            key={i}
            type="button"
            onClick={() => {
              const text = `Create a roadmap for ${suggestion.title}: ${suggestion.description}`;
              onInputChange(text);
              inputRef.current?.focus();
            }}
            className="flex cursor-pointer flex-col items-start p-3 rounded-xl border border-border/60 bg-background/40 hover:bg-muted/40 hover:border-border/80 transition-all duration-300 text-left group"
          >
            <span className="text-sm font-semibold text-primary mb-1">{suggestion.title}</span>
            <span className="text-xs text-muted-foreground leading-snug line-clamp-2">
              {suggestion.description}
            </span>
          </button>
        ))}
      </div>
    </motion.div>
  );
};
