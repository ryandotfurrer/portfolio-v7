import { useState } from "react";

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

  if (headings.length === 0) return null;

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Bottom sheet */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${open ? "translate-y-0" : "translate-y-full"
          }`}
      >
        <div className="bg-background rounded-t-xl border border-border/50 px-6 pb-8 pt-6 max-h-[60vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-semibold text-foreground">On this page</p>
            <button
              onClick={() => setOpen(false)}
              className="text-foreground-muted hover:text-foreground transition-colors text-lg leading-none"
              aria-label="Close table of contents"
            >
              ✕
            </button>
          </div>
          <nav className="space-y-2 text-sm">
            {headings.map((h) => (
              <a
                key={h.id}
                href={`#${h.id}`}
                onClick={() => setOpen(false)}
                className={`block text-foreground-muted hover:text-foreground transition-colors no-underline ${h.level === 3 ? "pl-3" : h.level === 4 ? "pl-6" : ""
                  }`}
              >
                {h.text}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Trigger button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-30 lg:hidden bg-foreground text-background text-sm font-medium px-4 py-2 rounded-full shadow-lg hover:opacity-90 transition-opacity"
      >
        Table of Contents
      </button>
    </>
  );
}
