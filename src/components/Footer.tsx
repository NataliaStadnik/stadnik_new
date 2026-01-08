import { Link, useLocation } from "react-router-dom";
import Logo from "../shared/Logo";
import { useTranslation } from "react-i18next";
import { PATHS } from "../services/routes/path";
import InstagramIcon from "../assets/svg/InstagramIcon";
import TelegramIcon from "../assets/svg/TelegramIcon";

const Footer = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const mainLinks = [
    { name: t("header.main"), href: PATHS.HOME },
    { name: t("header.about"), href: PATHS.ABOUT_PAGE },
    { name: t("header.articles"), href: PATHS.ARTICLES },
    { name: t("header.procedures"), href: PATHS.PROCEDURES },
    { name: t("header.feedback"), href: PATHS.FEEDBACK },
    { name: t("header.contacts"), href: PATHS.CONTACT },
  ];

  const services = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/nicholas_stadnik/?igsh=MWwyeTgydndudXpvZQ%3D%3D&utm_source=qr",
      icon: InstagramIcon,
    },
    {
      name: "Telegram",
      href: "https://t.me/Dr_Nicholas_Stadnik",
      icon: TelegramIcon,
    },
  ];

  return (
    <footer className="bg-zen-white dark:bg-zen-dark-surface py-12 text-center text-zen-text/50 dark:text-zen-dark-text/50 text-sm border-t border-zen-text/5 dark:border-zen-dark-border mt-auto transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-left w-full md:w-auto">
          <Logo />
          <p>{t("header.all_rights")}</p>
        </div>

        <div className="flex items-center space-x-6 w-full md:w-auto">
          {services.map(({ name, href, icon: Icon }) => (
            <Link
              key={name}
              to={href}
              target="_blank"
              aria-label={name}
              className="flex items-center space-x-2 text-zen-text/60 dark:text-zen-dark-text/60 hover:text-zen-text dark:hover:text-zen-dark-text transition-colors"
            >
              <Icon />
              <span className="hidden sm:inline">{name}</span>
            </Link>
          ))}
        </div>

        <div className="text-left w-full md:w-auto">
          <p className="mb-4 font-medium uppercase tracking-widest text-zen-text dark:text-zen-dark-text">
            {t("header.menu")}
          </p>

          <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
            {mainLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`block transition-colors hover:text-zen-text dark:hover:text-zen-dark-text ${
                    location.pathname === link.href
                      ? "text-zen-text dark:text-zen-dark-text font-medium"
                      : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
