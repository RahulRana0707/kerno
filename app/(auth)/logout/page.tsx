"use client"

import { AuthLayout } from "@/components/auth/auth-layout";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

export default function LogoutPage() {
    return (
        <AuthLayout>
            <Button onClick={async () => {
                await authClient.signOut()
                redirect('/login')
            }}>Logout</Button>
        </AuthLayout>
    );
}