import Layout from "../components/Layout";
import "../styles/globals.css";
import "../styles/tailwind.css";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

// The handler to smoothly scroll the element into view
const handExitComplete = () => {
  if (window !== "undefined") {
    // Get the hash from the url
    const hashId = window.location.hash;

    if (hashId) {
      // Use the hash to find the first element with that id
      const element = document.querySelector(hashId);

      if (element) {
        // Smooth scroll to that elment
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    }
  }
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter onExitComplete={handExitComplete}>
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
