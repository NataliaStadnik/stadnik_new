import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, Send, Check } from "lucide-react";
import { useTranslation } from "react-i18next";

const ReviewForm = () => {
  const { t } = useTranslation();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    review: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        className="bg-zen-sage/10 dark:bg-zen-dark-surface p-12 rounded-3xl text-center border border-zen-sage/30 dark:border-zen-dark-border"
      >
        <div className="w-16 h-16 bg-zen-sage rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-lg">
          <Check size={32} />
        </div>
        <h3 className="text-2xl font-serif text-zen-text dark:text-zen-dark-text mb-2">
          {t("feedback.success")}
        </h3>
        <p className="text-zen-text/60 dark:text-zen-dark-text/60">
        {t("feedback.grow")}
        </p>
      </motion.div>
    );
  }

  return (
    <div className="bg-white dark:bg-zen-dark-surface p-8 md:p-12 rounded-3xl shadow-sm border border-zen-sky dark:border-zen-dark-border transition-colors duration-300">
      <div className="text-center mb-10">
        <h3 className="text-3xl font-serif text-zen-text dark:text-zen-dark-text mb-3">
          {t("feedback.formTitle")}
        </h3>
        <p className="text-zen-text/60 dark:text-zen-dark-text/60">
        {t("feedback.honestly")}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
        <div className="flex justify-center mb-8 space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              className="p-1 focus:outline-none transition-transform hover:scale-110"
            >
              <Star
                size={32}
                className={`${
                  star <= (hoverRating || rating)
                    ? "fill-zen-sage text-zen-sage"
                    : "text-zen-text/20 dark:text-zen-dark-text/20"
                } transition-colors duration-200`}
              />
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-zen-text/70 dark:text-zen-dark-text/70 uppercase tracking-wider">
              {t("feedback.name")}
            </label>
            <input
              required
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
              className="w-full px-4 py-3 rounded-xl bg-zen-sky/20 dark:bg-zen-dark-bg border border-transparent focus:border-zen-sage focus:ring-0 text-zen-text dark:text-zen-dark-text transition-all outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-zen-text/70 dark:text-zen-dark-text/70 uppercase tracking-wider">
              {t("feedback.email")}
            </label>
            <input
              required
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
              className="w-full px-4 py-3 rounded-xl bg-zen-sky/20 dark:bg-zen-dark-bg border border-transparent focus:border-zen-sage focus:ring-0 text-zen-text dark:text-zen-dark-text transition-all outline-none"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-zen-text/70 dark:text-zen-dark-text/70 uppercase tracking-wider">
            {t("feedback.review")}
          </label>
          <textarea
            required
            rows={4}
            value={formData.review}
            onChange={(e) =>
              setFormData({
                ...formData,
                review: e.target.value,
              })
            }
            className="w-full px-4 py-3 rounded-xl bg-zen-sky/20 dark:bg-zen-dark-bg border border-transparent focus:border-zen-sage focus:ring-0 text-zen-text dark:text-zen-dark-text transition-all outline-none resize-none"
          />
        </div>

        <div className="pt-4 text-center">
          <button
            type="submit"
            className="px-10 py-4 bg-zen-text dark:bg-zen-dark-text text-zen-white dark:text-zen-dark-bg rounded-full font-medium tracking-wide shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center mx-auto"
          >
            {t("feedback.submit")} <Send size={18} className="ml-2" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
