"use client";

import { AuthLayout } from "@/components/auth/auth-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { motion } from "framer-motion";
import { ServerResponse } from "@/lib/types";
import { useActionState, useEffect } from "react";
import { login } from "@/actions/auth";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {

    const initialState: ServerResponse = {
        errorMessage: '',
        success: false,
    };

    const [state, formAction, pending] = useActionState(login, initialState);

    useEffect(() => {
        if (state?.errorMessage?.length) {
            toast.error(state.errorMessage);
        }
    }, [state?.errorMessage]);

    return (
        <AuthLayout>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl p-8 shadow-2xl"
            >
                <div className="flex flex-col items-center mb-8">
                    <Icons.logo variant="brand" className="h-10 w-16 mb-4 drop-shadow-[0_0_15px_oklch(var(--primary))]" />
                    <h1 className="text-2xl font-bold tracking-tight text-white">Welcome back</h1>
                    <p className="text-sm text-muted-foreground mt-2 text-center">
                        Enter your details to access your mastery paths.
                    </p>
                </div>

                <div className="space-y-4">
                    <Button variant="outline" className="w-full h-11 border-white/10 bg-white/5 hover:bg-white/10 hover:text-white relative" onClick={async () => {
                        await authClient.signIn.social({
                            provider: "google"
                        })
                    }}>
                        <Icons.google className="mr-2 h-4 w-4" />
                        Continue with Google
                    </Button>
                    <Button variant="outline" className="w-full h-11 border-white/10 bg-white/5 hover:bg-white/10 hover:text-white" onClick={async () => {
                        await authClient.signIn.social({
                            provider: "github"
                        })
                    }}>
                        <Icons.github className="mr-2 h-4 w-4" />
                        Continue with GitHub
                    </Button>
                </div>

                <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-white/10" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-black/50 px-2 text-muted-foreground backdrop-blur-xl">Or continue with</span>
                    </div>
                </div>

                <form className="space-y-4" action={formAction}>
                    <div className="space-y-2">
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="name@example.com"
                            className="h-11 bg-white/5 border-white/10 focus-visible:ring-primary focus-visible:border-primary placeholder:text-muted-foreground/50"
                        />
                    </div>
                    <div className="space-y-2">
                        <Input
                            id="pwd"
                            name="pwd"
                            type="password"
                            placeholder="Password"
                            className="h-11 bg-white/5 border-white/10 focus-visible:ring-primary focus-visible:border-primary placeholder:text-muted-foreground/50"
                        />
                    </div>
                    <Button className="w-full h-11 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-[0_0_20px_rgba(15,118,110,0.3)] transition-all hover:shadow-[0_0_30px_rgba(15,118,110,0.5)] border-none" disabled={pending}>
                        {pending && <Icons.spinner className="h-5 w-5 animate-spin" />}
                        Sign In
                    </Button>
                </form>

                <div className="mt-6 text-center text-sm text-muted-foreground">
                    Don&apos;t have an account?{" "}
                    <Link href="/signup" className="text-primary hover:underline underline-offset-4 hover:text-primary/80 transition-colors">
                        Sign up
                    </Link>
                </div>
            </motion.div>
        </AuthLayout>
    );
}
