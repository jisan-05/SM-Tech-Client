import React from "react";
import { motion } from "framer-motion";
import image1 from "../../assets/promo-img-1.png";
import image2 from "../../assets/promo-img-2.png";
import image3 from "../../assets/promo-img-3.png";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const WhyChoseUs = () => {
  const cards = [
    {
      image: image1,
      title: "Book Free Consultation",
      text: "Standards in leadership skills synergize optimal expertise rather than innovative leadership skills.",
    },
    {
      image: image2,
      title: "Get Personalized Plan",
      text: "Tailor-made plans that align with your professional goals and individual pace of development.",
    },
    {
      image: image3,
      title: "Start Your Global Journey",
      text: "Expand your reach, learn globally, and unlock new opportunities with certified support.",
    },
  ];

  return (
    <motion.div
      className=""
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Header */}
      <div className="mb-20 text-center">
        <motion.button
          className="btn btn-outline border-gray-600 bg-white hover:bg-gray-200 text-black px-10 rounded-4xl mb-5"
          whileHover={{ scale: 1.05 }}
        >
          Why Chose Us
        </motion.button>
        <motion.h3
          className="md:text-4xl text-3xl text-white"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Explore Yourself All Over The World
        </motion.h3>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="max-w-[340px] mx-auto text-center space-y-6 bg-white/10 rounded-2xl p-6 hover:shadow-xl transition duration-300"
            custom={i}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={card.image} alt={card.title} className="mx-auto" />
            <h3 className="text-2xl font-semibold text-white">
              {card.title}
            </h3>
            <p className="text-white text-sm">{card.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default WhyChoseUs;
