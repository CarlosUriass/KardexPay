import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export function Header() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  if (!mounted) {
    return null;
  }

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Kardex Pay</span>
            <img className="h-8 w-auto" src="" alt="KardexPay logo" />
          </Link>
        </div>

        <div className="flex gap-x-12">
          <Link
            to="/realizar-tramite"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            Realiza un trámite
          </Link>
          <Link
            to="/consulta"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            Consultar trámite
          </Link>
          <Link
            to="/contacto"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            Contacto
          </Link>
        </div>

        <div className="flex flex-1 justify-end">
          <button
            onClick={toggleTheme}
            className="rounded-full p-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
