"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import { RoadmapNode } from '@/lib/types';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Icons } from '@/components/icons';

interface NavSidebarProps {
    nodes: RoadmapNode[];
    selectedNodeId: string;
    onSelectNode: (nodeId: string) => void;
    className?: string;
}

export function NavSidebar({ nodes, selectedNodeId, onSelectNode, className }: NavSidebarProps) {
    // Determine which sections should be open by default based on the selected node
    // For now, we optionally open all or just let the user control it.
    // Finding the parent section of the selected node would be ideal for `defaultValue`.

    // Helper to find parent section id
    const findParentSectionId = (nodes: RoadmapNode[], targetId: string): string | undefined => {
        for (const node of nodes) {
            if (node.children?.some(child => child.id === targetId)) {
                return node.id;
            }
            if (node.children) {
                const found = findParentSectionId(node.children, targetId);
                if (found) return node.id; // Correctly bubble up if needed, but here we assume depth 1 sections
            }
        }
        return undefined;
    };

    const defaultOpen = findParentSectionId(nodes, selectedNodeId) || nodes[0]?.id;

    return (
        <div className={cn("w-64 flex flex-col h-full bg-black/20 border-r border-white/5", className)}>
            <div className="p-4 space-y-4">
                {/* Search */}
                <div className="relative group">
                    <Icons.search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500 group-hover:text-zinc-400 transition-colors" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full h-9 rounded-lg border border-white/10 bg-zinc-900/50 pl-9 pr-4 text-sm text-zinc-300 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-zinc-600"
                    />
                    <kbd className="pointer-events-none absolute right-2.5 top-2.5 hidden h-4 select-none items-center gap-1 rounded border border-white/10 bg-white/5 px-1.5 font-mono text-[10px] font-medium text-zinc-500 opacity-100 sm:flex">
                        <span className="text-xs">⌘</span>K
                    </kbd>
                </div>

                {/* Toggles Row */}
                <div className="flex items-center gap-2">
                    <button className="flex-1 flex items-center justify-between px-3 py-1.5 rounded-md border border-white/10 bg-white/5 text-xs text-zinc-400 hover:text-white hover:bg-white/10 transition-colors">
                        <span>English</span>
                        <Icons.chevronDownIcon className="h-3 w-3 opacity-50" />
                    </button>
                    <button className="flex items-center justify-center h-8 w-8 rounded-md border border-white/10 bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors" title="Toggle Theme">
                        <Icons.sun className="h-4 w-4 hidden dark:flex" />
                        <Icons.moon className="h-4 w-4 flex dark:hidden" />
                    </button>
                </div>
            </div>

            <ScrollArea className="flex-1 py-4 pr-3 pl-1">
                <Accordion type="single" collapsible defaultValue={defaultOpen} className="w-full space-y-1">
                    {nodes.map((node) => {
                        const isSection = node.type === 'section';

                        if (isSection && node.children && node.children.length > 0) {
                            return (
                                <AccordionItem key={node.id} value={node.id} className="border-none">
                                    <AccordionTrigger className="py-2 px-3 text-sm font-medium text-zinc-400 hover:text-white hover:no-underline data-[state=open]:text-white transition-colors rounded-md hover:bg-white/5 [&>svg]:opacity-50 [&>svg]:hover:opacity-100">
                                        {node.title}
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-1 pt-1">
                                        <div className="flex flex-col space-y-0.5 ml-2 border-l border-white/10">
                                            {node.children.map(child => {
                                                const isSelected = child.id === selectedNodeId;
                                                return (
                                                    <button
                                                        key={child.id}
                                                        onClick={() => onSelectNode(child.id)}
                                                        className={cn(
                                                            "text-left px-3 py-1.5 text-sm rounded-md border-l-2 border-transparent transition-all ml-1",
                                                            isSelected
                                                                ? "text-primary font-medium border-primary bg-primary/5"
                                                                : "text-zinc-400 hover:text-white hover:border-zinc-700"
                                                        )}
                                                    >
                                                        {child.title}
                                                    </button>
                                                )
                                            })}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            );
                        }

                        // Top-level items (not sections) or empty sections
                        const isSelected = node.id === selectedNodeId;
                        return (
                            <button
                                key={node.id}
                                onClick={() => onSelectNode(node.id)}
                                className={cn(
                                    "w-full text-left px-3 py-2 text-sm font-medium rounded-md transition-colors mx-1",
                                    isSelected
                                        ? "bg-primary/10 text-primary"
                                        : "text-zinc-400 hover:text-white hover:bg-white/5"
                                )}
                            >
                                {node.title}
                            </button>
                        );
                    })}
                </Accordion>
            </ScrollArea>
        </div>
    );
}
