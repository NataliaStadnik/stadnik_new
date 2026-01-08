import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useScrollToTop } from "../hooks/useScrollToTop";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {
  useScrollToTop();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <AnimatePresence mode="wait">
      <div className="min-h-screen bg-zen-sky dark:bg-zen-dark-bg text-zen-text dark:text-zen-dark-text font-sans selection:bg-zen-soft selection:text-zen-dark flex flex-col transition-colors duration-300">
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-zen-soft origin-left z-[60]"
          style={{
            scaleX,
          }}
        />
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default Layout;
