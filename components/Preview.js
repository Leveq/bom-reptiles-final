import Image from "next/image"
import { motion } from "framer-motion"



const Preview = () => {
  return (
    <div className="flex mt-40 lg:m-0 justify-center items-center flex-col w-full h-full lg:h-screen">
      <motion.div className="text-center leading-8">
        <motion.h6
        className="
        text-emerald-400
        font-semibold
        tracking-wide
        uppercase
        p-3">Recources</motion.h6>
        <motion.h1
        className="
        text-3xl
        leading-8
        font-extrabold
        text-center
        tracking-tight
        text-white
        sm:text-4xl
        p-2
        2xl:text-6xl">What we offer</motion.h1>
        <motion.p
        className="
        text-lg
        text-center
        text-white
        lg:mx-auto
        2xl:text-xl
        p-1">Loerm esta oopek sol this lamp Loerm </motion.p>
      </motion.div>

      <div className="flex justify-center items-center flex-col lg:flex-row">

        <motion.div>
          <Image
          layout="intrinsic"
          src='/feedersx3.png'
          alt="Feeders"
          width={640}
          height={640} />
          <motion.p></motion.p>
          <motion.p></motion.p>
        </motion.div>

        <motion.div>
          <Image
          layout="intrinsic"
          src='/feedercrew.png'
          alt="Feeders"
          width={640}
          height={640} />
          <motion.p></motion.p>
          <motion.p></motion.p>
        </motion.div>
  
        <motion.div>
          <Image
          layout="intrinsic"
          src='/feedersx3.png'
          alt="Feeders"
          width={640}
          height={640} />
          <motion.p></motion.p>
          <motion.p></motion.p>
          </motion.div>

      </div>

    </div>
  )
}

export default Preview