import { useState, useEffect } from "react";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import {
  BsFillTelephoneOutboundFill,
  BsFillChatLeftTextFill,
} from "react-icons/bs";

export const Post = ({ title, body, image }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const imageBuilder = imageUrlBuilder({
      projectId: "dsgnvorm",
      dataset: "production",
    });

    setImageUrl(imageBuilder.image(image));
  }, [image]);

  return (
    <>
      <div className="pt-20 w-full lg:w-2/5 m-auto">
        <h1 className="text-white pt-20 text-center text-5xl">{title}</h1>
        {imageUrl && (
          <img className=" w-4/5 m-auto" alt="Article Image" src={imageUrl} />
        )}

        <div className="text-justify text-white text-lg">
          <BlockContent
            className="prose m-auto prose-p:text-white prose-li:marker:text-red-500 prose-strong:text-emerald-400 prose-li:text-white text-center leading-loose"
            blocks={body}
          />
        </div>
        <div className="md:hidden flex justify-center pt-8">
          <a
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
          </a>
          <a
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
          </a>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  if (!pageSlug) {
    return {
      notfound: true,
    };
  }
  const query = encodeURIComponent(
    `*[ _type == "posts" && slug.current == "${pageSlug}" ]`
  );
  const url = `https://dsgnvorm.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then((res) => res.json());
  const post = result.result[0];
  console.log(result);

  if (!post) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        body: post.body,
        title: post.title,
        image: post.image,
      },
    };
  }
};

export default Post;
