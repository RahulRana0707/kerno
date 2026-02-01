"use client";

import { AuthLayout } from "@/components/auth/auth-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SignupPage() {
    return (
        <AuthLayout>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl p-8 shadow-2xl"
            >
                <div className="flex flex-col items-center mb-8">
                    <div className="h-10 w-10 rounded bg-primary shadow-[0_0_15px_var(--primary)] mb-4" />
                    <h1 className="text-2xl font-bold tracking-tight text-white">Create an account</h1>
                    <p className="text-sm text-muted-foreground mt-2 text-center">
                        Start architecting your learning journey today.
                    </p>
                </div>

                <div className="space-y-4">
                    <Button variant="outline" className="w-full h-11 border-white/10 bg-white/5 hover:bg-white/10 hover:text-white relative">
                        <Icons.google className="mr-2 h-4 w-4" />
                        Sign up with Google
                    </Button>
                    <Button variant="outline" className="w-full h-11 border-white/10 bg-white/5 hover:bg-white/10 hover:text-white">
                        <Icons.github className="mr-2 h-4 w-4" />
                        Sign up with GitHub
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

                <form className="space-y-4">
                    <div className="space-y-2">
                        <Input
                            type="text"
                            placeholder="Full Name"
                            className="h-11 bg-white/5 border-white/10 focus-visible:ring-primary focus-visible:border-primary placeholder:text-muted-foreground/50"
                        />
                    </div>
                    <div className="space-y-2">
                        <Input
                            type="email"
                            placeholder="name@example.com"
                            className="h-11 bg-white/5 border-white/10 focus-visible:ring-primary focus-visible:border-primary placeholder:text-muted-foreground/50"
                        />
                    </div>
                    <div className="space-y-2">
                        <Input
                            type="password"
                            placeholder="Password"
                            className="h-11 bg-white/5 border-white/10 focus-visible:ring-primary focus-visible:border-primary placeholder:text-muted-foreground/50"
                        />
                    </div>
                    <Button className="w-full h-11 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-[0_0_20px_rgba(15,118,110,0.3)] transition-all hover:shadow-[0_0_30px_rgba(15,118,110,0.5)] border-none">
                        Create Account
                    </Button>
                </form>

                <div className="mt-6 text-center text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <Link href="/login" className="text-primary hover:underline underline-offset-4 hover:text-primary/80 transition-colors">
                        Sign in
                    </Link>
                </div>
            </motion.div>
        </AuthLayout>
    );
}
