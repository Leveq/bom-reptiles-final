import { useState, useEffect } from "react";
import { urlFor } from "../../lib/sanity";
import {
  BsFillTelephoneOutboundFill,
  BsFillChatLeftTextFill,
} from "react-icons/bs";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";

export const Service = ({ title, desc, image, whatToExpect }) => {
  console.log(title, desc, image, whatToExpect);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const imageBuilder = imageUrlBuilder({
      projectId: "dsgnvorm",
      dataset: "production",
    });

    setImageUrl(imageBuilder.image(image));
  }, [image]);

  return (
    <div className="h-full pt-20">
      <div className="max-w-6xl md:mt-10 pt-20 h-full m-auto rounded overflow-hidden shadow-xl">
        <h1 className=" pb-12 text-emerald-400 text-center text-5xl">
          {title}
        </h1>
        {imageUrl && (
          <div className="max-h-fit pb-12 flex justify-center">
            <Image
              className="h-fit rounded-lg"
              width={450}
              height={400}
              alt="Services Image"
              src={urlFor(image).url()}
            />
          </div>
        )}
        <p className="mx-12 pb-5 text-justify text-white text-md">{desc}</p>
        <p className="text-justify pb-5 mx-12 text-white italic text-sm">
          <span className="text-blue-400">What to expect</span> : {whatToExpect}
        </p>
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
    `*[ _type == "services" && slug.current == "${pageSlug}" ]`
  );
  const url = `https://dsgnvorm.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then((res) => res.json());
  const service = result.result[0];

  if (!service) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        desc: service.description,
        title: service.title,
        whatToExpect: service.whatToExpect,
        image: service.image,
      },
    };
  }
};

export default Service;
