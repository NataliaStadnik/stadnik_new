import { motion } from "framer-motion";
import ClinicInfo from "../components/ClinicInfo";
import { useTranslation } from "react-i18next";
import ClinicTitle from "../shared/ClinicTitle";
import type { SyntheticEvent } from "react";

export interface FAQItem {
  question: string;
  answer: string;
}

const ContactPage = () => {
  const { t } = useTranslation();

  const faqConfig: FAQItem[] = [
    {
      question: t("contacts.question_1"),
      answer: t("contacts.answer_1"),
    },
    {
      question: t("contacts.question_2"),
      answer: t("contacts.answer_2"),
    },
    {
      question: t("contacts.question_3"),
      answer: t("contacts.answer_3"),
    },
    {
      question: t("contacts.question_4"),
      answer: t("contacts.answer_4"),
    },
    {
      question: t("contacts.question_5"),
      answer: t("contacts.answer_5"),
    },
    {
      question: t("contacts.question_6"),
      answer: t("contacts.answer_6"),
    },
    {
      question: t("contacts.question_7"),
      answer: t("contacts.answer_7"),
    },
  ];

  const handleClick = (e: SyntheticEvent<HTMLDetailsElement>) => {
    const target = e.currentTarget;
    const summaryClicked =
      (e.target as HTMLElement).tagName.toLowerCase() === "summary";
    if (!summaryClicked) {
      e.preventDefault();
      target.open = !target.open;
    }
  };

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
            {t("contacts.contacts")}
          </motion.h1>
          <ClinicTitle />
        </div>
      </div>

      <ClinicInfo />

      <section className="py-24 bg-zen-text dark:bg-zen-dark-surface transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-zen-white dark:text-zen-dark-text mb-12 text-center">
            {t("contacts.faq")}
          </h2>
          <div className="space-y-6">
            {faqConfig.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white/10 dark:bg-zen-dark-bg/50 rounded-xl p-6 cursor-pointer border border-white/20 dark:border-zen-dark-border hover:bg-white/20 dark:hover:bg-zen-dark-bg/70 transition-colors"
                onClick={(e) => {
                  handleClick(e);
                }}
              >
                <summary className="font-medium text-zen-white dark:text-zen-dark-text list-none flex justify-between items-center">
                  {faq.question}
                  <span className="text-zen-sage transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-zen-white/80 dark:text-zen-dark-text/80 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
