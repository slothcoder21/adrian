"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";

const links = [
    { url: "/" , title:"Home"},
    { url: "/About" , title:"About"},
    { url: "/projects" , title:"Projects"},
];

const Navbar = () => {

    const [open, setOpen] = useState(false)

    const topVariants = {
        closed: {
            roate: 0, 
        },
        opened: {
            rotate: 45,
        },
    }

    const centerVariants = {
        clased: {
            opacity: 1,
        },
        opened: {
            opacity: 0,
        },
    }

    const bottomVariants = {
        closed: {
            roate: 0, 
        },
        opened: {
            rotate: -45,
        },
    }

    const listVariants = {
        closed: {
            x:"100vw",
        },
        opened: {
            x:0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2,
            }
        },
    }

    const listItemVariants = {
        closed: {
            x:-10,
            opacity: 0,
        },
        opened: {
            x: 0,
            opacity: 1,
        },
    }

    return(
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
            <div className="hidden md:flex gap-4 text-[#5A5A5A]">
                {links.map((link) => ( 
                    <NavLink link={link} key={link.title}/>
                ))}
            </div>
            <div className="hidden md:flex gap-4">
                <Link href="https://github.com/slothcoder21/adrian">
                    <Image src="/github.png" alt="" width={24} height={24} />
                </Link>
                <Link href="https://www.linkedin.com/in/adrian-lam-13ab24132/">
                    <Image src="/linkedin.png" alt="" width={24} height={24} />
                </Link>
            </div>
            {/* Menu Bar*/}
            <div className="md:hidden">
                <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={(() => setOpen(!open))}>
                    <motion.div variants={topVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-[#5A5A5A] rounded origin-left"></motion.div>
                    <motion.div variants={centerVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-[#5A5A5A] rounded"></motion.div>
                    <motion.div variants={bottomVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-[#5A5A5A] rounded origin-left"></motion.div>
                </button>
                {/* List Menu */}
                {open && (
                    <motion.div variants={listVariants} initial="closed" animate="opened" className="absolute top-0 left-0 w-screen h-screen bg-[#ECD59F] text-[#5A5A5A] flex flex-col items-center justify-center gap-8 text-4xl z-40">
                    {links.map(link=>(
                        <motion.div variants={listItemVariants} className="" key={link.title}>
                            <Link href={link.url}>{link.title}</Link>
                        </motion.div>
                    ))}
                </motion.div>
                )}
                
            </div>
        </div>
    )
}

export default Navbar