import { motion } from "framer-motion";
import { Search, BookOpen, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ArticleElement from "../shared/ArticleElement";

const ArticlesPage = () => {
  const { t } = useTranslation();

  const allArticles = [
    {
      title: "Имплантация зубов: как выбрать оптимальный вариант?",
      excerpt:
        "Современная стоматология предлагает множество вариантов имплантации зубов, но как выбрать тот, который лучше всего подойдет именно вам?",
      category: "Имплантология",
      readTime: `6 ${t("articles.min_read")}`,
      color: "bg-zen-sage/20",
      slug: "implantaciya-zubov-optimalnyj-variant",
    },
    {
      title: "Костная пластика перед имплантацией: зачем она нужна?",
      excerpt:
        "Успешная установка зубного импланта во многом зависит от состояния костной ткани челюсти. Когда ее недостаточно, костная пластика становится важным этапом подготовки.",
      category: "Хирургия",
      readTime: `7 ${t("articles.min_read")}`,
      color: "bg-zen-soft/20",
      slug: "kostnaya-plastika-pered-implantaciej",
    },
    {
      title: "Как ухаживать за зубами после хирургического вмешательства?",
      excerpt:
        "После стоматологической операции важно правильно ухаживать за ротовой полостью. В этой статье вы найдете практические рекомендации, которые помогут вам пройти этот этап с комфортом.",
      category: "Гигиена",
      readTime: `5 ${t("articles.min_read")}`,
      color: "bg-zen-sky",
      slug: "uhod-za-zubami-posle-operacii",
    },
    {
      title: "Периимплантит: как избежать воспаления вокруг импланта?",
      excerpt:
        "Периимплантит — одно из осложнений после имплантации зубов. Подробно рассмотрим причины его появления и способы профилактики.",
      category: "Хирургия",
      readTime: `6 ${t("articles.min_read")}`,
      color: "bg-zen-sky",
      slug: "periimplantit-kak-izbezhat-vospaleniya",
    },
    {
      title: "Синус-лифтинг: когда он необходим перед имплантацией?",
      excerpt:
        "Синус-лифтинг — важный этап подготовки к имплантации при недостатке костной ткани верхней челюсти. В статье подробно рассказываем о показаниях, методах проведения и восстановлении после процедуры.",
      category: "Хирургия",
      readTime: `5 ${t("articles.min_read")}`,
      color: "bg-zen-sky",
      slug: "sinus-lifting-pered-implantaciej",
    },
    {
      title: "Все о временных коронках: зачем они нужны после имплантации?",
      excerpt:
        "Временные коронки играют важную роль в процессе восстановления после установки импланта. Узнайте, какие функции они выполняют и когда стоит их заменять.",
      category: "Хирургия",
      readTime: `5 ${t("articles.min_read")}`,
      color: "bg-zen-sky",
      slug: "vremennye-koronki-posle-implantacii",
    },
    {
      title: "Подготовка к стоматологической операции: что нужно знать?",
      excerpt:
        "Перед хирургическим вмешательством важно пройти обследование и соблюдать рекомендации врача. В статье рассказываем о ключевых этапах подготовки.",
      category: "Подготовка",
      readTime: `6 ${t("articles.min_read")}`,
      color: "bg-zen-sage/20",
      slug: "podgotovka-k-stomatologicheskoj-operacii",
    },
    {
      title: "Рентген и КЛКТ перед операцией: зачем нужны исследования?",
      excerpt:
        "Современная диагностика помогает врачу точно оценить состояние зубов и костной ткани. Узнайте, какие методы применяются и почему они важны.",
      category: "Диагностика",
      readTime: `7 ${t("articles.min_read")}`,
      color: "bg-zen-soft/20",
      slug: "rentgen-i-kt-pered-operaciej",
    },
    {
      title: "Пластика десны: эстетика и здоровье",
      excerpt:
        "Хирургическая пластика десны помогает восстановить естественный контур улыбки и улучшить гигиену полости рта.",
      category: "Хирургия",
      readTime: `5 ${t("articles.min_read")}`,
      color: "bg-zen-sage/20",
      slug: "plastika-desny-estetika-i-zdorove",
    },
    {
      title: "Рекомендации пациенту перед хирургическим вмешательством",
      excerpt:
        "Чтобы операция прошла успешно, важно соблюдать ряд правил: от питания до приема лекарств. В статье — практические советы.",
      category: "Подготовка",
      readTime: `5 ${t("articles.min_read")}`,
      color: "bg-zen-sage/20",
      slug: "rekomendacii-pacientu-pered-operaciej",
    },
    {
      title: "Удаление зубов мудрости у взрослых: показания и особенности",
      excerpt:
        "Зубы мудрости часто становятся источником проблем у взрослых пациентов. Разбираем, когда необходимо хирургическое удаление и как проходит восстановление.",
      category: "Хирургия",
      readTime: `6 ${t("articles.min_read")}`,
      color: "bg-zen-soft/20",
      slug: "udalenie-zubov-mudrosti-u-vzroslyh",
    },
    {
      title: "Резекция верхушки корня: когда нужна операция?",
      excerpt:
        "Если воспаление не удается устранить консервативными методами, резекция верхушки корня становится эффективным хирургическим решением.",
      category: "Хирургия",
      readTime: `7 ${t("articles.min_read")}`,
      color: "bg-zen-sage/20",
      slug: "rezekciya-verhushki-kornya",
    },
    {
      title: "Послеоперационные рекомендации: что важно знать пациенту",
      excerpt:
        "Правильное поведение после операции помогает ускорить восстановление и избежать осложнений. В статье — основные правила ухода.",
      category: "Реабилитация",
      readTime: `6 ${t("articles.min_read")}`,
      color: "bg-zen-sky",
      slug: "posleoperacionnye-rekomendacii-pacientu",
    },
    {
      title: "Стоматологические операции у беременных: что нужно учитывать?",
      excerpt:
        "Беременность накладывает особые требования на проведение стоматологических вмешательств. В статье рассказываем, какие процедуры допустимы, какие стоит отложить и как минимизировать риски для мамы и ребёнка.",
      category: "Беременные",
      readTime: `7 ${t("articles.min_read")}`,
      color: "bg-zen-sage/20",
      slug: "stomatologicheskie-operacii-u-beremennyh",
    },
    {
      title:
        "Анестезия в стоматологии: какие варианты подходят взрослым пациентам?",
      excerpt:
        "Современная стоматология предлагает разные виды анестезии — от местной до седации. Разбираем, в каких случаях применяются разные методы и как выбрать оптимальный вариант.",
      category: "Анестезия",
      readTime: `6 ${t("articles.min_read")}`,
      color: "bg-zen-soft/20",
      slug: "anesteziya-v-stomatologii-varianty",
    },
  ];

  return (
    <div className="pt-24 min-h-screen bg-zen-white dark:bg-zen-dark-bg transition-colors duration-300">
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

          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              placeholder={t("articles.search")}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-zen-text/10 dark:border-zen-dark-border bg-white/80 dark:bg-zen-dark-bg focus:outline-none focus:ring-2 focus:ring-zen-soft/50 transition-all text-zen-text dark:text-zen-dark-text"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zen-text/40 dark:text-zen-dark-text/40" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {allArticles.map((article, index) => (
            <ArticleElement key={index} article={article} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;
