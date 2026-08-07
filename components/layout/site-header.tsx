"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { Container } from "@/components/ui/container";
import { mainNavigation } from "@/data/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((currentState) => !currentState);
  };

  const isNavigationItemActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || !isMenuOpen) {
        return;
      }

      closeMenu();
      menuButtonRef.current?.focus();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const desktopMediaQuery = window.matchMedia("(min-width: 1280px)");

    const handleDesktopChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        closeMenu();
      }
    };

    desktopMediaQuery.addEventListener("change", handleDesktopChange);

    return () => {
      desktopMediaQuery.removeEventListener("change", handleDesktopChange);
    };
  }, []);

  return (
    <header
      className={`site-header ${
        isScrolled ? "site-header-scrolled" : ""
      } ${isMenuOpen ? "site-header-menu-open" : ""}`}
    >
      <Container className="flex min-h-20 items-center justify-between gap-4">
        <Link
          href="/"
          className="brand"
          aria-label="OW Creative Studio home"
          onClick={closeMenu}
        >
          <span className="brand-symbol" aria-hidden="true">
            OW
          </span>

          <span className="brand-name">
            <strong>OW</strong>
            <span>Creative Studio</span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-7 xl:flex"
          aria-label="Main navigation"
        >
          {mainNavigation.map((item) => {
            const isActive = isNavigationItemActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`navigation-link ${
                  isActive ? "navigation-link-active" : ""
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <Link
            href="/quote"
            className="button button-outline hidden xl:inline-flex"
          >
            Get a Quote
            <ArrowUpRight size={17} strokeWidth={1.8} />
          </Link>

          <button
            ref={menuButtonRef}
            type="button"
            className="mobile-menu-button xl:hidden"
            aria-label={
              isMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={toggleMenu}
          >
            <span aria-hidden="true">
              {isMenuOpen ? (
                <X size={23} strokeWidth={1.8} />
              ) : (
                <Menu size={23} strokeWidth={1.8} />
              )}
            </span>
          </button>
        </div>
      </Container>

      <div
        id="mobile-navigation"
        className={`mobile-navigation ${
          isMenuOpen ? "mobile-navigation-open" : ""
        }`}
        aria-hidden={!isMenuOpen}
      >
        <Container className="flex h-full flex-col py-8">
          <nav className="flex flex-col" aria-label="Mobile navigation">
            {mainNavigation.map((item, index) => {
              const isActive = isNavigationItemActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`mobile-navigation-link ${
                    isActive ? "mobile-navigation-link-active" : ""
                  }`}
                  aria-current={isActive ? "page" : undefined}
                  tabIndex={isMenuOpen ? 0 : -1}
                  onClick={closeMenu}
                >
                  <span aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto border-t border-white/10 pt-7">
            <Link
              href="/quote"
              className="button button-primary w-full"
              tabIndex={isMenuOpen ? 0 : -1}
              onClick={closeMenu}
            >
              Get a Quote
              <ArrowUpRight size={18} strokeWidth={1.8} />
            </Link>

            <p className="mt-5 text-center text-xs leading-6 text-white/45">
              Creative spaces, thoughtful design and timeless artistic
              experiences.
            </p>
          </div>
        </Container>
      </div>
    </header>
  );
}