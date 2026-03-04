import React from 'react';
import ReactMarkdown from 'react-markdown';
import { cn } from '@/lib/utils';

interface ContentViewerProps {
    content: string;
    className?: string;
}

export function ContentViewer({ content, className }: ContentViewerProps) {
    return (
        <div className={cn("prose prose-zinc dark:prose-invert max-w-none", className)}>
            <ReactMarkdown
                components={{
                    h1: ({ ...props }) => <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-8" {...props} />,
                    h2: ({ ...props }) => <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mt-10 mb-4" {...props} />,
                    h3: ({ ...props }) => <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8 mb-4" {...props} />,
                    p: ({ ...props }) => <p className="leading-7 not-first:mt-6" {...props} />,
                    ul: ({ ...props }) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />,
                    ol: ({ ...props }) => <ol className="my-6 ml-6 list-decimal [&>li]:mt-2" {...props} />,
                    li: ({ ...props }) => <li className="leading-7" {...props} />,
                    blockquote: ({ ...props }) => <blockquote className="mt-6 border-l-2 border-primary pl-6 italic text-muted-foreground" {...props} />,
                    code: ({ ...props }) => {
                        const { className, children } = props;
                        const match = /language-(\w+)/.exec(className || '');
                        const isInline = !match && !String(children).includes('\n');

                        return isInline ? (
                            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold" {...props} />
                        ) : (
                            <pre className="overflow-x-auto rounded-lg bg-zinc-950 p-4 mb-4 mt-6 border border-white/10">
                                <code className={cn("font-mono text-sm", className)} {...props} />
                            </pre>
                        );
                    },
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
}
