import { z } from "zod";
import { roadmapSchema } from "./roadmap";

/**
 * Single response contract for Architect AI.
 * - intent "clarify": AI is asking questions; no roadmap.
 * - intent "roadmap": AI is creating or refining a roadmap; include roadmap.
 * - intent "answer": AI is answering, summarising, or explaining; message only, no roadmap.
 */
export const architectResponseSchema = z.object({
  message: z
    .string()
    .describe(
      "Human-readable response: clarifying questions, roadmap overview, or an answer/summary/explanation. Plain text only; no JSON or code blocks."
    ),
  intent: z
    .enum(["clarify", "roadmap", "answer"])
    .describe(
      'Use "clarify" when you need more information from the user. Use "roadmap" only when creating or refining a roadmap. Use "answer" when summarising, explaining, or discussing (do not include roadmap).'
    ),
  roadmap: roadmapSchema
    .optional()
    .describe(
      "Include only when intent is 'roadmap'. Omit when intent is 'clarify' or 'answer'."
    ),
});

export type ArchitectResponse = z.infer<typeof architectResponseSchema>;
