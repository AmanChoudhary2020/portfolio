"use client"; // This is a client component 👈🏽

import { useState } from "react";
import Link from 'next/link'
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Music() {
    const [darkMode, setDarkMode] = useState(false);
  
    return (
      <div className={darkMode ? "dark" : ""}>
        <main className=" bg-white px-10 dark:bg-gray-900 md:px-20">
          <section>
            <nav className="py-10 mb-12 flex justify-between dark:text-white">
              <h1 className="font-burtons text-xl text-decoration-line: underline">Aman Choudhary</h1>
              <ul className="flex items-center">
              <li className="font-burtons text-xl px-10 border-none">
                <Link href="/" className="font-burtons text-2xl border-none">
                  Home
                </Link>
              </li>
                <li>
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className=" cursor-pointer text-2xl"
                  />
                </li>
                <li>
                  <a
                    className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                    href="#"
                  >
                    Music Resume
                  </a>
                </li>
              </ul>
            </nav>
          </section>
          <p>TODO</p>
        </main>
      </div>
    );
  }