"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Typewriter } from "nextjs-simple-typewriter";


const items = [
    {
        id: 1,
        color: "from-[#7097A8] to-[#64B5F6]",
        title: "P1",
        desc: "Currently developing a full stack web app that can predict the results of the F1 race based on the driver, qualifying position, and the circuit name. ",
        tech: "NextJS, ExpressJS, PostgreSQL",
        img: "/P1.png",
        link: "https://github.com/slothcoder21/predictf1",
    },
    {
        id: 2,
        color: "from-[#64B5F6] to-[#E9C4E9]",
        title: "Neural Network",
        desc: "Created a neural network using only Numpy and Mathematics. Trained and tested the performance of the NN on the Fashion-MNIST dataset.",
        tech: "Python",
        img: "/NeuralNetwork.png",
        link: "https://github.com/slothcoder21/NeuralNetwork",
    },
    {
        id: 3,
        color: "from-[#E9C4E9] to-[#FFD2BD]",
        title: "Crypto Prediction",
        desc: "A deep learning model that takes advantage of Tensorflow and an LSTM algorithm to accrurately predict the price of a cryptocoin.",
        tech: "Python, HTML, CSS, Javascript",
        img: "/cryptocurrency.png",
        link: "https://github.com/slothcoder21/ecs171final.git",
    },
    {
        id: 4,
        color:"from-[#FFD2BD] to-[#FFF4C0]",
        title: "Portfolio Website",
        desc: "This portfolio website was created to showcase my skills and abilities. Using NextJS, Framer Motion, and ThreeJS to create a user friendly experience and showcase my progress.",
        tech: "NextJS",
        img: "/portfolioPage.svg",
        link: "/",
    },
    {
        id: 5,
        color: "from-[#FFF4C0] to-[#C7E8CA]",
        title:"BRIDGE",
        desc: "A social media app created to encourage interaction between families. We noticed that when kids go to college, the relationship between parents and children can easily become distant. We wanted to create an app that would BRIDGE that gap. **Still in Development**",
        tech: "React Native, Firebase",
        img: "/bridgeLogo.svg",
        link: "https://github.com/slothcoder21/bridge",
    },
];

const PortfolioPage = () => {
  const ref = useRef();

  // Calculate the transform based on the number of projects
  // Adjust the percentage to ensure all projects are visible
  const totalProjects = items.length;
  const scrollRange = `-${(totalProjects - 1) * 100 / totalProjects}%`;
  
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", scrollRange]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-black">
          <Typewriter words={["My Projects"]} loop={true} startFrom="Full" deleteSpeed={100} typeSpeed={100} delaySpeed={5000}/>
          <div className="flex flex-col">
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-[#7097A8]" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px] text-gray-600">
                    {item.tech}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Code</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center bg-[#FFFAE7]">
        <h1 className="text-8xl text-black">Anything Look Interesting?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Aspiring Software Engineer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-green-700 text-black rounded-full flex items-center justify-center"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;