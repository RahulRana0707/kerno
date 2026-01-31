"use client";

import * as React from "react";
import { useRoadmapState } from "@/hooks/use-roadmap-state";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Braces } from "lucide-react";
import Link from "next/link";

export default function ProjectDraftPage() {
    const { roadmap } = useRoadmapState();

    return (
        <div className="min-h-screen bg-background text-foreground p-8 font-sans">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Header */}
                <div className="flex items-center gap-4">
                    <Link href="/architect">
                        <Button variant="ghost" size="icon">
                            <ArrowLeft className="h-4 w-4" />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">Project Draft</h1>
                        <p className="text-muted-foreground text-sm">Review generated architecture data</p>
                    </div>
                </div>

                {/* Content */}
                <Card className="border-border/50 shadow-sm">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-primary">
                            <Braces className="h-5 w-5" />
                            JSON Structure
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {roadmap ? (
                            <pre className="bg-muted/30 p-4 rounded-lg text-xs font-mono overflow-auto max-h-[600px] border border-border/50">
                                {JSON.stringify(roadmap, null, 2)}
                            </pre>
                        ) : (
                            <div className="text-center py-12 text-muted-foreground">
                                No roadmap data found. Please generate one in the Architect view.
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
