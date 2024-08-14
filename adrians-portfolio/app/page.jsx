"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
    return(
        <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
            <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 overflow-y-hidden">
                {/** Image */}
                <div className="h-1/2 lg:h-full lg:w-1/2 relative rounded-xl lg:mr-10">
                   <Image src="/profile.png" alt="" fill className="object-contain"/>
                </div>
                {/** Text */}
                <div className="h-1/2 flex flex-col gap-8 justify-center lg:h-full lg:w-1/2">
                    <h1 className="text-4xl md:text-6xl font-bold text-black">Hi, I'm Adrian.</h1>
                    <p className="text-xl md:text-2xl font-light text-black">Welcome to my personal website! I'm a student at UC Davis and an aspiring software engineer.</p>
                </div>
            </div>
        </motion.div>
        
    )
}

export default Homepage