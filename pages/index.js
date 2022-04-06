import Head from 'next/head'
import Overview from '../components/Overview'
import Cases from '../components/Cases'
import { motion } from 'framer-motion'


export default function Home() {
  return (
    <>
      <header className='container h-screen'>
        <motion.div className='flex h-full text-center flex-col items-center justify-center'
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}>
          <h1 className='text-5xl text-white font-stencil 2xl:text-7xl'>Bottom of the Map Reptiles</h1>
          <p className='text-xl text-white p-5 leading-loose 2xl:text-2xl 2xl:leading-10'> 
          We make custom enclosures, 
          provide quality feeders, 
          pet education and services <br />
          Serving South Texas
          </p>
          <a className='rounded-full
          bg-emerald-500
          shadow-lg
          shadow-emerald-400/50
          p-2
          text-white
          shadow-xl
          font-semibold'>Read More</a>
        </motion.div>
      </header>
      <Overview />
      <Cases />
    </>
  )
}
