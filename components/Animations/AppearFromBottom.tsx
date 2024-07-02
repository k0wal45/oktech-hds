"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const AppearFromBottom = ({ children }: any) => {
  const ref: any = useRef();

  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: {
          opacity: 0,
          y: 75,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default AppearFromBottom;
