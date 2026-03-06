import { type UIMessage } from "ai";

export const ROADMAP_DUMMY = {
    "title": "Quantum Foundations: Mechanics & Computing",
    "description": "A first-principles roadmap to understanding quantum mechanics and its application in quantum computing, from classical prerequisites to advanced concepts.",
    "nodes": [
        {
            "id": "1",
            "title": "Classical Physics Foundations",
            "type": "section",
            "description": "Establishes the necessary classical physics concepts and mathematical tools.",
            "isCompleted": false,
            "children": [
                {
                    "id": "1.1",
                    "title": "Classical Mechanics Review",
                    "type": "topic",
                    "description": "Covers fundamental concepts like position, momentum, energy, and the Hamiltonian formulation.",
                    "parentId": "1",
                    "children": []
                },
                {
                    "id": "1.2",
                    "title": "Electromagnetism Basics",
                    "type": "topic",
                    "description": "Explores electric and magnetic fields, waves, and the concept of radiation.",
                    "parentId": "1",
                    "children": []
                },
                {
                    "id": "1.3",
                    "title": "Linear Algebra Essentials",
                    "type": "topic",
                    "description": "Introduces vectors, matrices, eigenvalues, eigenvectors, and Hilbert spaces for quantum representation.",
                    "parentId": "1",
                    "children": []
                },
                {
                    "id": "1.4",
                    "title": "Complex Numbers and Functions",
                    "type": "topic",
                    "description": "Reviews complex numbers, Euler's formula, and complex exponentials crucial for wave functions.",
                    "parentId": "1",
                    "children": []
                },
                {
                    "id": "1.5",
                    "title": "Exercise: Classical Harmonic Oscillator",
                    "type": "exercise",
                    "description": "Solve for the motion and energy of a classical harmonic oscillator using Hamiltonian mechanics.",
                    "parentId": "1",
                    "children": []
                }
            ]
        },
        {
            "id": "2",
            "title": "Early Quantum Concepts",
            "type": "section",
            "description": "Examines the historical experiments and ideas that led to the birth of quantum mechanics.",
            "isCompleted": false,
            "children": [
                {
                    "id": "2.1",
                    "title": "Blackbody Radiation",
                    "type": "topic",
                    "description": "Studies Planck's hypothesis of energy quantization to explain blackbody emission.",
                    "parentId": "2",
                    "children": []
                },
                {
                    "id": "2.2",
                    "title": "Photoelectric Effect",
                    "type": "topic",
                    "description": "Investigates light quanta (photons) and their role in electron emission from metals.",
                    "parentId": "2",
                    "children": []
                },
                {
                    "id": "2.3",
                    "title": "Bohr Model of the Atom",
                    "type": "topic",
                    "description": "Learns about quantized electron orbits and discrete energy levels in atoms.",
                    "parentId": "2",
                    "children": []
                },
                {
                    "id": "2.4",
                    "title": "De Broglie Wavelength & Duality",
                    "type": "topic",
                    "description": "Explores the wave-particle duality of matter, introducing de Broglie's hypothesis.",
                    "parentId": "2",
                    "children": []
                },
                {
                    "id": "2.5",
                    "title": "Heisenberg Uncertainty Principle",
                    "type": "topic",
                    "description": "Covers the fundamental limits on simultaneously knowing conjugate variable pairs like position and momentum.",
                    "parentId": "2",
                    "children": []
                },
                {
                    "id": "2.6",
                    "title": "Exercise: Calculate Photon Energy",
                    "type": "exercise",
                    "description": "Compute the energy of a photon given its wavelength using Planck's relation.",
                    "parentId": "2",
                    "children": []
                }
            ]
        },
        {
            "id": "3",
            "title": "Quantum Mechanics Formalism",
            "type": "section",
            "description": "Introduces the mathematical framework and postulates of quantum mechanics.",
            "isCompleted": false,
            "children": [
                {
                    "id": "3.1",
                    "title": "Wave Functions & Probability",
                    "type": "topic",
                    "description": "Defines the wave function, its interpretation via the Born rule, and normalization conditions.",
                    "parentId": "3",
                    "children": []
                },
                {
                    "id": "3.2",
                    "title": "Operators & Observables",
                    "type": "topic",
                    "description": "Explains how physical quantities are represented by Hermitian operators and how to calculate expectation values.",
                    "parentId": "3",
                    "children": []
                },
                {
                    "id": "3.3",
                    "title": "Schrödinger Equation",
                    "type": "topic",
                    "description": "Studies the time-dependent and independent Schrödinger equations, governing quantum system evolution.",
                    "parentId": "3",
                    "children": []
                },
                {
                    "id": "3.4",
                    "title": "Quantum States & Superposition",
                    "type": "topic",
                    "description": "Covers basis states, linear combinations, and the principle of superposition.",
                    "parentId": "3",
                    "children": []
                },
                {
                    "id": "3.5",
                    "title": "Measurement Postulate",
                    "type": "topic",
                    "description": "Details the process of quantum measurement, including projection and wave function collapse.",
                    "parentId": "3",
                    "children": []
                },
                {
                    "id": "3.6",
                    "title": "Exercise: Infinite Potential Well",
                    "type": "exercise",
                    "description": "Solve the time-independent Schrödinger equation for a particle in a 1D infinite potential well.",
                    "parentId": "3",
                    "children": []
                }
            ]
        },
        {
            "id": "4",
            "title": "Spin & Many-Body Systems",
            "type": "section",
            "description": "Expands on intrinsic angular momentum, multi-particle interactions, and quantum entanglement.",
            "isCompleted": false,
            "children": [
                {
                    "id": "4.1",
                    "title": "Spin Angular Momentum",
                    "type": "topic",
                    "description": "Introduces spin as an intrinsic quantum property of particles, like electrons.",
                    "parentId": "4",
                    "children": []
                },
                {
                    "id": "4.2",
                    "title": "Pauli Exclusion Principle",
                    "type": "topic",
                    "description": "Explains why no two identical fermions can occupy the same quantum state.",
                    "parentId": "4",
                    "children": []
                },
                {
                    "id": "4.3",
                    "title": "Multi-Particle Systems",
                    "type": "topic",
                    "description": "Covers how to describe systems with multiple particles using tensor products and symmetries.",
                    "parentId": "4",
                    "children": []
                },
                {
                    "id": "4.4",
                    "title": "Entanglement",
                    "type": "topic",
                    "description": "Delves into non-classical correlations between quantum particles, including Bell states.",
                    "parentId": "4",
                    "children": []
                },
                {
                    "id": "4.5",
                    "title": "Density Matrix Formalism",
                    "type": "topic",
                    "description": "Introduces density matrices for describing mixed states and quantum decoherence.",
                    "parentId": "4",
                    "children": []
                },
                {
                    "id": "4.6",
                    "title": "Exercise: Two-Electron Spin States",
                    "type": "exercise",
                    "description": "Describe the possible spin states for a system of two electrons, considering the Pauli principle.",
                    "parentId": "4",
                    "children": []
                }
            ]
        },
        {
            "id": "5",
            "title": "Quantum Information Theory",
            "type": "section",
            "description": "Lays the groundwork for quantum computing with qubits, gates, and circuits.",
            "isCompleted": false,
            "children": [
                {
                    "id": "5.1",
                    "title": "Qubits vs. Classical Bits",
                    "type": "topic",
                    "description": "Compares classical bits with quantum bits, highlighting superposition and quantum advantage.",
                    "parentId": "5",
                    "children": []
                },
                {
                    "id": "5.2",
                    "title": "Bloch Sphere Representation",
                    "type": "topic",
                    "description": "Visualizes the state space of a single qubit using the Bloch sphere.",
                    "parentId": "5",
                    "children": []
                },
                {
                    "id": "5.3",
                    "title": "Quantum Gates",
                    "type": "topic",
                    "description": "Introduces fundamental quantum logic gates like Pauli, Hadamard, and CNOT gates.",
                    "parentId": "5",
                    "children": []
                },
                {
                    "id": "5.4",
                    "title": "Quantum Circuits",
                    "type": "topic",
                    "description": "Learns to combine quantum gates into circuits for computation and draw circuit diagrams.",
                    "parentId": "5",
                    "children": []
                },
                {
                    "id": "5.5",
                    "title": "No-Cloning Theorem",
                    "type": "topic",
                    "description": "Explains the fundamental impossibility of perfectly copying an arbitrary unknown quantum state.",
                    "parentId": "5",
                    "children": []
                },
                {
                    "id": "5.6",
                    "title": "Exercise: Create Bell State Circuit",
                    "type": "exercise",
                    "description": "Design a quantum circuit using Hadamard and CNOT gates to create an entangled Bell state.",
                    "parentId": "5",
                    "children": []
                }
            ]
        },
        {
            "id": "6",
            "title": "Quantum Computing Algorithms",
            "type": "section",
            "description": "Explores key quantum algorithms that offer computational advantages over classical counterparts.",
            "isCompleted": false,
            "children": [
                {
                    "id": "6.1",
                    "title": "Deutsch-Jozsa Algorithm",
                    "type": "topic",
                    "description": "Studies one of the first algorithms demonstrating exponential speedup for a specific problem.",
                    "parentId": "6",
                    "children": []
                },
                {
                    "id": "6.2",
                    "title": "Grover's Search Algorithm",
                    "type": "topic",
                    "description": "Learns about a quantum algorithm offering quadratic speedup for unstructured database searches.",
                    "parentId": "6",
                    "children": []
                },
                {
                    "id": "6.3",
                    "title": "Shor's Factoring Algorithm",
                    "type": "topic",
                    "description": "Investigates the most famous quantum algorithm, providing exponential speedup for integer factorization.",
                    "parentId": "6",
                    "children": []
                },
                {
                    "id": "6.4",
                    "title": "Quantum Fourier Transform",
                    "type": "topic",
                    "description": "Examines the quantum analog of the discrete Fourier transform, a subroutine for many algorithms.",
                    "parentId": "6",
                    "children": []
                },
                {
                    "id": "6.5",
                    "title": "Variational Quantum Eigensolver (VQE)",
                    "type": "topic",
                    "description": "Introduces a hybrid quantum-classical algorithm for finding eigenvalues of Hamiltonians.",
                    "parentId": "6",
                    "children": []
                },
                {
                    "id": "6.6",
                    "title": "Exercise: Trace Deutsch-Jozsa",
                    "type": "exercise",
                    "description": "Trace the states through a simple Deutsch-Jozsa circuit to verify its output.",
                    "parentId": "6",
                    "children": []
                }
            ]
        },
        {
            "id": "7",
            "title": "Quantum Hardware & Error Correction",
            "type": "section",
            "description": "Covers the physical implementations of qubits and methods to mitigate quantum errors.",
            "isCompleted": false,
            "children": [
                {
                    "id": "7.1",
                    "title": "Physical Qubit Realizations",
                    "type": "topic",
                    "description": "Explores different technologies for building qubits, such as superconducting circuits and trapped ions.",
                    "parentId": "7",
                    "children": []
                },
                {
                    "id": "7.2",
                    "title": "Coherence & Decoherence",
                    "type": "topic",
                    "description": "Understands the delicate nature of quantum states and how they lose coherence due to environmental interaction.",
                    "parentId": "7",
                    "children": []
                },
                {
                    "id": "7.3",
                    "title": "Quantum Error Correction",
                    "type": "topic",
                    "description": "Introduces techniques to protect quantum information from noise and errors.",
                    "parentId": "7",
                    "children": []
                },
                {
                    "id": "7.4",
                    "title": "Fault-Tolerant Quantum Computing",
                    "type": "topic",
                    "description": "Examines the requirements and strategies for building large-scale, fault-tolerant quantum computers.",
                    "parentId": "7",
                    "children": []
                },
                {
                    "id": "7.5",
                    "title": "NISQ Era Devices",
                    "type": "topic",
                    "description": "Discusses the characteristics and limitations of Noisy Intermediate-Scale Quantum devices currently available.",
                    "parentId": "7",
                    "children": []
                },
                {
                    "id": "7.6",
                    "title": "Exercise: Qubit Technology Comparison",
                    "type": "exercise",
                    "description": "Compare the advantages and disadvantages of two different physical qubit realizations.",
                    "parentId": "7",
                    "children": []
                }
            ]
        },
        {
            "id": "8",
            "title": "Advanced Topics & Future Outlook",
            "type": "section",
            "description": "Delves into more complex quantum theories, emerging applications, and future directions.",
            "isCompleted": false,
            "children": [
                {
                    "id": "8.1",
                    "title": "Quantum Field Theory Basics",
                    "type": "topic",
                    "description": "Provides a high-level introduction to quantum field theory, where particles are field excitations.",
                    "parentId": "8",
                    "children": []
                },
                {
                    "id": "8.2",
                    "title": "Quantum Cryptography",
                    "type": "topic",
                    "description": "Explores quantum key distribution (QKD) protocols like BB84 for secure communication.",
                    "parentId": "8",
                    "children": []
                },
                {
                    "id": "8.3",
                    "title": "Quantum Machine Learning",
                    "type": "topic",
                    "description": "Introduces the concepts of using quantum principles for machine learning tasks and algorithms.",
                    "parentId": "8",
                    "children": []
                },
                {
                    "id": "8.4",
                    "title": "Adiabatic Quantum Computing",
                    "type": "topic",
                    "description": "Examines an alternative paradigm for quantum computation, particularly for optimization problems.",
                    "parentId": "8",
                    "children": []
                },
                {
                    "id": "8.5",
                    "title": "Open Quantum Systems",
                    "type": "topic",
                    "description": "Studies quantum systems interacting with their environment, leading to decoherence and dissipation.",
                    "parentId": "8",
                    "children": []
                },
                {
                    "id": "8.6",
                    "title": "Exercise: Explain BB84 Security",
                    "type": "exercise",
                    "description": "Explain the fundamental quantum mechanics principles that ensure the security of the BB84 QKD protocol.",
                    "parentId": "8",
                    "children": []
                }
            ]
        }
    ]
}


