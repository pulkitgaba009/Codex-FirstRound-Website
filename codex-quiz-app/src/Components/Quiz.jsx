import Layout from "./Layout";
import { motion } from "framer-motion";

function Quiz() {
  return (
    <Layout>
      {/* Title Nav */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full h-16 sm:h-20 
        bg-black/60 backdrop-blur-md 
        flex items-center justify-between 
        px-4 sm:px-8 z-50"
      >
        {/* Left Logo */}
        <motion.div
          initial={{ scale: 0.7 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-white h-12 py-2 px-10 rounded-full  flex items-center"
        >
          <img src="/UUlogo.png" className="w-full h-full object-contain" />
        </motion.div>

        {/* Middle Title */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="hidden sm:block font-[Orbitron] text-white font-bold 
          text-base sm:text-xl md:text-2xl lg:text-3xl 
          [text-shadow:_0_0_10px_#3eeb91] text-center"
        >
          UTTARANCHAL SCHOOL OF COMPUTING SCIENCES
        </motion.h1>

        {/* Right Glow Logo */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="h-12 w-12 sm:h-16 sm:w-16 p-1 
          border-2 border-indigo-400 rounded-full 
          shadow-[0_0_15px_rgba(99,102,241,0.7)] animate-pulse"
        >
          <img
            src="/IT-utsav.png"
            className="w-full h-full object-cover rounded-full"
          />
        </motion.div>
      </motion.div>


    </Layout>
  );
}

export default Quiz;
