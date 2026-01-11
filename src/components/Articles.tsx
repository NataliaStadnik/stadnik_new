import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { useTranslation } from "react-i18next";
import { allArticles } from "../constants/allArticles";
import { PATHS } from "../services/routes/path";
import { Link } from "react-router-dom";

const Articles = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 md:py-32 bg-zen-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <span className="inline-block mb-4 px-3 py-1 rounded-full bg-zen-sky text-zen-text text-xs tracking-widest uppercase">
              {t("articles.journal")}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-zen-text">
              {t("articles.title")}
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {allArticles.slice(0, 3).map((article, index) => (
            <Link to={PATHS.ONE_ARTICLE(article.slug)} key={article.id}>
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
                  duration: 0.8,
                  delay: index * 0.2,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group cursor-pointer"
              >
                <div
                  className={`aspect-[4/3] ${article.color} rounded-2xl mb-6 overflow-hidden relative`}
                >
                  <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:scale-105 transition-transform duration-700">
                    <BookOpen
                      className="w-16 h-16 text-zen-text"
                      strokeWidth={1}
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-xs uppercase tracking-wider text-zen-text/50">
                    <span>{article.category}</span>
                    <span className="w-1 h-1 rounded-full bg-zen-text/30" />
                    <span>
                      {article.readTime} {t("articles.min_read")}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif text-zen-text group-hover:text-zen-soft transition-colors duration-300">
                    {article.title}
                  </h3>

                  <p className="text-zen-text/70 text-sm leading-relaxed line-clamp-0">
                    {article.excerpt}
                  </p>

                  <div className="pt-2 flex items-center text-zen-text/60 text-sm group-hover:text-zen-text transition-colors">
                    {t("articles.read")}
                    <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
