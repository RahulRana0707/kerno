"use client";

import React, { useState } from 'react';
import { NavSidebar } from '@/components/immersion/nav-sidebar';
import { ContentViewer } from '@/components/immersion/content-viewer';
import { UtilityRail } from '@/components/immersion/utility-rail';
import { ImmersionHeader } from '@/components/immersion/immersion-header';
import { AskArchitect } from '@/components/immersion/ask-architect';
import { RoadmapNode } from '@/lib/types';
import { FlatNode } from '@/lib/roadmap-utils';

interface ImmersionInterfaceProps {
    tree: RoadmapNode[];
    flatNodes: FlatNode[];
}

export function ImmersionInterface({ tree, flatNodes }: ImmersionInterfaceProps) {
    // Initialize with the first topic found in the tree
    // Helper to find first leaf node (topic)
    const findFirstTopic = (nodes: RoadmapNode[]): string | undefined => {
        for (const node of nodes) {
            if (node.type === 'topic') return node.id;
            if (node.children && node.children.length > 0) {
                const found = findFirstTopic(node.children);
                if (found) return found;
            }
        }
        return undefined;
    };

    const [selectedNodeId, setSelectedNodeId] = useState<string>(() => {
        return findFirstTopic(tree) || flatNodes[0]?.id || "";
    });

    const selectedNode = flatNodes.find(n => n.id === selectedNodeId);

    // Mock content generation based on node
    const getContent = (node?: FlatNode) => {
        if (!node) return "# Welcome\nSelect a topic to start learning.";

        return `
# ${node.title}

${node.description || "No description available."}

## Concept

This is a placeholder for the deep dive concept explanation. The content here would elaborate on the core principles of **${node.title}**.

> **Key Principle**: Understanding ${node.title.toLowerCase()} is crucial for mastering the broader topic.

## Example

Here is a practical example demonstrating the concept:

\`\`\`typescript
function demonstrateConcept() {
    console.log("Exploring ${node.title}...");
}
\`\`\`

## Exercise

To verify your understanding, try the following:

1. Create a new instance of the concept.
2. Observe its behavior under load.
`;
    };

    return (
        <div className="flex flex-col h-screen bg-background">
            <ImmersionHeader title={selectedNode?.title} />

            <div className="flex flex-1 overflow-hidden">
                <NavSidebar
                    nodes={tree}
                    selectedNodeId={selectedNodeId}
                    onSelectNode={setSelectedNodeId}
                    className="hidden md:flex shrink-0"
                />

                <main className="flex-1 overflow-y-auto scroll-smooth relative">
                    <div className="max-w-3xl mx-auto px-8 py-12 pb-24 min-h-full">
                        <ContentViewer content={getContent(selectedNode)} />
                    </div>
                    <AskArchitect />
                </main>

                <aside className="hidden xl:block w-64 shrink-0 border-l border-white/5 bg-black/20">
                    <UtilityRail />
                </aside>
            </div>
        </div >
    );
}
