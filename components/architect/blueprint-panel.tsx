"use client";

import * as React from "react";
import { RoadmapNavigation } from "./roadmap-navigation";
import { MOCK_ROADMAP_CACHING, MOCK_ROADMAP_CACHING_EXERCISES } from "@/lib/constants";

export function BlueprintPanel() {
    const [currentRoadmap, setCurrentRoadmap] = React.useState<"none" | "loading" | "basic" | "exercises">("none");

    // Simulate roadmap generation on mount (for demo)
    React.useEffect(() => {
        // Start with basic roadmap after 1 second
        const timer1 = setTimeout(() => {
            setCurrentRoadmap("loading");
        }, 1000);

        const timer2 = setTimeout(() => {
            setCurrentRoadmap("basic");
        }, 2500);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    // Function to simulate adding exercises (can be triggered by chat)
    const addExercises = () => {
        setCurrentRoadmap("loading");
        setTimeout(() => {
            setCurrentRoadmap("exercises");
        }, 1500);
    };

    // Expose function globally for demo purposes (temporary)
    React.useEffect(() => {
        (window as any).addExercises = addExercises;
        return () => {
            delete (window as any).addExercises;
        };
    }, []);

    const getRoadmapProps = () => {
        switch (currentRoadmap) {
            case "loading":
                return { isLoading: true };
            case "basic":
                return { roadmap: MOCK_ROADMAP_CACHING };
            case "exercises":
                return { roadmap: MOCK_ROADMAP_CACHING_EXERCISES };
            default:
                return {};
        }
    };

    return (
        <div className="h-full w-full flex items-center justify-center bg-background relative overflow-hidden">
            {/* Radial gradient spotlight */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_50%_50%,var(--primary),transparent)] opacity-5" />

            {/* Subtle dot pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_1.5px_at_center,var(--foreground)_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.02]" />

            <RoadmapNavigation {...getRoadmapProps()} />
        </div>
    );
}
