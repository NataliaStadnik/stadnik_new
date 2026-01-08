import { motion } from "framer-motion";
import { Stethoscope, User, Users } from "lucide-react";

const PhotoMe = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
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
          className="aspect-[3/4] bg-zen-sage/20 dark:bg-zen-dark-surface rounded-2xl flex flex-col items-center justify-center text-zen-sage overflow-hidden relative group"
        >
          <User
            size={64}
            strokeWidth={1}
            className="mb-4 group-hover:scale-110 transition-transform duration-500"
          />
          <span className="uppercase tracking-widest text-sm">Portrait</span>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
        </motion.div>

        <motion.div
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
          className="aspect-[3/4] bg-zen-soft/20 dark:bg-zen-dark-surface rounded-2xl flex flex-col items-center justify-center text-zen-soft overflow-hidden relative group"
        >
          <Users
            size={64}
            strokeWidth={1}
            className="mb-4 group-hover:scale-110 transition-transform duration-500"
          />
          <span className="uppercase tracking-widest text-sm">
            Consultation
          </span>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
        </motion.div>

        <motion.div
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
          className="aspect-[3/4] bg-zen-sky/30 dark:bg-zen-dark-surface rounded-2xl flex flex-col items-center justify-center text-zen-text/50 dark:text-zen-dark-text/50 overflow-hidden relative group"
        >
          <Stethoscope
            size={64}
            strokeWidth={1}
            className="mb-4 group-hover:scale-110 transition-transform duration-500"
          />
          <span className="uppercase tracking-widest text-sm">
            Clinical Care
          </span>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
        </motion.div>
      </div>
    </section>
  );
};

export default PhotoMe;
