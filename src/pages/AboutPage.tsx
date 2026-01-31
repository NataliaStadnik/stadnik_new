import { motion } from "framer-motion";
import Statistics from "../components/Statistics";
import { useTranslation } from "react-i18next";
import Education from "../components/Education";
import Phylosophy from "../components/Phylosophy";
import Courses from "../components/Courses";
import CertificatesSwiper from "../components/CertificatesSwiper";
import PhotoMe from "../components/PhotoMe";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-22 min-h-screen bg-zen-white dark:bg-zen-dark-bg transition-colors duration-300">
      <div className="bg-zen-sky/30 dark:bg-zen-dark-surface py-20 transition-colors duration-300">
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
            {t("about_page.name")}
          </motion.h1>
          <p className="text-xl text-zen-text/70 dark:text-zen-dark-text/70 font-light">
            {t("about_page.title")}
          </p>
        </div>
      </div>

      <Education />
      <Phylosophy />
      <Courses />
      <PhotoMe />
      <Statistics />
      <CertificatesSwiper />
    </div>
  );
};

export default AboutPage;
