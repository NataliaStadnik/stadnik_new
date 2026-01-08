import { motion } from "framer-motion";
import { User, Users, Stethoscope, Award, Smile, Heart } from "lucide-react";

const Gallery = () => {
  const photos = [
    {
      icon: User,
      label: "Professional Portrait",
      color: "bg-zen-sage/20",
    },
    {
      icon: Users,
      label: "Patient Consultation",
      color: "bg-zen-soft/20",
    },
    {
      icon: Stethoscope,
      label: "Clinical Precision",
      color: "bg-zen-sky/30",
    },
    {
      icon: Smile,
      label: "Happy Patients",
      color: "bg-zen-sage/10",
    },
    {
      icon: Heart,
      label: "Community Care",
      color: "bg-zen-soft/10",
    },
    {
      icon: Award,
      label: "Excellence",
      color: "bg-zen-sky/20",
    },
    {
      icon: Users,
      label: "Team Meeting",
      color: "bg-zen-sage/30",
    },
    {
      icon: Stethoscope,
      label: "Advanced Tech",
      color: "bg-zen-soft/30",
    },
    {
      icon: Smile,
      label: "Smile Makeover",
      color: "bg-zen-sky/40",
    },
  ];

  return (
    <section className="py-24 bg-zen-white dark:bg-zen-dark-bg transition-colors duration-300">
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
            Life at the Practice
          </motion.h2>
          <p className="text-zen-text/70 dark:text-zen-dark-text/70 max-w-2xl mx-auto">
            A glimpse into our daily dedication to your smile.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {photos.map((photo, index) => (
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
                delay: index * 0.05,
              }}
              whileHover={{
                scale: 1.02,
              }}
              className={`aspect-square rounded-2xl ${photo.color} dark:bg-zen-dark-surface relative overflow-hidden group cursor-pointer`}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-zen-text/40 dark:text-zen-dark-text/40 transition-opacity duration-300 group-hover:opacity-20">
                <photo.icon size={48} strokeWidth={1} />
              </div>

              <div className="absolute inset-0 bg-zen-text/80 dark:bg-zen-dark-bg/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <span className="text-white dark:text-zen-dark-text font-medium text-center tracking-wide">
                  {photo.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
