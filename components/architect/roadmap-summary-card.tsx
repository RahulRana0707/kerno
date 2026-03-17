"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Icons } from "@/components/icons";
import { Roadmap } from "@/lib/types";
import { cn } from "@/lib/utils";

interface RoadmapSummaryCardProps {
  roadmap: Roadmap;
  isGenerating?: boolean;
  onView?: (roadmap: Roadmap) => void;
  onConstruct?: (roadmap: Roadmap) => void;
}

export function RoadmapSummaryCard({
  roadmap,
  isGenerating,
  onView,
  onConstruct,
}: RoadmapSummaryCardProps) {
  return (
    <Card
      className={cn(
        "w-full overflow-hidden",
        "rounded-xl border border-border/80 bg-card/80 shadow-sm py-4 gap-4",
        "backdrop-blur-sm",
      )}
    >
      <CardHeader className="flex flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-base font-semibold tracking-tight text-foreground leading-snug">
            {isGenerating && !roadmap?.title ? (
              <span className="inline-block h-5 w-48 bg-muted animate-pulse rounded" />
            ) : (
              roadmap?.title || "New Blueprint"
            )}
          </CardTitle>
          {isGenerating && (
            <span className="shrink-0 size-2 rounded-full bg-primary animate-ping" aria-hidden />
          )}
        </div>
        {!roadmap?.description && isGenerating ? (
          <div className="h-4 w-full max-w-[85%] bg-muted animate-pulse rounded" />
        ) : (
          roadmap?.description && (
            <CardDescription className="text-sm text-muted-foreground leading-relaxed max-w-none">
              {roadmap.description}
            </CardDescription>
          )
        )}
      </CardHeader>
      <Separator />
      <CardFooter className="flex flex-wrap gap-2 pt-1">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onView?.(roadmap)}
          disabled={isGenerating || !roadmap?.nodes}
          className="flex-1 min-w-0 sm:flex-initial"
        >
          View
        </Button>
        <Button
          size="sm"
          onClick={() => onConstruct?.(roadmap)}
          disabled={isGenerating || !roadmap?.nodes}
          className="flex-1 min-w-0 sm:flex-initial"
        >
          {isGenerating ? (
            <>
              <Icons.rotateCw data-icon="inline-start" className="animate-spin" />
              Building…
            </>
          ) : (
            <>
              <Icons.check data-icon="inline-start" />
              Construct
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
