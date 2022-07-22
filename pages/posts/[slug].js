import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import { BsArrowLeft } from "react-icons/bs";

export const Post = ({ title, body, image }) => {
  const router = useRouter();
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
        <div className="flex justify-center pt-12">
          <button
            className="
            inline-flex
            items-center
            justify-between
            rounded-full
            bg-red-700
            text-white
            text-sm
            px-5
            py-2.5
            drop-shadow-lg
            font-medium"
            type="button"
            onClick={() => router.back()}
          >
            <BsArrowLeft className="pr-1" /> Back
          </button>
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
