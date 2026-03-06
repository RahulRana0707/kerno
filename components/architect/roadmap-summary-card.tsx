"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

interface RoadmapSummaryCardProps {
  roadmap: Roadmap;
  isGenerating?: boolean;
}

import { Roadmap } from "@/lib/types";

export function RoadmapSummaryCard({
  roadmap,
  isGenerating,
  onView,
  onConstruct,
}: RoadmapSummaryCardProps & {
  onView?: (roadmap: Roadmap) => void;
  onConstruct?: (roadmap: Roadmap) => void;
}) {
  return (
    <Card className="w-full group/roadmap p-0 border-none bg-transparent">
      <CardHeader className="space-y-3 p-0">
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="text-lg font-bold text-foreground/90 flex items-center gap-2 leading-none">
            {isGenerating && !roadmap?.title ? (
              <div className="h-5 w-48 bg-primary/20 animate-pulse rounded" />
            ) : (
              <>{roadmap?.title || "New Blueprint"}</>
            )}
          </CardTitle>
          <div className="flex items-center gap-2 shrink-0">
            {isGenerating && <div className="h-2 w-2 rounded-full bg-primary animate-ping" />}
          </div>
        </div>
        {!roadmap?.description && isGenerating ? (
          <div className="w-3/4 bg-primary/10 animate-pulse rounded" />
        ) : (
          <CardDescription className="text-sm leading-relaxed text-muted-foreground/80">
            {roadmap?.description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="space-y-6 p-0">
        <div className="grid grid-cols-2 gap-3">
          <Button
            onClick={() => onView?.(roadmap)}
            disabled={isGenerating || !roadmap?.nodes}
            variant="outline"
          >
            VIEW
          </Button>

          <Button onClick={() => onConstruct?.(roadmap)} disabled={isGenerating || !roadmap?.nodes}>
            {isGenerating ? (
              <span className="flex items-center gap-2">
                <Icons.rotateCw className="h-3 w-3 animate-spin" />
                <span className="hidden sm:inline">Building...</span>
              </span>
            ) : (
              <>
                <Icons.check className="h-3.5 w-3.5 ml-1" />
                CONSTRUCT
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
