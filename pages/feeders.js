import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createClient } from "next-sanity";
import { config } from "../lib/config";
import Link from "next/link";
import {
  BsFillTelephoneOutboundFill,
  BsFillChatLeftTextFill,
} from "react-icons/bs";

import menu from "../styles/Feeders.module.css";

const tabs = ["Rats", "Mice", "Live", "Other"];

function Feeders({ rats, mice, live, other }) {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <motion.div
    // initial={{ scale: 0.8, opacity: 0 }}
    // animate={{ scale: 1, opacity: 1 }}
    // exit={{ opacity: 0 }}
    >
      <motion.div className={menu.hero}>
        <motion.h1 className={menu.linear__w}>Feeders</motion.h1>
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
          Frozen and Live Feeders
        </motion.p>
      </motion.div>
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
                    <motion.div
                      className={menu.underline}
                      layoutId="underline"
                    />
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
          <main>
            <AnimatePresence exitBeforeEnter initial={false}>
              {selectedTab === "Rats" && (
                <motion.div
                  key={selectedTab ? "Rats" : "empty"}
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {rats.length > 0 && (
                    <div className={menu.grid}>
                      {rats.map((rat) => (
                        <ul className={menu.ulGrid} key={rat._id}>
                          <p className="text-blue-500 font-bold">{rat.name}</p>
                          {rat.prices.map((price) => (
                            <li key={price}>{price}</li>
                          ))}
                        </ul>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}

              {selectedTab === "Mice" && (
                <motion.div
                  key={selectedTab ? "Mice" : "empty"}
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {mice.length > 0 && (
                    <div className={menu.grid}>
                      {mice.map((mice) => (
                        <ul className={menu.ulGrid} key={mice._id}>
                          <p className="text-blue-500 font-bold">{mice.name}</p>
                          {mice.prices.map((price) => (
                            <li key={price}>{price}</li>
                          ))}
                        </ul>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
              {selectedTab === "Live" && (
                <motion.div
                  key={selectedTab ? "Live" : "empty"}
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {live.length > 0 && (
                    <div className={menu.grid}>
                      {live.map((live) => (
                        <ul className={menu.ulGrid} key={live._id}>
                          <p className="text-blue-500 font-bold">{live.name}</p>
                          {live.prices.map((price) => (
                            <li key={price}>{price}</li>
                          ))}
                        </ul>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
              {selectedTab === "Other" && (
                <motion.div
                  key={selectedTab ? "Other" : "empty"}
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {other.length > 0 && (
                    <div className={menu.grid}>
                      {other.map((other) => (
                        <ul className={menu.ulGrid} key={other._id}>
                          <p className="text-blue-500 font-bold">
                            {other.name}
                          </p>
                          {other.prices.map((price) => (
                            <li key={price}>{price}</li>
                          ))}
                        </ul>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </main>
        </div>
      </div>
      <div className="md:hidden flex justify-center pt-8">
        <motion.a
          className="
          inline-flex
          items-center
          rounded-full
          text-white
          bg-pink-600
          drop-shadow-lg
          px-10
          py-2.5
          mr-2
          mb-2
          text-center"
          whileTap={{ scale: 0.9 }}
          href="tel:9792151378"
        >
          <span className="pr-1">Call</span> <BsFillTelephoneOutboundFill />
        </motion.a>
        <motion.a
          className="
          inline-flex
          items-center
          rounded-full
          text-white
          bg-pink-600
          drop-shadow-lg
          px-10
          py-2.5
          ml-2
          mb-2
          text-center"
          whileTap={{ scale: 0.9 }}
          href="sms:9792151378"
        >
          <span className="pr-1">Text</span> <BsFillChatLeftTextFill />
        </motion.a>
      </div>
      <motion.p
        className="
          italic
          text-blue-400
          text-center
          text-sm
          md:text-lg
          pt-12
          leading-loose
          2xl:text-xl
          2xl:leading-8"
      >
        By appointment only.&nbsp;
        <Link href="/#contactus">
          <a className="underline text-emerald-300">Contact</a>
        </Link>
        &nbsp;us to place an order!
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
    </motion.div>
  );
}

const client = createClient({
  ...config,
});

export async function getStaticProps() {
  const rats = await client.fetch(`*[_type == "rat"] | order(order asc)`);
  const mice = await client.fetch(`*[_type == "mice"] | order(order asc)`);
  const live = await client.fetch(`*[_type == "live"] | order(order asc)`);
  const other = await client.fetch(`*[_type == "other"] | order(order asc)`);

  return {
    props: {
      rats,
      mice,
      live,
      other,
    },
  };
}

export default Feeders;
