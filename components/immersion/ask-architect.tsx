"use client";

import React from 'react';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';

export function AskArchitect() {
    return (
        <div className="sticky bottom-0 z-10 w-full p-4 bg-linear-to-t from-background via-background to-transparent pt-12">
            <div className="relative max-w-3xl mx-auto">
                <div className="absolute inset-0 bg-linear-to-r from-primary/20 via-purple-500/20 to-blue-500/20 rounded-xl blur-xl opacity-20" />
                <div className="relative flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md p-2 shadow-2xl shadow-primary/5 transition-all focus-within:ring-1 focus-within:ring-primary/50 focus-within:border-primary/50">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icons.sparkles className="h-4 w-4" />
                    </div>
                    <input
                        type="text"
                        placeholder="Ask Architect about this topic..."
                        className="flex-1 bg-transparent text-sm text-zinc-200 placeholder:text-zinc-500 focus:outline-none h-10"
                    />
                    <Button size="icon" variant="ghost" className="h-8 w-8 text-zinc-400 hover:text-white hover:bg-white/10 rounded-lg">
                        <Icons.arrowRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
