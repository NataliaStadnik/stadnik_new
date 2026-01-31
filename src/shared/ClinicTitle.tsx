import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ClinicTitle = () => {
  const { t } = useTranslation();

  return (
    <h2 className="text-2xl md:text-4xl font-serif text-zen-text dark:text-zen-dark-text mb-8">
      <span>{t("contacts.title")}</span>
      <Link
        className="pl-2 hover:text-[#63aac1] transition-colors"
        to="https://vinir.by"
        target="_blank"
      >
        «VINIR»
      </Link>
    </h2>
  );
};

export default ClinicTitle;
