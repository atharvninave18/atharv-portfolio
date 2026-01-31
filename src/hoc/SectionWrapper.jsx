import { motion } from "framer-motion";

import { styles } from "../styles";

import { staggerContainer } from "../utils/motion";
import { cn } from "../utils/libs";


const SectionWrapper = ({ children, idName }) => (
  <motion.section
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className={cn(styles.padding, "max-w-7xl mx-auto relative z-0")}
  >
    <span className="hash-span" id={idName}>
      &nbsp;
    </span>
    {children}
  </motion.section>
);

export default SectionWrapper;
