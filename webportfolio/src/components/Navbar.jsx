import React, { useState } from "react";

const Navbar = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 h-[70px] bg-[var(--color-nav-bg)] backdrop-blur-md z-[1000] shadow-[0_1px_3px_rgba(255,255,255,0.1)] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between h-full">
        {/* === LEFT: LOGO (≈30%) === */}
        <div className="flex items-center justify-center w-[30%]">
          <button
            onClick={() => scrollToSection("home")}
            className="text-[1.25rem] font-semibold text-[var(--color-text-main)]"
          >
            risto.rt
          </button>
        </div>


        {/* === RIGHT: NAV LINKS + THEME TOGGLE (≈70%) === */}
        <div className="flex items-center justify-end w-[70%] gap-6">
          {/* Desktop Menu */}
          <ul
            className={`${isMenuOpen
                ? "flex flex-col fixed top-[70px] left-0 w-full bg-[var(--color-bg-overlay)] backdrop-blur-md py-8 gap-8 min-h-[200px] opacity-100"
                : "hidden lg:flex"
              } lg:flex-row lg:static lg:bg-transparent lg:gap-10 items-center list-none transition-all duration-300`}
          >
            {["home", "about", "projects", "contact"].map((item) => (
              <li key={item} className="relative">
                <button
                  onClick={() => scrollToSection(item)}
                  className="text-[var(--color-link-default)] hover:text-[var(--color-text-main)] text-sm uppercase tracking-[0.5px] transition-all duration-200 relative after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[1px] after:bg-[var(--color-text-main)] hover:after:w-full after:transition-[width] after:duration-300"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="hidden lg:flex w-9 h-9 items-center justify-center text-[var(--color-link-default)] hover:text-[var(--color-text-main)] transition-all duration-200"
          >
            {theme === "dark" ? (
              <i className="fas fa-moon text-sm"></i>
            ) : (
              <i className="fas fa-sun text-sm"></i>
            )}
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={toggleMenu}
            className="lg:hidden flex flex-col gap-[4px] z-[1001]"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-[20px] h-[1px] bg-[var(--color-text-main)] transition-transform duration-300 ${isMenuOpen ? "rotate-[-45deg] translate-y-[5px]" : ""
                }`}
            ></span>
            <span
              className={`block w-[20px] h-[1px] bg-[var(--color-text-main)] transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
            ></span>
            <span
              className={`block w-[20px] h-[1px] bg-[var(--color-text-main)] transition-transform duration-300 ${isMenuOpen ? "rotate-[45deg] -translate-y-[5px]" : ""
                }`}
            ></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
