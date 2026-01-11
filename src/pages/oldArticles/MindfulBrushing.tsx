import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, Calendar, ArrowLeft, User } from "lucide-react";

const MindfulBrushing = () => {
  return (
    <div className="pt-24 min-h-screen bg-zen-white dark:bg-zen-dark-bg transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 py-6">
        <Link
          to="/articles"
          className="flex items-center text-zen-text/60 dark:text-zen-dark-text/60 hover:text-zen-text dark:hover:text-zen-dark-text transition-colors text-sm"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Articles
        </Link>
      </div>

      <div className="bg-zen-sky/30 dark:bg-zen-dark-surface py-16 mb-12 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <span className="px-3 py-1 bg-zen-soft/30 text-zen-soft text-xs uppercase tracking-wider rounded-full">
                Daily Care
              </span>
              <span className="flex items-center text-zen-text/60 dark:text-zen-dark-text/60 text-sm">
                <Clock size={14} className="mr-1" /> 3 min read
              </span>
              <span className="flex items-center text-zen-text/60 dark:text-zen-dark-text/60 text-sm">
                <Calendar size={14} className="mr-1" /> March 10, 2024
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-zen-text dark:text-zen-dark-text mb-6 leading-tight">
              Mindful Brushing Techniques
            </h1>
            <p className="text-xl text-zen-text/70 dark:text-zen-dark-text/70 leading-relaxed">
              Transform your daily routine into a meditative practice for better
              results and inner calm
            </p>
          </motion.div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 pb-24">
        <div className="prose prose-lg max-w-none">
          <p className="text-zen-text/80 dark:text-zen-dark-text/80 leading-relaxed mb-6">
            Most of us brush our teeth on autopilot—rushing through the motions
            while mentally planning our day or scrolling through our phones. But
            what if this twice-daily ritual could become a moment of presence, a
            small meditation that benefits both your oral health and your mental
            clarity?
          </p>

          <h2 className="text-2xl font-serif text-zen-text dark:text-zen-dark-text mt-12 mb-6">
            The Foundation: Proper Technique
          </h2>
          <p className="text-zen-text/80 dark:text-zen-dark-text/80 leading-relaxed mb-4">
            Before we can make brushing mindful, we need to ensure we're doing
            it correctly. Here's the technique I teach all my patients:
          </p>
          <ol className="space-y-4 mb-6 text-zen-text/80 dark:text-zen-dark-text/80 list-decimal list-inside">
            <li>
              <strong>Angle matters:</strong> Hold your brush at a 45-degree
              angle to your gums. This allows the bristles to clean both the
              tooth surface and the gum line.
            </li>
            <li>
              <strong>Gentle circles:</strong> Use small, circular motions
              rather than aggressive back-and-forth scrubbing. Think massage,
              not scrub.
            </li>
            <li>
              <strong>Systematic approach:</strong> Divide your mouth into
              quadrants. Spend 30 seconds on each section for a full two minutes
              total.
            </li>
            <li>
              <strong>Don't forget:</strong> Brush the outer surfaces, inner
              surfaces, and chewing surfaces. Your tongue deserves attention
              too.
            </li>
          </ol>

          <h2 className="text-2xl font-serif text-zen-text dark:text-zen-dark-text mt-12 mb-6">
            Making It Meditative
          </h2>
          <p className="text-zen-text/80 dark:text-zen-dark-text/80 leading-relaxed mb-4">
            Now that you know the mechanics, let's transform this into a
            mindfulness practice:
          </p>

          <h3 className="text-xl font-medium text-zen-text dark:text-zen-dark-text mt-8 mb-4">
            1. Create a Ritual
          </h3>
          <p className="text-zen-text/80 dark:text-zen-dark-text/80 leading-relaxed mb-6">
            Set the stage for mindfulness. Light a candle, play soft music, or
            simply take three deep breaths before you begin. This signals to
            your brain that this is a moment of self-care, not just another task
            to check off.
          </p>

          <h3 className="text-xl font-medium text-zen-text dark:text-zen-dark-text mt-8 mb-4">
            2. Focus on Sensation
          </h3>
          <p className="text-zen-text/80 dark:text-zen-dark-text/80 leading-relaxed mb-6">
            As you brush, bring your full attention to the physical sensations.
            Notice the bristles against your teeth and gums. Feel the coolness
            of the toothpaste. Observe the taste and texture. When your mind
            wanders (and it will), gently bring it back to these sensations.
          </p>

          <h3 className="text-xl font-medium text-zen-text dark:text-zen-dark-text mt-8 mb-4">
            3. Breathe Consciously
          </h3>
          <p className="text-zen-text/80 dark:text-zen-dark-text/80 leading-relaxed mb-6">
            Coordinate your brushing with your breath. Inhale for four strokes,
            exhale for four strokes. This rhythmic breathing activates your
            parasympathetic nervous system, promoting relaxation and reducing
            morning or evening stress.
          </p>

          <h3 className="text-xl font-medium text-zen-text dark:text-zen-dark-text mt-8 mb-4">
            4. Practice Gratitude
          </h3>
          <p className="text-zen-text/80 dark:text-zen-dark-text/80 leading-relaxed mb-6">
            As you care for your teeth, take a moment to appreciate them. These
            remarkable structures allow you to nourish yourself, speak, and
            smile. This simple gratitude practice can shift your entire mindset
            about oral hygiene.
          </p>

          <h2 className="text-2xl font-serif text-zen-text dark:text-zen-dark-text mt-12 mb-6">
            Choosing the Right Tools
          </h2>
          <p className="text-zen-text/80 dark:text-zen-dark-text/80 leading-relaxed mb-4">
            The tools you use can enhance your mindful practice:
          </p>
          <ul className="space-y-3 mb-6 text-zen-text/80 dark:text-zen-dark-text/80">
            <li className="flex items-start">
              <span className="mr-3 text-zen-sage">•</span>
              <span>
                <strong>Soft-bristled brush:</strong> Protects your enamel and
                gums while being gentle enough for mindful, thorough cleaning.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-zen-sage">•</span>
              <span>
                <strong>Natural toothpaste:</strong> Choose formulas with
                minimal artificial ingredients. The cleaner the ingredients, the
                more you can focus on the experience.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-zen-sage">•</span>
              <span>
                <strong>Timer or music:</strong> A two-minute timer or a
                favorite song can help you maintain the proper duration without
                watching the clock.
              </span>
            </li>
          </ul>

          <h2 className="text-2xl font-serif text-zen-text dark:text-zen-dark-text mt-12 mb-6">
            Building the Habit
          </h2>
          <p className="text-zen-text/80 dark:text-zen-dark-text/80 leading-relaxed mb-6">
            Like any meditation practice, mindful brushing becomes more powerful
            with consistency. Start with just one session per day—perhaps your
            evening routine when you have more time. As it becomes natural,
            extend it to your morning routine as well.
          </p>
          <p className="text-zen-text/80 dark:text-zen-dark-text/80 leading-relaxed mb-6">
            You'll likely notice that this small shift has ripple effects.
            Patients often tell me that starting their day with mindful brushing
            sets a calmer tone for everything that follows. It's a reminder that
            even the most mundane activities can become opportunities for
            presence and self-care.
          </p>

          <div className="bg-zen-soft/10 dark:bg-zen-dark-surface p-8 rounded-2xl mt-12 border border-zen-soft/30 dark:border-zen-dark-border">
            <h3 className="text-xl font-serif text-zen-text dark:text-zen-dark-text mb-4">
              Quick Start Guide
            </h3>
            <ul className="space-y-2 text-zen-text/80 dark:text-zen-dark-text/80">
              <li>• Take three deep breaths before beginning</li>
              <li>• Brush at 45-degree angle with gentle circular motions</li>
              <li>• Focus on physical sensations throughout</li>
              <li>• Spend 30 seconds per quadrant (2 minutes total)</li>
              <li>• End with a moment of gratitude</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-zen-sky dark:border-zen-dark-border">
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-zen-sage/20 rounded-full flex items-center justify-center shrink-0">
              <User size={32} className="text-zen-sage" />
            </div>
            <div>
              <h3 className="font-serif text-lg text-zen-text dark:text-zen-dark-text mb-2">
                Dr. Alexander Volkov
              </h3>
              <p className="text-sm text-zen-text/70 dark:text-zen-dark-text/70 leading-relaxed">
                Dr. Volkov combines advanced clinical expertise with a holistic
                approach to dentistry, believing that true oral health is
                inseparable from overall wellbeing.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center bg-zen-sage/10 dark:bg-zen-dark-surface p-12 rounded-3xl">
          <h3 className="text-2xl font-serif text-zen-text dark:text-zen-dark-text mb-4">
            Want to Learn More?
          </h3>
          <p className="text-zen-text/70 dark:text-zen-dark-text/70 mb-6">
            Schedule a consultation to discover personalized techniques for your
            oral health journey.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-zen-text text-zen-white dark:bg-zen-dark-text dark:text-zen-dark-bg rounded-full font-medium hover:shadow-lg transition-all"
          >
            Book Consultation
          </Link>
        </div>
      </article>
    </div>
  );
};

export default MindfulBrushing;
