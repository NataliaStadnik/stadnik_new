import { motion } from "framer-motion";
import { Filter, Search, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import ArticleElement from "../shared/ArticleElement";
import { allArticles, Category } from "../constants/allArticles";
import { useEffect, useState, type SyntheticEvent } from "react";
import NotFoundSearch from "../assets/svg/NotFoundSearch";

const ArticlesPage = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");

  const categories = Object.values(Category);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 300);
    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);
  const filteredArticles = allArticles.filter((article) => {
    const matchesCategory =
      selectedCategory === "" || article.category === selectedCategory;
    const matchesSearch =
      debouncedSearch === "" ||
      article.title.toLowerCase().includes(debouncedSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSelect = (cat: string) => {
    setSelectedCategory(cat);
    setIsOpen(false);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setDebouncedSearch("");
  };

  const resetFilter = (e: SyntheticEvent<SVGSVGElement>) => {
    e.stopPropagation();
    setSelectedCategory("");
  };

  return (
    <div className="pt-22 min-h-screen bg-zen-white dark:bg-zen-dark-bg transition-colors duration-300">
      <div className="bg-zen-sky/30 dark:bg-zen-dark-surface py-20 mb-12 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="text-5xl md:text-6xl font-serif text-zen-text dark:text-zen-dark-text mb-6"
          >
            {t("articles.title")}
          </motion.h1>
          <p className="text-xl text-zen-text/70 dark:text-zen-dark-text/70 font-light max-w-2xl mx-auto mb-8">
            {t("articles.descr")}
          </p>

          <div className="max-w-xl mx-auto relative flex items-center gap-3">
            <div className="relative w-full">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={t("articles.search")}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-zen-text/10 dark:border-zen-dark-border bg-white/80 dark:bg-zen-dark-bg focus:outline-none focus:ring-2 focus:ring-zen-soft/50 transition-all text-zen-text dark:text-zen-dark-text"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zen-text/40 dark:text-zen-dark-text/40" />

              {searchTerm && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zen-text/40 dark:text-zen-dark-text/40 hover:text-zen-text dark:hover:text-zen-dark-text transition"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-4 py-3 rounded-full border border-zen-text/10 dark:border-zen-dark-border bg-white/80 dark:bg-zen-dark-bg text-zen-text dark:text-zen-dark-text focus:outline-none focus:ring-2 focus:ring-zen-soft/50 transition-all cursor-pointer"
              >
                <Filter className="w-5 h-5" />
                {selectedCategory || t("articles.filter")}
                {selectedCategory && (
                  <X
                    onClick={resetFilter}
                    className="ml-2 w-4 h-4 text-zen-text/40 dark:text-zen-dark-text/40 hover:text-zen-text dark:hover:text-zen-dark-text cursor-pointer"
                  />
                )}
              </button>

              {isOpen && (
                <div className="absolute mt-2 -left-[70px] md:left-0 w-48 bg-white dark:bg-zen-dark-surface shadow-lg rounded-lg overflow-hidden z-10">
                  <button
                    className={`block w-full text-left px-4 py-2 transition ${
                      selectedCategory === ""
                        ? "bg-zen-soft/30 dark:bg-zen-dark-bg"
                        : "hover:bg-zen-soft/20 dark:hover:bg-zen-dark-bg"
                    }`}
                    onClick={() => handleSelect("")}
                  >
                    {t("articles.all")}
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      className={`block w-full text-left px-4 py-2 transition cursor-pointer ${
                        selectedCategory === cat
                          ? "bg-zen-soft/30 dark:bg-zen-dark-bg"
                          : "hover:bg-zen-soft/20 dark:hover:bg-zen-dark-bg"
                      }`}
                      onClick={() => handleSelect(cat)}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        {filteredArticles.length === 0 ? (
          <div className="flex items-center mx-auto w-full justify-center gap-5 text-center text-zen-text/70 dark:text-zen-dark-text/70 text-xl font-light py-6">
            <NotFoundSearch />
            <span>{t("articles.notFound")}</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {filteredArticles.map((article, index) => (
              <ArticleElement
                key={article.id}
                article={article}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticlesPage;
