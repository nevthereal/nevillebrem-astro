import { motion } from "framer-motion";

export const Button = () => {
  return (
    <motion.button
      initial={{ scale: 0.25, rotate: 180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className='btn btn-primary mx-auto text-white font-bold'
    >
      Explore
    </motion.button>
  );
};
