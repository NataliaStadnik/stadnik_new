import { useTranslation } from "react-i18next";
import meSurgery from "../assets/images/me-surgery.jpg";

const Education = () => {
  const { t } = useTranslation();

  const educationConfig = [
    {
      title: t("about_page.educ_1"),
      year: "2011 - 2016",
    },
    {
      title: t("about_page.educ_3"),
      year: "2016 - 2017",
    },
    {
      title: t("about_page.educ_4"),
      year: "2017 - 2022",
    },
    {
      title: t("about_page.educ_5"),
      year: `${t("about_page.start")} 2021`,
    },
    {
      title: t("about_page.educ_6"),
      year: `${t("about_page.start")} 2023`,
    },
    {
      title: t("about_page.educ_7"),
      year: `${t("about_page.start")} 2025`,
    },
    {
      title: t("about_page.educ_8"),
      year: `${t("about_page.start")} 2025`,
    },
  ];

  return (
    <section
    className="
    relative pt-20 pb-16
    text-zen-white dark:text-zen-dark-text
    transition-colors duration-300
    bg-fixed bg-cover
    bg-[right_-390px_center] md:bg-[right_-200px_center] lg:bg-center
  "
      // className="relative pt-20 pb-16 text-zen-white dark:text-zen-dark-text transition-colors duration-300 bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${meSurgery})` }}
    >
      <div
        className="absolute inset-0"
        style={{ backdropFilter: "brightness(0.4)" }}
      />
      <div className="absolute inset-0 bg-black/50 dark:bg-zen-dark-surface/50" />
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-serif mb-12 text-center text-zen-soft leading-relaxed">
          {t("about_page.education")}
        </h2>

        <div className="space-y-8">
          {educationConfig.map((item, idx) => {
            const isLast = idx === educationConfig.length - 1;

            return (
              <div
                key={idx}
                className={`flex flex-col md:flex-row md:items-center justify-between pb-8
        ${
          !isLast
            ? "border-b border-zen-white/10 dark:border-zen-dark-border"
            : ""
        }`}
              >
                <h3 className="text-xl font-light mb-2 leading-relaxed w-[80%]">
                  {item.title}
                </h3>
                <span className="text-zen-sage mt-2 md:mt-0 font-bold">
                  {item.year}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
