"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Framer Motion Variants
import {AnimatePresence, motion} from "framer-motion";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }
    return (
        <nav className='bg-white py-6 fixed w-full z-50'>
            <div className='container relative flex justify-between items-center'>
                <Link href='/'>
                    <Image src='/images/logo.svg' alt='logo' width={100} height={100}/>
                </Link>

                {/*Mobile Menu*/}
                { isMobileMenuOpen && <ul className='mobile-nav'><MenuLinks /></ul> }

                {/*Desktop Menu*/}
                <ul className='desktop-menu'><MenuLinks /></ul>

                <AnimatePresence>
                    <div className='flex flex-col gap-[5px] lg:hidden' onClick={toggleMenu}>
                        <motion.div layout initial={{ x:0 }} animate={{ x:-10 }} exit={{ x:-20}} transition={{duration: 0.25}}
                            className='w-[25px] h-[3px] bg-grayish-violet'>
                        </motion.div>
                        { isMobileMenuOpen &&
                            <motion.div layout initial={{ x:0 }} animate={{ x:-4 }} exit={{ x:-4}} transition={{duration: 0.25}}
                                        className='w-[25px] h-[3px] bg-grayish-violet'>
                            </motion.div>}
                        <motion.div layout initial={{ x:0 }} animate={{ x:-10 }} exit={{ x:-20}} transition={{duration: 0.25}}
                            className='w-[25px] h-[3px] bg-grayish-violet'>
                        </motion.div>
                    </div>
                </AnimatePresence>
            </div>
        </nav>
    )
}

function MenuLinks() {
    return (
        <>
            <div className='lg:flex gap-4 lg:ml-6 lg:text-grayish-violet'>
                <li><Link href='#features'>Features</Link></li>
                <li><Link href='/pricing'>Pricing</Link></li>
                <li><Link href='/resources'>Resources</Link></li>
            </div>

            <div className='nav-CTAs'>
                <Link href='/'>Login</Link>
                <Link className='cyan-button' href='/'>Sign Up</Link>
            </div>
        </>
    )
}

export default Navbar