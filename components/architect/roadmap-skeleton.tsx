"use client";

import * as React from "react";

export function RoadmapSkeleton() {
    return (
        <div className="space-y-3 px-3">
            {/* Section 1 */}
            <div className="space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-3.5 w-3.5 bg-muted rounded animate-pulse" />
                    <div className="h-4 w-40 bg-muted rounded animate-pulse" />
                </div>
                <div className="pl-6 space-y-2">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center gap-2">
                            <div className="h-3 w-3 bg-muted/70 rounded animate-pulse" />
                            <div className="h-3 w-32 bg-muted/70 rounded animate-pulse" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Section 2 */}
            <div className="space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-3.5 w-3.5 bg-muted rounded animate-pulse" />
                    <div className="h-4 w-36 bg-muted rounded animate-pulse" />
                </div>
                <div className="pl-6 space-y-2">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center gap-2">
                            <div className="h-3 w-3 bg-muted/70 rounded animate-pulse" />
                            <div className="h-3 w-28 bg-muted/70 rounded animate-pulse" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Section 3 */}
            <div className="space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-3.5 w-3.5 bg-muted rounded animate-pulse" />
                    <div className="h-4 w-44 bg-muted rounded animate-pulse" />
                </div>
                <div className="pl-6 space-y-2">
                    {[1, 2].map((i) => (
                        <div key={i} className="flex items-center gap-2">
                            <div className="h-3 w-3 bg-muted/70 rounded animate-pulse" />
                            <div className="h-3 w-36 bg-muted/70 rounded animate-pulse" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
