import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant, slideIn } from "../utils/motion";
import { testimonials } from "../constants";
import { Octocat, avtar } from "../assets";

const FeedbackCard = ({ index, name, link, image, size }) => (
  <motion.div
    variants={slideIn("", "spring", index * 0.5, 0.75)}
    className=" p-10 rounded-3xl w-full"
  >
    <a href={link}>
      <img
        src={image}
        alt={`feedback_by-${name}`}
        className={`${size} object-cover`}
      />
    </a>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px] `}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Let's Connect</p>
          <h2 className={styles.sectionHeadText}>My Socials</h2>
        </motion.div>
      </div>

      <div
        className={`-mt-20 flex flex-wrap md:flex-nowrap ${styles.padding} `}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
