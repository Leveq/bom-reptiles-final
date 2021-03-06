import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactUs() {
  // States for contact form fields
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  //   Form validation state
  const [errors, setErrors] = useState({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Send");

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  //   Handling form submit

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");

        // Reset form fields
        setFullname("");
        setEmail("");
        setMessage("");
        setSubject("");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
      // Reset form fields
      setFullname("");
      setEmail("");
      setMessage("");
      setSubject("");
    }
    console.log(fullname, email, subject, message);
  };

  return (
    <div
      id="contactus"
      className="
    flex
    lg:flex-row
    md:flex-col
    items-center
    justify-center
    flex-row
    flex-col
    w-full"
    >
      <motion.div
        className="
    container
    w-full
    lg:w-1/2
    mx-0
    basis-5/12"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
          },
        }}
      >
        <form
          onSubmit={handleSubmit}
          className="
          rounded-lg
          flex
          flex-col
          px-6
          py-6
          bg-transparent"
        >
          <h1
            className="
          text-2xl
          font-bold
          text-white
          pb-5"
          >
            Send a <span className="text-emerald-400">message</span>
          </h1>

          <label
            htmlFor="fullname"
            className="
            block
            uppercasetracking-wide
            text-emerald-400
            text-xs
            font-bold
            mb-2"
          >
            NAME <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={fullname}
            onChange={(e) => {
              setFullname(e.target.value);
            }}
            name="fullname"
            className="
            appearance-none
            block w-full
            bg-gray-200
            text-gray-700
            border
            border-gray-200
            rounded
            py-3
            px-4
            mb-3
            leading-tight
            focus:outline-none
            focus:bg-white
            focus:border-gray-500"
          />
          {errors?.fullname && (
            <motion.p
              animate={{ x: [33, 0, 10] }}
              transition={{ duration: 0.3 }}
              className="
            text-red-500 p-1"
            >
              Name cannot be empty.
            </motion.p>
          )}

          <label
            htmlFor="email"
            className="
            block
            uppercase
            tracking-wide
            text-emerald-400
            text-xs
            font-bold
            mb-2"
          >
            E-mail <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="
            appearance-none
            block w-full
            bg-gray-200
            text-gray-700
            border
            border-gray-200
            rounded
            py-3
            px-4
            mb-3
            leading-tight
            focus:outline-none
            focus:bg-white
            focus:border-gray-500"
          />
          {errors?.email && (
            <motion.p
              animate={{ x: [33, 0, 10] }}
              transition={{ duration: 0.3 }}
              className="
            text-red-500 p-1"
            >
              Email cannot be empty.
            </motion.p>
          )}

          <label
            htmlFor="subject"
            className="block
            uppercase
            tracking-wide
            text-emerald-400
            text-xs
            font-bold
            mb-2"
          >
            Subject <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            className="
            appearance-none
            block
            w-full
            bg-gray-200
            text-gray-700
            border
            border-gray-200
            rounded
            py-3
            px-4
            mb-3
            leading-tight
            focus:outline-none
            focus:bg-white
            focus:border-gray-500"
          />
          {errors?.subject && (
            <motion.p
              animate={{ x: [33, 0, 10] }}
              transition={{ duration: 0.3 }}
              className="
            text-red-500
            p-1"
            >
              Subject cannot be empty.
            </motion.p>
          )}

          <label
            htmlFor="message"
            className="
            block
            uppercase
            tracking-wide
            text-emerald-400
            text-xs
            font-bold
            mb-2"
          >
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className="
            no-resize
            appearance-none
            block
            w-full
            bg-gray-200
            text-gray-700
            border
            border-gray-200
            rounded
            py-3
            px-4
            mb-3
            leading-tight
            focus:outline-none
            focus:bg-white
            focus:border-gray-500 
            h-48
            resize-none"
          ></textarea>
          {errors?.message && (
            <motion.p
              animate={{ x: [33, 0, 10] }}
              transition={{ duration: 0.3 }}
              className="
            text-red-500
            p-1"
            >
              Message body cannot be empty.
            </motion.p>
          )}

          <div
            className="
          flex
          w-full
          flex-row
          items-center
          justify-start"
          >
            <button
              type="submit"
              className="px-10
              w-full
              mt-4
              py-2
              bg-emerald-400
              text-gray-50
              rounded-md
              text-lg
              font-bold
              text-center
              shadow-xl"
            >
              {buttonText}
            </button>
          </div>
          {showSuccessMessage && (
            <p className="animate-pulse text-emerald-400 font-bold my-2">
              Thanks!! Your message has been sent ????
            </p>
          )}
          {showFailureMessage && (
            <p className="text-red-500">
              Oops! Something went wrong, please try again.
            </p>
          )}
        </form>
      </motion.div>
      <motion.div className="container lg:w-1/2 mx-0 md:items-center">
        <iframe
          className="mb-3 mx-0 basis-1/2 lg:w-10/12 lg:mt-6"
          width="100%"
          height="300"
          frameBorder="0"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCO-jyW66C7l6GKQn6PDUC4_MQlfhsbumQ&q=Bom+Reptiles,Angleton+Texas"
          allowFullScreen
        ></iframe>
        <motion.p
          className="
          pl-2
          text-start
          text-white
          font-bold"
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
          Bottom of the Map Reptiles <br />
          610 E Orange St &nbsp; Angleton, TX 77515 <br />
          <br />
          <a
            className="
          underline
          text-blue-300"
            target="_blank"
            rel="noreferrer"
            href="mailto:contact@bomreptiles.com"
          >
            contact@bomreptiles.com
          </a>{" "}
          <br />
          <br />
          <a
            className="
          underline
          text-blue-300"
            target="_blank"
            rel="noreferrer"
            href="tel:9792151378"
          >
            (979) 215-1378
          </a>
        </motion.p>
      </motion.div>
    </div>
  );
}
