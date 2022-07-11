import imageUrlBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import eduStyles from "../styles/Education.module.css";
import { motion } from "framer-motion";

const Education = ({ posts }) => {
  const router = useRouter();
  const [mappedPosts, setMappedPosts] = useState([]);

  useEffect(() => {
    if (posts.length) {
      const imageBuilder = imageUrlBuilder({
        projectId: "dsgnvorm",
        dataset: "production",
      });

      setMappedPosts(
        posts.map((p) => {
          return {
            ...p,
            image: imageBuilder.image(p.image).width(550).height(250),
          };
        })
      );
    } else {
      setMappedPosts([]);
    }
  }, [posts]);

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={eduStyles.hero}>
        <h1 className={eduStyles.linear__w}>Education</h1>
        <h1 className="pt-20 text-center text-white text-3xl">Recent Posts</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center h-full container">
        {mappedPosts.length ? (
          mappedPosts.map((p, index) => (
            <div
              onClick={() => router.push(`/posts/${p.slug.current}`)}
              className="flex
              cursor-pointer
              h-full
              relative
              text-center
              flex-col
              justify-center
              m-8
              rounded-lg
              shadow-lg
              2xl:max-w-2xl
              max-w-4xl
              md:hover:scale-110
              transition ease-in-out
              delay-100
              duration-300"
              key={index}
            >
              <h2 className="text-emerald-400 font-stencil text-2xl pb-4">
                {p.title}
              </h2>
              <h3 className="text-white pb-2">
                {new Date(p.publishedAt).toDateString()}
              </h3>
              <img className="rounded-lg" alt="Article Image" src={p.image} />
            </div>
          ))
        ) : (
          <>There are no posts</>
        )}
      </div>
    </motion.div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const query = encodeURIComponent(
    '*[_type == "posts" && publishedAt < now()] | order(publishedAt desc)'
  );
  const url = `https://dsgnvorm.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then((res) => res.json());

  if (!result.result || !result.result.length) {
    return {
      props: {
        posts: [],
      },
    };
  } else {
    return {
      props: {
        posts: result.result,
      },
    };
  }
};

export default Education;
