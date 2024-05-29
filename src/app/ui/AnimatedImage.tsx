"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Image } from "@chakra-ui/react";

const AnimatedImage = ({ itemImg }: { itemImg: string }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0,
        transition: { duration: 0.5, ease: "easeInOut" },
      });
    } else {
      controls.start({
        opacity: 0,
        y: 50,
        scale: 0.8,
        rotate: 15,
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.8, rotate: 15 }}
      animate={controls}
    >
      <Image
        src={itemImg}
        mx="auto"
        w={{ base: "250px", md: "300px" }}
        h={{ base: "250px", md: "300px" }}
        alt=""
      />
    </motion.div>
  );
};

export default AnimatedImage;
