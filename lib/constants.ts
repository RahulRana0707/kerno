import { Roadmap } from "./types";

export const SUGGESTIONS = [
    {
        title: "Rust Mastery",
        description: "Architect a deep-dive path into memory safety and low-level systems."
    },
    {
        title: "Quantum Foundations",
        description: "Construct a first-principles map of quantum mechanics and computing."
    },
    {
        title: "Game Theory",
        description: "Design a strategic learning graph for non-cooperative decision making."
    },
    {
        title: "Distributed Systems",
        description: "Map out the architecture of consensus protocols and fault tolerance."
    }
];

// Mock Roadmap 1: Fundamentals of Caching
export const MOCK_ROADMAP_CACHING: Roadmap = {
    title: "Fundamentals of Caching",
    description: "A comprehensive guide to caching strategies and implementation patterns",
    nodes: [
        {
            id: "1",
            title: "Introduction to Caching",
            type: "section",
            children: [
                {
                    id: "1.1",
                    title: "What is Caching?",
                    description: "Understanding the core concept of caching",
                    type: "topic",
                },
                {
                    id: "1.2",
                    title: "Why Cache?",
                    description: "Performance benefits and use cases",
                    type: "topic",
                },
                {
                    id: "1.3",
                    title: "Cache Hit vs Miss",
                    description: "Understanding cache efficiency metrics",
                    type: "topic",
                },
            ],
        },
        {
            id: "2",
            title: "Caching Strategies",
            type: "section",
            children: [
                {
                    id: "2.1",
                    title: "Write-Through",
                    description: "Synchronous write strategy",
                    type: "topic",
                },
                {
                    id: "2.2",
                    title: "Write-Back",
                    description: "Asynchronous write strategy",
                    type: "topic",
                },
                {
                    id: "2.3",
                    title: "Cache-Aside",
                    description: "Lazy loading pattern",
                    type: "topic",
                },
            ],
        },
        {
            id: "3",
            title: "Implementation Patterns",
            type: "section",
            children: [
                {
                    id: "3.1",
                    title: "In-Memory Caching",
                    description: "Local cache implementations",
                    type: "topic",
                },
                {
                    id: "3.2",
                    title: "Distributed Caching",
                    description: "Redis, Memcached patterns",
                    type: "topic",
                },
            ],
        },
    ],
};

// Mock Roadmap 2: Caching with Exercises
export const MOCK_ROADMAP_CACHING_EXERCISES: Roadmap = {
    title: "Fundamentals of Caching",
    description: "A comprehensive guide with hands-on exercises",
    nodes: [
        {
            id: "1",
            title: "Introduction to Caching",
            type: "section",
            children: [
                {
                    id: "1.1",
                    title: "What is Caching?",
                    description: "Understanding the core concept of caching",
                    type: "topic",
                },
                {
                    id: "1.2",
                    title: "Why Cache?",
                    description: "Performance benefits and use cases",
                    type: "topic",
                },
                {
                    id: "1.3",
                    title: "Cache Hit vs Miss",
                    description: "Understanding cache efficiency metrics",
                    type: "topic",
                },
                {
                    id: "1.4",
                    title: "Exercise: Identify Cache Scenarios",
                    description: "Practice identifying when to use caching",
                    type: "exercise",
                },
            ],
        },
        {
            id: "2",
            title: "Caching Strategies",
            type: "section",
            children: [
                {
                    id: "2.1",
                    title: "Write-Through",
                    description: "Synchronous write strategy",
                    type: "topic",
                },
                {
                    id: "2.2",
                    title: "Write-Back",
                    description: "Asynchronous write strategy",
                    type: "topic",
                },
                {
                    id: "2.3",
                    title: "Cache-Aside",
                    description: "Lazy loading pattern",
                    type: "topic",
                },
                {
                    id: "2.4",
                    title: "Exercise: Implement Write-Through",
                    description: "Build a write-through cache layer",
                    type: "exercise",
                },
            ],
        },
        {
            id: "3",
            title: "Implementation Patterns",
            type: "section",
            children: [
                {
                    id: "3.1",
                    title: "In-Memory Caching",
                    description: "Local cache implementations",
                    type: "topic",
                },
                {
                    id: "3.2",
                    title: "Distributed Caching",
                    description: "Redis, Memcached patterns",
                    type: "topic",
                },
                {
                    id: "3.3",
                    title: "Exercise: Build a Cache Layer",
                    description: "Complete implementation project",
                    type: "exercise",
                },
            ],
        },
    ],
};
