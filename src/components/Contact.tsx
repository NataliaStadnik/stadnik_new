import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  return (
    <section className="py-24 md:py-32 bg-zen-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-zen-soft/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-zen-sage/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
          className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-16 shadow-lg border border-zen-sky"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-zen-text mb-4">
              Begin Your Journey
            </h2>
            <p className="text-zen-text/70">
              We invite you to experience the difference of mindful dentistry.
            </p>
          </div>

          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <label className="block text-sm font-medium text-zen-text/60 mb-2 uppercase tracking-wider">
                  Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full bg-zen-sky/30 border-none rounded-lg px-4 py-3 text-zen-text focus:ring-0 focus:outline-none transition-colors"
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                  />
                  {focusedField === "name" && (
                    <motion.div
                      layoutId="ripple"
                      className="absolute inset-0 border-2 border-zen-soft rounded-lg pointer-events-none"
                      initial={{
                        opacity: 0,
                        scale: 0.95,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 1.05,
                      }}
                    />
                  )}
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-zen-text/60 mb-2 uppercase tracking-wider">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    className="w-full bg-zen-sky/30 border-none rounded-lg px-4 py-3 text-zen-text focus:ring-0 focus:outline-none transition-colors"
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                  />
                  {focusedField === "email" && (
                    <motion.div
                      layoutId="ripple"
                      className="absolute inset-0 border-2 border-zen-soft rounded-lg pointer-events-none"
                      initial={{
                        opacity: 0,
                        scale: 0.95,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 1.05,
                      }}
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-zen-text/60 mb-2 uppercase tracking-wider">
                Message
              </label>
              <div className="relative">
                <textarea
                  rows={4}
                  className="w-full bg-zen-sky/30 border-none rounded-lg px-4 py-3 text-zen-text focus:ring-0 focus:outline-none transition-colors resize-none"
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                />
                {focusedField === "message" && (
                  <motion.div
                    layoutId="ripple"
                    className="absolute inset-0 border-2 border-zen-soft rounded-lg pointer-events-none"
                    initial={{
                      opacity: 0,
                      scale: 0.95,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 1.05,
                    }}
                  />
                )}
              </div>
            </div>

            <div className="text-center pt-4">
              <motion.button
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="px-12 py-4 bg-zen-text text-zen-white rounded-stone font-medium tracking-wide shadow-md hover:shadow-lg transition-all duration-300"
              >
                Request Appointment
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
