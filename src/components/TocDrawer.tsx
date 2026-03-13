import { useRef, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface Props {
  headings: Heading[];
}

export default function TocDrawer({ headings }: Props) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  if (headings.length === 0) return null;

  const handleHeadingClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setOpen(false);
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: prefersReducedMotion ? "instant" : "smooth",
      });
    }, 250);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        ref={triggerRef}
        className="fixed bottom-[calc(1.5rem+env(safe-area-inset-bottom))] right-6 z-30 lg:hidden bg-foreground text-background text-sm font-medium px-4 py-2 rounded-full shadow-lg hover:opacity-90 transition-opacity touch-manipulation"
      >
        Table of Contents
      </SheetTrigger>
      <SheetContent
        side="bottom"
        className="max-h-[60vh] overflow-y-auto overscroll-contain rounded-t-xl !ease-[cubic-bezier(0.23,1,0.32,1)] data-[state=open]:!duration-300 data-[state=closed]:!duration-[250ms]"
        onOpenAutoFocus={(e) => e.preventDefault()}
        onCloseAutoFocus={(e) => {
          e.preventDefault();
          triggerRef.current?.focus({ preventScroll: true });
        }}
      >
        <SheetHeader>
          <SheetTitle className="text-sm font-semibold">On this page</SheetTitle>
        </SheetHeader>
        <nav className="space-y-2 text-sm px-4 pb-4">
          {headings.map((h) => (
            <a
              key={h.id}
              href={`#${h.id}`}
              onClick={(e) => handleHeadingClick(e, h.id)}
              className={`block rounded-sm text-foreground-muted hover:text-foreground transition-colors no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${h.level === 3 ? "pl-3" : h.level === 4 ? "pl-6" : ""
                }`}
            >
              {h.text}
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
