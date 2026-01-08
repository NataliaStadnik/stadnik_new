import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import mePhoto from "../assets/images/stadnik.jpg";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 md:py-32 bg-zen-white dark:bg-zen-dark-bg relative overflow-hidden transition-colors duration-300">
      <div className="absolute left-10 top-0 bottom-0 w-px bg-zen-sage/30 hidden md:block">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-2 h-16 bg-zen-sage/20 rounded-full" />
        <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-2 h-16 bg-zen-sage/20 rounded-full" />
      </div>
      <div className="absolute right-10 top-0 bottom-0 w-px bg-zen-sage/30 hidden md:block">
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-2 h-16 bg-zen-sage/20 rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="relative"
          >
            <div className="relative z-10 aspect-[4/5] bg-zen-sage/20 dark:bg-zen-dark-surface rounded-stone overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zen-text/10 dark:to-zen-dark-bg/50" />
              <img
                src={mePhoto}
                alt="My photo"
                className="mb-8 object-cover h-full w-full"
              />
            </div>

            <div className="absolute -bottom-8 -right-8 w-2/3 h-2/3 bg-zen-soft/30 dark:bg-zen-dark-border/30 rounded-stone-alt -z-0 blur-sm" />
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.2,
            }}
          >
            <h2 className="flex flex-col  md:text-5xl font-serif text-zen-text dark:text-zen-dark-text mb-8">
              <span className="text-4xl">{t("about.title")}</span>
              <span className="italic text-zen-soft text-3xl">
                {t("about.titleAccent")}
              </span>
            </h2>

            <div className="space-y-6 text-lg text-zen-text/80 dark:text-zen-dark-text/80 font-light leading-relaxed">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <p>{t("about.p3")}</p>
            </div>

            <div className="mt-12 flex items-center space-x-8">
              <div className="flex flex-col">
                <span className="text-3xl font-serif text-zen-text dark:text-zen-dark-text">
                  10+
                </span>
                <span className="text-sm text-zen-text/60 dark:text-zen-dark-text/60 uppercase tracking-wider">
                  {t("about.experience")}
                </span>
              </div>
              <div className="w-px h-12 bg-zen-sage" />
              <div className="flex flex-col">
                <span className="text-3xl font-serif text-zen-text dark:text-zen-dark-text">
                  100%
                </span>
                <span className="text-sm text-zen-text/60 dark:text-zen-dark-text/60 uppercase tracking-wider">
                  {t("about.holistic")}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
