"use client";

import React from 'react';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';

export function UtilityRail() {
    return (
        <div className="w-64 border-l border-white/5 bg-black/20 p-4 h-full hidden lg:block">
            <div className="mb-8">
                <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">
                    On This Page
                </h4>
                <ul className="space-y-2 text-sm">
                    <li>
                        <a href="#concept" className="text-zinc-400 hover:text-white transition-colors block border-l border-white/10 pl-3 -ml-px hover:border-white/50">
                            Concept
                        </a>
                    </li>
                    <li>
                        <a href="#example" className="text-zinc-400 hover:text-white transition-colors block border-l border-white/10 pl-3 -ml-px hover:border-white/50">
                            Example
                        </a>
                    </li>
                    <li>
                        <a href="#exercise" className="text-zinc-400 hover:text-white transition-colors block border-l border-white/10 pl-3 -ml-px hover:border-white/50">
                            Exercise
                        </a>
                    </li>
                </ul>
            </div>

            <div className="space-y-4">
                <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                    Tools
                </h4>
                <Button variant="outline" className="w-full justify-start gap-2 border-white/10 hover:bg-white/5 hover:text-white">
                    <Icons.brain className="h-4 w-4" />
                    Ask Architect
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2 border-white/10 hover:bg-white/5 hover:text-white">
                    <Icons.pencil className="h-4 w-4" />
                    Notes
                </Button>
            </div>
        </div>
    );
}
