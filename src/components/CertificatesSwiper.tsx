import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import cert1 from "../assets/images/certificates/cert-1.jpg";
import cert2 from "../assets/images/certificates/cert-2.jpg";
import cert3 from "../assets/images/certificates/cert-3.jpg";
import cert4 from "../assets/images/certificates/cert-4.jpg";
import cert5 from "../assets/images/certificates/cert-5.jpg";
import cert6 from "../assets/images/certificates/cert-6.jpg";
import cert7 from "../assets/images/certificates/cert-7.jpg";
import cert8 from "../assets/images/certificates/cert-8.jpg";
import cert9 from "../assets/images/certificates/cert-9.jpg";
import cert10 from "../assets/images/certificates/cert-10.jpg";
import cert11 from "../assets/images/certificates/cert-11.jpg";
import cert12 from "../assets/images/certificates/cert-12.jpg";
import cert13 from "../assets/images/certificates/cert-13.jpg";
import cert14 from "../assets/images/certificates/cert-14.jpg";
import cert15 from "../assets/images/certificates/cert-15.jpg";
import cert16 from "../assets/images/certificates/cert-16.jpg";
import cert17 from "../assets/images/certificates/cert-17.jpg";
import cert18 from "../assets/images/certificates/cert-18.jpg";
import cert19 from "../assets/images/certificates/cert-19.jpg";
import cert20 from "../assets/images/certificates/cert-20.jpg";
import cert21 from "../assets/images/certificates/cert-21.jpg";
import cert22 from "../assets/images/certificates/cert-22.jpg";
import cert23 from "../assets/images/certificates/cert-23.jpg";
import cert24 from "../assets/images/certificates/cert-24.jpg";
import cert25 from "../assets/images/certificates/cert-25.jpg";
import cert26 from "../assets/images/certificates/cert-26.jpg";

const CERTIFICATES = [
  cert1,
  cert2,
  cert3,
  cert4,
  cert5,
  cert6,
  cert7,
  cert8,
  cert9,
  cert10,
  cert11,
  cert12,
  cert13,
  cert14,
  cert15,
  cert16,
  cert17,
  cert18,
  cert19,
  cert20,
  cert21,
  cert22,
  cert23,
  cert24,
  cert25,
  cert26,
];

const CertificatesSwiper = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const total = CERTIFICATES.length;

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((i) => (i + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <section className="py-20 md:py-25 dark:bg-zen-dark-surface relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-serif text-zen-text dark:text-zen-dark-text mb-4"
        >
          {t("about_page.certificates_title")}
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden relative h-[325px] md:h-[480px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  type: "tween",
                  ease: "easeInOut",
                  duration: 0.3,
                }}
                className="p-6 md:p-10 flex flex-col items-center"
              >
                <div className="w-full h-[274px] md:h-[410px] flex items-center justify-center">
                  <img
                    src={CERTIFICATES[currentIndex]}
                    alt="Photo of certificate"
                    className="max-w-[600px] w-full h-full object-contain rounded-lg bg-white"
                    style={{ boxShadow: "0 8px 20px rgba(0,0,0,0.25)" }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-9 md:-translate-x-12 p-3 rounded-full bg-white dark:bg-zen-dark-surface shadow-md text-zen-text dark:text-zen-dark-text hover:bg-zen-sky dark:hover:bg-zen-dark-border transition-colors z-20 cursor-pointer"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-9 md:translate-x-12 p-3 rounded-full bg-white dark:bg-zen-dark-surface shadow-md text-zen-text dark:text-zen-dark-text hover:bg-zen-sky dark:hover:bg-zen-dark-border transition-colors z-20 cursor-pointer"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center space-x-2 mt-6">
            {CERTIFICATES.map((_, index) => (
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

export default CertificatesSwiper;
