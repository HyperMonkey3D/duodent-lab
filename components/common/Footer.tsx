"use client";

import Image from "next/image";
import Form from "./Form";
import Link from "next/link";
import {usePathname} from "next/navigation";
import smile from "../../public/smile.png";
import arrowRight from "../../public/arrow-right-celeste.svg";
import facebook from "../../public/facebook.svg";
import instagram from "../../public/instagram.svg";
import whatsapp from "../../public/whatsapp.svg";
import {menu, menuProducts} from "@/app/utils/data";
import Logo from "@/app/utils/Logo";
import Facebook from "@/app/utils/socials/Facebook";
import Instagram from "@/app/utils/socials/Instagram";
import Whatsapp from "@/app/utils/socials/Whatsapp";

const Footer = () => {

    const SVGColor = "rgb(154, 158, 170)"
    const pathname = usePathname();
    const SVGSizeDesktop = "20"
    const SVGSizeMobile = "36"


    return (
        <footer id="hablemos">
            <div className="container mx-auto flex flex-wrap lg:flex-nowrap justify-evenly py-[80px] bg-white">
                <div className="flex flex-col justify-between bg-white">
                    <div className="bg-duo-blue w-full lg:w-[500px]  xl:w-[588px] h-fit border-0 sm:rounded-lg ">
                        <div className="w-full bg-white">
                            <Image
                                src={smile}
                                alt="smile"
                                className="border-0 sm:rounded-t-lg w-full"
                            />
                        </div>
                        <div className="p-10 flex flex-col">
                            <p className="text-3xl text-white mb-8">
                                Nos encataría endenter sus necesidades y ayudarle con sus
                                pacientes.
                            </p>
                            <div className="flex pb-5">
                                <p className="text-xl text-duo-light-blue-300 mr-6 ">
                                    Hablemos
                                </p>
                                <Image
                                    src={arrowRight}
                                    alt="arrow right"
                                    height={18}
                                    className="rotate-90 lg:rotate-0"
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        className="w-full h-full flex flex-col justify-center  bg-duo-light-gray rounded-0 sm:rounded-lg px-9 py-6 mt-3">
                        <h3 className="text-xl">Visítenos</h3>
                        <p className="text-3xl">4ta Ave. 3-55 zona 15</p>
                        <span>Guatemala, C.A.</span>
                    </div>
                </div>
                <div className="bg-white w-4/5 lg:w-[400px] xl:w-[495px] mt-8 lg:mt-0">
                    <div className="w-full  h-full">
                        <div className="pb-6 ">
                            <h3 className="text-3xl text-duo-orange">Llámenos</h3>
                            <p className="text-4xl font-bold">Tel. 5900-7203</p>
                        </div>
                        <Form/>
                    </div>
                </div>

            </div>
            <div className="w-full h-fit bg-duo-light-gray flex justify-center px-0  xl:px-32 ">
                <div className="container flex flex-col justify-between bg-duo-light-gray px-8 pt-20 pb-8">
                    {
                        pathname === "/" && (
                            <div className="bg-transparent w-[300px]">
                                <ul className="bg-transparent">
                                    {menu.map((item) => {
                                        const {index, title, route} = item;
                                        return (
                                            <li
                                                key={index}
                                                className={
                                                    "bg-transparent py-1"
                                                }
                                            >
                                                <Link href={route} className="font-sans font-extralight">{title}</Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        )
                    }
                    {
                        pathname === "/productos" && (
                            <div className="bg-transparent w-[300px]">
                                <ul className="bg-transparent">
                                    {menuProducts.map((item) => {
                                        const {index, title, route} = item;
                                        return (
                                            <li
                                                key={index}
                                                className={
                                                    "bg-transparent py-1"
                                                }
                                            >
                                                <Link href={route} className="font-sans font-extralight">{title}</Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        )
                    }
                    <div className="flex w-full bg-duo-light-gray justify-between items-center pt-14">
                        <Logo/>
                        <div
                            className="flex w-[150px] justify-evenly bg-transparent ">
                            <a href="https://www.facebook.com/" target="_blank" className="mr-8">
                                <Facebook color={SVGColor} size={"30"} />
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" className="mr-8">
                                <Instagram color={SVGColor} size={"30"}/>
                            </a>
                            <a href="https://www.whatsapp.com/" target="_blank" >
                                <Whatsapp color={SVGColor} size={"30"}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[50px] border-t border-duo-stroke bg-duo-light-gray flex justify-center items-center">
                <small className="text-duo-dark-gray">
                    Made With Love In Guatemala
                </small>
            </div>
        </footer>
    );
};

export default Footer;
