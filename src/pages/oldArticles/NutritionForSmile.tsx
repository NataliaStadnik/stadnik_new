import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, Calendar, ArrowLeft, User } from "lucide-react";

const NutritionForSmile = () => {
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
              <span className="px-3 py-1 bg-zen-sky/50 text-zen-text text-xs uppercase tracking-wider rounded-full">
                Nutrition
              </span>
              <span className="flex items-center text-zen-text/60 dark:text-zen-dark-text/60 text-sm">
                <Clock size={14} className="mr-1" /> 7 min read
              </span>
              <span className="flex items-center text-zen-text/60 dark:text-zen-dark-text/60 text-sm">
                <Calendar size={14} className="mr-1" /> March 5, 2024
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-zen-text dark:text-zen-dark-text mb-6 leading-tight">
              Nutrition for a Radiant Smile
            </h1>
            <p className="text-xl text-zen-text/70 dark:text-zen-dark-text/70 leading-relaxed">
              A comprehensive guide to foods that naturally strengthen enamel
              and support gum health
            </p>
          </motion.div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 pb-24">
        <div className="prose prose-lg max-w-none">
          <p className="text-zen-text/80 dark:text-zen-dark-text/80 leading-relaxed mb-6">
            Your smile is a reflection of what you eat. While we often focus on
            brushing and flossing, the foundation of oral health is built at the
            dinner table. The foods you choose can either strengthen your teeth
            and gums or contribute to decay and inflammation.
          </p>

          <h2 className="text-2xl font-serif text-zen-text dark:text-zen-dark-text mt-12 mb-6">
            Foods That Strengthen Enamel
          </h2>
          <p className="text-zen-text/80 dark:text-zen-dark-text/80 leading-relaxed mb-4">
            Your tooth enamel is the hardest substance in your body, but it's
            not indestructible. These foods help remineralize and protect it:
          </p>

          <h3 className="text-xl font-medium text-zen-text dark:text-zen-dark-text mt-8 mb-4">
            Calcium-Rich Foods
          </h3>
          <p className="text-zen-text/80 dark:text-zen-dark-text/80 leading-relaxed mb-4">
            Calcium is the primary building block of tooth enamel. Include these
            in your daily diet:
          </p>
          <ul className="space-y-2 mb-6 text-zen-text/80 dark:text-zen-dark-text/80">
            <li>
              • <strong>Dairy products:</strong> Milk, cheese, and yogurt
              (choose full-fat, organic when possible)
            </li>
            <li>
              • <strong>Leafy greens:</strong> Kale, collards, and bok choy
              provide calcium without the acidity of dairy
            </li>
            <li>
              • <strong>Almonds:</strong> A handful daily provides calcium and
              healthy fats
            </li>
            <li>
              • <strong>Sardines:</strong> With bones included, these are
              calcium powerhouses
            </li>
          </ul>

          <h3 className="text-xl font-medium text-zen-text dark:text-zen-dark-text mt-8 mb-4">
            Phosphorus Sources
          </h3>
          <p className="text-zen-text/80 dark:text-zen-dark-text/80 leading-relaxed mb-4">
            Phosphorus works with calcium to rebuild enamel. Find it in:
          </p>
          <ul className="space-y-2 mb-6 text-zen-text/80 dark:text-zen-dark-text/80">
            <li>• Wild-caught fish (salmon, mackerel)</li>
            <li>• Eggs (especially the yolks)</li>
            <li>• Pumpkin seeds</li>
            <li>• Brazil nuts</li>
          </ul>

          <h3 className="text-xl font-medium text-zen-text dark:text-zen-dark-text mt-8 mb-4">
            Vitamin D for Absorption
          </h3>
          <p className="text-zen-text/80 dark:text-zen-dark-text/80 leading-relaxed mb-6">
            Without vitamin D, your body can't properly absorb calcium. Get it
            from sunlight exposure, fatty fish, egg yolks, and mushrooms exposed
            to UV light. Many of my patients benefit from supplementation,
            especially during winter months.
          </p>

          <h2 className="text-2xl font-serif text-zen-text dark:text-zen-dark-text mt-12 mb-6">
            Supporting Gum Health
          </h2>
          <p className="text-zen-text/80 dark:text-zen-dark-text/80 leading-relaxed mb-4">
            Healthy gums are the foundation of a healthy smile. These nutrients
            are essential:
          </p>

          <h3 className="text-xl font-medium text-zen-text dark:text-zen-dark-text mt-8 mb-4">
            Vitamin C for Collagen
          </h3>
          <p className="text-zen-text/80 dark:text-zen-dark-text/80 leading-relaxed mb-4">
            Your gums are made largely of collagen, which requires vitamin C for
            production and repair. Include:
          </p>
          <ul className="space-y-2 mb-6 text-zen-text/80 dark:text-zen-dark-text/80">
            <li>• Bell peppers (especially red)</li>
            <li>• Citrus fruits (in moderation due to acidity)</li>
            <li>• Strawberries and kiwi</li>
            <li>• Broccoli and Brussels sprouts</li>
          </ul>

          <h3 className="text-xl font-medium text-zen-text dark:text-zen-dark-text mt-8 mb-4">
            Omega-3 Fatty Acids
          </h3>
          <p className="text-zen-text/80 dark:text-zen-dark-text/80 leading-relaxed mb-6">
            These anti-inflammatory fats are crucial for gum health. Studies
            show that people with higher omega-3 intake have significantly less
            gum disease. Sources include fatty fish, flaxseeds, chia seeds, and
            walnuts.
          </p>

          <h3 className="text-xl font-medium text-zen-text dark:text-zen-dark-text mt-8 mb-4">
            Antioxidants
          </h3>
          <p className="text-zen-text/80 dark:text-zen-dark-text/80 leading-relaxed mb-6">
            Colorful fruits and vegetables provide antioxidants that fight
            inflammation and support immune function. Aim for a rainbow on your
            plate: berries, sweet potatoes, carrots, beets, and dark leafy
            greens.
          </p>

          <h2 className="text-2xl font-serif text-zen-text dark:text-zen-dark-text mt-12 mb-6">
            What to Avoid
          </h2>
          <p className="text-zen-text/80 dark:text-zen-dark-text/80 leading-relaxed mb-4">
            Just as important as what you eat is what you avoid:
          </p>
          <ul className="space-y-3 mb-6 text-zen-text/80 dark:text-zen-dark-text/80">
            <li className="flex items-start">
              <span className="mr-3 text-zen-sage">•</span>
              <span>
                <strong>Refined sugar:</strong> Feeds harmful bacteria that
                produce acid, eroding enamel
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-zen-sage">•</span>
              <span>
                <strong>Acidic beverages:</strong> Soda, sports drinks, and
                excessive citrus juice weaken enamel
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-zen-sage">•</span>
              <span>
                <strong>Sticky foods:</strong> Dried fruit and candy cling to
                teeth, prolonging sugar exposure
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-zen-sage">•</span>
              <span>
                <strong>Excessive alcohol:</strong> Dries out your mouth,
                reducing protective saliva
              </span>
            </li>
          </ul>

          <h2 className="text-2xl font-serif text-zen-text dark:text-zen-dark-text mt-12 mb-6">
            Sample Daily Menu
          </h2>
          <p className="text-zen-text/80 dark:text-zen-dark-text/80 leading-relaxed mb-4">
            Here's what a tooth-friendly day might look like:
          </p>

          <div className="bg-zen-sky/10 dark:bg-zen-dark-surface p-6 rounded-xl mb-6 border border-zen-sky/30 dark:border-zen-dark-border">
            <p className="text-zen-text/80 dark:text-zen-dark-text/80 mb-4">
              <strong>Breakfast:</strong> Greek yogurt with berries, almonds,
              and a drizzle of honey. Green tea.
            </p>
            <p className="text-zen-text/80 dark:text-zen-dark-text/80 mb-4">
              <strong>Lunch:</strong> Wild salmon over mixed greens with olive
              oil dressing, quinoa, and roasted vegetables.
            </p>
            <p className="text-zen-text/80 dark:text-zen-dark-text/80 mb-4">
              <strong>Snack:</strong> Apple slices with almond butter, or cheese
              with whole grain crackers.
            </p>
            <p className="text-zen-text/80 dark:text-zen-dark-text/80">
              <strong>Dinner:</strong> Grass-fed beef or lentils, steamed
              broccoli, sweet potato, and a side salad.
            </p>
          </div>

          <h2 className="text-2xl font-serif text-zen-text dark:text-zen-dark-text mt-12 mb-6">
            Supplements to Consider
          </h2>
          <p className="text-zen-text/80 dark:text-zen-dark-text/80 leading-relaxed mb-4">
            While food should be your primary source of nutrients, these
            supplements can fill gaps:
          </p>
          <ul className="space-y-2 mb-6 text-zen-text/80 dark:text-zen-dark-text/80">
            <li>
              • <strong>Vitamin D3:</strong> 2000-4000 IU daily, especially in
              winter
            </li>
            <li>
              • <strong>Omega-3 fish oil:</strong> If you don't eat fatty fish
              regularly
            </li>
            <li>
              • <strong>Probiotic:</strong> Supports oral and gut microbiome
            </li>
            <li>
              • <strong>CoQ10:</strong> Particularly beneficial for gum health
            </li>
          </ul>

          <p className="text-zen-text/80 dark:text-zen-dark-text/80 leading-relaxed mb-6">
            Always consult with your healthcare provider before starting new
            supplements, as they can interact with medications or existing
            conditions.
          </p>

          <div className="bg-zen-sage/10 dark:bg-zen-dark-surface p-8 rounded-2xl mt-12 border border-zen-sage/30 dark:border-zen-dark-border">
            <h3 className="text-xl font-serif text-zen-text dark:text-zen-dark-text mb-4">
              Key Nutrition Principles
            </h3>
            <ul className="space-y-2 text-zen-text/80 dark:text-zen-dark-text/80">
              <li>• Prioritize whole, unprocessed foods</li>
              <li>• Include calcium, phosphorus, and vitamin D daily</li>
              <li>• Eat omega-3 rich foods 2-3 times per week</li>
              <li>• Minimize sugar and acidic beverages</li>
              <li>• Stay hydrated with water throughout the day</li>
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
            Personalized Nutrition Guidance
          </h3>
          <p className="text-zen-text/70 dark:text-zen-dark-text/70 mb-6">
            Every patient is unique. Schedule a consultation to discuss your
            specific nutritional needs.
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

export default NutritionForSmile;
