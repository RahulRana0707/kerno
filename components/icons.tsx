import {
    ArrowLeft,
    ArrowRight,
    ArrowUp,
    BookOpen,
    Brain,
    Check,
    ChevronDown,
    FileText,
    Github,
    Hammer,
    LayoutGrid,
    Map,
    Mic,
    Network,
    Pencil,
    Plus,
    RotateCw,
    Search,
    ShieldCheck,
    Sparkles,
    Target,
    ChevronDownIcon,
    GripVerticalIcon,
    PanelLeftIcon,
    XIcon,
    type LucideIcon,
    LoaderCircle,
} from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
    spinner: LoaderCircle,
    arrowLeft: ArrowLeft,
    arrowRight: ArrowRight,
    arrowUp: ArrowUp,
    bookOpen: BookOpen,
    brain: Brain,
    check: Check,
    chevronDown: ChevronDown,
    chevronDownIcon: ChevronDownIcon,
    fileText: FileText,
    github: Github,
    gripVertical: GripVerticalIcon,
    hammer: Hammer,
    layoutGrid: LayoutGrid,
    map: Map,
    mic: Mic,
    network: Network,
    panelLeft: PanelLeftIcon,
    pencil: Pencil,
    plus: Plus,
    rotateCw: RotateCw,
    search: Search,
    shieldCheck: ShieldCheck,
    sparkles: Sparkles,
    target: Target,
    x: XIcon,
    google: (props: React.SVGProps<SVGSVGElement>) => (
        <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
            {...props}
        >
            <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
            ></path>
        </svg>
    ),
    logo: ({ variant = "brand", ...props }: React.SVGProps<SVGSVGElement> & { variant?: "brand" | "black" | "white" }) => {
        const colors = {
            brand: {
                primary: "oklch(0.606 0.25 292.717)",
                secondary: "oklch(0.541 0.281 293.009)",
                glow: "oklch(0.702 0.183 293.745)",
                highlight: "white"
            },
            black: {
                primary: "#111827",
                secondary: "#374151",
                glow: "transparent",
                highlight: "white"
            },
            white: {
                primary: "#FFFFFF",
                secondary: "#F3F4F6",
                glow: "transparent",
                highlight: "#111827"
            }
        }[variant];

        return (
            <svg
                viewBox="0 0 100 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <defs>
                    <linearGradient id={`logo-grad-${variant}`} x1="50%" y1="0%" x2="50%" y2="100%">
                        <stop offset="0%" stopColor={colors.primary} />
                        <stop offset="100%" stopColor={colors.secondary} />
                    </linearGradient>
                    <filter id={`logo-shadow-${variant}`} x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor={colors.glow} floodOpacity="0.4" />
                    </filter>
                </defs>

                {/* The "Bell Curve" / Kernel Shape */}
                <path
                    d="M10 70C25 70 35 15 50 15C65 15 75 70 90 70"
                    stroke={`url(#logo-grad-${variant})`}
                    strokeWidth="12"
                    strokeLinecap="round"
                    filter={variant === "brand" ? `url(#logo-shadow-${variant})` : undefined}
                />

                {/* Internal Highlight Line for 3D feel */}
                <path
                    d="M14 68C26 68 34 21 50 21C66 21 74 68 86 68"
                    stroke={colors.highlight}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeOpacity="0.3"
                />

                {/* The "Kernel" Point at the peak */}
                <circle
                    cx="50"
                    cy="15"
                    r="4"
                    fill={colors.highlight}
                    className={variant === "brand" ? "animate-pulse" : ""}
                />
            </svg>
        );
    },
};