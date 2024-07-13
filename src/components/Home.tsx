import { motion } from "framer-motion";

const Button = () => {
  return (
    <motion.button
      initial={{ scale: 0, rotate: 180 }}
      animate={{ rotate: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 500,
      }}
      className='btn btn-primary mx-auto border-b-white'
    >
      Home
    </motion.button>
  );
};

export { Button };
