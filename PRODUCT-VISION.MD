# Product Vision Blueprint

---

## 0. Core Philosophy (Non‑Negotiable)

**Learning is a construction problem, not a consumption problem.**

People don’t fail to learn because they’re lazy. They fail because they’re forced to infer structure while already cognitively overloaded.

This product exists to remove *structural ambiguity*.

> **Law of Cognitive Architecture**: *The brain cannot reason clearly about a system whose structure it must simultaneously discover.*

---

## 1. Product Naming Exploration

### Naming Criteria

* 1–2 syllables
* Easy to pronounce globally
* Feels like a **tool**, not a school
* Neutral to domain (works for math, law, AI, philosophy)
* Suggests structure, flow, clarity, or construction

### Shortlisted Names

**Primary Recommendation**

* **Kerno** (Kernel → first principles → core units)

**Strong Alternatives**

* **Scema** (Schema without the H)
* **Formo** (Form + Flow)
* **Axio** (Axioms, foundations)
* **Nexo** (Connections, graph)
* **Primo** (From first principles)

> Winner from a product standpoint: **Kerno** — minimal, foundational, strong mental association

---

## 2. High‑Level Product Overview (Founder / Vision)

### What Kerno Is

Kerno is a **structure‑first learning engine** that converts intent into a mastery path, then enforces understanding through synthesis.

### What Kerno Is NOT

* Not a course platform
* Not a video library
* Not a note‑taking app

### Core Promise

> “Tell us *what* you want to master and *how deep*. We’ll design the path. You’ll build the understanding.”

---

## 3. User Experience Flow (Macro)

1. **Intent Declaration**

   * User states topic

2. **Architect Phase**

   * AI generates a visible learning graph (right panel)
   * Left panel = conversational refinement

3. **Approval Moment**

   * User locks the structure
   * Structure becomes immutable (versioned)

4. **Immersion Phase**

   * Docs‑style learning environment
   * Progressive disclosure

5. **Recall Gates**

   * Synthesis required to proceed

---

## 4. Designer Perspective (UI / UX)

### Design Principles

* **Structural clarity > decoration**
* **Calm confidence**, not playful gamification
* **Spatial hierarchy mirrors knowledge hierarchy**

### Brand Identity

* **Primary Color**: Deep Emerald (#0F766E)
* **Base**: Absolute Black + Off‑White
* **Accent**: Soft glass highlights, subtle grids

### Typography

* Headings: Inter / Satoshi (tight tracking)
* Body: High‑legibility, slightly larger than normal

### Page Breakdown

#### A. Architect Page

**Layout**

* Left: Chat (refinement, commands, reasoning)
* Right: Live structural graph (tree / DAG)

**Interactions**

* Hover nodes → show purpose
* Drag to reorder (optional later)
* Prune / Expand inline

#### B. Immersion Page (Docs‑Like)

**Left Sidebar**

* Nested navigation: A → A.1 → A.1.a

**Main Content**

* AI‑generated markdown
* Sections:

  * Concept
  * Example
  * Visualization
  * Practice
  * External References

**Right Utility Rail**

* Quick recall
* Notes
* Ask Architect

---

## 5. Product Owner Perspective (Strategy)

### Primary User Persona

* Self‑directed learners
* Engineers, founders, researchers
* People frustrated with "where do I start?"

### MVP Focus

* Structural correctness > content polish
* Fewer domains, deeper quality

### Differentiators

* Visible learning architecture
* User‑approved structure
* Recall‑gated progression

### Success Metrics

* % of users completing a full path
* Recall gate pass quality
* Repeat usage across domains

---

## 6. Engineer Perspective (System Design)

### Core Objects

```ts
LearningGraph
Node
Dependency
RecallGate
ContentBlock
```

### Architecture

* Frontend: React 19 + Tailwind
* State: Local hooks + derived memoization
* Graph: JSON‑based DAG

### AI Responsibilities

* Generate structure
* Generate content per node
* Cite sources

### Non‑Goals (MVP)

* Perfect citations
* Offline mode
* Mobile first

---

## 7. Content Generation Rules

Each node must include:

* Why this exists
* What breaks if skipped
* One concrete example
* One applied exercise
* Optional deep references

> **Law of Learning Integrity**: *If a concept cannot be explained forward and backward, it is not understood.*

---

## 8. Long‑Term Vision

Kerno becomes:

* A personal knowledge OS
* A shared architecture marketplace
* A map of how humans actually learn complex systems

Not louder. Just clearer.
