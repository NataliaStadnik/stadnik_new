import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { PATHS } from "../services/routes/path";
import type { Article } from "../constants/types";

interface ArticleElementProps {
  article: Article;
  index: number;
}

const ArticleElement: FC<ArticleElementProps> = ({ article, index }) => {
  const { t } = useTranslation();

  return (
    <Link to={PATHS.ONE_ARTICLE(article.slug)}>
      <motion.article
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.5,
          delay: index * 0.1,
        }}
        whileHover={{
          y: -8,
        }}
        className="h-full flex flex-col group cursor-pointer bg-white dark:bg-zen-dark-surface rounded-2xl p-4 shadow-sm hover:shadow-md transition-all"
      >
        <div
          className={`aspect-[4/3] ${article.color} dark:bg-zen-dark-border/30 rounded-xl mb-6 overflow-hidden relative flex items-center justify-center`}
        >
          <img src={article.img} alt={article.title} className="h-full w-full object-cover"/>
        </div>

        <div className="space-y-3 px-2 pb-4 flex flex-col flex-1">
          <div className="flex items-center space-x-3 text-xs uppercase tracking-wider text-zen-text/50 dark:text-zen-dark-text/50">
            <span>{article.category}</span>
            <span className="w-1 h-1 rounded-full bg-zen-text/30 dark:bg-zen-dark-text/30" />
            <span>
              {article.readTime} {t("articles.min_read")}
            </span>
          </div>

          <h3 className="text-xl font-serif text-zen-text dark:text-zen-dark-text group-hover:text-zen-soft transition-colors duration-300">
            {article.title}
          </h3>

          <p className="text-zen-text/70 dark:text-zen-dark-text/70 text-sm leading-relaxed">
            {article.excerpt}
          </p>
          <div className="pt-2 mt-auto flex items-center text-zen-text/60 dark:text-zen-soft text-sm group-hover:text-zen-text transition-colors">
            {t("articles.read")}
            <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </motion.article>
    </Link>
  );
};

export default ArticleElement;
