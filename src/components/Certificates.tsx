import { motion } from "framer-motion";
import { Award, FileCheck, ShieldCheck, Star } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "Board Certification",
      subtitle: "Oral Surgery",
      year: "2008",
      icon: ShieldCheck,
      color: "bg-zen-sage/10",
    },
    {
      title: "Advanced Implantology",
      subtitle: "Certification",
      year: "2010",
      icon: Award,
      color: "bg-zen-soft/10",
    },
    {
      title: "Mastership",
      subtitle: "Oral Implantology",
      year: "2015",
      icon: Star,
      color: "bg-zen-sky/20",
    },
    {
      title: "Excellence Award",
      subtitle: "Patient Care",
      year: "2018",
      icon: FileCheck,
      color: "bg-zen-sage/20",
    },
    {
      title: "Continuing Education",
      subtitle: "Advanced Prosthetics",
      year: "2021",
      icon: Award,
      color: "bg-zen-soft/20",
    },
    {
      title: "Association Member",
      subtitle: "ADA & ICOI",
      year: "Current",
      icon: ShieldCheck,
      color: "bg-zen-sky/30",
    },
  ];

  return (
    <section className="py-24 bg-zen-sky/20 dark:bg-zen-dark-surface transition-colors duration-300">
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
            className="text-3xl md:text-4xl font-serif text-zen-text dark:text-zen-dark-text mb-4"
          >
            Certifications & Awards
          </motion.h2>
          <p className="text-zen-text/70 dark:text-zen-dark-text/70 max-w-2xl mx-auto">
            Recognized excellence in dental medicine and patient care.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
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
                delay: index * 0.1,
              }}
              whileHover={{
                y: -5,
              }}
              className={`aspect-[3/4] ${cert.color} dark:bg-zen-dark-bg rounded-xl p-6 flex flex-col items-center justify-center text-center border border-zen-text/5 dark:border-zen-dark-border shadow-sm hover:shadow-md transition-all`}
            >
              <div className="mb-4 text-zen-text/60 dark:text-zen-dark-text/60">
                <cert.icon size={32} strokeWidth={1} />
              </div>
              <h3 className="font-serif font-bold text-zen-text dark:text-zen-dark-text mb-1 text-sm md:text-base">
                {cert.title}
              </h3>
              <p className="text-xs text-zen-text/60 dark:text-zen-dark-text/60 uppercase tracking-wider mb-4">
                {cert.subtitle}
              </p>
              <span className="mt-auto inline-block px-3 py-1 bg-white/50 dark:bg-zen-dark-surface/50 rounded-full text-xs font-medium text-zen-text/80 dark:text-zen-dark-text/80">
                {cert.year}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
