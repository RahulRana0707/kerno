import * as React from 'react';
import { ArchitectShell } from "@/components/architect/architect-shell";

export default function ArchitectPage() {
    // Future: Fetch initial session state or user preferences here (Server Side)
    // For now, render the client-side shell.
    return (
        <main className="h-screen w-full bg-background overflow-hidden flex flex-col">
            {/* 
         Note: We might want a specialized Header for this view later, 
         or just use the Shell's internal layout.
       */}
            <React.Suspense fallback={<div className="flex items-center justify-center h-full text-muted-foreground">Loading Architect...</div>}>
                <ArchitectShell />
            </React.Suspense>
        </main>
    );
}
