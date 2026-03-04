"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export function ProductShowcase() {
  return (
    <section
      id="product"
      className="py-24 relative z-10 container mx-auto px-4 sm:px-8"
    >
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight sm:text-5xl mb-6"
        >
          See your learning path in one minute.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-xl leading-relaxed mb-8"
        >
          Describe what you want to learn → get a full roadmap → follow it step
          by step.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="relative rounded-3xl border border-border bg-card overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
          <div className="relative p-8 md:p-12">
            {/* Simplified roadmap tree preview */}
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-sm font-medium text-foreground">
                  Foundations
                </span>
              </div>
              <div className="pl-5 space-y-2 border-l border-border">
                <div className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                  <span className="text-sm text-muted-foreground">
                    What is a Distributed System?
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                  <span className="text-sm text-muted-foreground">
                    CAP Theorem
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary/50" />
                  <span className="text-sm text-muted-foreground/80">
                    Consensus (Locked)
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-sm font-medium text-foreground">
                  Implementation
                </span>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <Button asChild variant="outline" size="lg" className="rounded-xl">
                <Link href="/architect" className="inline-flex items-center gap-2">
                  Try the Architect
                  <Icons.arrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
