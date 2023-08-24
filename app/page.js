"use client"; // This is a client component 👈🏽

// React/Next.js
<<<<<<< HEAD
import Head from "next/head";
import { useState } from "react";
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
=======
import { useState } from "react";
import Link from 'next/link'
>>>>>>> f0ad534 (WIP)
import 'swiper/css'

// Media
import {
  AiFillLinkedin,
  AiFillYoutube,
  AiTwotoneMail,
  AiFillInstagram
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
<<<<<<< HEAD
import aman_pic_light from "../public/Choudhary_Aman_Photo.jpg"
import aman_pic_dark from "../public/prof_pic.jpg"
import beach from "../public/IMG_8139.jpg"
import annarbor from "../public/_MG_3451.jpg"


import code from "../public/code.png";
=======

import aman_pic_light from "../public/Choudhary_Aman_Photo.jpg"
import aman_pic_dark from "../public/prof_pic.jpg"
>>>>>>> f0ad534 (WIP)
import trashbots from "../public/trashbots.jpg";
import criteo from "../public/criteo.png";
import deepgram from "../public/deepgram.png";
import Image from "next/image";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    // <div className={darkMode ? "dark" : ""}>
    //   <div style={{
    //     zIndex: -1,
    //     position: "fixed",
    //     width: "100vw",
    //     height: "100vh",
    //     marginBottom: 12
    //   }}>
    //     <Image 
    //       src={beach}
    //       class="object-cover"
    //       className="objectfit:cover"
    //     />
    //   </div>

    //   <div>
    //     <section className="min-h-screen">
    //       <nav className="py-10 mb-12 flex justify-between dark:text-white">
    //         <h1 className="text-xl">Aman Choudhary</h1>
    //         <ul className="flex items-center">
    //           <li className="text-xl px-7 border-none">
    //             <Link href="/music" className="">
    //               Music
    //             </Link>
    //           </li>
    //           <li>
    //             <BsFillMoonStarsFill
    //               onClick={() => setDarkMode(!darkMode)}
    //               className=" cursor-pointer text-2xl"
    //             />
    //           </li>
    //           <li>
    //             <a
    //               className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
    //               href="#"
    //             >
    //               Resume
    //             </a>
    //           </li>
    //         </ul>
    //       </nav>
    //       <div className="text-center p-10 py-10">
    //         <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
    //           Aman Choudhary
    //         </h2>
    //         <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
    //           Developer and designer.
    //         </h3>
    //         <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 mx-auto md:text-xl">
    //           Computer Science Student @ <a href="https://umich.edu/" className="text-teal-500">University of Michigan</a>
    //         </p>
    //         <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
    //           <a href="https://www.linkedin.com/in/aman-ch/"><AiFillLinkedin /></a>
    //           <a href="https://www.youtube.com/channel/UCc6UbZ6n4gCH5CDuyPPfjwg"><AiFillYoutube /></a>
    //           <a href="mailto:amanch@umich.edu"><AiTwotoneMail /></a>
    //           <a href="https://www.instagram.com/a_man_photoz/"><AiFillInstagram /></a>
    //         </div>

    //       </div>
    //     </section>
    //   </div>
    <div className={darkMode ? "dark" : ""}>
      <main className=" bg-white px-10 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <a href="#" className="text-xl">Aman Choudhary</a>
            <ul className="flex items-center">
              <li className="text-lg px-3 border-none">
                <Link href="#" className="">
                  About Me
                </Link>
              </li>
              <li className="text-lg px-3 border-none">
                <Link href="#" className="">
                  Work Experience
                </Link>
              </li>
              <li className="text-lg px-3 border-none">
                <Link href="#" className="">
                  Projects
                </Link>
              </li>
              <li className="text-lg px-3 border-none">
                <Link href="#" className="">
                  Contact
                </Link>
              </li>
              <li className="text-lg px-3 border-none">
                <Link href="/music" className="">
                  Music
                </Link>
              </li>
              <li className="text-lg px-3 border-none">
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-4"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Aman Choudhary
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Developer and designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 mx-auto md:text-xl">
              Computer Science Student @ <a href="https://umich.edu/" className="text-teal-500">University of Michigan</a>
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://www.linkedin.com/in/aman-ch/"><AiFillLinkedin /></a>
              <a href="https://www.youtube.com/channel/UCc6UbZ6n4gCH5CDuyPPfjwg"><AiFillYoutube /></a>
              <a href="mailto:amanch@umich.edu"><AiTwotoneMail /></a>
              <a href="https://www.instagram.com/a_man_photoz/"><AiFillInstagram /></a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={darkMode ? aman_pic_dark : aman_pic_light} fill={true} style={{ objectFit: "cover" }} />
            </div>
          </div>
        </section>
        <section className="mt:10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">About Me</h3>
<<<<<<< HEAD
            <h3 className="text-xl py-1 dark:text-white ">University of Michigan '24, B.S.E in Computer Science and Engineering</h3>
=======
            <h3 className="text-xl py-1 dark:text-white ">University of Michigan &apos;24, B.S.E in Computer Science and Engineering</h3>
>>>>>>> f0ad534 (WIP)
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              {"What's up! I'm a fourth year computer science student at the University of Michigan. \
                When I'm not on campus in Ann Arbor, Michigan, you'll probably find me at home in San \
                Jose, California. I am currently interning at Deepgram, a foundational voice AI startup\
                ! In my freetime, I enjoy playing guitar and doing photography."}
            </p>
          </div>
          <h3 className="text-3xl py-1 dark:text-white">Work Experience</h3>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-25 dark:bg-white flex-1">
              <Image src={deepgram} className="mx-auto scale-20" />
              <h3 className="text-lg font-medium pt-8">Deepgram</h3>
              <p className="py-2">
                Summer 2023
              </p>
              <h3>Radically increased confidence in release process of core automatic speech recognition (ASR) engine </h3>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl dark:bg-white flex-1">
              <Image src={criteo} className="mx-auto scale-50" />
              <h3 className="text-lg font-medium pt-8">
                Criteo
              </h3>
              <p className="py-2">
                Summer 2022
              </p>
              <h3>Worked on the data contracts team responsible for processing large-scale advertising event datasets on an hourly basis</h3>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-25 dark:bg-white flex-1">
              <Image src={trashbots} className="mx-auto scale-50" />
              <h3 className="text-lg font-medium pt-8">
                Trashbots Co.
              </h3>
              <p className="py-2">
                Summer 2021
              </p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Projects</h3>
            <h2 className="text-xl py-1 dark:text-white">EECS 485 Search Engine</h2>
            <a href="https://github.com/AmanChoudhary2020/nn-from-scratch" className="text-xl py-1 dark:text-white">Neural Network from Scratch in Rust!</a>
            <h2 className="text-xl py-1 dark:text-white">UROP: Predicting News Engagement</h2>
            <h2 className="text-xl py-1 dark:text-white">Michigan Hackers: Text Summarization</h2>
          </div>
          {/* <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div>
          </div> */}
        </section>
      </main>
    </div>
  );
}