"use client"

import Image from "next/image"
import smile from "../../public/smile.png"
import arrowRight from "../../public/arrow-right-celeste.svg"
import facebook from "../../public/facebook.svg"
import instagram from "../../public/instagram.svg"
import whatsapp from "../../public/whatsapp.svg"

const Footer = () => {
    return(
        <footer>
            <div className="container mx-auto flex justify-evenly py-[80px]">
                <div className="flex flex-col justify-between">
                    <div className="bg-duo-blue w-[588px] h-[713px] border-0 rounded-lg ">
                        <div >
                            <Image 
                                src={smile}
                                alt="smile"
                                className="border-0 rounded-t-lg"
                            />
                        </div>
                        <div className="p-10 flex flex-col">
                            <p className="text-3xl text-white mb-8">
                                Nos encataría endenter sus necesidades y ayudarle con sus pacientes. 
                            </p>
                            <div className="flex">
                                <p className="text-2xl text-duo-light-blue-300 mr-6 font-bold">
                                    Hablemos
                                </p>
                                <Image
                                    src={arrowRight}
                                    alt="arrow right"
                                    height={18}
                                />                            
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-evenly px-16">
                        <Image
                            src={facebook}
                            alt="facebook icon"
                            height={40}
                        />
                        <Image
                            src={instagram}
                            alt="instagram icon"
                            height={40}
                        />
                        <Image
                            src={whatsapp}
                            alt="whatsapp icon"
                            height={40}
                        />
                    </div>
                </div>
                <div className="w-[495px]">
                    <div className="w-full  h-full">
                        <div className="pb-6 ">
                            <h3 className="text-3xl text-duo-orange">Llámenos</h3>
                            <p className="text-4xl font-bold">Tel. 5900-7203</p>
                        </div>
                        <form action="" className=" border-t border-duo-stroke">
                            <div className="py-6">
                                <h3 className="text-3xl text-duo-orange">O escríbanos</h3>
                            </div>
                            <div className="w-full">
                                <label htmlFor="" className="font-bold">Nombre</label>
                                <input type="text" className="w-full py-2 border border-duo-stroke rounded-lg bg-duo-light-gray mb-9"/>
                            </div>
                            <div>
                                <label htmlFor="" className="font-bold">Laboratorio</label>
                                <input type="text" className="w-full py-2 border border-duo-stroke rounded-lg bg-duo-light-gray mb-9"/>
                            </div>
                            <div>
                                <label htmlFor="" className="font-bold">Teléfono</label>
                                <input type="text" className="w-full py-2 border border-duo-stroke rounded-lg bg-duo-light-gray mb-9"/>
                            </div>
                            <div>
                                <label htmlFor="" className="font-bold">Mensaje</label>
                                <textarea name="" id="" cols={30} rows={10} className="w-full py-2 border border-duo-stroke rounded-lg bg-duo-light-gray mb-9"></textarea>
                            </div>
                            <button type="submit" className="py-3 bg-duo-orange w-full border border-duo-orange rounded-lg text-2xl text-white">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="h-[188px] border-t border-duo-stroke"></div>
        </footer>
    )
}

export default Footer