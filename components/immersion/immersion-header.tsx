"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { UserNav } from "@/components/landing/user-nav";
import { Separator } from "@/components/ui/separator";

interface ImmersionHeaderProps {
    title?: string;
}

export function ImmersionHeader({ title }: ImmersionHeaderProps) {
    return (
        <header className="sticky top-0 z-50 flex h-14 items-center justify-between border-b border-white/5 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 px-6">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-zinc-500">
                    <Link href="/" className="hover:text-white transition-colors">
                        <Icons.logo variant="white" className="h-5 w-5" />
                    </Link>
                    <Icons.chevronDownIcon className="h-4 w-4 -rotate-90" />
                    <span className="font-medium text-zinc-200">Immersion</span>
                    {title && (
                        <>
                            <Icons.chevronDownIcon className="h-4 w-4 -rotate-90" />
                            <span className="text-zinc-400">{title}</span>
                        </>
                    )}
                </div>
            </div>

            <div className="flex items-center gap-4">

                <Separator orientation="vertical" className="h-6 bg-white/10" />

                <Link href="/architect">
                    <Button variant="ghost" size="sm" className="hidden sm:flex gap-2 text-zinc-400 hover:text-white hover:bg-white/5">
                        <Icons.hammer className="h-4 w-4" />
                        <span>Create your own</span>
                    </Button>
                </Link>

                <UserNav />
            </div>
        </header>
    );
}
