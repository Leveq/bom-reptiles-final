import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="
      text-center
      lg:text-left
      text-gray-100"
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
      <div
        className="
        flex
        justify-center
        items-center
        lg:justify-between
        p-6 mt-24 border-t
        border-emerald-100"
      >
        <div className="mr-12 hidden lg:block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div className="flex items-center">
          <a
            href="https://www.facebook.com/bomreptiles"
            className="mr-6 text-emerald-400"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="facebook-f"
              className="w-2.5"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
              ></path>
            </svg>
          </a>

          <a href="#!" className="mr-6 text-emerald-400">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              className="w-3.5"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/bomreptiles/?hl=en"
            className="mr-6 text-emerald-400"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="instagram"
              className="w-3.5"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="mx-6 py-10 text-center">
        <div
          className="
        grid
        grid-1
        md:grid-cols-3
        items-center
        lg:grid-cols-3
        gap-8"
        >
          <div
            className="
            flex
            h-full
            w-full
            items-center
            justify-center
            lg:flex-row
            flex-col
            "
          >
            <div className="w-full text-center h-full">
              <Image
                alt="Bomb logo"
                src="/bomblogo.png"
                objectFit="cover"
                height={250}
                width={250}
              />
            </div>

            <p className="text-center">
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div className="h-full flex flex-col justify-center">
            <h6 className="uppercase font-semibold mb-4 flex justify-center">
              Products
            </h6>
            <p className="mb-4">
              <a href="#!" className="text-white">
                Angular
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-white">
                React
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-white">
                Vue
              </a>
            </p>
            <p>
              <a href="#!" className="text-white">
                Laravel
              </a>
            </p>
          </div>
          <div className="h-full flex flex-col justify-center">
            <h6
              className="uppercase
        font-semibold mb-4 flex justify-center"
            >
              Useful links
            </h6>
            <p className="mb-4">
              <a href="#!" className="text-gray-100">
                Pricing
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-gray-100">
                Settings
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-gray-100">
                Orders
              </a>
            </p>
            <p>
              <a href="#!" className="text-gray-100">
                Help
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="text-center bg-neutral-700 drop-shadow-lg p-6">
        <span>© 2022 Copyright:</span> &nbsp;
        <a className="text-gray-100 font-semibold" href="#">
          B.O.M Reptiles
        </a>
      </div>
    </motion.footer>
  );
};

export default Footer;
