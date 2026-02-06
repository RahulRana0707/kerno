# Mission: Design a Premium SaaS Motion Product Video for Kerno

## Project Context
**Kerno** is a structure-first learning engine. Its core philosophy is that learning is a construction problem, not a consumption problem. Most platforms give you content (videos/text); Kerno gives you the *architecture* of knowledge first, then guides you through building your understanding piece by piece.

## Visual Identity (High-End & Aesthetic)
- **Theme**: Deep Dark Mode (Absolute Black `#000000`).
- **Primary Accent**: Kerno Violet (`oklch(0.541 0.281 293.009)`).
- **Secondary Accent**: Glow/Highlight (`oklch(0.702 0.183 293.745)`).
- **Logo**: The "Bell Curve" (A curved line with a pulse at the peak "kernel").
- **Typography**: Satoshi or Inter (Tight tracking, medium weight).
- **Aesthetic**: Minimalist, glassmorphism, subtle grid backgrounds, premium utility feel.

## Video Structure & Storyboard (15-20 Second Loop)

### Scene 1: The Problem (0s - 3s)
- **Visual**: A cluttered screen of overlapping video windows and messy notes.
- **Action**: A "Cognitive Overload" text appears in a muted gray, then fades as the grid background clears the clutter.
- **Core Message**: Learning is messy without structure.

### Scene 2: Intent Declaration (3s - 6s)
- **Visual**: The Kerno search bar (centered) with a shimmering border.
- **Action**: Text types out: *"I want to master Distributed Systems."*
- **Animation**: The "Architect Path" button glows. The cursor clicks.
- **Transition**: The search bar expands outwards to reveal the "Architect Phase".

### Scene 3: The Architecture (6s - 12s)
- **Visual**: A dynamic SVG Dependency Graph (DAG) assembling in real-time.
- **Action**: Nodes (Circles with labels like "CAP Theorem", "Raft Consensus", "Log Indexing") pop in with elastic growth. Connecting lines (stroke-dasharray animation) link them together in a clear hierarchy.
- **Highlight**: The "Bell Curve" logo pulses at the top of the screen as the "Kernel" of the path.
- **Micro-Interaction**: A cursor hovers over a node, and a "Summary" tooltip appears with a glassmorphism effect.

### Scene 4: Recall Gates & Immersion (12s - 17s)
- **Visual**: Split screen. Left side: Docs-like content. Right side: The Graph.
- **Action**: A node is shown as "Locked" (Reddish tint, lock icon). 
- **The Magic**: A small "Synthesis Prompt" appears: *"Explain why 'Availability' is sacrificed in a partition."* 
- **Resolution**: Green checkmark appears. The "Locked" node transitions to "Unlocked" (Violet glow). The connections to the next nodes light up.

### Scene 5: Conclusion (17s - 20s)
- **Visual**: The Kerno Bell Curve logo centered.
- **Text**: *"Architect your mastery."*
- **Call to Action**: `kerno.ai` (or generic placeholder).
- **Ending**: Smooth fade to black or loop back to the grid.

## Technical Requirements (Remotion)
1. **SVG Orchestration**: Use `stroke-dashoffset` for the connection lines in the graph. Nodes should use `spring` from `framer-motion` or `remotion`'s native spring for entering.
2. **Text Effects**: Use a realistic typing effect with a cursor blink.
3. **Glassmorphism**: Implement `backdrop-filter: blur(20px)` and semi-transparent borders for all UI cards.
4. **Lighting**: Subtle radial gradients trailing the cursor or highlighting active "unlocked" paths.
5. **Pacing**: 60fps, smooth easing (cubic-bezier), avoiding linear movements at all costs.

## Delivery Format
A code-based implementation using **Remotion** that can be tweaked and rendered locally. Focus on component modularity (e.g., `<GraphNode />`, `<ConnectingLine />`, `<RecallGate />`).
