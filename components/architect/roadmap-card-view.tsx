"use client";

import { RoadmapNode } from "@/lib/types";
import { motion, AnimatePresence } from "framer-motion";
import React, { useCallback, useState } from "react";
import { RoadmapCard } from "./roadmap-card-item";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const STAGGER_DELAY = 0.04;
const SLIDE_DURATION = 0.4;
const EASE = [0.19, 1, 0.22, 1] as const;
const SLIDE_OFFSET = 32;
const HEADER_HEIGHT = 30;

export interface RoadmapCardViewProps {
  nodes: RoadmapNode[];
  className?: string;
}

export function RoadmapCardView({ nodes, className }: RoadmapCardViewProps) {
  const [stack, setStack] = useState<RoadmapNode[][]>(() => (nodes.length ? [nodes] : []));
  const [direction, setDirection] = useState<"forward" | "back">("forward");

  const currentNodes = stack[stack.length - 1] ?? [];
  const canGoBack = stack.length > 1;

  const goToChildren = useCallback((node: RoadmapNode) => {
    if (!node.children?.length) return;
    setDirection("forward");
    setStack((prev) => [...prev, node.children!]);
  }, []);

  const goBack = useCallback(() => {
    if (!canGoBack) return;
    setDirection("back");
    setStack((prev) => prev.slice(0, -1));
  }, [canGoBack]);

  if (currentNodes.length === 0) {
    return null;
  }

  return (
    <div className={cn("flex flex-col h-full min-h-0", className)}>
      <div className="shrink-0 flex items-center mb-2" style={{ minHeight: HEADER_HEIGHT }}>
        {canGoBack && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={goBack}
            className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <Icons.arrowLeft className="h-3.5 w-3.5" />
            Back
          </Button>
        )}
      </div>

      <div className="flex-1 min-h-[400px] overflow-hidden relative">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={stack.length}
            custom={direction}
            initial={{
              opacity: 0,
              x: direction === "forward" ? SLIDE_OFFSET : -SLIDE_OFFSET,
              filter: "blur(2px)",
            }}
            animate={{
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
              transition: {
                duration: SLIDE_DURATION,
                ease: EASE,
                filter: { duration: SLIDE_DURATION * 0.6, ease: EASE },
              },
            }}
            exit={{
              opacity: 0,
              x: direction === "forward" ? -SLIDE_OFFSET : SLIDE_OFFSET,
              filter: "blur(2px)",
              transition: {
                duration: SLIDE_DURATION,
                ease: EASE,
                filter: { duration: SLIDE_DURATION * 0.5, ease: EASE },
              },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full h-full content-start absolute inset-0"
          >
            {currentNodes.map((node, index) => (
              <RoadmapCard
                key={node.id}
                node={node}
                index={index}
                staggerDelay={index * STAGGER_DELAY}
                onClick={() => goToChildren(node)}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
