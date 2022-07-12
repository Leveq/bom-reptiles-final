import Layout from "../components/Layout";
import "../styles/globals.css";
import "../styles/tailwind.css";
import { motion, AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={router.route}
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={{
            hidden: {
              opacity: 0,
              x: -200,
              y: 0,
            },
            enter: {
              opacity: 1,
              x: 0,
              y: 0,
            },
            exit: {
              opacity: 0,
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
