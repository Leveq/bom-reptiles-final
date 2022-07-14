import { useState, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import client from "../lib/sanity";

import ReactLoading from "react-loading";
import menu from "../styles/Feeders.module.css";

const tabs = ["Rats", "Mice", "Live", "Other"];

const FeederMenu = () => {
  const [isLoading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [mappedMice, setMice] = useState([]);
  const [mappedRat, setRat] = useState([]);
  const [mappedLive, setLive] = useState([]);
  const [mappedOther, setOther] = useState([]);

  useLayoutEffect(() => {
    const query = '*[_type == "mice"] | order(order asc)';

    client.fetch(query).then((data) => {
      setMice(data);
    });
  }, []);

  useLayoutEffect(() => {
    const query = '*[_type == "live"] | order(order asc)';

    client.fetch(query).then((data) => {
      setLive(data);
    });
  }, []);

  useLayoutEffect(() => {
    const query = '*[_type == "rat"] | order(order asc)';

    client.fetch(query).then((data) => {
      setRat(data);
      setLoading(false);
    });
  }, []);

  useLayoutEffect(() => {
    const query = '*[_type == "other"] | order(order asc)';

    client.fetch(query).then((data) => {
      setOther(data);
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
                isLoading={isLoading}
                key={selectedTab ? "Rats" : "empty"}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={isLoading ? `${menu.hidden}` : `${menu.grid}`}
              >
                {mappedRat.map((rats, index) => (
                  <motion.ul key={index} className={menu.ulGrid}>
                    <span className="text-blue-500 font-semibold">
                      {rats.name}
                    </span>
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
                {mappedMice.map((mice, index) => (
                  <motion.ul key={index} className={menu.ulGrid}>
                    <span className="text-blue-500 font-semibold">
                      {mice.name}
                    </span>
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
                {mappedLive.map((live, index) => (
                  <motion.ul key={index} className={menu.ulGrid}>
                    <span className="text-blue-500 font-semibold">
                      {live.name}
                    </span>
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
                {mappedOther.map((other, index) => (
                  <motion.ul key={index} className={menu.ulGrid}>
                    <span className="text-blue-500 font-semibold">
                      {other.name}
                    </span>
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
