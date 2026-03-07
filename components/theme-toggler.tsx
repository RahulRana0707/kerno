"use client";

import { useTheme } from "next-themes";
import { Moon, Sun, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark" | "system";

export function ThemeToggler({
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const currentTheme = (theme ?? "system") as Theme;
  const isDark = resolvedTheme === "dark";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn("rounded-full", className)}
          aria-label="Toggle theme"
          {...props}
        >
          {currentTheme === "system" ? (
            <Monitor data-icon="inline-start" />
          ) : isDark ? (
            <Moon data-icon="inline-start" />
          ) : (
            <Sun data-icon="inline-start" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-32">
        <DropdownMenuGroup>
          <DropdownMenuRadioGroup
            value={currentTheme}
            onValueChange={(value) => setTheme(value)}
          >
            <DropdownMenuRadioItem value="light">
              <Sun />
              Light
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="dark">
              <Moon />
              Dark
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="system">
              <Monitor />
              System
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
