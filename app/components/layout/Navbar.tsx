"use client";
import { cn } from "@/app/lib/utils";
import { NavItem } from "@/app/schemas/common.schema";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/Button";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  name: string;
  navigation: NavItem[];
  resumeHref: string;
}

const Navbar = ({ name, navigation, resumeHref }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navigation
      .map((item) => item.href.replace(/^#/, ""))
      .filter(Boolean);

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [navigation]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);
  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out-expo",
        scrolled || menuOpen
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-content items-center justify-between px-5 sm:px-6 lg:px-8"
      >
        <a
          href="#hero"
          className="font-display text-sm font-semibold tracking-tight text-foreground"
          onClick={() => setMenuOpen(false)}
        >
          {name}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => {
            const id = item.href.replace(/^#/, "");
            const isActive = id === activeId;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "rounded-full px-3 py-2 text-sm transition-colors duration-200",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <span className="relative">
                    {item.label}
                    <span
                      className={cn(
                        "absolute -bottom-0.5 left-0 h-px w-full origin-left bg-accent transition-transform duration-300 ease-out-expo",
                        isActive ? "scale-x-100" : "scale-x-0",
                      )}
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
        <div className="hidden md:block">
          <Button href={resumeHref} external variant="secondary" size="sm">
            Resume
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        inert={!menuOpen}
        className={cn(
          "grid overflow-hidden transition-[grid-template-rows,opacity] duration-500 ease-out-expo motion-reduce:transition-none md:hidden",
          menuOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="min-h-0 overflow-hidden border-t border-border bg-background">
          <ul className="flex flex-col gap-1 px-5 py-6">
            {navigation.map((item) => {
              const id = item.href.replace(/^#/, "");
              const isActive = id === activeId;

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-3 text-lg transition-colors",
                      isActive
                        ? "bg-surface text-foreground"
                        : "text-muted-foreground hover:bg-surface hover:text-foreground",
                    )}
                  >
                    <span
                      className={cn(
                        "h-4 w-0.5 rounded-full bg-accent transition-opacity",
                        isActive ? "opacity-100" : "opacity-0",
                      )}
                      aria-hidden="true"
                    ></span>
                    {item.label}
                  </a>
                </li>
              );
            })}
            <li className="mt-3 px-3">
              <Button
                href={resumeHref}
                external
                variant="secondary"
                size="md"
                className="w-full"
              >
                View Resume
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