export const INITIAL_MESSAGES: UIMessage[] = [
    {
        "parts": [
            {
                "type": "text",
                "text": "Create a roadmap for Distributed Systems: Map out the architecture of consensus protocols and fault tolerance."
            }
        ],
        "id": "4sztEJRTXjRLtVTm",
        "role": "user"
    },
    {
        "id": "fR7WWAAH4aDwdO3U",
        "role": "assistant",
        "parts": [
            {
                "type": "step-start"
            },
            {
                "type": "text",
                "text": "{\n  \"title\": \"Distributed Systems: Consensus and Fault Tolerance\",\n  \"description\": \"This roadmap systematically explores the architecture of consensus protocols and fault tolerance in distributed systems, from foundational concepts to advanced implementations.\",\n  \"nodes\": [\n    {\n      \"id\": \"1\",\n      \"title\": \"Foundations of Distributed Systems\",\n      \"type\": \"section\",\n      \"description\": \"Understand the core principles and challenges inherent in building distributed systems.\",\n      \"isCompleted\": false\n    },\n    {\n      \"id\": \"1.1\",\n      \"title\": \"What is a Distributed System?\",\n      \"type\": \"topic\",\n      \"description\": \"Define distributed systems, their characteristics, and common examples.\",\n      \"parentId\": \"1\"\n    },\n    {\n      \"id\": \"1.2\",\n      \"title\": \"Key Challenges and Goals\",\n      \"type\": \"topic\",\n      \"description\": \"Explore issues like concurrency, partial failures, and network latency. Discuss goals like scalability, availability, and consistency.\",\n      \"parentId\": \"1\"\n    },\n    {\n      \"id\": \"1.3\",\n      \"title\": \"System Models and Assumptions\",\n      \"type\": \"topic\",\n      \"description\": \"Differentiate between synchronous, asynchronous, and partially synchronous system models. Understand their implications for protocol design.\",\n      \"parentId\": \"1\"\n    },\n    {\n      \"id\": \"1.4\",\n      \"title\": \"Time and Global States\",\n      \"type\": \"topic\",\n      \"description\": \"Learn about logical clocks, vector clocks, and the challenges of achieving a consistent global state.\",\n      \"parentId\": \"1\"\n    },\n    {\n      \"id\": \"1.5\",\n      \"title\": \"Exercise: Identify Distributed System Properties\",\n      \"type\": \"exercise\",\n      \"description\": \"Analyze a simple distributed application, identifying its characteristics, potential challenges, and system model assumptions.\",\n      \"parentId\": \"1\"\n    },\n    {\n      \"id\": \"2\",\n      \"title\": \"Fault Models and Resilience\",\n      \"type\": \"section\",\n      \"description\": \"Examine various types of failures in distributed systems and strategies for building fault-tolerant architectures.\",\n      \"isCompleted\": false\n    },\n    {\n      \"id\": \"2.1\",\n      \"title\": \"Types of Faults\",\n      \"type\": \"topic\",\n      \"description\": \"Categorize faults as crash, omission, timing, and Byzantine failures. Understand their impact.\",\n      \"parentId\": \"2\"\n    },\n    {\n      \"id\": \"2.2\",\n      \"title\": \"Failure Detection Mechanisms\",\n      \"type\": \"topic\",\n      \"description\": \"Study heartbeat protocols, timeout mechanisms, and gossip protocols for detecting node failures.\",\n      \"parentId\": \"2\"\n    },\n    {\n      \"id\": \"2.3\",\n      \"title\": \"Replication Strategies\",\n      \"type\": \"topic\",\n      \"description\": \"Learn about active, passive, and quorum-based replication for data and service availability.\",\n      \"parentId\": \"2\"\n    },\n    {\n      \"id\": \"2.4\",\n      \"title\": \"CAP Theorem Revisited\",\n      \"type\": \"topic\",\n      \"description\": \"Deepen understanding of Consistency, Availability, and Partition Tolerance trade-offs.\",\n      \"parentId\": \"2\"\n    },\n    {\n      \"id\": \"2.5\",\n      \"title\": \"Exercise: Design a Failure Detector\",\n      \"type\": \"exercise\",\n      \"description\": \"Propose a design for a failure detection service for a cluster of 100 nodes, considering network latency and false positives.\",\n      \"parentId\": \"2\"\n    },\n    {\n      \"id\": \"3\",\n      \"title\": \"Introduction to Consensus\",\n      \"type\": \"section\",\n      \"description\": \"Grasp the fundamental problem of distributed consensus and its theoretical limitations.\",\n      \"isCompleted\": false\n    },\n    {\n      \"id\": \"3.1\",\n      \"title\": \"The Consensus Problem\",\n      \"type\": \"topic\",\n      \"description\": \"Define consensus: agreement on a single data value among multiple processes. Understand its properties like termination, agreement, and validity.\",\n      \"parentId\": \"3\"\n    },\n    {\n      \"id\": \"3.2\",\n      \"title\": \"FLP Impossibility Result\",\n      \"type\": \"topic\",\n      \"description\": \"Learn why consensus is impossible in an asynchronous system with even a single crash failure.\",\n      \"parentId\": \"3\"\n    },\n    {\n      \"id\": \"3.3\",\n      \"title\": \"Leader Election\",\n      \"type\": \"topic\",\n      \"description\": \"Explore algorithms for electing a single coordinator in a distributed system, a common prerequisite for consensus.\",\n      \"parentId\": \"3\"\n    },\n    {\n      \"id\": \"3.4\",\n      \"title\": \"State Machine Replication\",\n      \"type\": \"topic\",\n      \"description\": \"Understand how consensus protocols enable all replicas to process commands in the same order, maintaining consistent state.\",\n      \"parentId\": \"3\"\n    },\n    {\n      \"id\": \"3.5\",\n      \"title\": \"Exercise: Analyze Leader Election Algorithm\",\n      \"type\": \"exercise\",\n      \"description\": \"Describe the Bully Algorithm or Ring Algorithm for leader election, analyzing its message complexity and failure resilience.\",\n      \"parentId\": \"3\"\n    },\n    {\n      \"id\": \"4\",\n      \"title\": \"Classic Consensus Protocols\",\n      \"type\": \"section\",\n      \"description\": \"Dive into the mechanics of widely used and influential consensus algorithms like Paxos and Raft.\",\n      \"isCompleted\": false\n    },\n    {\n      \"id\": \"4.1\",\n      \"title\": \"Paxos Algorithm Fundamentals\",\n      \"type\": \"topic\",\n      \"description\": \"Study the roles of Proposers, Acceptors, and Learners. Understand the two-phase commit process for reaching agreement.\",\n      \"parentId\": \"4\"\n    },\n    {\n      \"id\": \"4.2\",\n      \"title\": \"Multi-Paxos for State Machine Replication\",\n      \"type\": \"topic\",\n      \"description\": \"Learn how Paxos is extended to agree on a sequence of values, enabling consistent state machine replication.\",\n      \"parentId\": \"4\"\n    },\n    {\n      \"id\": \"4.3\",\n      \"title\": \"Raft Consensus Algorithm\",\n      \"type\": \"topic\",\n      \"description\": \"Explore Raft's simpler, more understandable approach to consensus, including leader election, log replication, and safety properties.\",\n      \"parentId\": \"4\"\n    },\n    {\n      \"id\": \"4.4\",\n      \"title\": \"Comparing Paxos and Raft\",\n      \"type\": \"topic\",\n      \"description\": \"Contrast the design philosophies, complexity, and common use cases of Paxos and Raft.\",\n      \"parentId\": \"4\"\n    },\n    {\n      \"id\": \"4.5\",\n      \"title\": \"Exercise: Trace Raft Log Replication\",\n      \"type\": \"exercise\",\n      \"description\": \"Simulate a Raft cluster with 5 nodes, tracing log entries and leader changes through several client requests and a node crash.\",\n      \"parentId\": \"4\"\n    },\n    {\n      \"id\": \"5\",\n      \"title\": \"Byzantine Fault Tolerance\",\n      \"type\": \"section\",\n      \"description\": \"Address the challenges of achieving consensus when nodes can behave maliciously or arbitrarily.\",\n      \"isCompleted\": false\n    },\n    {\n      \"id\": \"5.1\",\n      \"title\": \"The Byzantine Generals Problem\",\n      \"type\": \"topic\",\n      \"description\": \"Understand the classic problem of achieving agreement among generals where some may be traitors.\",\n      \"parentId\": \"5\"\n    },\n    {\n      \"id\": \"5.2\",\n      \"title\": \"Practical Byzantine Fault Tolerance (PBFT)\",\n      \"type\": \"topic\",\n      \"description\": \"Study PBFT's three-phase protocol for reaching consensus in the presence of Byzantine faults, including its view change mechanism.\",\n      \"parentId\": \"5\"\n    },\n    {\n      \"id\": \"5.3\",\n      \"title\": \"Challenges and Assumptions of BFT\",\n      \"type\": \"topic\",\n      \"description\": \"Discuss the high message complexity and synchronization assumptions required for BFT protocols.\",\n      \"parentId\": \"5\"\n    },\n    {\n      \"id\": \"5.4\",\n      \"title\": \"BFT in Blockchain Contexts\",\n      \"type\": \"topic\",\n      \"description\": \"Explore how BFT concepts are adapted and applied in permissioned blockchain networks.\",\n      \"parentId\": \"5\"\n    },\n    {\n      \"id\": \"5.5\",\n      \"title\": \"Exercise: PBFT Message Flow\",\n      \"type\": \"exercise\",\n      \"description\": \"Draw the message flow for a single client request processed by a 4-node PBFT system with one faulty node.\",\n      \"parentId\": \"5\"\n    },\n    {\n      \"id\": \"6\",\n      \"title\": \"Distributed Transactions and State\",\n      \"type\": \"section\",\n      \"description\": \"Learn how to maintain consistency across multiple distributed data stores and manage atomic operations.\",\n      \"isCompleted\": false\n    },\n    {\n      \"id\": \"6.1\",\n      \"title\": \"ACID Properties in Distributed Systems\",\n      \"type\": \"topic\",\n      \"description\": \"Review Atomicity, Consistency, Isolation, and Durability in a distributed context. Discuss their implementation challenges.\",\n      \"parentId\": \"6\"\n    },\n    {\n      \"id\": \"6.2\",\n      \"title\": \"Two-Phase Commit (2PC)\",\n      \"type\": \"topic\",\n      \"description\": \"Understand 2PC for atomic transactions across multiple participants, including its coordinator role and blocking issues.\",\n      \"parentId\": \"6\"\n    },\n    {\n      \"id\": \"6.3\",\n      \"title\": \"Three-Phase Commit (3PC)\",\n      \"type\": \"topic\",\n      \"description\": \"Explore 3PC as an extension to 2PC designed to be non-blocking, and its trade-offs.\",\n      \"parentId\": \"6\"\n    },\n    {\n      \"id\": \"6.4\",\n      \"title\": \"Distributed Snapshots\",\n      \"type\": \"topic\",\n      \"description\": \"Study algorithms for capturing a consistent global state of a distributed system.\",\n      \"parentId\": \"6\"\n    },\n    {\n      \"id\": \"6.5\",\n      \"title\": \"Exercise: 2PC Failure Analysis\",\n      \"type\": \"exercise\",\n      \"description\": \"Describe how a failure of the coordinator during the commit phase affects participants in a 2PC protocol and potential recovery strategies.\",\n      \"parentId\": \"6\"\n    },\n    {\n      \"id\": \"7\",\n      \"title\": \"Advanced Consensus Topics\",\n      \"type\": \"section\",\n      \"description\": \"Delve into more specialized and optimized consensus algorithms and related concepts.\",\n      \"isCompleted\": false\n    },\n    {\n      \"id\": \"7.1\",\n      \"title\": \"Viewstamped Replication (VSR)\",\n      \"type\": \"topic\",\n      \"description\": \"Examine VSR as an alternative to Paxos, focusing on its view changes and strong consistency guarantees.\",\n      \"parentId\": \"7\"\n    },\n    {\n      \"id\": \"7.2\",\n      \"title\": \"ZooKeeper Atomic Broadcast (ZAB)\",\n      \"type\": \"topic\",\n      \"description\": \"Understand the ZAB protocol, which provides total order broadcast and is foundational to Apache ZooKeeper.\",\n      \"parentId\": \"7\"\n    },\n    {\n      \"id\": \"7.3\",\n      \"title\": \"Consensus in Permissioned Blockchains\",\n      \"type\": \"topic\",\n      \"description\": \"Investigate consensus mechanisms tailored for consortium and private blockchains, such as Tendermint.\",\n      \"parentId\": \"7\"\n    },\n    {\n      \"id\": \"7.4\",\n      \"title\": \"Optimistic vs. Pessimistic Consensus\",\n      \"type\": \"topic\",\n      \"description\": \"Compare approaches where agreement is assumed unless challenged versus requiring explicit agreement for every operation.\",\n      \"parentId\": \"7\"\n    },\n    {\n      \"id\": \"7.5\",\n      \"title\": \"Exercise: ZAB Leader Election\",\n      \"type\": \"exercise\",\n      \"description\": \"Explain how leader election works in ZAB and how it contributes to maintaining a consistent log.\",\n      \"parentId\": \"7\"\n    },\n    {\n      \"id\": \"8\",\n      \"title\": \"Real-World Implementations and Case Studies\",\n      \"type\": \"section\",\n      \"description\": \"Explore practical applications of consensus and fault tolerance in popular distributed systems.\",\n      \"isCompleted\": false\n    },\n    {\n      \"id\": \"8.1\",\n      \"title\": \"Etcd and Consul\",\n      \"type\": \"topic\",\n      \"description\": \"Analyze how these distributed key-value stores use Raft for strong consistency and service discovery.\",\n      \"parentId\": \"8\"\n    },\n    {\n      \"id\": \"8.2\",\n      \"title\": \"Apache ZooKeeper\",\n      \"type\": \"topic\",\n      \"description\": \"Examine ZooKeeper's architecture, its use of ZAB, and how it provides distributed coordination services.\",\n      \"parentId\": \"8\"\n    },\n    {\n      \"id\": \"8.3\",\n      \"title\": \"Google Spanner\",\n      \"type\": \"topic\",\n      \"description\": \"Study Google Spanner's unique approach to global consistency using TrueTime and Paxos-like protocols.\",\n      \"parentId\": \"8\"\n    },\n    {\n      \"id\": \"8.4\",\n      \"title\": \"Practical Considerations\",\n      \"type\": \"topic\",\n      \"description\": \"Discuss performance, debugging, monitoring, and operational challenges of running consensus protocols in production.\",\n      \"parentId\": \"8\"\n    },\n    {\n      \"id\": \"8.5\",\n      \"title\": \"Exercise: System Design with Consensus\",\n      \"type\": \"exercise\",\n      \"description\": \"Design a highly available distributed configuration service, specifying which consensus protocol you would use and why.\",\n      \"parentId\": \"8\"\n    }\n  ]\n}",
                "state": "done"
            }
        ]
    }
]