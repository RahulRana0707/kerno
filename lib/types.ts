// Roadmap Types
export type RoadmapNode = {
    id: string;
    title: string;
    description?: string;
    children?: RoadmapNode[];
    isCompleted?: boolean;
    type?: "section" | "topic" | "exercise";
};

export type Roadmap = {
    title: string;
    description: string;
    nodes: RoadmapNode[];
};
