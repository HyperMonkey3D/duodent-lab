import Link from "next/link"

const Hero = () => {
    return(
        <section className="py-6">
            <div className="container mx-auto flex flex-wrap lg:flex-nowrap justify-evenly p-10 bg-white">
                <div className="w-full lg:w-[800px] py-6 bg-white">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl">Solucions Dentales de Calidad <br></br> Ejecutadas con Cuidado y Dedicación</h1>
                </div>
                <div className="w-full xl:w-[500px]  flex flex-col justify-center lg:items-end items-center bg-white">
                    <div className="w-full md:w-[600px] lg:w-[394px] h-[250px]  sm:h-[175px] bg-duo-orange flex items-center border border-duo-orange rounded-t-lg">
                            <p className="text-white p-6 text-2xl ">Agende una visita de demostración, consulte especificaciones técnicas o aclare dudas</p>
                    </div>
                    <div className="w-full md:w-[600px]  lg:w-[394px] bg-white h-[108px] flex items-center justify-center border border-duo-orange rounded-b-lg">
                            <Link href={"#hablemos"} className={"text-duo-orange text-3xl  sm:text-5xl font-bold"}>Contáctenos</Link>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Hero