import { Link } from "react-router-dom";
import { PATHS } from "../services/routes/path";
import NotFound from "../assets/svg/NotFound";
import { useTranslation } from "react-i18next";

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-14 bg-slate-50">
      <div className="w-full max-w-md px-4">
        <NotFound />
      </div>
      <Link
        to={PATHS.HOME}
        className="px-10 py-2 bg-zen-text dark:bg-zen-dark-text text-zen-white dark:text-zen-dark-bg rounded-full font-medium tracking-wide shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center mx-auto mb-6"
      >
        {t("common.back_home")}
      </Link>
    </div>
  );
};

export default NotFoundPage;
