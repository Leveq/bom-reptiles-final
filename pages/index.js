import Head from "next/head";
import Link from "next/link";
import Overview from "../components/Overview";
import Cases from "../components/Cases";
import ContactUs from "../components/Contact";
import Preview from "../components/Preview";
import Team from "../components/Team";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

export const getServerSideProps = async () => {
  const res = await fetch(
    `https://api.unsplash.com/photos/random?query=reptiles&client_id=fF-9ZKA7KuFIpaxfWv-zGRq_VgnY98Lq0jSL--o3V0M&orientation=landscape`
  );
  const data = await res.json();

  return {
    props: { image: data },
  };
};

export default function Home({ image }) {
  return (
    <>
      <Head>
        <title>Welcome to B.O.M Reptiles</title>
      </Head>
      <div>
        <header
          className="
      relative
      h-screen
      after:absolute
      after:inset-0
      after:bg-gradient-to-b
      after:from-transparent
      after:to-emerald-400
      after:opacity-30
      after:brightness-0
      z-0"
        >
          <Image
            className="
        brightness-50"
            alt="Unsplash image"
            src={image.urls.raw}
            layout="fill"
            objectFit="cover"
            priority={true}
            loading="eager"
          />
          <motion.div
            className="
        inset-0
        absolute flex h-full
        text-center
        flex-col
        items-center
        justify-center"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  duration: 0.4,
                },
              },
            }}
          >
            <h1
              className="
          z-100 text-5xl
          text-white
          font-stencil
          2xl:text-7xl"
            >
              Bottom of the Map Reptiles
            </h1>
            <p className="text-xl text-white p-5 leading-loose 2xl:text-2xl 2xl:leading-10">
              We make custom enclosures, provide quality feeders, pet education
              and services <br />
              Serving South Texas
            </p>
            <Link href="/#About">
              <a
                className="rounded-full
          bg-emerald-500
          shadow-lg
          shadow-emerald-400/50
          p-2
          text-white
          shadow-xl
          animate-bounce
          cursor-pointer
          z-10"
              >
                Read More
              </a>
            </Link>
          </motion.div>
        </header>
      </div>
      <Overview />
      <Cases />
      {/* <Preview /> */}
      <Team />
      <ContactUs />
    </>
  );
}
