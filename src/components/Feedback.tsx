import { useState } from "react";
import { motion } from "framer-motion";
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Feedback = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };
  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const testimonials = [
    {
      quote: t("feedback.feedback_1"),
      author: t("feedback.feedback_1_author"),
      rating: 5,
      source: "14gsp.by",
      link: "https://14gsp.by/о-нас/отзывы",
    },
    {
      quote: t("feedback.feedback_2"),
      author: t("feedback.feedback_2_author"),
      rating: 4,
      source: "slivki.by",
      link: "https://www.slivki.by/lechenie-kariesa-minsk-skidka-stolichnayastomatologiya?page=3",
    },
    {
      quote: t("feedback.feedback_3"),
      author: t("feedback.feedback_3_author"),
      rating: 5,
      source: "otzovik.by",
      link: "https://otzovik.by/places/stomatologicheskij-centr-vinir/",
    },
    {
      quote: t("feedback.feedback_4"),
      author: t("feedback.feedback_4_author"),
      rating: 5,
      source: "14gsp.by",
      link: "https://14gsp.by/о-нас/отзывы",
    },
    {
      quote: t("feedback.feedback_5"),
      author: t("feedback.feedback_5_author"),
      rating: 5,
      source: "14gsp.by",
      link: "https://14gsp.by/о-нас/отзывы",
    },
    {
      quote: t("feedback.feedback_6"),
      author: t("feedback.feedback_6_author"),
      rating: 5,
      source: "14gsp.by",
      link: "https://14gsp.by/о-нас/отзывы",
    },
    {
      quote: t("feedback.feedback_7"),
      author: t("feedback.feedback_7_author"),
      rating: 5,
      source: "slivki.by",
      link: "https://www.slivki.by/lechenie-kariesa-minsk-skidka-stolichnayastomatologiya?page=3",
    },
    {
      quote: t("feedback.feedback_8"),
      author: t("feedback.feedback_8_author"),
      rating: 5,
      source: "slivki.by",
      link: "https://www.slivki.by/lechenie-kariesa-minsk-skidka-stolichnayastomatologiya?page=3",
    },
    {
      quote: t("feedback.feedback_9"),
      author: t("feedback.feedback_9_author"),
      rating: 5,
      source: "yandex.by",
      link: "https://yandex.by/maps/org/vinir/147988909737/reviews/?ll=27.485257%2C53.906468&z=13",
    },
    {
      quote: t("feedback.feedback_10"),
      author: t("feedback.feedback_10_author"),
      rating: 5,
      source: "infodoktor.by",
      link: "https://www.infodoktor.by/otzyvy-o-klinikah/14-stomatologicheskaya-poliklinika-minska/#4142",
    },
    {
      quote: t("feedback.feedback_11"),
      author: t("feedback.feedback_11_author"),
      rating: 5,
      source: "yandex.by",
      link: "https://yandex.by/maps/org/estetik_smayl/105917578680/reviews/?ll=27.519680%2C53.881093&z=14",
    },
    {
      quote: t("feedback.feedback_12"),
      author: t("feedback.feedback_12_author"),
      rating: 4,
      source: "14gsp.by",
      link: "https://14gsp.by/о-нас/отзывы",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-zen-sky/30 dark:bg-zen-dark-surface relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/20 dark:border-zen-dark-border/20 rounded-full opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/30 dark:border-zen-dark-border/30 rounded-full opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="text-4xl md:text-5xl font-serif text-zen-text dark:text-zen-dark-text mb-4"
          >
            {t("feedback.title")}
          </motion.h2>
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.2,
            }}
            className="text-zen-text/70 dark:text-zen-dark-text/70 max-w-2xl mx-auto"
          >
            {t("feedback.subtitle")}
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden px-4 py-8">
            <motion.div
              key={currentIndex}
              initial={{
                opacity: 0,
                x: 100,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -100,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="bg-white/60 dark:bg-zen-dark-bg/60 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-lg border border-white dark:border-zen-dark-border"
            >
              <div className="mb-8 text-zen-soft flex justify-between items-start">
                <Quote className="w-10 h-10 opacity-50" />
                <div className="flex text-zen-sage">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>

              <p className="text-zen-text/80 dark:text-zen-dark-text/80 text-xl md:text-2xl italic mb-8 leading-relaxed font-serif">
                {testimonials[currentIndex].quote}
              </p>

              <div className="flex items-center justify-between border-t border-zen-text/5 dark:border-zen-dark-text/10 pt-6">
                <div>
                  <h4 className="font-serif text-zen-text dark:text-zen-dark-text font-bold text-lg">
                    {testimonials[currentIndex].author}
                  </h4>
                </div>

                <Link
                  to={testimonials[currentIndex].link}
                  target="_blank"
                  className="flex items-center text-xs text-zen-text/40 dark:text-zen-dark-text/40 hover:text-zen-sage transition-colors"
                >
                  {testimonials[currentIndex].source}
                  <ExternalLink size={12} className="ml-1" />
                </Link>
              </div>
            </motion.div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-3 rounded-full bg-white dark:bg-zen-dark-surface shadow-md text-zen-text dark:text-zen-dark-text hover:bg-zen-sky dark:hover:bg-zen-dark-border transition-colors z-20"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-3 rounded-full bg-white dark:bg-zen-dark-surface shadow-md text-zen-text dark:text-zen-dark-text hover:bg-zen-sky dark:hover:bg-zen-dark-border transition-colors z-20"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-zen-sage"
                    : "bg-zen-text/20 dark:bg-zen-dark-text/20 hover:bg-zen-text/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
