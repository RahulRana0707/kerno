import { create } from 'zustand';
import { Roadmap, RoadmapNode } from '@/lib/types';
import { buildRoadmapTree } from '@/lib/roadmap-utils';

interface RoadmapState {
    roadmap: Roadmap | null;
    isGenerating: boolean;
    isLocked: boolean;
    phase: 'architect' | 'immersion';
    error: string | null;
    setRoadmap: (roadmap: any) => void;
    setGenerating: (generating: boolean) => void;
    setLocked: (locked: boolean) => void;
    setPhase: (phase: 'architect' | 'immersion') => void;
    setError: (error: string | null) => void;
    reset: () => void;
}

export const useRoadmapState = create<RoadmapState>((set) => ({
    roadmap: null,
    isGenerating: false,
    isLocked: false,
    phase: 'architect',
    error: null,
    setRoadmap: (data) => {
        if (!data) {
            set({ roadmap: null, error: null, isLocked: false });
            return;
        }

        const transformedNodes = buildRoadmapTree(data.nodes);
        console.log(transformedNodes)
        const transformedRoadmap: Roadmap = {
            ...data,
            nodes: transformedNodes,
        };

        set({ roadmap: transformedRoadmap, error: null });
    },
    setGenerating: (generating) => set({ isGenerating: generating }),
    setLocked: (locked) => set({ isLocked: locked }),
    setPhase: (phase) => set({ phase }),
    setError: (error) => set({ error, isGenerating: false }),
    reset: () => set({ roadmap: null, isGenerating: false, isLocked: false, phase: 'architect', error: null }),
}));
