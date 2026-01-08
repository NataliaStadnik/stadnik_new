import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import mis from "../assets/images/mis.png";
import osstem from "../assets/images/osstem.png";
import neobiotech from "../assets/images/neobiotech.png";
import neodent from "../assets/images/neodent.png";
import straumann from "../assets/images/straumann.png";
import megagen from "../assets/images/megagen.png";

const ImplantSystems = () => {
  const { t } = useTranslation();

  const systems = [
    {
      name: "Megagen",
      description: t("implant_systems.megagen_text"),
      icon: megagen,
      sizes: "h-15 w-60",
    },
    {
      name: "Straumann",
      description: t("implant_systems.strauman_text"),
      icon: straumann,
      sizes: "h-18 w-70",
    },
    {
      name: "MIS",
      description: t("implant_systems.mis_text"),
      icon: mis,
      sizes: "h-18 w-40",
    },
    {
      name: "Neobiotech",
      description: t("implant_systems.neobiotech_text"),
      icon: neobiotech,
      sizes: "h-20 w-50",
    },
    {
      name: "Osstem",
      description: t("implant_systems.osstem_text"),
      icon: osstem,
      sizes: "h-18 w-52",
    },
    {
      name: "Neodent",
      description: t("implant_systems.neodent_text"),
      icon: neodent,
      sizes: "h-15 w-60",
    },
  ];

  return (
    <section className="py-24 bg-zen-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
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
            className="text-3xl md:text-4xl font-serif text-zen-text mb-4"
          >
            {t("implant_systems.title")}
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
              delay: 0.1,
            }}
            className="text-zen-text/70 max-w-2xl mx-auto"
          >
            {t("implant_systems.text")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {systems.map((system, index) => (
            <motion.div
              key={system.name}
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
                delay: index * 0.2,
              }}
              className="flex flex-col bg-zen-sky/20 rounded-2xl p-8 border border-zen-sky hover:border-zen-sage/50 transition-colors duration-300"
            >
              <img
                src={system.icon}
                alt={`logo ${system.name}`}
                className={`mb-8 object-contain ${system.sizes}`}
              />
              <p className="text-zen-text/70 text-sm leading-relaxed mb-6">
                {system.description}
              </p>
              <div className="flex items-center text-xs font-medium text-zen-sage uppercase tracking-wider mt-auto">
                <CheckCircle className="w-3 h-3 mr-2" />
                {t("implant_systems.clinically_proven")}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImplantSystems;
