import { motion } from "framer-motion";
import Services from "../components/Services";
import ImplantSystems from "../components/ImplantSystems";
import { Check } from "lucide-react";

const ExperiencesPage = () => {
  return (
    <div className="pt-22 min-h-screen bg-zen-white">
      <div className="bg-zen-sky/30 py-20 mb-12">
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
            className="text-5xl md:text-6xl font-serif text-zen-text mb-6"
          >
            Patient Experiences
          </motion.h1>
          <p className="text-xl text-zen-text/70 font-light">
            Curated treatments designed to restore balance, function, and
            beauty.
          </p>
        </div>
      </div>

      <Services />

      <ImplantSystems />

      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-serif text-zen-text mb-6">
              The Zen Dental Difference
            </h2>
            <p className="text-zen-text/70 mb-8 leading-relaxed">
              We don't just treat teeth; we care for the person behind the
              smile. Our holistic approach considers your entire well-being,
              ensuring that every procedure contributes to your overall health.
            </p>
            <ul className="space-y-4">
              {[
                "Minimally invasive techniques",
                "Metal-free, biocompatible materials",
                "Digital scanning (no messy impressions)",
                "Sedation options for anxiety-free visits",
                "Spa-like amenities (warm towels, noise-canceling headphones)",
              ].map((item, i) => (
                <li key={i} className="flex items-center text-zen-text/80">
                  <div className="w-6 h-6 rounded-full bg-zen-sage/20 flex items-center justify-center mr-4 text-zen-sage">
                    <Check className="w-3 h-3" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="h-[500px] bg-zen-soft/10 rounded-2xl relative overflow-hidden">
            {/* Placeholder for clinic interior or patient interaction */}
            <div className="absolute inset-0 flex items-center justify-center text-zen-text/30 font-serif italic text-2xl">
              Patient Care Environment
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperiencesPage;
