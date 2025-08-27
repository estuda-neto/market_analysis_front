"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { FormLogin } from "@/components/Forms";
import { NavBar } from "../Navbar";
import { Logo } from "../Logo";
import { ToggleButtonTheme } from "@/components/ToggleButtonTheme";

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Fecha no ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Fecha ao clicar fora
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
    <div className="w-full px-4 sm:px-6 lg:px-10 py-3 shadow-md relative z-40 bg-white dark:bg-[radial-gradient(circle,#111_0%,#1a1a1a_80%,#222_100%)] transition-colors duration-300 lg:min-h-[250px]" >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="mr-auto flex items-center">
          <Logo />
        </div>

        {/* Navegação desktop */}
        <div className="hidden lg:flex items-center gap-6">
          <NavBar onLinkClick={() => setOpen(false)} />
          <ToggleButtonTheme />
          <FormLogin />
        </div>

        {/* Botão Mobile */}
        <button
          onClick={() => setOpen((s) => !s)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="lg:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Backdrop */}
      {open && (
        <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setOpen(false)}/>
      )}

      {/* Painel Mobile */}
      <aside
        ref={panelRef}
        className={clsx(
          "fixed top-0 right-0 w-4/5 max-w-xs h-screen shadow-2xl transition-transform duration-300 z-50 overflow-y-auto",
          "bg-white dark:bg-gray-900 dark:text-white",
          open ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-hidden={!open}
      >
        <div className="p-5 flex flex-col gap-6 min-h-screen">
          <NavBar isMobile onLinkClick={() => setOpen(false)} />
          <div className="max-w-40">
            <ToggleButtonTheme />
          </div>
          <div className="mt-10">
            <FormLogin />
          </div>
        </div>
      </aside>
    </div>
  );
};
