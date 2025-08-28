"use client";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import styles from "./header.module.css";
import { Logo } from "../Logo";
import { Menu, X } from "lucide-react";
import { NavBar } from "../Navbar";
import { FormLogin } from "@/components/Forms";
import { ToggleButtonTheme } from "@/components/ToggleButtonTheme";

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!open) return;
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.logoWrap}>
          <Logo />
        </div>

        <div className={styles.containerHeader}>
          <nav className={styles.desktopNav}>
            <NavBar onLinkClick={() => setOpen(false)} />
          </nav>
          <div className={styles.desktopForm}>
            <ToggleButtonTheme />
            <FormLogin />
          </div>

          {/* Botão mobile (aparece só em telas pequenas) */}
          <button className={styles.mobileToggle} onClick={() => setOpen((s) => !s)} aria-expanded={open} aria-label={open ? "Fechar menu" : "Abrir menu"}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Backdrop (só aparece quando o menu mobile está aberto) */}
      {open && (<div className={styles.backdrop} onClick={() => setOpen(false)} />)}

      {/* Painel mobile */}
      <aside ref={panelRef} className={clsx(styles.mobilePanel, open && styles.open)} role="dialog" aria-hidden={!open}>
        <div className={styles.mobilePanelInner}>
          <NavBar isMobile onLinkClick={() => setOpen(false)} />
          <div className={styles.mobileFormWrapper}>
            <ToggleButtonTheme />
            <FormLogin />
          </div>
        </div>
      </aside>
    </header>
  );
};
