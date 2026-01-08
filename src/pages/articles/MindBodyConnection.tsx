import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, Calendar, ArrowLeft, User } from "lucide-react";

const MindBodyConnection = () => {
  return (
    <div className="pt-24 min-h-screen bg-zen-white dark:bg-zen-dark-bg transition-colors duration-300">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-6 py-6">
        <Link
          to="/articles"
          className="flex items-center text-zen-text/60 dark:text-zen-dark-text/60 hover:text-zen-text dark:hover:text-zen-dark-text transition-colors text-sm"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Articles
        </Link>
      </div>

      {/* Hero */}
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
              <span className="px-3 py-1 bg-zen-sage/20 text-zen-sage text-xs uppercase tracking-wider rounded-full">
                Holistic Health
              </span>
              <span className="flex items-center text-zen-text/60 dark:text-zen-dark-text/60 text-sm">
                <Clock size={14} className="mr-1" /> 5 min read
              </span>
              <span className="flex items-center text-zen-text/60 dark:text-zen-dark-text/60 text-sm">
                <Calendar size={14} className="mr-1" /> March 15, 2024
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-zen-text dark:text-zen-dark-text mb-6 leading-tight">
              The Mind-Body Connection in Oral Health
            </h1>
            <p className="text-xl text-zen-text/70 dark:text-zen-dark-text/70 leading-relaxed">
              Understanding how your mental state directly impacts your dental
              wellness
            </p>
          </motion.div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-6 pb-24">
        <div className="prose prose-lg max-w-none">
          <p className="text-zen-text/80 dark:text-zen-dark-text/80 leading-relaxed mb-6">
            For centuries, Eastern medicine has recognized what Western science
            is only now beginning to understand: the profound connection between
            our mental state and physical health. Nowhere is this more evident
            than in the relationship between stress, anxiety, and oral health.
          </p>

          <h2 className="text-2xl font-serif text-zen-text dark:text-zen-dark-text mt-12 mb-6">
            How Stress Manifests in Your Mouth
          </h2>
          <p className="text-zen-text/80 dark:text-zen-dark-text/80 leading-relaxed mb-4">
            When we experience chronic stress, our bodies enter a prolonged
            state of fight-or-flight. This physiological response doesn't just
            affect our cardiovascular system or sleep patterns—it has direct
            consequences for our oral health.
          </p>
          <p className="text-zen-text/80 dark:text-zen-dark-text/80 leading-relaxed mb-6">
            <strong>Bruxism (teeth grinding)</strong> is perhaps the most common
            stress-related dental issue. Many patients unconsciously clench
            their jaws during the day or grind their teeth at night, leading to
            worn enamel, jaw pain, and even cracked teeth. This habit is so
            closely tied to stress that we often see improvement simply by
            addressing the underlying anxiety.
          </p>

          <h2 className="text-2xl font-serif text-zen-text dark:text-zen-dark-text mt-12 mb-6">
            The Gut-Mouth Axis
          </h2>
          <p className="text-zen-text/80 dark:text-zen-dark-text/80 leading-relaxed mb-4">
            Recent research has illuminated the fascinating connection between
            our oral microbiome and gut health. The bacteria in your mouth don't
            exist in isolation—they're part of a complex ecosystem that extends
            throughout your digestive system.
          </p>
          <p className="text-zen-text/80 dark:text-zen-dark-text/80 leading-relaxed mb-6">
            When stress disrupts your gut flora, it can lead to inflammation
            that manifests as gum disease. Conversely, poor oral health can
            introduce harmful bacteria into your digestive system, creating a
            cycle that affects your overall wellbeing. This is why we take a
            holistic approach, considering your entire health picture rather
            than just treating isolated symptoms.
          </p>

          <h2 className="text-2xl font-serif text-zen-text dark:text-zen-dark-text mt-12 mb-6">
            Mindfulness Practices for Better Oral Health
          </h2>
          <p className="text-zen-text/80 dark:text-zen-dark-text/80 leading-relaxed mb-4">
            The good news is that by cultivating awareness and reducing stress,
            we can significantly improve our oral health. Here are practices I
            recommend to my patients:
          </p>
          <ul className="space-y-3 mb-6 text-zen-text/80 dark:text-zen-dark-text/80">
            <li className="flex items-start">
              <span className="mr-3 text-zen-sage">•</span>
              <span>
                <strong>Conscious breathing:</strong> Take three deep breaths
                before brushing. This simple act transforms routine hygiene into
                a mindful practice.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-zen-sage">•</span>
              <span>
                <strong>Body scanning:</strong> Throughout the day, check in
                with your jaw. Are you clenching? Gently release the tension.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-zen-sage">•</span>
              <span>
                <strong>Meditation:</strong> Even 10 minutes daily can reduce
                cortisol levels and decrease inflammation throughout your body,
                including your gums.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-zen-sage">•</span>
              <span>
                <strong>Gratitude practice:</strong> Studies show that positive
                emotions strengthen immune function, which helps fight oral
                bacteria.
              </span>
            </li>
          </ul>

          <h2 className="text-2xl font-serif text-zen-text dark:text-zen-dark-text mt-12 mb-6">
            A Holistic Approach to Dental Care
          </h2>
          <p className="text-zen-text/80 dark:text-zen-dark-text/80 leading-relaxed mb-4">
            At our practice, we don't just look at teeth—we consider the whole
            person. This means discussing sleep quality, stress levels, diet,
            and lifestyle factors that influence oral health. It means creating
            a calm, spa-like environment where dental visits become restorative
            rather than stressful.
          </p>
          <p className="text-zen-text/80 dark:text-zen-dark-text/80 leading-relaxed mb-6">
            When patients understand the mind-body connection, they become
            active participants in their own wellness. They see brushing not as
            a chore but as an act of self-care. They recognize that managing
            stress isn't just good for their mental health—it's essential for
            their smile.
          </p>

          <div className="bg-zen-sky/20 dark:bg-zen-dark-surface p-8 rounded-2xl mt-12 border border-zen-sky/30 dark:border-zen-dark-border">
            <h3 className="text-xl font-serif text-zen-text dark:text-zen-dark-text mb-4">
              Key Takeaways
            </h3>
            <ul className="space-y-2 text-zen-text/80 dark:text-zen-dark-text/80">
              <li>
                • Chronic stress directly impacts oral health through bruxism
                and inflammation
              </li>
              <li>
                • The oral microbiome is connected to gut health and overall
                wellness
              </li>
              <li>
                • Mindfulness practices can reduce stress-related dental issues
              </li>
              <li>
                • A holistic approach considers mental and physical health
                together
              </li>
            </ul>
          </div>
        </div>

        {/* Author Bio */}
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

        {/* CTA */}
        <div className="mt-16 text-center bg-zen-sage/10 dark:bg-zen-dark-surface p-12 rounded-3xl">
          <h3 className="text-2xl font-serif text-zen-text dark:text-zen-dark-text mb-4">
            Ready to Experience Mindful Dentistry?
          </h3>
          <p className="text-zen-text/70 dark:text-zen-dark-text/70 mb-6">
            Book a consultation and discover how holistic care can transform
            your oral health.
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

export default MindBodyConnection;
