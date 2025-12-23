import { type ClassValue } from "clsx";
import { cn } from "../../lib/utils";

export type ButtonVariant =
  | "default"
  | "secondary"
  | "outline"
  | "ghost"
  | "link"
  | "destructive";

export type ButtonSize =
  | "default"
  | "sm"
  | "lg"
  | "icon"
  | "icon-sm"
  | "icon-lg";

export interface ButtonVariantsProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: ClassValue;
}

const baseStyles =
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";

const variantStyles: Record<ButtonVariant, string> = {
  default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
  destructive:
    "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
  outline:
    "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
  secondary:
    "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  link: "border-b-2 border-foreground/25 text-foreground transition-all hover:border-foreground/90 rounded-none p-0! h-auto!",
};

const sizeStyles: Record<ButtonSize, string> = {
  default: "h-10 px-4 py-2",
  sm: "h-9 rounded-md px-3",
  lg: "h-11 rounded-md px-8",
  icon: "size-10",
  "icon-sm": "size-8",
  "icon-lg": "size-12",
};

export function buttonVariants({
  variant = "default",
  size = "default",
  className,
}: ButtonVariantsProps = {}) {
  return cn(baseStyles, variantStyles[variant], sizeStyles[size], className);
}
