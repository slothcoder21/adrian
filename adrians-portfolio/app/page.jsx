"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Globe } from "@/components/globe";

const Homepage = () => {
    return(
        <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
            <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 overflow-y-hidden">
                {/** Image */}
                <div className="h-1/2 lg:h-full lg:w-1/2 relative">
                   <Globe fill className="object-contain"/>
                </div>
                {/** Text */}
                <div className="h-1/2 flex flex-col gap-8 justify-center lg:h-full lg:w-1/2">
                    <h1 className="text-4xl md:text-6xl font-bold text-black">Hi, I'm Adrian.</h1>
                    <p className="text-xl md:text-2xl font-light text-black">Welcome to my personal website! I'm a student at UC Davis and an aspiring software engineer. Feel free to explore around to find out more facts about me!</p>
                    <div className="flex gap-4">
                        <button className="rounded-lg p-4 bg-white text-[#5A5A5A] shadow-md">
                            <Link href="/projects">
                                View My Projects
                            </Link>
                        </button>
                        <button className="rounded-lg p-4 bg-[#5A5A5A] shadow-lg" href="">
                            <Link href="/contact">
                                Contact Me
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
        
    )
}

export default Homepage