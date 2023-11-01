"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { saveAS } from "file-saver";
import Link from "next/link";

const HeroSection = () => {
    const saveFile = () => {
        saveAs("/documents/NicolasHovetteCVEN.pdf");
    };
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E09624] to-[#4276A1]">
                            Hello, I'm{" "}
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                "Nicolas",
                                1000,
                                "Web Developer",
                                1000,
                                "Web3 Developer",
                                1000,
                                "Blockchain Developer",
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        I'm Nicolas Hovette. I'm 23 and I live in France. This
                        webSite is my portfolio with different links. It will
                        show you what i did and what i can do. I built this
                        Website in NextJS
                    </p>
                    <div>
                        <Link href="/#contact">
                            <button className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-200 via-blue-500 to-blue-1000 hover:bg-slate-200 text-white">
                                Hire me
                            </button>
                        </Link>
                        <button
                            onClick={saveFile}
                            className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br  from-blue-200 via-blue-500 to-blue-1000 hover:bg-slate-800 text-white mt-3"
                        >
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                Download CV
                            </span>
                        </button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[400px] h-[400px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            src="/images/avatar0.png"
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={250}
                            height={250}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
