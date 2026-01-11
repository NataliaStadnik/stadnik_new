import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Globe, Sun } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { PATHS } from "../services/routes/path";
import { Language, LANGUAGES } from "../services/i18n/types";
import Logo from "../shared/Logo";
import { useTheme } from "../services/theme/useTheme";



const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  // const [servicesMenuOpen, setServicesMenuOpen] = useState(false);

  const location = useLocation();
  const { dark, toggle } = useTheme();
  const { t, i18n } = useTranslation();

  const languageFromLS = localStorage.getItem("language") || Language.EN;
  const [language, setLanguageState] = useState(languageFromLS.toUpperCase());

  useEffect(() => {
    i18n.changeLanguage(languageFromLS);
  }, [i18n, languageFromLS]);

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
    setLanguageState(lng.toUpperCase());
  };

  const mainLinks = [
    {
      name: t("header.about"),
      href: PATHS.ABOUT_PAGE,
    },
    {
      name: t("header.procedures"),
      href: PATHS.PROCEDURES,
    },
    {
      name: t("header.articles"),
      href: PATHS.ARTICLES,
    },
    {
      name: t("header.feedback"),
      href: PATHS.FEEDBACK,
    },
    {
      name: t("header.contacts"),
      href: PATHS.CONTACT,
    },
  ];

  // const servicesLinks = [
  //   {
  //     name: t("header.experiences"),
  //     href: PATHS.EXPERIENCES,
  //   },
  //   {
  //     name: t("header.procedures"),
  //     href: PATHS.PROCEDURES,
  //   },
  // ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || mobileMenuOpen
            ? "bg-zen-white/80 dark:bg-zen-dark-surface/90 backdrop-blur-md shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
        initial={{
          y: -100,
        }}
        animate={{
          y: 0,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Logo />

          <nav className="hidden lg:flex items-center space-x-6">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm uppercase tracking-widest transition-colors relative group ${
                  location.pathname === link.href
                    ? "text-zen-text dark:text-zen-dark-text font-medium"
                    : "text-zen-text/70 dark:text-zen-dark-text/70 hover:text-zen-text dark:hover:text-zen-dark-text"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-zen-soft transition-all duration-300 ${
                    location.pathname === link.href
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}

            {/* <div
              className="relative"
              onMouseEnter={() => setServicesMenuOpen(true)}
              onMouseLeave={() => setServicesMenuOpen(false)}
            >
              <button
                className={`flex items-center text-sm uppercase tracking-widest transition-colors relative group ${
                  servicesLinks.some((link) => location.pathname === link.href)
                    ? "text-zen-text dark:text-zen-dark-text font-medium"
                    : "text-zen-text/70 dark:text-zen-dark-text/70 hover:text-zen-text dark:hover:text-zen-dark-text"
                }`}
              >
                {t("header.services")}
                <ChevronDown size={16} className="ml-1" />
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-zen-soft transition-all duration-300 ${
                    servicesLinks.some(
                      (link) => location.pathname === link.href
                    )
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </button>

              <AnimatePresence>
                {servicesMenuOpen && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: 10,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="absolute top-full mt-2 left-0 w-48 bg-white dark:bg-zen-dark-surface rounded-xl shadow-lg border border-zen-sky dark:border-zen-dark-border overflow-hidden"
                  >
                    {servicesLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className={`block px-4 py-3 text-sm hover:bg-zen-sky/30 dark:hover:bg-zen-dark-bg transition-colors ${
                          location.pathname === link.href
                            ? "text-zen-text dark:text-zen-dark-text font-medium bg-zen-sky/20"
                            : "text-zen-text/70 dark:text-zen-dark-text/70"
                        }`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div> */}

            <button
              onClick={toggle}
              className="p-2 rounded-full hover:bg-zen-sky/50 dark:hover:bg-zen-dark-bg/50 text-zen-text dark:text-zen-dark-text transition-colors"
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={20}/>  : <Moon size={20} /> }
            </button>

            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center space-x-1 p-2 rounded-full hover:bg-zen-sky/50 dark:hover:bg-zen-dark-bg/50 text-zen-text dark:text-zen-dark-text transition-colors text-sm font-medium uppercase cursor-pointer"
              >
                <Globe size={18} className="mr-1" />
                {language}
              </button>

              <AnimatePresence>
                {langMenuOpen && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: 10,
                    }}
                    className="absolute right-0 mt-2 w-24 bg-white dark:bg-zen-dark-surface rounded-xl shadow-lg border border-zen-sky dark:border-zen-dark-border overflow-hidden"
                    onMouseLeave={() => setLangMenuOpen(false)}
                  >
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          handleLanguageChange(lang);
                          setLangMenuOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm uppercase hover:bg-zen-sky/30 dark:hover:bg-zen-dark-bg transition-colors cursor-pointer ${
                          language === lang
                            ? "text-zen-text dark:text-zen-dark-text font-bold bg-zen-sky/20"
                            : "text-zen-text/70 dark:text-zen-dark-text/70"
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          <div className="flex items-center space-x-4 lg:hidden">
            <button
              onClick={toggle}
              className="p-2 rounded-full hover:bg-zen-sky/50 dark:hover:bg-zen-dark-bg/50 text-zen-text dark:text-zen-dark-text transition-colors cursor-pointer"
            >
              {dark ? <Sun size={20}/>  : <Moon size={20} /> }
            </button>

            <button
              className="relative z-50 p-2 text-zen-text dark:text-zen-dark-text cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              clipPath: "circle(0% at 100% 0%)",
            }}
            animate={{
              opacity: 1,
              clipPath: "circle(150% at 100% 0%)",
            }}
            exit={{
              opacity: 0,
              clipPath: "circle(0% at 100% 0%)",
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="fixed inset-0 z-40 bg-zen-white dark:bg-zen-dark-bg flex flex-col items-center justify-center lg:hidden"
          >
            <nav className="flex flex-col items-center space-y-6">
              {mainLinks.map((link, index) => (
                // {[...mainLinks, ...servicesLinks].map((link, index) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-2xl font-serif text-zen-text dark:text-zen-dark-text hover:text-zen-soft transition-colors"
                >
                  <motion.span
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.1 + index * 0.1,
                    }}
                  >
                    {link.name}
                  </motion.span>
                </Link>
              ))}

              <div className="flex space-x-4 mt-8">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => handleLanguageChange(lang)}
                    className={`px-4 py-2 rounded-full text-sm uppercase border ${
                      language === lang.toUpperCase()
                        ? "border-zen-text dark:border-zen-dark-text text-zen-text dark:text-zen-dark-text"
                        : "border-transparent text-zen-text/50 dark:text-zen-dark-text/50"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
