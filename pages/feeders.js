import React, { useState, useEffect } from "react";
import FeederMenu from "../components/FeederMenu";
import { motion } from "framer-motion";

import FeedStyles from "../styles/Feeders.module.css";

function Feeders() {
  return (
    <>
      <div
        className="
      flex
      flex-col
      relative
      h-full
      pt-20"
      >
        <motion.h1 className={FeedStyles.linear__w}>Feeders</motion.h1>
        <motion.p
          className="
        text-center
        text-xl
        text-white
        p-5
        leading-loose
        2xl:text-2xl
        2xl:leading-10"
        >
          Quality Frozen and Live Feeders
        </motion.p>
        <motion.p
          className="
        italic
        text-blue-400
        text-center
        text-sm
        md:text-lg
        p-2
        leading-loose
        2xl:text-xl
        2xl:leading-8"
        >
          By appointment only. Contact us to place an order!
        </motion.p>
        <motion.p
          className="
        italic
        text-blue-400
        text-center
        text-xs
        pb-2
        md:text-sm
        leading-loose
        2xl:text-sm
        2xl:leading-8"
        >
          Prices subject to change
        </motion.p>
      </div>
      <FeederMenu />
    </>
  );
}

export default Feeders;
