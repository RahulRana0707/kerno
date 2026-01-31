import { convertToModelMessages, streamText, UIMessage, Output } from 'ai';
import { google } from '@ai-sdk/google';
import { roadmapSchema } from '@/lib/schemas/roadmap';
import { ARCHITECT_SYSTEM_PROMPT } from '@/lib/prompts/architect';

// Allow up to 60 seconds for complex roadmap generation
export const maxDuration = 60;

export async function POST(req: Request) {
    try {
        const { messages }: { messages: UIMessage[] } = await req.json();

        // Build system prompt (Now always expert/comprehensive)
        const systemPrompt = ARCHITECT_SYSTEM_PROMPT;

        const result = streamText({
            model: google('gemini-2.5-flash'), // Fast model for quick responses
            system: systemPrompt,
            messages: await convertToModelMessages(messages),
            output: Output.object({
                schema: roadmapSchema,
                name: "roadmap",
                description: "A structured learning roadmap based on user intent, following Kerno's structure-first philosophy",
            }),
            temperature: 0.7, // Balance creativity with consistency
        });

        return result.toUIMessageStreamResponse();
    } catch (error) {
        console.error('Error in chat API:', error);
        return new Response(
            JSON.stringify({ error: 'Failed to generate roadmap' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}

