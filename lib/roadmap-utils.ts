import { RoadmapNode } from "./types";

/**
 * Node type for AI-generated flat roadmap
 */
export interface FlatNode {
    id: string;
    title: string;
    description?: string;
    type: "section" | "topic" | "exercise";
    parentId?: string;
    isCompleted?: boolean;
}

/**
 * Transforms a flat array of nodes with parentId into a recursive tree structure.
 * Maintains the original order of nodes provided by the AI.
 */
export function buildRoadmapTree(flatNodes: FlatNode[]): RoadmapNode[] {
    if (!Array.isArray(flatNodes)) return [];

    const nodesMap = new Map<string, RoadmapNode>();
    const rootNodes: RoadmapNode[] = [];

    // First pass: Create all nodes without children
    flatNodes.forEach((node) => {
        nodesMap.set(node.id, {
            ...node,
            children: [],
        });
    });

    // Second pass: Build the tree
    flatNodes.forEach((node) => {
        const treeNode = nodesMap.get(node.id)!;
        if (node.parentId && nodesMap.has(node.parentId)) {
            const parent = nodesMap.get(node.parentId)!;
            parent.children = parent.children || [];
            parent.children.push(treeNode);
        } else {
            rootNodes.push(treeNode);
        }
    });

    return rootNodes;
}
