import { z } from 'zod';

/**
 * Recursive Zod schema for roadmap nodes
 * Supports nested children for hierarchical learning structures
 */
/**
 * Flat Zod schema for roadmap nodes
 * Used for reliable AI generation
 */
export const roadmapNodeSchema = z.object({
    id: z.string().describe("Unique identifier for the node (e.g., '1', '1.1')"),
    title: z.string().describe("Clear, concise title of the learning unit"),
    description: z.string().optional().describe("Brief explanation of what this node covers"),
    type: z.enum(["section", "topic", "exercise"]).describe("Node type: section (group), topic (atomic concept), or exercise (practice)"),
    parentId: z.string().optional().describe("ID of the parent section node, if any"),
    isCompleted: z.boolean().optional().default(false).describe("Completion status for progress tracking"),
});

/**
 * Complete roadmap schema (Flat structure for AI)
 */
export const roadmapSchema = z.object({
    title: z.string().describe("Overall roadmap title"),
    description: z.string().describe("High-level description"),
    nodes: z.array(roadmapNodeSchema).describe("A flat list of all nodes in the roadmap"),
});

/**
 * TypeScript type inferred from Zod schema
 * Use this for type-safe roadmap handling
 */
export type RoadmapOutput = z.infer<typeof roadmapSchema>;

/**
 * Request schema for roadmap generation
 */
export const roadmapRequestSchema = z.object({
    topic: z.string().describe("The subject to create a roadmap for"),
    additionalContext: z.string().optional().describe("Any additional context or requirements"),
});

export type RoadmapRequest = z.infer<typeof roadmapRequestSchema>;
