import { useEffect, useState } from "react";
import { client, urlFor } from "../lib/sanity";
import Header from "../components/Header";
import Image from "next/image";

const services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const query = '*[_type == "services"]';

    client.fetch(query).then((data) => {
      setServices(data);
    });
  }, []);

  return (
    <>
      <Header />
      <div
        className="
        flex
        py-4
        flex-wrap
        container
        justify-center
        items-center"
      >
        <div className="flex h-auto flex-row flex-wrap justify-evenly">
          {services.map((service, index) => (
            <div
              className="flex
              sm:flex-row
              flex-col
              justify-start
              mx-3
              my-3
              rounded-lg
              shadow-lg
              2xl:max-w-2xl
              max-w-4xl
              h-fit"
              key={service.name}
            >
              <div className="flex justify-self-start">
                <Image
                  className="rounded-lg w-auto h-fit"
                  width={600}
                  height={600}
                  objectFit="cover"
                  src={urlFor(service.imgUrl).url()}
                  alt={service.name}
                />
              </div>
              <div className="flex flex-col relative break-normal justify-center">
                <h1
                  className="font-bold py-3 px-3 text-xl text-emerald-400"
                  key={service.name}
                >
                  {service.title}
                </h1>
                <p className="py-1 px-3 text-white">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default services;
