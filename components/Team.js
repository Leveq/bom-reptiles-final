import { motion } from "framer-motion";
import Image from "next/image";

const Team = () => {
  return (
    <motion.div
      id="team"
      className="
    flex
    flex-col
    justify-center
    items-center
    container
    w-full
    h-full
    mx-auto
    mt-40"
    >
      <motion.h2
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
          },
        }}
        className="
          text-center
          text-emerald-400
          font-semibold
          tracking-wide
          uppercase"
      >
        Contact us
      </motion.h2>
      <motion.p
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        variants={{
          hidden: {
            x: -100,
            opacity: 0,
          },
          visible: {
            x: 0,
            opacity: 1,
          },
        }}
        className="mt-2
          text-3xl
          leading-8
          font-extrabold
          text-center
          tracking-tight
          text-white
          sm:text-4xl
          2xl:text-6xl"
      >
        Who are we?
      </motion.p>
      <div className="flex flex-col lg:flex-row">
        <div
          className="
      p-10
      text-center
      mt-2
      text-center
      leading-relaxed
      text-white
      2xl:text-xl"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {
                scale: 0.3,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              },
            }}
          >
            <Image
              className="rounded-full"
              alt="AJ Stewart"
              layout="intrinsic"
              width={110}
              height={110}
              src="/aj.jpg"
            />{" "}
            <br />
          </motion.div>
          <motion.p
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
              },
            }}
          >
            <span className="text-emerald-400">A.J Stewart</span> <br />
            &quot;Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
            <br />
            Maiores impedit perferendis suscipit eaque, <br />
            iste dolor cupiditate blanditiis ratione.&quot;
          </motion.p>
        </div>
        <div
          className="
      p-10
      text-center
      mt-2
      text-center
      leading-relaxed
      text-white
      2xl:text-xl"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {
                scale: 0.3,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              },
            }}
          >
            <Image
              className="rounded-full"
              alt="Salina"
              layout="intrinsic"
              width={110}
              height={110}
              src="/salina.jpg"
            />{" "}
            <br />
          </motion.div>
          <motion.p
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
              },
            }}
          >
            <span className="text-emerald-400">Salina Nichols</span> <br />
            &quot;Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
            <br />
            Maiores impedit perferendis suscipit eaque, <br />
            iste dolor cupiditate blanditiis ratione.&quot;
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default Team;
