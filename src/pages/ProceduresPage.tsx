import { motion } from "framer-motion";
import { Anchor, Scissors, Activity, Layers, Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import toothExtraction from "../assets/images/tooth_extraction.jpg";
import sinus from "../assets/images/sinus.jpg";
import implant from "../assets/images/implant-placement.png";
import bonePlastic from "../assets/images/bone_surgery.png";
import tissue from "../assets/images/tissue.jpg";

const ProceduresPage = () => {
  const { t } = useTranslation();

  const procedures = [
    {
      id: "implants",
      title: t("procedures.implants"),
      icon: Anchor,
      overview: t("procedures.implants_descr"),
      process: [
        t("procedures.implant_step_1"),
        t("procedures.implant_step_2"),
        t("procedures.implant_step_3"),
        t("procedures.implant_step_4"),
      ],
      benefits: [
        t("procedures.implant_benifit_1"),
        t("procedures.implant_benifit_2"),
        t("procedures.implant_benifit_3"),
      ],
      recovery: t("procedures.implant_recovery"),
      color: "bg-zen-sage/20",
      img: implant,
    },
    {
      id: "wisdom",
      title: t("procedures.wisdom"),
      icon: Activity,
      overview: t("procedures.wisdom_desr"),
      process: [
        t("procedures.wisdom_step_1"),
        t("procedures.wisdom_step_2"),
        t("procedures.wisdom_step_3"),
        t("procedures.wisdom_step_4"),
      ],
      benefits: [
        t("procedures.widom_benifit_1"),
        t("procedures.widom_benifit_2"),
        t("procedures.widom_benifit_3"),
      ],
      recovery: t("procedures.wisdom_recovery"),
      color: "bg-zen-soft/20",
      img: toothExtraction,
    },
    {
      id: "sinus",
      title: t("procedures.sinus"),
      icon: Layers,
      overview: t("procedures.sinus_descr"),
      process: [
        t("procedures.sinus_step_1"),
        t("procedures.sinus_step_2"),
        t("procedures.sinus_step_3"),
      ],
      benefits: [
        t("procedures.sinus_benifit_1"),
        t("procedures.sinus_benifit_2"),
        t("procedures.sinus_benifit_3"),
      ],
      recovery: t("procedures.sinus_recovery"),
      color: "bg-zen-sky/30",
      img: sinus,
    },
    {
      id: "tissue",
      title: t("procedures.tissue"),
      icon: Scissors,
      overview: t("procedures.tissue_descr"),
      process: [
        t("procedures.tissue_step_1"),
        t("procedures.tissue_step_2"),
        t("procedures.tissue_step_3"),
      ],
      benefits: [
        t("procedures.tissue_benifit_1"),
        t("procedures.tissue_benifit_2"),
        t("procedures.tissue_benifit_3"),
      ],
      recovery: t("procedures.tissue_recovery"),
      color: "bg-zen-sage/10",
      img: tissue,
    },
    {
      id: "bone",
      title: t("procedures.bone"),
      icon: Star,
      overview: t("procedures.bone_descr"),
      process: [
        t("procedures.bone_step_1"),
        t("procedures.bone_step_2"),
        t("procedures.bone_step_3"),
      ],
      benefits: [
        t("procedures.bone_benifit_1"),
        t("procedures.bone_benifit_2"),
        t("procedures.bone_benifit_3"),
      ],
      recovery: t("procedures.bone_recovery"),
      color: "bg-zen-soft/20",
      img: bonePlastic,
    },
  ];
  return (
    <div className="pt-22 min-h-screen bg-zen-white dark:bg-zen-dark-bg transition-colors duration-300">
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
            {t("services.title")}
          </motion.h1>
          <p className="text-xl text-zen-text/70 dark:text-zen-dark-text/70 font-light max-w-2xl mx-auto">
            {t("procedures.subtitle")}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="space-y-18">
          {procedures.map((proc, index) => (
            <>
              <motion.div
                key={proc.id}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
              >
                <div
                  className={`order-2 ${
                    index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div
                      className={`p-4 rounded-2xl ${proc.color} text-zen-text dark:text-zen-dark-text`}
                    >
                      <proc.icon size={32} strokeWidth={1.5} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif text-zen-text dark:text-zen-dark-text">
                      {proc.title}
                    </h2>
                  </div>

                  <p className="text-lg text-zen-text/80 dark:text-zen-dark-text/80 mb-8 leading-relaxed">
                    {proc.overview}
                  </p>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-zen-sage mb-4">
                        {t("procedures.steps")}
                      </h3>
                      <ul className="space-y-3">
                        {proc.process.map((step, i) => (
                          <li
                            key={i}
                            className="flex items-center text-zen-text/70 dark:text-zen-dark-text/70"
                          >
                            <span className="w-6 h-6 shrink-0 rounded-full bg-zen-sky dark:bg-zen-dark-surface flex items-center justify-center text-xs font-bold mr-3 text-zen-text dark:text-zen-dark-text">
                              {i + 1}
                            </span>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div
                  className={`order-1 ${
                    index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-zen-sky dark:border-zen-dark-border">
                    <img
                      src={proc.img}
                      alt={`Image ${proc.title}`}
                      className="h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-zen-soft/10 dark:bg-zen-dark-surface p-6 rounded-xl border border-zen-soft/20">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-zen-sage mb-3">
                    {t("procedures.benefits")}
                  </h3>
                  <ul className="space-y-2">
                    {proc.benefits.map((benefit, i) => (
                      <li
                        key={i}
                        className="text-sm text-zen-text/70 dark:text-zen-dark-text/70 flex items-start"
                      >
                        <span className="mr-2">•</span> {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-zen-soft/10 dark:bg-zen-dark-surface p-6 rounded-xl border border-zen-soft/20 dark:border-zen-dark-border">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-zen-sage mb-3">
                    {t("procedures.recovery")}
                  </h3>
                  <p className="text-zen-text/70 dark:text-zen-dark-text/70 text-sm">
                    {proc.recovery}
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProceduresPage;
