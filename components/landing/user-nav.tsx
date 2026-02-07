"use client";

import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { authClient } from "@/lib/auth-client";
import { Icons } from "@/components/icons";
import { useRouter } from "next/navigation";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function UserNav() {
    const { data: session, isPending } = authClient.useSession();
    const router = useRouter();

    if (isPending) {
        return <div className="h-8 w-8 rounded-full bg-white/5 animate-pulse" />;
    }

    if (!session?.user) return null;

    const user = session.user;

    const handleSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/");
                    router.refresh();
                },
            },
        });
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="relative h-8 w-8 rounded-full focus:outline-none transition-transform active:scale-95 border-none bg-transparent">
                    <Avatar className="h-8 w-8 border">
                        <AvatarImage src={user.image || ""} alt={user.name || ""} />
                        <AvatarFallback>
                            {user.name?.slice(0, 2) || "U"}
                        </AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-56 z-60"
                align="end"
            >
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1 p-2">
                        <p className="text-sm font-semibold text-white truncate">{user.name}</p>
                        <p className="text-xs text-zinc-500 truncate">{user.email}</p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup >
                    <DropdownMenuItem
                        onSelect={() => router.push("/dashboard")}
                        className="flex items-center gap-2"
                    >
                        <Icons.layoutGrid />
                        <span>Dashboard</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onSelect={() => router.push("/settings")}
                        className="flex items-center gap-2"
                    >
                        <Icons.shieldCheck />
                        <span>Settings</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    variant="destructive"
                    onSelect={handleSignOut}
                    className="flex items-center gap-2"
                >
                    <Icons.rotateCw />
                    <span>Sign Out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
