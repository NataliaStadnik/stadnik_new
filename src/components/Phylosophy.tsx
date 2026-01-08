import { Award, BookOpen, Heart } from "lucide-react";
import { useTranslation } from "react-i18next";

const Phylosophy = () => {
  const { t } = useTranslation();

  const philosophyItems = [
    {
      icon: Heart,
      color: "zen-soft",
      title: t("about_page.phylo_title_1"),
      description: t("about_page.phylo_descr_1"),
    },
    {
      icon: Award,
      color: "zen-sage",
      title: t("about_page.phylo_title_2"),
      description: t("about_page.phylo_descr_2"),
    },
    {
      icon: BookOpen,
      color: "zen-soft",
      title: t("about_page.phylo_title_3"),
      description: t("about_page.phylo_descr_3"),
    },
  ];

  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-serif text-zen-text dark:text-zen-dark-text mb-12 text-center">
        {t("about_page.my_phylosophy")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-15">
        {philosophyItems.map(({ icon: Icon, color, title, description }) => (
          <div key={title} className="text-center">
            <div
              className={`w-16 h-16 bg-${color}/20 dark:bg-zen-dark-surface rounded-full flex items-center justify-center mx-auto mb-6 text-${color}`}
            >
              <Icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-serif mb-3 text-zen-text dark:text-zen-dark-text font-bold">
              {title}
            </h3>
            <div className="w-10 bg-zen-text h-[1px] mx-auto mb-3"></div>
            <p className="text-zen-text/70 dark:text-zen-dark-text/70 leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Phylosophy;
