"use client";

import { ConstructionLog } from "@/components/architect/construction-log";
import { BlueprintPanel } from "@/components/architect/blueprint-panel";

export function ArchitectShell() {
    return (
        <div className="h-full w-full bg-background text-foreground grid grid-cols-[minmax(400px,30%)_1fr] overflow-hidden">
            <div className="h-full overflow-hidden flex flex-col border-r border-border relative z-10 shadow-2xl">
                <ConstructionLog />
            </div>

            <div className="h-full w-full relative bg-background z-0">
                <BlueprintPanel />
            </div>
        </div>
    );
}
