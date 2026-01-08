import { motion } from "framer-motion";
import Feedback from "../components/Feedback";
import ReviewForm from "../components/ReviewForm";
import { Star } from "lucide-react";
import { useTranslation } from "react-i18next";

const FeedbackPage = () => {
  const { t } = useTranslation();
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
            {t("feedback.title")}
          </motion.h1>
          <p className="text-xl text-zen-text/70 dark:text-zen-dark-text/70 font-light">
            {t("feedback.subtitle")}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 bg-zen-text dark:bg-zen-dark-surface text-zen-white dark:text-zen-dark-text p-12 rounded-3xl mb-16 shadow-lg">
          <div className="text-center">
            <div className="text-5xl font-serif mb-2">4.9/5</div>
            <div className="flex text-zen-sage justify-center mb-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <div className="text-sm opacity-70 uppercase tracking-widest">
              {t("feedback.reviews")}
            </div>
          </div>
          <div className="w-px h-16 bg-white/20 dark:bg-zen-dark-border hidden md:block" />
          <div className="text-center">
            <div className="text-5xl font-serif mb-2">10k+</div>
            <div className="text-sm opacity-70 uppercase tracking-widest">
              {t("feedback.happy_smiles")}
            </div>
          </div>
          <div className="w-px h-16 bg-white/20 dark:bg-zen-dark-border hidden md:block" />
          <div className="text-center">
            <div className="text-5xl font-serif mb-2">98%</div>
            <div className="text-sm opacity-70 uppercase tracking-widest">
              {t("feedback.referal_rate")}
            </div>
          </div>
        </div>
      </div>

      <Feedback />

      <div className="max-w-4xl mx-auto px-6 py-24">
        <ReviewForm />
      </div>
    </div>
  );
};

export default FeedbackPage;
