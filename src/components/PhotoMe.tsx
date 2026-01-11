import { motion } from "framer-motion";
import megaLection from "../assets/images/mega_lection.jpg";
import meSurgery from "../assets/images/me_surgery.jpg";
import straumanLecture from "../assets/images/staruman_lecture.jpg";

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
          className="rounded-2xl flex flex-col items-center justify-center overflow-hidden relative group"
        >
          <img
            src={megaLection}
            alt="Me on lection"
            className="object-cover h-full"
          />
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
          className="rounded-2xl flex flex-col items-center justify-center overflow-hidden relative group"
        >
          <img
            src={meSurgery}
            alt="Me as surgery"
            className="object-cover h-full"
          />
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
           className="rounded-2xl flex flex-col items-center justify-center overflow-hidden relative group"
        >
          <img
            src={straumanLecture}
            alt="Me as lecture"
            className="object-cover h-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PhotoMe;
