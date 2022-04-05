import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import navStyles from '../styles/Navbar.module.css'
import { motion } from "framer-motion";

  const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className={navStyles.app__navbar}>
        <div className={navStyles.app__navbar_logo}>
          <h1 className="font-stencil text-2xl text-white">
            <span className="text-emerald-400">B.O.M</span> Reptiles
          </h1>
        </div>
          <ul className={navStyles.app__navbar_links}>
            <Link className='' href='/'>
              Home
            </Link>
            <Link href='feeders'>
              Feeders
            </Link>
            <Link href='supplies'>
              Supplies
            </Link>
            <Link href='merch'>
              Merch
            </Link>
            <Link href='services'>
              Services
            </Link>
            <Link href='education'>
              Education
            </Link>
          </ul>
          <div className={navStyles.app__navbar_menu}>
            <HiMenuAlt4 onClick={() => setToggle(true)} />
            {
              toggle && (
                <motion.div
                  whileInView={{ x: [300, 0]}}
                  transition={{ duration: 0.85, ease: 'easeOut' }}
                >
                  <HiX onClick={() => setToggle(false)}/>
                  <ul onClick={() => setToggle(false)} className={navStyles.app__navbar_links}>
                    <Link href='/'>
                      Home
                    </Link>
                    <Link href='feeders'>
                      Feeders
                    </Link>
                    <Link href='supplies'>
                      Supplies
                    </Link>
                    <Link href='merch'>
                      Merch
                    </Link>
                    <Link href='services'>
                      Services
                    </Link>
                    <Link href='education'>
                      Education
                    </Link>
                  </ul>
                </motion.div>
            )}
            
          </div>
      </nav>
    </>
  );
};

export default Nav