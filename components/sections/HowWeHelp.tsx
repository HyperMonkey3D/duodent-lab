"use client";
import Cards from "../common/Cards";
import Image from "next/image";
import lines from "../../public/stars1.svg";
import {useEffect, useState} from "react";


const getCurrentSize = () => {
    if (typeof window !== "undefined") {
        return {
            width: window.innerWidth,
            height: window.innerHeight,
        };
    }
};

const HowWeHelp = () => {
    const [screenSize, setScreenSize] = useState(getCurrentSize());
    const [large, setLarge] = useState(true);

    useEffect(() => {
        const updateSize = () => {
            setScreenSize(getCurrentSize());
        };
        window.addEventListener("resize", updateSize);
        if (typeof screenSize !== "undefined" && screenSize.width < 600) {
            console.log("smol")
            setLarge(false);
        } else {
            console.log("not smol")
            setLarge(true);
        }

        console.log(screenSize);
        return () => {
            window.removeEventListener("resize", updateSize);
        };
    }, [screenSize]);

    return (
        <section
            id="como-le-ayudamos"
            className="bg-duo-blue py-16 relative overflow-clip "
        >
            {large && (
                <div className="absolute right-0 bottom-0  w-full h-full  overflow-clip  zed-card">
                    <Image src={lines} alt="lines" className="w-full "/>
                </div>
            )}
            {
                !large && (
                    <div className="absolute right-0 top-0  w-full h-[22%]  overflow-clip  zed-card ">
                        <Image src={lines} alt="lines" className="w-full zed-card"/>
                    </div>
                )
            }


            <div className="container mx-auto z-10 bg-transparent">
                <div className="w-full lg:w-[900px] xl:w-[1100px]  mx-auto bg-transparent z-50">
                <div className="w-full px-10 lg:px-0 lg:w-3/4 bg-transparent z-50">
                        <h2 className="text-3xl md:text-5xl mb-9 text-white ">
                            Ayudamos a los dentistas fabricando prótesis a la{" "}
                            <span className="text-duo-light-blue-300">medida</span> y a{" "}
                            <span className="text-duo-light-blue-300">tiempo</span>
                        </h2>
                    </div>
                    <div className="sm:flex flex-wrap lg:flex-wrap justify-between  overflow-clip bg-transparent z-50">
                        <Cards side="left"/>
                        <Cards side="right"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWeHelp;
