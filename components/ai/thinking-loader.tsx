import { motion } from "framer-motion";
import React from "react";
import { Icons } from "@/components/icons";

interface ThinkingLoaderProps {
  isLoading: boolean;
  text?: string;
}
export const ThinkingLoader = ({ isLoading, text = "Thinking....." }: ThinkingLoaderProps) => {
  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className="flex gap-4 w-full max-w-3xl mx-auto"
    >
      <div className="flex-none flex items-center gap-1.5">
        <div className="h-7 w-7 rounded-lg bg-linear-to-tr from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20 shadow-inner mt-0.5 animate-pulse">
          <Icons.thinkingLoader className="h-4 w-4 text-primary animate-spin" />
        </div>
        <span className="text-muted-foreground">{text}</span>
      </div>
    </motion.div>
  );
};
