import { useRef, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";

interface Props {
  currentPath: string;
}

const navItems = [
  { label: "Home", href: "/" },
  { label: "Writing", href: "/writing" },
  { label: "Work", href: "/work" },
  { label: "Appearances", href: "/appearances" },
  { label: "Now", href: "/now" },
  { label: "About", href: "/about" },
  { label: "Links", href: "/links" },
];

export default function MobileMenu({ currentPath }: Props) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <button
        ref={triggerRef}
        onClick={() => setOpen(true)}
        className="touch-hitbox md:hidden text-sm font-medium text-foreground-muted hover:text-foreground transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        aria-label="Open navigation menu"
      >
        Menu
      </button>
      <SheetContent
        side="left"
        className="w-full sm:max-w-sm p-8 !ease-[cubic-bezier(0.23,1,0.32,1)] data-[state=open]:!duration-300 data-[state=closed]:!duration-[250ms]"
        showCloseButton={false}
        onCloseAutoFocus={(e) => {
          e.preventDefault();
          triggerRef.current?.focus({ preventScroll: true });
        }}
      >
        <SheetTitle className="sr-only">Navigation menu</SheetTitle>
        <div className="flex justify-end mb-8">
          <SheetClose className="touch-hitbox text-sm font-medium text-foreground-muted hover:text-foreground transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            Close
          </SheetClose>
        </div>
        <nav>
          <ul className="space-y-4">
            {navItems.map((item) => {
              const isActive =
                currentPath === item.href ||
                currentPath.startsWith(item.href + "/");
              return (
                <li key={item.href} className="mobile-nav-item">
                  <a
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={`no-underline block font-serif italic leading-none transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                      isActive
                        ? "text-rf-accent"
                        : "text-foreground-muted hover:text-foreground"
                    }`}
                    style={{ fontSize: "clamp(2rem, 8vw, 3rem)" }}
                  >
                    {item.label}
                    {isActive && <span className="text-rf-accent">.</span>}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
