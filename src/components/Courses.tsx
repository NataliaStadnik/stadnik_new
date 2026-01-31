import { GraduationCap } from "lucide-react";
import { useTranslation } from "react-i18next";

const Courses = () => {
  const { t } = useTranslation();

  const courses = [
    {
      year: "2018",
      title: t("about_page.course_title_1"),
      place: t("about_page.course_place_1"),
      hours: t("about_page.course_hours_1"),
    },
    {
      year: "2018",
      title: t("about_page.course_title_2"),
      place: t("about_page.course_place_2"),
      hours: t("about_page.course_hours_2"),
    },
    {
      year: "2023",
      title: t("about_page.course_title_3"),
      place: t("about_page.course_place_3"),
      hours: t("about_page.course_hours_3"),
    },
    {
      year: "2023",
      title: t("about_page.course_title_4"),
      place: t("about_page.course_place_4"),
      hours: t("about_page.course_hours_4"),
    },
  ];

  return (
    <section className="py-24 w-full mx-auto px-6 bg-zen-sky/30 dark:bg-zen-dark-surface">
      <h2 className="text-4xl font-serif text-zen-text dark:text-zen-dark-text mb-15 text-center">
        {t("about_page.courses_title")}
      </h2>

      <ul className="space-y-6 w-full relative z-10 max-w-6xl mx-auto mb-8">
        {courses.map(({ year, title, place, hours }) => (
          <li
            key={title}
            className="flex items-start gap-4 text-zen-text dark:text-zen-dark-text w-full"
          >
            <div className="flex-shrink-0 w-10 h-10 bg-zen-sage/20 dark:bg-zen-dark-surface rounded-full flex items-center justify-center text-zen-sage">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 md:gap-12 w-full">
              <div>
                <p className="font-serif font-semibold leading-relaxed text-xl text-zen-text dark:text-zen-white/70">
                  {title}
                </p>
                <p className="text-zen-text/70 dark:text-zen-dark-text/60 text-sm leading-relaxed">
                  {place}, {hours}
                </p>
              </div>
              <span className="block text-l font-bold text-zen-sage">
                {year}
              </span>
            </div>
          </li>
        ))}
      </ul>
      <p className="max-w-6xl mx-auto w-full font-semibold leading-relaxed text-m text-zen-sage">
        {t("about_page.author")}
      </p>
    </section>
  );
};

export default Courses;
