"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
    {
        question: "How is this different from a video course?",
        answer: "Video courses are passive. You watch, nod, and forget. Kerno requires you to 'build' your understanding. We map the dependency graph of a concept, and you must pass synthesis gates to progress. It's active construction, not consumption."
    },
    {
        question: "What does 'Structure-First' mean?",
        answer: "Most learning platforms throw you into the details immediately. We architectural the entire topic first. You see the graph, the connections, and the hierarchy before you read a single sentence. You always know 'where' you are in the map."
    },
    {
        question: "Is this for beginners?",
        answer: "Kerno is optimized for density. While beginners can use it, it shines for engineers, founders, and researchers who want to master efficient mental models quickly without the fluff."
    },
    {
        question: "Can I use it for any topic?",
        answer: "Currently, we focus on technical and systems topics (React Internals, System Design, Physics, Game Theory). Our AI architect is being trained on more domains every day."
    }
];

export function FAQSection() {
    return (
        <section id="faq" className="py-24 relative z-10 container mx-auto px-4 sm:px-8 max-w-3xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12 text-center"
            >
                <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
            </motion.div>

            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
                        <AccordionTrigger className="text-left text-lg hover:text-primary transition-colors hover:no-underline">
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    );
}
