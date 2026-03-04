import React from 'react';
import aiContent from '@/ai-content.json';
import { buildRoadmapTree, FlatNode } from '@/lib/roadmap-utils';
import { ImmersionInterface } from '@/components/immersion/immersion-interface';

export default function ImmersionPage() {
    // Prepare data server-side
    const flatNodes = aiContent.nodes as FlatNode[];
    const roadmapTree = buildRoadmapTree(flatNodes);
    console.log(roadmapTree, "roadmap");

    return (
        <ImmersionInterface tree={roadmapTree} flatNodes={flatNodes} />
    );
}
