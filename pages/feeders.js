import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import client from "../lib/sanity";

import FeedStyles from "../styles/Feeders.module.css";

function Feeders() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setanimateCard] = useState({ y: 0, opacity: 1 });
  const [mice, setMice] = useState([]);
  const [rat, setRat] = useState([]);
  const [live, setLive] = useState([]);
  const [filterMice, setFilterMice] = useState([]);
  const [filterRat, setFilterRat] = useState([]);
  const [filterLive, setFilterLive] = useState([]);

  useEffect(() => {
    const query = '*[_type == "mice"]';

    client.fetch(query).then((data) => {
      setMice(data);
      setFilterMice(data);
    });
  }, []);

  useEffect(() => {
    const query = '*[_type == "live"]';

    client.fetch(query).then((data) => {
      setLive(data);
      setFilterLive(data);
    });
  }, []);

  useEffect(() => {
    const query = '*[_type == "rat"]';

    client.fetch(query).then((data) => {
      setRat(data);
      setFilterRat(data);
    });
  }, []);

  const handleFeederFilter = (item) => {
    setActiveFilter(item);
    setanimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setanimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterMice(mice);
        setFilterRat(rat);
        setFilterLive(live);
      } else {
        setFilterMice(mice.filter((mice) => mice.tags.includes(item))) ||
          setFilterRat(rat.filter((rat) => rat.tags.includes(item))) ||
          setFilterLive(live.filter((live) => live.tags.includes(item)));
      }
    }, 500);
  };
  console.log(activeFilter);

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
        <div
          className="
      flex
      mb-4
      items-center
      justify-center"
        >
          {["Rats", "Mice", "Live"].map((item, index) => (
            <motion.div
              whileTap={{ scale: 0.9 }}
              key={index}
              onClick={() => handleFeederFilter(item)}
              className={`
          bg-emerald-400
          py-2
          px-4
          m-3
          text-center
          rounded-lg
          text-sm
          font-semibold
          hover:bg-emerald-200
          cursor-pointer
          ${
            activeFilter === item
              ? "shadow-lg shadow-emerald-300/50"
              : "shadow-lg"
          }`}
            >
              {item}
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center my-8">
          <motion.div
            animate={animateCard}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className={`
        grid-cols-4
        gap-4
        mx-4
        md:mb-0
        mb-14
        h-full
        auto-rows-min
        auto-cols-min
        items-center
        justify-center
        whitespace-nowrap
        max-w-max
        rounded
        overflow-hidden
        shadow-2xl
        ${
          activeFilter === "Mice" || activeFilter == "All" ? "grid" : "hidden"
        }`}
          >
            {filterMice.map((mice, index) => (
              <div className="h-26" key={index}>
                <ul className="py-4 px-1 mx-1">
                  <li className="font-bold text-emerald-400">{mice.name}</li>
                  <li
                    className="
               font-normal
               text-white"
                  >
                    <span
                      className="
                 text-red-500
                 font-bold"
                    >
                      {mice.quantity}
                    </span>{" "}
                    - ${mice.price}
                  </li>
                  <li
                    className="
               font-normal
               text-white"
                  >
                    <span
                      className="
                 text-red-500
                 font-bold"
                    >
                      {mice.quantity6}
                    </span>{" "}
                    - ${mice.price6}
                  </li>
                  <li
                    className="
               font-normal
               text-white"
                  >
                    <span
                      className="
                 text-red-500
                 font-bold"
                    >
                      {mice.quantity12}
                    </span>{" "}
                    - ${mice.price12}
                  </li>
                </ul>
              </div>
            ))}
          </motion.div>
          <motion.div
            animate={animateCard}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className={`
        rats
        grid-cols-4
        gap-4
        mx-4
        min-h-80
        mb-14
        auto-rows-min
        auto-cols-min
        items-center
        justify-center
        whitespace-nowrap
        max-w-max
        h-full
        rounded
        overflow-hidden
        shadow-2xl
        ${activeFilter == "Rats" || activeFilter == "All" ? "grid" : "hidden"}`}
          >
            {filterRat.map((rat, index) => (
              <div className="h-26" key={index}>
                <ul className="py-2 px-1 mx-1">
                  <li className="font-bold text-emerald-400">{rat.name}</li>
                  <li
                    className="
               font-normal
               text-white"
                  >
                    <span
                      className="
                 font-bold
                 text-red-500"
                    >
                      {rat.quantity}
                    </span>{" "}
                    - ${rat.price}
                  </li>
                  <li
                    className="
               font-normal
               text-white"
                  >
                    <span
                      className="
                 font-bold
                 text-red-500"
                    >
                      {rat.quantity6}
                    </span>{" "}
                    - ${rat.price6}
                  </li>
                  <li
                    className="
               font-normal
               text-white"
                  >
                    <span
                      className="
                 font-bold
                 text-red-500"
                    >
                      {rat.quantity12}
                    </span>{" "}
                    - ${rat.price12}
                  </li>
                </ul>
              </div>
            ))}
          </motion.div>
          <motion.div
            animate={animateCard}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className={`
        grid-cols-4
        gap-1
        mx-4
        md:mb-0
        mb-14
        h-full
        auto-rows-min
        auto-cols-min
        items-center
        justify-center
        whitespace-nowrap
        max-w-max
        rounded
        overflow-hidden
        shadow-2xl
        ${activeFilter == "Live" || activeFilter == "All" ? "grid" : "hidden"}`}
          >
            {filterLive.map((live, index) => (
              <div className="h-26" key={index}>
                <ul className="py-4 px-1 mx-1">
                  <li className="text-xs md:text-sm font-bold text-emerald-400">
                    {live.name}
                  </li>
                  <li
                    className="
               font-normal
               text-white"
                  >
                    <span
                      className="
                 text-red-500
                 md:font-bold
                 font-semibold"
                    >
                      {live.quantity}
                    </span>{" "}
                    - ${live.price}
                  </li>
                  <li
                    className="
               font-normal
               text-white"
                  >
                    <span
                      className="
                 text-red-500
                 md:font-bold
                 font-semibold"
                    >
                      {live.quantity2}
                    </span>{" "}
                    - ${live.price2}
                  </li>
                  <li
                    className="
               font-normal
               text-white"
                  >
                    <span
                      className="
                 text-red-500
                 md:font-bold
                 font-semibold"
                    >
                      {live.quantity3}
                    </span>{" "}
                    - ${live.price3}
                  </li>
                  <li
                    className="
               font-normal
               text-white"
                  >
                    <span
                      className="
                 text-red-500
                 md:font-bold
                 font-semibold"
                    >
                      {live.quantity4}
                    </span>{" "}
                    - ${live.price4}
                  </li>
                  <li
                    className="
               font-normal
               text-white"
                  >
                    <span
                      className="
                 text-red-500
                 md:font-bold
                 font-semibold"
                    >
                      {live.quantity5}
                    </span>{" "}
                    - ${live.price5}
                  </li>
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Feeders;
