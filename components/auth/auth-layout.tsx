import { GridBackground } from "@/components/landing/grid-background";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden selection:bg-primary/20">
            <GridBackground />

            {/* Back to Home Button */}
            <div className="absolute top-6 left-6 z-20">
                <Link
                    href="/"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors px-4 py-2 rounded-full border border-transparent hover:border-white/10 hover:bg-black/20"
                >
                    <ArrowLeft className="h-4 w-4" />
                    <span>Back</span>
                </Link>
            </div>

            <div className="relative z-10 w-full max-w-md px-4">
                {children}
            </div>
        </div>
    );
}
