import { create } from 'zustand';
import { Roadmap } from '@/lib/types';
import { buildRoadmapTree } from '@/lib/roadmap-utils';


export enum GenerationStatus {
    IDLE = 'idle',
    SUBMITTED = 'submitted',
    GENERATING = 'generating',
    COMPLETED = 'completed',
    ERROR = 'error',
    READY = 'ready',
}

interface RoadmapState {
    roadmap: Roadmap | null;
    generationStatus: GenerationStatus;
    error: string | null;
    setRoadmap: (roadmap: Partial<Roadmap>) => void;
    setGenerationStatus: (generationStatus: GenerationStatus) => void;
    setError: (error: string | null) => void;
    reset: () => void;
}

export const useRoadmapState = create<RoadmapState>((set) => ({
    roadmap: null,
    generationStatus: GenerationStatus.IDLE,
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
    setGenerationStatus: (generationStatus: GenerationStatus) => set({ generationStatus }),
    setError: (error) => set({ error, generationStatus: GenerationStatus.ERROR }),
    reset: () => set({ roadmap: null, generationStatus: GenerationStatus.IDLE, error: null }),
}));
