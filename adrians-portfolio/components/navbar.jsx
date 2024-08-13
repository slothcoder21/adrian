"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import NavLink from "./navLink";

const links = [
    { url: "/" , title:"Home"},
    { url: "/about" , title:"About"},
    { url: "/projects" , title:"Projects"},
    { url: "/contact" , title:"Contact"},
];

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return(
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
            <div className="hidden md:flex gap-4 text-[#5A5A5A]">
                {links.map((link) => ( 
                    <NavLink link={link} key={link.title}/>
                ))}
            </div>
            {/* Logo */}
            <div className="sm:hidden lg:flex xl:justify-center">
                <Link href="/">
                    <img 
                    src="/logo.svg"
                    />
                </Link>
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
                    <div className="w-10 h-1 bg-[#5A5A5A] rounded"></div>
                    <div className="w-10 h-1 bg-[#5A5A5A] rounded"></div>
                    <div className="w-10 h-1 bg-[#5A5A5A] rounded"></div>
                </button>
                {/* List Menu */}
                {open && (
                    <div className="absolute top-0 left-0 w-screen h-screen bg-[#ECD59F] text-[#5A5A5A] flex flex-col items-center justify-center gap-8 text-4xl">
                    {links.map(link=>(
                        <Link href={link.url} key={link.title}>{link.title}</Link>
                    ))}
                </div>
                )}
                
            </div>
        </div>
    )
}

export default Navbar