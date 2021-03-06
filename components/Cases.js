import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'


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

function Cases() {
  return (
    <motion.div className='container-xl h-full mx-auto'>
        <div className='flex
        flex-col
        justify-center
        items-center
        container-xl
        mx-auto
        h-1/5
        my-4'>
            <motion.h1 
            initial='hidden'
            whileInView='visible'
            transition={{duration: 0.5}}
            variants={{
              hidden: {
                x: -100,
                opacity: 0
              },
              visible: {
                x: 0,
                opacity: 1
              }
            }}
            className='
            text-3xl
            leading-loose
            font-extrabold
            text-center
            tracking-tight
            text-white
            sm:text-4xl
            2xl:text-6xl'>
            Custom Enclosures
            </motion.h1>
            <motion.p
            initial='hidden'
            whileInView='visible'
            transition={{duration: 0.7}}
            variants={{
              hidden: {
                opacity: 0
              },
              visible: {
                opacity: 1
              }
            }}
            className='text-lg
            text-center
            text-white
            lg:mx-auto
            leading-loose
            py-5
            2xl:text-2xl'>
            Hand crafted environments suitable for your pets comfort and needs
            </motion.p>
        </div>
        <div 
        className='grid
        place-self-center
        grid-cols-1
        grid-rows-1
        md:grid-cols-3
        md:grid-rows-2
        lg:grid-cols-3
        gap-3
        lg:h-full
        text-white
        mx-2'>
            <motion.div 
            initial='hidden'
            whileInView='visible'
            variants={{
              hidden: {
                scale: .3,
                opacity: 0
              },
               visible: {
                 scale: 1,
                 opacity: 1,
                 transition: {
                   duration: .5
                 }
               }
             }}>
            <Image 
            className='object-cover
            rounded-lg
            shadow-lg'
            src="/case6.png"
            layout='responsive' 
            width={480}
            height={480}
            alt='Pet case'/>  
            </motion.div>
            
            <motion.div 
            initial='hidden'
            whileInView='visible'
            variants={{
              hidden: {
                scale: .3,
                opacity: 0
              },
               visible: {
                 scale: 1,
                 opacity: 1,
                 transition: {
                   duration: .5
                 }
               }
             }}>
            <Image 
            className='object-cover
            rounded-lg
            material-shadow'
            src="/case1.png"
            layout='responsive' 
            width={480}
            height={480}
            alt='Pet case'/>  
            </motion.div>

            <motion.div
            initial='hidden'
            whileInView='visible'
            variants={{
              hidden: {
                scale: .3,
                opacity: 0
              },
               visible: {
                 scale: 1,
                 opacity: 1,
                 transition: {
                   duration: .5
                 }
               }
             }}>
            <Image 
            className='object-cover
            rounded-lg'
            src="/case2.png"
            layout='responsive' 
            width={480}
            height={480}
            alt='Pet case'/>  
            </motion.div>

            <motion.div 
            initial='hidden'
            whileInView='visible'
            variants={{
              hidden: {
                scale: .3,
                opacity: 0
              },
               visible: {
                 scale: 1,
                 opacity: 1,
                 transition: {
                   duration: .5
                 }
               }
             }}>
            <Image 
            className='object-cover
            rounded-lg'
            src="/case3.png"
            layout='responsive' 
            width={480}
            height={480}
            alt='Pet case'/>  
            </motion.div>

            <motion.div 
            initial='hidden'
            whileInView='visible'
            variants={{
              hidden: {
                scale: .3,
                opacity: 0
              },
               visible: {
                 scale: 1,
                 opacity: 1,
                 transition: {
                   duration: .5
                 }
               }
             }}>
            <Image 
            className='object-cover
            rounded-lg'
            src="/case4.png"
            layout='responsive' 
            width={480}
            height={480}
            alt='Pet case'/>  
            </motion.div>

            <motion.div 
            initial='hidden'
            whileInView='visible'
            variants={{
              hidden: {
                scale: .3,
                opacity: 0
              },
               visible: {
                 scale: 1,
                 opacity: 1,
                 transition: {
                   duration: .5
                 }
               }
             }}>
            <Image 
            className='object-cover
            rounded-lg'
            src="/case5.png"
            layout='responsive' 
            width={480}
            height={480}
            alt='Pet case'/>  
            </motion.div>
        </div>
    </motion.div>
  )
}

export default Cases