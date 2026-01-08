import { motion } from "framer-motion";
import { Sparkles, Heart, Shield, Smile } from "lucide-react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t("services.tooth_implant_title"),
      description: t("services.tooth_implant_text"),
      icon: Shield,
      delay: 0,
    },
    {
      title: t("services.paradont_title"),
      description: t("services.paradont_text"),
      icon: Smile,
      delay: 0.2,
    },
    {
      title: t("services.sinus_title"),
      description: t("services.sinus_text"),
      icon: Heart,
      delay: 0.4,
    },
    {
      title: t("services.tooth_extraction_title"),
      description: t("services.tooth_extraction_text"),
      icon: Sparkles,
      delay: 0.6,
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-zen-sky relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
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
            className="text-4xl md:text-5xl font-serif text-zen-text mb-4"
          >
            {t("services.title")}
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
            className="text-zen-text/70 max-w-2xl mx-auto"
          >
            {t("services.subtitle")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: service.delay,
                ease: "easeOut",
              }}
              whileHover={{
                y: -10,
              }}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-zen-sky/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col">
                <div className="w-14 h-14 bg-zen-sky rounded-stone flex items-center justify-center mb-6 text-zen-text group-hover:scale-110 transition-transform duration-500">
                  <service.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>

                <h3 className="text-xl font-serif text-zen-text mb-3">
                  {service.title}
                </h3>
                <p className="text-zen-text/70 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 w-full h-px bg-zen-sage/30 relative">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0 group-hover:w-full h-px bg-zen-soft transition-all duration-700" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
