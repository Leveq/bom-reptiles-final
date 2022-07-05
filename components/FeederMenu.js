import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import client from "../lib/sanity";

import menu from "../styles/Feeders.module.css";

const tabs = ["Rats", "Mice", "Live", "Other"];

const FeederMenu = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [mice, setMice] = useState([]);
  const [rat, setRat] = useState([]);
  const [live, setLive] = useState([]);
  const [other, setOther] = useState([]);
  const [filterMice, setFilterMice] = useState([]);
  const [filterRat, setFilterRat] = useState([]);
  const [filterLive, setFilterLive] = useState([]);
  const [filterOther, setFilterOther] = useState([]);

  useEffect(() => {
    const query = '*[_type == "mice"] | order(order asc)';

    client.fetch(query).then((data) => {
      setMice(data);
      setFilterMice(data);
    });
  }, []);

  useEffect(() => {
    const query = '*[_type == "live"] | order(order asc)';

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

  useEffect(() => {
    const query = '*[_type == "other"] | order(order asc)';

    client.fetch(query).then((data) => {
      setOther(data);
      setFilterOther(data);
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
            {selectedTab === "Rats" && (
              <motion.div
                key={selectedTab ? "Rats" : "empty"}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={menu.grid}
              >
                {filterRat.map((rats, index) => (
                  <motion.ul key={index} className={menu.ulGrid}>
                    <span className="text-blue-500">{rats.name}</span>
                    {rats.prices.map((price) => (
                      <li key={price}>{price}</li>
                    ))}
                  </motion.ul>
                ))}
              </motion.div>
            )}

            {selectedTab === "Mice" && (
              <motion.div
                key={selectedTab ? "Mice" : "empty"}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={menu.grid}
              >
                {filterMice.map((mice, index) => (
                  <motion.ul key={index} className={menu.ulGrid}>
                    <span className="text-blue-500">{mice.name}</span>
                    {mice.prices.map((price) => (
                      <li key={price}>{price}</li>
                    ))}
                  </motion.ul>
                ))}
              </motion.div>
            )}
            {selectedTab === "Live" && (
              <motion.div
                key={selectedTab ? "Live" : "empty"}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={menu.grid}
              >
                {filterLive.map((live, index) => (
                  <motion.ul key={index} className={menu.ulGrid}>
                    <span className="text-blue-500">{live.name}</span>
                    {live.prices.map((price) => (
                      <li key={price}>{price}</li>
                    ))}
                  </motion.ul>
                ))}
              </motion.div>
            )}
            {selectedTab === "Other" && (
              <motion.div
                key={selectedTab ? "Other" : "empty"}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={menu.grid}
              >
                {filterOther.map((other, index) => (
                  <motion.ul key={index} className={menu.ulGrid}>
                    <span className="text-blue-500">{other.name}</span>
                    {other.prices.map((price, index) => (
                      <li className="text-start text-xs" key={index}>
                        {price}
                      </li>
                    ))}
                  </motion.ul>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default FeederMenu;
