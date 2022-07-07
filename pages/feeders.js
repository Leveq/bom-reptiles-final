import Link from "next/link";
import {
  BsFillTelephoneOutboundFill,
  BsFillChatLeftTextFill,
} from "react-icons/bs";
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
      </div>
      <FeederMenu />
      <div className="md:hidden flex justify-center pt-4">
        <motion.button
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
        >
          <span className="pr-1">Call</span> <BsFillTelephoneOutboundFill />
        </motion.button>
        <motion.button
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
        >
          <span className="pr-1">Text</span> <BsFillChatLeftTextFill />
        </motion.button>
      </div>
    </>
  );
}

export default Feeders;
