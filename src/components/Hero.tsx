import { motion } from "framer-motion";
import WaveBackground from "./WaveBackground";
import { ArrowDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zen-sky">
      <WaveBackground />

      <motion.div
        className="absolute top-20 left-[10%] w-24 h-24 bg-white/40 rounded-stone blur-xl"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-40 right-[15%] w-32 h-32 bg-zen-soft/20 rounded-stone-alt blur-xl"
        animate={{
          y: [0, 30, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
        >
          <span className="inline-block mb-6 px-4 py-2 rounded-full bg-zen-white/60 backdrop-blur-sm text-zen-text text-sm tracking-widest uppercase border border-zen-white">
            {t("hero.badge")}
          </span>

          <h1 className="flex flex-col text-5xl md:text-6xl lg:text-7xl font-serif text-zen-text mb-8 leading-tight">
            <span>{t("hero.title")}</span>
            <span className="italic text-zen-dark">
              {t("hero.titleAccent")}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-zen-text/80 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            {t("hero.subtitle")}
          </p>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zen-text/50"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
};

export default Hero;
