import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Articles from "../components/Articles";
import Feedback from "../components/Feedback";
import ImplantSystems from "../components/ImplantSystems";
import Statistics from "../components/Statistics";
import ClinicInfo from "../components/ClinicInfo";
import { useTranslation } from "react-i18next";
import { PATHS } from "../services/routes/path";
import ClinicTitle from "../shared/ClinicTitle";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-0">
      <Hero />

      <div className="relative">
        <About />
        <div className="absolute bottom-10 left-0 right-0 flex justify-center z-10">
          <Link to={PATHS.ABOUT_PAGE}>
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="px-8 py-3 bg-zen-text text-zen-white rounded-full text-sm uppercase tracking-widest shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              {t("about.learn_me")}
            </motion.button>
          </Link>
        </div>
      </div>

      <Statistics />
      <ImplantSystems />

      <div className="relative">
        <Services />
        <div className="absolute bottom-12 left-0 right-0 flex justify-center z-10 pb-12">
          <Link to={PATHS.PROCEDURES}>
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="px-8 py-3 bg-zen-white border border-zen-text text-zen-text rounded-full text-sm uppercase tracking-widest shadow-lg hover:bg-zen-text hover:text-zen-white transition-all cursor-pointer"
            >
              {t("services.all_details")}
            </motion.button>
          </Link>
        </div>
      </div>

      <div className="relative">
        <Articles />
        <div className="absolute bottom-0 left-0 right-0 flex justify-center z-10 pb-12">
          <Link to={PATHS.ARTICLES}>
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="flex items-center px-8 py-3 bg-zen-sage/20 text-zen-text rounded-full text-sm uppercase tracking-widest hover:bg-zen-sage/30 transition-all"
            >
              {t("articles.more_read")} <ArrowRight className="ml-2 w-4 h-4" />
            </motion.button>
          </Link>
        </div>
      </div>

      <div className="relative">
        <Feedback />
        <div className="absolute bottom-5 left-0 right-0 flex justify-center z-10 pb-12">
          <Link to={PATHS.FEEDBACK}>
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="px-8 py-3 bg-zen-white text-zen-text border border-zen-soft rounded-full text-sm uppercase tracking-widest shadow-sm hover:shadow-md transition-all"
            >
              {t("feedback.all_reviews")}
            </motion.button>
          </Link>
        </div>
      </div>

      <ClinicInfo>
        <ClinicTitle />
      </ClinicInfo>
    </div>
  );
};

export default HomePage;
