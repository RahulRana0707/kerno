"use client";

import * as React from "react";
import { ConstructionLog } from "@/components/architect/construction-log";
import { BlueprintPanel } from "@/components/architect/blueprint-panel";

export function ArchitectShell() {
    const inputRef = React.useRef<HTMLTextAreaElement>(null);

    const handleStartArchitecture = () => {
        inputRef.current?.focus();
    };

    return (
        <div className="h-full w-full bg-background text-foreground overflow-hidden flex relative group">
            <div className="h-full w-full grid grid-cols-[420px_1fr] lg:grid-cols-[480px_1fr] overflow-hidden">
                {/* Left Panel: Conversation / Construction Log */}
                <div className="h-full overflow-hidden flex flex-col border-r border-border/40 relative z-20 bg-background/50 backdrop-blur-sm shadow-[4px_0_24px_-12px_rgba(0,0,0,0.1)]">
                    <ConstructionLog inputRef={inputRef} />
                </div>

                {/* Right Panel: Blueprint / Visualization */}
                <div className="h-full w-full relative bg-muted/5 z-0 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] opacity-[0.25] dark:opacity-[0.05] pointer-events-none" />
                    <BlueprintPanel onStartArchitecture={handleStartArchitecture} />
                </div>
            </div>
        </div>
    );
}
