"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Navbar() {
    const { scrollY } = useScroll();
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useMotionValueEvent(scrollY, "change", (current) => {
        if (typeof current === "number") {
            const direction = current - lastScrollY;

            if (scrollY.get() < 50) {
                setVisible(true); // Always show at top
            } else {
                if (direction < 0) {
                    setVisible(true); // Show on scroll up
                } else {
                    setVisible(false); // Hide on scroll down
                }
            }
            setLastScrollY(current);
        }
    });

    return (
        <div className="fixed top-6 inset-x-0 max-w-2xl mx-auto z-50 px-4">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0
                }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-between px-6 py-3 rounded-full border border-white/10 bg-black/50 backdrop-blur-xl shadow-lg supports-[backdrop-filter]:bg-black/20"
            >
                <Link href="/" className="flex items-center gap-2 font-bold tracking-tight text-white">
                    <div className="h-5 w-5 rounded bg-primary shadow-[0_0_10px_var(--primary)]" />
                    <span>Kerno</span>
                </Link>

                <div className="flex items-center gap-6">
                    <div className="hidden sm:flex items-center gap-4 text-sm font-medium text-zinc-400">
                        <Link href="#features" className="hover:text-white transition-colors">Features</Link>
                        <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
                    </div>

                    <div className="h-4 w-[1px] bg-white/20 hidden sm:block" />

                    <div className="flex items-center gap-3">
                        <Link href="/login" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                            Login
                        </Link>
                        <Button size="sm" className="rounded-full px-5 h-9 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-[0_0_20px_rgba(15,118,110,0.3)] transition-all hover:shadow-[0_0_30px_rgba(15,118,110,0.5)] border-none">
                            Get Started
                        </Button>
                    </div>
                </div>
            </motion.nav>
        </div>
    );
}
