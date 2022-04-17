import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import navStyles from '../styles/Navbar.module.css'
import { motion } from "framer-motion";


  const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

  return (
    <>
      <nav className={navStyles.app__navbar}>
        <div className={navStyles.app__navbar_logo}>
          <h1 className="font-shizuru text-2xl text-white 2xl:text-5xl">
            <span className="text-emerald-400">B.O.M</span> Reptiles
          </h1>
        </div>
          <ul className={navStyles.app__navbar_links}>
            <Link href='/'>
              Home
            </Link>
            <Link href='/feeders'>
              Feeders
            </Link>
            <Link href='/supplies'>
              Supplies
            </Link>
            <Link href='/merch'>
              Merch
            </Link>
            <Link href='/services'>
              Services
            </Link>
            <Link href='/education'>
              Education
            </Link>
          </ul>
          <div className={navStyles.app__navbar_menu}>
            <HiMenuAlt4 onClick={() => setToggle(true)} />
            {
              toggle && (
                <motion.div
                initial={{ width: 0 }} 
                animate={{ width: 350 }}>
                  <HiX onClick={() => setToggle(false)}/>
                  <motion.ul
                    variants={container}
                    initial="hidden"
                    animate="show"
                    onClick={() => setToggle(false)}
                    className={navStyles.app__navbar_links}>
                    <Link passHref href='/'>
                      <motion.a variants={item} >Home</motion.a>
                    </Link>
                    <Link passHref href='feeders'>
                    <motion.a  variants={item} >Feeders</motion.a>
                    </Link>
                    <Link passHref href='supplies'>
                    <motion.a variants={item} >Supplies</motion.a>
                    </Link>
                    <Link passHref href='merch'>
                    <motion.a variants={item} >Merch</motion.a>
                    </Link>
                    <Link passHref href='services'>
                    <motion.a variants={item} >Services</motion.a>
                    </Link>
                    <Link passHref href='education'>
                    <motion.a variants={item} >Education</motion.a>
                    </Link>
                  </motion.ul>
                </motion.div>
            )}
            
          </div>
      </nav>
    </>
  );
};

export default Nav