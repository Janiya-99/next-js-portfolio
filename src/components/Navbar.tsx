import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const { pathname } = useLocation();
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  const closeMenu = () => {
    dialog.current?.close();
    trigger.current?.setAttribute("aria-expanded", "false");
  };

  useEffect(() => {
    const menu = dialog.current;
    if (!menu) return;
    const onClose = () => {
      document.body.style.overflow = "";
      trigger.current?.setAttribute("aria-expanded", "false");
      trigger.current?.focus();
    };
    menu.addEventListener("close", onClose);
    const viewport = window.matchMedia("(min-width: 768px)");
    const onResize = () => {
      if (viewport.matches) menu.close();
    };
    viewport.addEventListener("change", onResize);
    return () => {
      menu.removeEventListener("close", onClose);
      viewport.removeEventListener("change", onResize);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header
        className={`site-header ${pathname === "/" ? "home-header" : ""}`}
      >
        <div className="nav-inner container">
          <Link to="/" className="brand" aria-label="Janith Samarasinghe home">
            <span className="monogram">JS</span>
          </Link>
          <nav className="desktop-nav glass" aria-label="Main navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                aria-current={
                  (
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href)
                  )
                    ? "page"
                    : undefined
                }
              >
                {link.label}
                <span className="nav-dot" />
              </Link>
            ))}
          </nav>
          <Link className="nav-contact" to="/contact">
            Let’s talk <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
          <button
            className="menu-toggle circle-icon"
            ref={trigger}
            aria-label="Open navigation"
            aria-expanded="false"
            aria-controls="mobile-navigation"
            onClick={() => {
              dialog.current?.showModal();
              document.body.style.overflow = "hidden";
              trigger.current?.setAttribute("aria-expanded", "true");
            }}
          >
            <Menu size={21} />
          </button>
        </div>
      </header>
      <dialog
        className="mobile-menu"
        id="mobile-navigation"
        ref={dialog}
        aria-label="Navigation"
        data-lenis-prevent
        onClick={(event) => {
          if (event.target === event.currentTarget) closeMenu();
        }}
      >
        <div className="mobile-menu-inner">
          <div className="mobile-menu-top">
            <span className="eyebrow">EXPLORE</span>
            <button
              className="circle-icon"
              aria-label="Close navigation"
              onClick={closeMenu}
            >
              <X size={22} />
            </button>
          </div>
          <nav aria-label="Mobile navigation">
            {links.map((link, index) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={closeMenu}
                aria-current={
                  pathname.startsWith(link.href) ? "page" : undefined
                }
              >
                <span className="mono">0{index + 1}</span>
                {link.label}
                <ArrowUpRight />
              </Link>
            ))}
          </nav>
          <p className="eyebrow">SOFTWARE ENGINEER · KANDY, SRI LANKA</p>
        </div>
      </dialog>
    </>
  );
}
