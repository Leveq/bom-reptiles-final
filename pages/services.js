import { useEffect, useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
import { client, urlFor } from "../lib/sanity";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Image from "next/image";

import { motion } from "framer-motion";

const Services = ({ services }) => {
  const router = useRouter();
  const [mappedServices, setMappedServices] = useState([]);

  useEffect(() => {
    if (services.length) {
      const imageBuilder = imageUrlBuilder({
        projectId: "dsgnvorm",
        dataset: "production",
      });

      setMappedServices(
        services.map((s) => {
          return {
            ...s,
            image: imageBuilder.image(s.image).width(550).height(450),
          };
        })
      );
    } else {
      setMappedServices([]);
    }
  }, [services]);

  return (
    <motion.div
    // initial={{ scale: 0.8, opacity: 0 }}
    // animate={{ scale: 1, opacity: 1 }}
    // exit={{ opacity: 0 }}
    >
      <Header />
      <div
        className="
        flex
        flex-col
        md:flex-row
        justify-center
        h-full"
      >
        <div className="flex h-auto flex-row min-h-full flex-wrap justify-evenly">
          {mappedServices.map((s, index) => (
            <div
              className="flex
              sm:flex-row
              flex-col
              justify-center
              items-center
              mx-3
              my-3
              rounded-lg
              shadow-lg
              2xl:max-w-2xl
              max-w-4xl
              md:max-h-96
              lg:max-w-sm
              md:hover:scale-105
              transition ease-in-out
              delay-100
              duration-300
              cursor-pointer"
              key={index}
              onClick={() => router.push(`/services/${s.slug.current}`)}
            >
              <div className="flex justify-center h-full">
                <Image
                  className="rounded-lg h-full"
                  placeholder="blur"
                  layout="intrinsic"
                  blurDataURL={`/_next/image?url=${s.image}&w=16&q=1`}
                  width={550}
                  height={450}
                  objectFit="cover"
                  src={`${s.image}`}
                  alt={s.name}
                />
              </div>
              <div className="flex flex-col relative break-normal justify-center">
                <h1
                  className="font-bold py-3 px-3 text-xl text-emerald-400"
                  key={s.name}
                >
                  {s.title}
                </h1>
                <p className="py-1 px-3 text-white">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const query = encodeURIComponent('*[_type == "services"]');
  const url = `https://dsgnvorm.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then((res) => res.json());

  if (!result.result || !result.result.length) {
    return {
      props: {
        services: [],
      },
    };
  } else {
    return {
      props: {
        services: result.result,
      },
    };
  }
};

export default Services;
