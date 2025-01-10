"use client"
import Link from "next/link";
import { useLottie } from "lottie-react";
import teethAnimation from "../../public/lottie-dientes.json"


const Hero = () => {

    const options = {
        animationData: teethAnimation,
        loop: false
    }

    const { View } = useLottie(options)

    return (
        <section className=" bg-white">
            <div className="relative">
                <div className="absolute w-3/4 top-20 right-0  md:left-24">
                    {View}
                </div>
                <div className="w-full h-full relative">
                    <div className="container mx-auto py-24  lg:py-36  bg-transparent">
                        <div
                            className="w-fit  flex justify-center items-center flex-wrap lg:flex-nowrap mx-auto ">
                            <div
                                className=" w-full lg:w-[600px] xl:w-[800px] px-7 pt-5 pb-20 lg:py-6 sm:px-0 flex flex-col justify-between items-start">
                                <h1 className="text-5xl lg:text-8xl font-semibold text-black">
                                    Soluciones Dentales de Calidad
                                </h1>
                                <div className="w-full lg:w-3/5 ">

                                    <h2 className="font-sans font-extralight text-xl  md:text-2xl text-black pt-6">DuoDent provee
                                        servicios para
                                        clínicas dentales. Nuestro experimentado equipo utiliza la mejor
                                        tecnología para
                                        entregar calidad.</h2>
                                </div>
                            </div>
                            <div
                                className="w-fit h-full sm:h-[250px]  lg:h-[400px] flex flex-col justify-between lg:items-end items-center bg-duo-orange border border-duo-orange sm:rounded-lg transition  drop-shadow-xl hover:drop-shadow-lg">
                                <div
                                    className="w-full lg:w-[350px] xl:w-[394px] h-fit lg:h-[250px]  sm:h-[175px]  flex items-end  border border-duo-orange rounded-t-lg">
                                    <p className="text-white py-6 lg:p-6 text-2xl w-3/4  lg:w-full mx-auto lg:mx-0 sm:mb-3">
                                        Agende una visita de demostración, consulte especificaciones
                                        técnicas o aclare dudas
                                    </p>
                                </div>
                                <div
                                    className="w-3/4 sm:w-[400px] lg:w-[350px] xl:w-[394px]  h-[75px] lg:h-[108px] button-hover flex items-center justify-center border-0 border-duo-orange rounded-lg lg:rounded-t-none md:rounded-b-lg mb-8 lg:my-0">
                                    <Link
                                        href={"#hablemos"}
                                        className={"text-button text-3xl sm:text-4xl   font-bold"}
                                    >
                                        Contáctenos
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
