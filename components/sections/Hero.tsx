import Link from "next/link"

const Hero = () => {
    return(
        <section className="py-6">
            <div className="container mx-auto flex flex-wrap justify-evenly py-6">
                <div className=" xl:w-[674px] pl-12 py-12 bg-white">
                    <h1 className="text-6xl">Solucions Dentales de Calidad <br></br> Ejecutadas con Cuidado y Dedicación</h1>
                </div>
                <div className="w-full xl:w-[500px]  flex flex-col justify-center items-center bg-white px-12">
                    <div className="w-full lg:w-[600px] xl:w-[394px] h-[175px] bg-duo-orange flex items-center border border-duo-orange rounded-t-lg">
                            <p className="text-white p-6 text-2xl ">Agende una visita de demostración, consulte especificaciones técnicas o aclare dudas</p>
                    </div>
                    <div className="w-full lg:w-[600px]  xl:w-[394px] bg-white h-[108px] flex items-center justify-center border border-duo-orange rounded-b-lg">
                            <Link href={"#hablemos"} className={"text-duo-orange text-5xl font-bold"}>Contáctenos</Link>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Hero