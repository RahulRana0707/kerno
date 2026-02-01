import { create } from 'zustand';
import { Roadmap } from '@/lib/types';
import { buildRoadmapTree } from '@/lib/roadmap-utils';

interface RoadmapState {
    roadmap: Roadmap | null;
    isGenerating: boolean;
    error: string | null;
    setRoadmap: (roadmap: Partial<Roadmap>) => void;
    setGenerating: (generating: boolean) => void;
    setError: (error: string | null) => void;
    reset: () => void;
}

export const useRoadmapState = create<RoadmapState>((set) => ({
    roadmap: null,
    isGenerating: false,
    error: null,
    setRoadmap: (data) => {
        if (!data || !data.nodes) {
            set({ roadmap: null, error: null });
            return;
        }

        const transformedNodes = buildRoadmapTree(data.nodes);
        console.log(transformedNodes)
        const transformedRoadmap = {
            ...data,
            nodes: transformedNodes,
        } as Roadmap;

        set({ roadmap: transformedRoadmap, error: null });
    },
    setGenerating: (generating) => set({ isGenerating: generating }),
    setError: (error) => set({ error, isGenerating: false }),
    reset: () => set({ roadmap: null, isGenerating: false, error: null }),
}));
