import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import client from "../lib/sanity";

import menu from "../styles/Feeders.module.css";

const tabs = ["Rats", "Mice", "Live", "Other"];

const FeederMenu = ({ currentItem }) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [animateCard, setanimateCard] = useState({ y: 0, opacity: 1 });
  const [mice, setMice] = useState([]);
  const [rat, setRat] = useState([]);
  const [live, setLive] = useState([]);
  const [filterMice, setFilterMice] = useState([]);
  const [filterRat, setFilterRat] = useState([]);
  const [filterLive, setFilterLive] = useState([]);

  useEffect(() => {
    const query = '*[_type == "mice"] | order(order asc)';

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
    const query = '*[_type == "rat"] | order(order asc)';

    client.fetch(query).then((data) => {
      setRat(data);
      setFilterRat(data);
    });
  }, []);

  return (
    <div className={menu.container}>
      <div className={menu.window}>
        <nav className={menu.navMenu}>
          <ul className={menu.ul}>
            {["Rats", "Mice", "Live", "Other"].map((item) => (
              <li
                key={item}
                className={`${menu.li} ${
                  item === selectedTab ? `${menu.selected}` : ""
                }`}
                onClick={() => setSelectedTab(item)}
              >
                {`${item}`}
                {item === selectedTab ? (
                  <motion.div className={menu.underline} layoutId="underline" />
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
        <main>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              className={menu.ulGrid}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {selectedTab === "Rats" && (
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -100, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className={menu.grid}
                >
                  {filterRat.map((rat, index) => (
                    <motion.ul
                      exit={{ y: -100, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className={menu.ulGrid}
                      key={index}
                    >
                      <span className="text-blue-500">{rat.name}</span>
                      <li>{rat.prices[0]}</li>
                      <li>{rat.prices[1]}</li>
                      <li>{rat.prices[2]}</li>
                    </motion.ul>
                  ))}
                </motion.div>
              )}
              {selectedTab === "Mice" && (
                <div className={menu.grid}>
                  {filterMice.map((mice, index) => (
                    <motion.ul
                      className={menu.ulGrid}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      key={index}
                    >
                      <span className="text-blue-500">{mice.name}</span>
                      <li>{mice.prices[0]}</li>
                      <li>{mice.prices[1]}</li>
                      <li>{mice.prices[2]}</li>
                    </motion.ul>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default FeederMenu;
