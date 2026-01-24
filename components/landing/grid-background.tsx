export function GridBackground() {
    return (
        <div className="absolute inset-0 z-0 h-full w-full bg-background">
            {/* Radial Gradient for spotlight effect - Soft and subtle */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_800px_at_50%_200px,var(--primary),transparent)] opacity-10 dark:opacity-10 blur-3xl" />

            {/* Subtle Dot Pattern - Much cleaner than grid lines */}
            <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-[0.03] dark:bg-[radial-gradient(#ffffff_1px,transparent_1px)] dark:opacity-[0.1]" />
        </div>
    );
}
