"use client"

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Navbar from "./navbar";

const ScreenTransition = ({children}) =>
{
    const pathName = usePathname();
    return (
        <AnimatePresence mode="wait">
        <div key={pathName} className="w-screen h-screen bg-[#FFFAE7]">
            <motion.div 
            className="h-screen w-screen fixed bg-white rounded-b-[100px] z-40"
            animate={{height:"0vh"}}
            exit={{height:"140vh"}}
            transition={{duration:0.5, ease: "easeOut"}}
            />
            <motion.div 
            className="fixed m-auto top-0 bottom-0 left-0 right-0 text-[#5A5A5A] text-8xl cursor-default z-50 w-fit h-fit"
            initial={{opacity: 1}}
            animate={{opacity: 0}}
            exit={{opacity: 0}}
            transition={{duration:0.8, ease: "easeOut"}}>
                {pathName.substring(1)}
            </motion.div>
            <motion.div 
            className="h-screen w-screen fixed bg-white rounded-t-[100px] bottom-0 z-40"
            initial={{height:"140vh"}}
            animate={{height:"0vh", transition:{delay: 0.5}}}
            />
            <div className="h-24">
                <Navbar />
            </div>
            <div className="h-[calc(100vh-6rem)]">
                {children}
            </div>
        </div>
        </AnimatePresence>
    )
}

export default ScreenTransition