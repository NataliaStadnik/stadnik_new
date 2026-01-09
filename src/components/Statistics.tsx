import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Statistics = () => {
  const { t } = useTranslation();

  const stats = [
    {
      value: "10+",
      label: t("statistics.experience"),
    },
    {
      value: "7k+",
      label: t("statistics.implants"),
    },
    {
      value: "98%",
      label: t("statistics.satisfaction"),
    },
    {
      value: "100%",
      label: t("statistics.biomaterials"),
    },
  ];

  return (
    <section className="py-20 bg-zen-text text-zen-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-serif mb-2 text-zen-sage">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-zen-white/70 uppercase tracking-widest font-light">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
