import { useState, useEffect } from "react";
import client from "../lib/sanity";

import eduStyles from "../styles/Education.module.css";

const Education = () => {
  const [post, setPosts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "posts"]';

    client.fetch(query).then((data) => {
      setPosts(data);
    });
  }, []);

  return (
    <>
      <div className={eduStyles.hero}>
        <h1 className={eduStyles.linear__w}>Education</h1>
      </div>
      <article className="container relative h-44">
        <h1 className="text-3xl text-white font-stencil text-center">
          No Posts to show at this time
        </h1>
        <h2 className="text-2xl text-white text-center font-stencil">
          Please check back later
        </h2>
      </article>
    </>
  );
};

export default Education;
