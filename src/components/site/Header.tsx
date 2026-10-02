import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-700",
        scrolled || open ? "bg-background/95 backdrop-blur border-b" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 md:px-10">
        <a href="#inicio" className="font-serif text-xl tracking-[0.28em]">STUDIO DIVINA</a>
        <nav className="hidden items-center gap-9 lg:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="label-micro transition-opacity duration-500 hover:opacity-50">
              {n.label}
            </a>
          ))}
          <a href={site.whatsapp} target="_blank" rel="noreferrer"
            className="label-micro bg-primary px-6 py-3 text-primary-foreground transition-colors duration-500 hover:bg-nude">
            Agendar
          </a>
        </nav>
        <button aria-label="Abrir menu" className="flex flex-col gap-1.5 lg:hidden" onClick={() => setOpen(!open)}>
          <span className={cn("h-px w-7 bg-foreground transition-transform duration-500", open && "translate-y-[3.5px] rotate-45")} />
          <span className={cn("h-px w-7 bg-foreground transition-transform duration-500", open && "-translate-y-[3.5px] -rotate-45")} />
        </button>
      </div>
      <div className={cn("overflow-hidden transition-all duration-700 lg:hidden", open ? "max-h-[420px]" : "max-h-0")}>
        <nav className="flex flex-col gap-6 px-6 pb-10 pt-4">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="font-serif text-3xl">{n.label}</a>
          ))}
          <a href={site.whatsapp} target="_blank" rel="noreferrer"
            className="label-micro mt-2 bg-primary py-4 text-center text-primary-foreground">Agendar</a>
        </nav>
      </div>
    </header>
  );
}
