"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { RoadmapCardView } from "./roadmap-card-view";
import { Roadmap, RoadmapNode } from "@/lib/types";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Icons } from "@/components/icons";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Button } from "@/components/ui/button";
import { RoadmapNavigationLoader } from "@/components/loaders/roadmap-navigation-loader";

interface RoadmapNavigationProps {
  roadmap?: Roadmap;
  isLoading?: boolean;
  onStartArchitecture?: () => void;
}

export function RoadmapNavigation({
  roadmap,
  isLoading = false,
  onStartArchitecture,
}: RoadmapNavigationProps) {
  const stats = React.useMemo(() => {
    if (!roadmap) return { total: 0, topics: 0, exercises: 0, sections: 0 };

    const countNodes = (
      nodes: RoadmapNode[]
    ): { total: number; topics: number; exercises: number; sections: number } => {
      return nodes.reduce(
        (acc, node) => {
          acc.total += 1;
          if (node.type === "exercise") acc.exercises += 1;
          else if (node.type === "topic") acc.topics += 1;
          else if (node.type === "section") acc.sections += 1;

          if (node.children?.length) {
            const child = countNodes(node.children);
            acc.total += child.total;
            acc.topics += child.topics;
            acc.exercises += child.exercises;
            acc.sections += child.sections;
          }
          return acc;
        },
        { total: 0, topics: 0, exercises: 0, sections: 0 }
      );
    };

    return countNodes(roadmap.nodes);
  }, [roadmap]);

  if (!roadmap && !isLoading) {
    return (
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Icons.logo variant="brand" className="h-16 w-16" />
          </EmptyMedia>
          <EmptyTitle>No Blueprint Yet</EmptyTitle>
          <EmptyDescription>
            Start a conversation with the Architect to generate your learning path.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent className="flex-row justify-center gap-2">
          <Button onClick={onStartArchitecture}>Start Architecture</Button>
        </EmptyContent>
      </Empty>
    );
  }

  if (isLoading && (!roadmap || roadmap.nodes.length === 0)) {
    return <RoadmapNavigationLoader />;
  }

  return (
    <div className="h-full w-full border-l border-border/40 flex items-center justify-center">
      <main className="w-[80%] h-[80%] m-auto flex flex-col gap-4">
        <motion.div
          className="flex flex-col border-b border-primary/10 backdrop-blur-sm py-4 gap-2.5"
          initial={{ opacity: 0, filter: "blur(2px)" }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            transition: {
              duration: 0.35,
              ease: [0.19, 1, 0.22, 1],
              filter: { duration: 0.3, ease: [0.19, 1, 0.22, 1] },
            },
          }}
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
              <Icons.map className="h-4 w-4 text-primary" />
            </div>
            <span className="text-base font-semibold truncate text-foreground/90 tracking-tight">
              {roadmap?.title || "Untitled Blueprint"}
            </span>
            <span className="shrink-0 text-xs font-medium text-muted-foreground/80 tabular-nums">
              {stats.total} {stats.total === 1 ? "node" : "nodes"}
            </span>
          </div>
          <span className="text-sm font-normal truncate text-muted-foreground tracking-tight leading-snug">
            {roadmap?.description || "Untitled Blueprint"}
          </span>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground/80">
            {stats.sections > 0 && (
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-muted-foreground/50" />
                {stats.sections} {stats.sections === 1 ? "section" : "sections"}
              </span>
            )}
            {stats.topics > 0 && (
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-primary/60" />
                {stats.topics} {stats.topics === 1 ? "topic" : "topics"}
              </span>
            )}
            {stats.exercises > 0 && (
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-primary" />
                {stats.exercises} {stats.exercises === 1 ? "exercise" : "exercises"}
              </span>
            )}
          </div>
        </motion.div>

        <div className="flex-1 min-h-0 overflow-hidden">
          <ScrollArea className="h-full">
            <div className="w-full h-full p-1">
              <RoadmapCardView nodes={roadmap?.nodes ?? []} />
            </div>
          </ScrollArea>
        </div>
      </main>
    </div>
  );
}
