"use client";

import * as React from "react";
import { RoadmapNavigation } from "./roadmap-navigation";
import { GenerationStatus, useRoadmapState } from "@/hooks/use-roadmap-state";

interface BlueprintPanelProps {
  onStartArchitecture?: () => void;
}

export function BlueprintPanel({ onStartArchitecture }: BlueprintPanelProps) {
  const { roadmap, generationStatus } = useRoadmapState();

  return (
    <div className="h-full w-full flex items-center justify-center bg-background relative overflow-hidden">
      <RoadmapNavigation
        roadmap={roadmap || undefined}
        isLoading={generationStatus === GenerationStatus.GENERATING}
        onStartArchitecture={onStartArchitecture}
      />
    </div>
  );
}
