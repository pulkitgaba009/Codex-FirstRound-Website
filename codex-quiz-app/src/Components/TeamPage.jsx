import { useState } from "react";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function TeamPage() {
  const [team, setTeam] = useState("");
  const navigate = useNavigate();

  const handleTeam = (event) => {
    setTeam(event.target.value.toUpperCase());
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (!team.trim()) return;
    navigate("/rules");
  };

  return (
    <Layout>
      {/* NAVBAR WITH ANIMATION */}
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
          className="h-12 w-12 sm:h-16 sm:w-16 flex items-center"
        >
          <img src="/main_logo.gif" className="w-full h-full object-contain" />
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

      {/* MAIN CONTENT */}
      <div className="pt-24 w-full min-h-screen bg-black/30 flex flex-col justify-center items-center px-4 py-10">
        {/* TITLE */}
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-[Orbitron] text-center text-[#34e47b] font-extrabold 
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
          [text-shadow:_0_0_10px_#3eeb91]"
        >
          CODE KE BOSS <br /> 2025
        </motion.h1>

        {/* SUBTITLE */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="font-[Montserrat] font-semibold text-center 
          text-2xl sm:text-3xl md:text-4xl 
          text-[#fcf53a] mt-4 
          [text-shadow:_0_0_12px_#FFCC00]"
        >
          THE ULTIMATE CODING BATTLE IS BACK!
        </motion.h2>

        {/* FORM */}
        <form
          className="flex flex-col items-center mt-8 w-full max-w-sm"
          onSubmit={handleForm}
        >
          {/* INPUT FIELD */}
          <motion.input
            required
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileFocus={{ scale: 1.05 }}
            className="font-[Orbitron] text-center text-2xl sm:text-3xl 
      text-[#67dfbb] bg-black/30 border-2 border-[#67dfbb] 
      py-3 w-full
      [text-shadow:_0_0_.5px_#67dfbb,_0_0_1px_#67dfbb,_0_0_9px_#67dfbb]"
            type="text"
            onChange={handleTeam}
            placeholder="Team Name"
            value={team}
          />

          {/* BUTTON */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="font-[Orbitron] mt-5 w-40 sm:w-56 py-3 
      text-2xl sm:text-3xl rounded-2xl 
      bg-[#16fa8f] text-[#001f1a] 
      [box-shadow:_0_0_20px_#00FF9E]
      hover:bg-[#0fbf6d]"
            type="submit" // ✔ form submission triggers required
          >
            Start
          </motion.button>
        </form>

        {/* TAGLINE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-[#53edc3] text-xl sm:text-2xl md:text-3xl mt-6 
          [text-shadow:_0_0_.5px_#67dfbb,_0_0_1px_#67dfbb,_0_0_9px_#67dfbb]"
        >
          Gear up, code hard, and rule the console.
        </motion.p>

        {/* ADMIN BUTTON */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="fixed bottom-6 right-6"
        >
          <motion.button
            onClick={() => navigate("/adminAuth")}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.9 }}
            className="font-[Orbitron] bg-[#fa1616] text-white font-semibold 
            px-4 py-2 text-lg sm:text-xl rounded-2xl 
            [box-shadow:_0_0_15px_#fa1616] 
            hover:bg-[#8d1111]"
          >
            <i className="fa-solid fa-circle-user"></i> &nbsp; Admin
          </motion.button>
        </motion.div>
      </div>
    </Layout>
  );
}

export default TeamPage;
