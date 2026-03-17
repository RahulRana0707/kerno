"use client";

import { RoadmapNode } from "@/lib/types";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { Icons } from "@/components/icons";

export interface RoadmapCardProps {
  node: RoadmapNode;
  index?: number;
  onClick?: () => void;
  staggerDelay?: number;
}

const iconByType = {
  exercise: Icons.target,
  section: Icons.bookOpen,
  topic: Icons.fileText,
} as const;

export function RoadmapCard({ node, onClick, staggerDelay = 0 }: RoadmapCardProps) {
  const hasChildren = node.children && node.children.length > 0;
  const IconComponent = useMemo(
    () => iconByType[node.type ?? "topic"] ?? Icons.fileText,
    [node.type]
  );

  const isClickable = hasChildren && onClick;

  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, filter: "blur(2px)" }}
      animate={{
        opacity: 1,
        filter: "blur(0px)",
        transition: {
          duration: 0.25,
          delay: staggerDelay,
          ease: [0.23, 1, 0.32, 1],
        },
      }}
      whileTap={isClickable ? { scale: 0.98 } : undefined}
      onClick={isClickable ? onClick : undefined}
      disabled={!isClickable}
      className={cn(
        "flex cursor-default w-full text-left rounded-xl border border-border/60 bg-background/40 transition-all duration-200 ease-[var(--ease-out)]",
        "hover:border-border/80 hover:bg-muted/40 hover:-translate-y-0.5 hover:shadow-md",
        isClickable && "cursor-pointer"
      )}
    >
      <div className="flex items-center gap-3 p-3 w-full min-w-0">
        <div className="shrink-0 flex items-center justify-center h-9 w-9 rounded-lg bg-muted/50 border border-border/40">
          <motion.span
            className="flex items-center justify-center text-muted-foreground"
            whileHover={isClickable ? { scale: 1.08 } : undefined}
            transition={{ duration: 0.2 }}
          >
            <IconComponent className={cn("h-4 w-4", node.type === "exercise" && "text-primary")} />
          </motion.span>
        </div>
        <div className="flex-1 min-w-0 py-0.5">
          <div
            className={cn(
              "text-sm font-medium truncate",
              node.type === "exercise" && "text-primary"
            )}
          >
            {node.title}
          </div>
          {node.description && (
            <div className="text-xs text-muted-foreground line-clamp-2 mt-0.5 leading-snug">
              {node.description}
            </div>
          )}
        </div>
        {hasChildren && (
          <div className="shrink-0 flex items-center self-center">
            <Icons.chevronRight className="h-4 w-4 text-muted-foreground" />
          </div>
        )}
      </div>
    </motion.button>
  );
}
