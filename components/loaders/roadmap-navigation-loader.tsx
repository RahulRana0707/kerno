import React from "react";

export const RoadmapNavigationLoader = () => {
  return (
    <div className="h-full w-full border-l border-border/40 flex items-center justify-center">
      <main className="w-[80%] h-[80%] m-auto flex flex-col gap-4">
        {/* Header skeleton – mirrors loaded header layout */}
        <div className="flex flex-col border-b border-primary/10 backdrop-blur-sm py-4 gap-2.5">
          <div className="flex items-center gap-3 min-w-0">
            <div className="h-8 w-8 rounded-md bg-muted shrink-0 animate-pulse" />
            <div className="h-5 w-48 bg-muted/70 rounded animate-pulse" />
            <div className="h-4 w-14 bg-muted/50 rounded animate-pulse shrink-0" />
          </div>
          <div className="h-4 w-full max-w-md bg-muted/50 rounded animate-pulse" />
          <div className="flex flex-wrap gap-x-4 gap-y-1.5">
            <div className="h-3.5 w-16 bg-muted/40 rounded animate-pulse" />
            <div className="h-3.5 w-14 bg-muted/40 rounded animate-pulse" />
            <div className="h-3.5 w-16 bg-muted/40 rounded animate-pulse" />
          </div>
        </div>
        <div className="flex-1 min-h-0 overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 content-start">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="rounded-xl border border-border/40 bg-muted/20 h-[90px] animate-pulse"
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
