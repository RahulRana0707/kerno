"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { authClient } from "@/lib/auth-client";

export function UserAvatar() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return <div className="h-8 w-8 rounded-full bg-white/5 animate-pulse" />;
  }

  if (!session?.user) return null;

  const user = session.user;
  return (
    <Avatar className="h-8 w-8 border border-border shadow-sm">
      <AvatarImage src={user.image || ""} alt={user.name || ""} />
      <AvatarFallback className="bg-muted text-xs text-muted-foreground">
        {user.name?.slice(0, 2) || "U"}
      </AvatarFallback>
    </Avatar>
  );
}
