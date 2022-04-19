import { motion } from "framer-motion"
import Image from "next/image"


const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Team = () => {
  return (
  <motion.div className="
    flex
    flex-col
    justify-center
    items-center
    container
    w-full
    h-full
    mx-auto
    mt-40">
      <motion.h2 
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.9 }} 
          className="
          text-center
          text-emerald-400
          font-semibold
          tracking-wide
          uppercase">
          Contact us
          </motion.h2>
          <motion.p 
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }} className="mt-2
          text-3xl
          leading-8
          font-extrabold
          text-center
          tracking-tight
          text-white
          sm:text-4xl
          2xl:text-6xl">
          Who are we</motion.p>
    <div className="flex flex-col lg:flex-row">
      <div  
      className="
      p-10
      text-center
      mt-2
      text-center
      leading-relaxed
      text-white
      2xl:text-xl">
      <motion.div 
      variant={scaleVariants}
      whileInView={scaleVariants.whileInView}>
        <Image className="rounded-full"
      alt="AJ Stewart" layout="intrinsic" width={110} height={110} src='/aj.png'/> <br />
      </motion.div>
      <motion.p 
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.9 }}>
       <span className="text-emerald-400">A.J Stewart</span> <br />
       &quot;Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
       Maiores impedit perferendis suscipit eaque, <br />
       iste dolor cupiditate blanditiis ratione.&quot;
      </motion.p>
      </div>
      <div className="
      p-10
      text-center
      mt-2
      text-center
      leading-relaxed
      text-white
      2xl:text-xl">
      <motion.div 
      variant={scaleVariants}
      whileInView={scaleVariants.whileInView}>
        <Image className="rounded-full"
      alt="AJ Stewart" layout="intrinsic" width={110} height={110} src='/salina.jpg'/> <br />
      </motion.div>
       <motion.p 
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.9 }}>
       <span className="text-emerald-400">Salina Nichols</span> <br />
       &quot;Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
       Maiores impedit perferendis suscipit eaque, <br />
       iste dolor cupiditate blanditiis ratione.&quot;
      </motion.p>
      </div>
    </div>
  </motion.div>
  )
}

export default Team