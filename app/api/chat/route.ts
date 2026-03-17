import { convertToModelMessages, streamText, UIMessage, Output } from 'ai';
import { google } from '@ai-sdk/google';
import { architectResponseSchema } from '@/lib/schemas/architect-response';
import { ARCHITECT_SYSTEM_PROMPT } from '@/lib/prompts/architect';

// Allow up to 60 seconds for complex roadmap generation
export const maxDuration = 60;

export async function POST(req: Request) {
    if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
        return new Response(
            JSON.stringify({ 
                error: 'Configuration Error', 
                message: 'Google Generative AI API key is missing. Please check your environment variables.' 
            }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }

    try {
        const { messages }: { messages: UIMessage[] } = await req.json();

        const result = streamText({
            model: google('gemini-2.5-flash'),
            system: ARCHITECT_SYSTEM_PROMPT,
            messages: await convertToModelMessages(messages),
            output: Output.object({
                schema: architectResponseSchema,
                name: "architectResponse",
                description:
                    "Your response: message (always), intent (clarify or roadmap), and roadmap (only when intent is roadmap).",
            }),
            temperature: 0.7,
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

