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