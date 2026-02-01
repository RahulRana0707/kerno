"use client";

import * as React from "react";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { RoadmapNode } from "@/lib/types";
import { motion, AnimatePresence } from "framer-motion";

interface RoadmapNavItemProps {
    node: RoadmapNode;
    level?: number;
    index?: number;
}

export function RoadmapNavItem({ node, level = 0, index = 0 }: RoadmapNavItemProps) {
    const [isExpanded, setIsExpanded] = React.useState(true);
    const hasChildren = node.children && node.children.length > 0;

    const getIcon = () => {
        switch (node.type) {
            case "exercise":
                return <Icons.target className="h-3.5 w-3.5 text-primary" />;
            case "section":
                return <Icons.bookOpen className="h-3.5 w-3.5 text-muted-foreground" />;
            default:
                return <Icons.fileText className="h-3.5 w-3.5 text-muted-foreground" />;
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                duration: 0.3,
                delay: index * 0.05,
                ease: [0.19, 1, 0.22, 1] // Custom easing for smooth feel
            }}
        >
            <button
                onClick={() => hasChildren && setIsExpanded(!isExpanded)}
                className={cn(
                    "w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-200 group",
                    "hover:bg-muted/50 hover:scale-[1.01]",
                    node.isCompleted && "opacity-60",
                    node.type === "section" && "font-semibold"
                )}
                style={{ paddingLeft: `${level * 16 + 12}px` }}
            >
                {hasChildren && (
                    <motion.div
                        className="shrink-0"
                        animate={{ rotate: isExpanded ? 0 : -90 }}
                        transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
                    >
                        <Icons.chevronDown className="h-3.5 w-3.5 text-muted-foreground transition-transform" />
                    </motion.div>
                )}
                {!hasChildren && <div className="w-3.5 shrink-0" />}

                <div className="shrink-0">{getIcon()}</div>

                <div className="flex-1 text-left truncate">
                    <div className={cn(
                        "truncate",
                        node.type === "exercise" && "text-primary font-medium"
                    )}>
                        {node.title}
                    </div>
                    {node.description && level > 0 && (
                        <div className="text-xs text-muted-foreground truncate mt-0.5">
                            {node.description}
                        </div>
                    )}
                </div>
            </button>

            <AnimatePresence initial={false}>
                {hasChildren && isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                            height: "auto",
                            opacity: 1,
                            transition: {
                                height: {
                                    duration: 0.4,
                                    ease: [0.19, 1, 0.22, 1]
                                },
                                opacity: {
                                    duration: 0.25,
                                    delay: 0.1
                                }
                            }
                        }}
                        exit={{
                            height: 0,
                            opacity: 0,
                            transition: {
                                height: {
                                    duration: 0.3,
                                    ease: [0.19, 1, 0.22, 1]
                                },
                                opacity: {
                                    duration: 0.2
                                }
                            }
                        }}
                        className="overflow-hidden"
                    >
                        <div className="space-y-0.5 mt-0.5">
                            {node.children!.map((child, idx) => (
                                <RoadmapNavItem
                                    key={child.id}
                                    node={child}
                                    level={level + 1}
                                    index={idx}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
