import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export type Category =
  | "Имплантология"
  | "Хирургия"
  | "Гигиена"
  | "Ортопедия"
  | "Эстетика"
  | "Профилактика"
  | "Диагностика"
  | "Подготовка"
  | "Реабилитация"
  | "Беременные"
  | "Анестезия";

export interface Article {
  title: string;
  excerpt: string;
  category: Category;
  readTime: string;
  color: string;
  slug: string;
}

interface ArticleElementProps {
  article: Article;
  index: number;
}

const ArticleElement: FC<ArticleElementProps> = ({ article, index }) => {
  const { t } = useTranslation();

  return (
    <Link to={`/articles/${article.slug}`}>
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
        className="group cursor-pointer bg-white dark:bg-zen-dark-surface rounded-2xl p-4 shadow-sm hover:shadow-md transition-all"
      >
        <div
          className={`aspect-[4/3] ${article.color} dark:bg-zen-dark-border/30 rounded-xl mb-6 overflow-hidden relative flex items-center justify-center`}
        >
          <BookOpen
            size={48}
            className="text-zen-text/20 dark:text-zen-dark-text/20"
            strokeWidth={1}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
        </div>

        <div className="space-y-3 px-2 pb-4">
          <div className="flex items-center space-x-3 text-xs uppercase tracking-wider text-zen-text/50 dark:text-zen-dark-text/50">
            <span>{article.category}</span>
            <span className="w-1 h-1 rounded-full bg-zen-text/30 dark:bg-zen-dark-text/30" />
            <span>{article.readTime}</span>
          </div>

          <h3 className="text-xl font-serif text-zen-text dark:text-zen-dark-text group-hover:text-zen-soft transition-colors duration-300">
            {article.title}
          </h3>

          <p className="text-zen-text/70 dark:text-zen-dark-text/70 text-sm leading-relaxed">
            {article.excerpt}
          </p>
          <div className="pt-2 flex items-center text-zen-text/60 text-sm group-hover:text-zen-text transition-colors">
            {t("articles.read")}
            <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </motion.article>
    </Link>
  );
};

export default ArticleElement;
