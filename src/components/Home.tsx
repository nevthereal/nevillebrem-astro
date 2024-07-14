import { motion } from "framer-motion";

export const Button = () => {
  return (
    <motion.a
      href='#about'
      initial={{ scale: 0.25 }}
      animate={{ scale: 1 }}
      transition={{
        stiffness: 260,
        damping: 20,
        duration: 0.1,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className='btn btn-primary mx-auto text-white font-bold'
    >
      Explore
    </motion.a>
  );
};
