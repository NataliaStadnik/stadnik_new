import { motion } from "framer-motion";
import { ArrowLeft, Clock } from "lucide-react";
import type { FC, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface ArticleLayoutProps {
  children: ReactNode;
  section: string;
  time: string;
  title: string;
  text: string;
}

const ArticleLayout: FC<ArticleLayoutProps> = ({
  children,
  section,
  time,
  title,
  text,
}) => {
  const { t } = useTranslation();

  return (
    <div className="pt-24 min-h-screen bg-zen-white dark:bg-zen-dark-bg transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 py-6">
        <Link
          to="/articles"
          className="flex items-center text-zen-text/60 dark:text-zen-dark-text/60 hover:text-zen-text dark:hover:text-zen-dark-text transition-colors text-sm"
        >
          <ArrowLeft size={16} className="mr-2" />
          {t("articles.back_to_articles")}
        </Link>
      </div>

      <div className="bg-zen-sky/30 dark:bg-zen-dark-surface py-16 mb-12 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <span className="px-3 py-1 bg-zen-sage/20 text-zen-sage text-xs uppercase tracking-wider rounded-full">
                {section}
              </span>
              <span className="flex items-center text-zen-text/60 dark:text-zen-dark-text/60 text-sm">
                <Clock size={14} className="mr-1" />
                {`${time} ${t("articles.min_read")}`}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-zen-text dark:text-zen-dark-text mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-l text-zen-text/70 dark:text-zen-dark-text/70 leading-relaxed">
              {text}
            </p>
          </motion.div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 pb-24">{children}</article>
    </div>
  );
};

export default ArticleLayout;
