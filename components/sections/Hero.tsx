import Link from "next/link"

const Hero = () => {
    return(
        <section className="py-6 bg-duo-light-gray">
            <div className="container mx-auto lg:p-10 ">
                <div className="w-fit  flex flex-wrap lg:flex-nowrap mx-auto">
                    <div className="w-full lg:w-[600px] xl:w-[800px] px-7 py-6 lg:py-6 sm:px-0 flex items-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl">Soluciones Dentales de Calidad <br></br> Ejecutadas con Cuidado y Dedicación</h1>
                    </div>
                    <div className="w-fit  flex flex-col justify-center lg:items-end items-center bg-duo-orange border border-duo-orange sm:rounded-lg">
                        <div className="w-full lg:w-[350px] xl:w-[394px] h-fit lg:h-[250px]  sm:h-[175px] bg-duo-orange flex items-center border border-duo-orange rounded-t-lg">
                            <p className="text-white py-6 lg:p-6 text-2xl w-3/4  lg:w-full mx-auto lg:mx-0 bg-duo-orange">Agende una visita de demostración, consulte especificaciones técnicas o aclare dudas</p>
                        </div>
                        <div className="w-3/4 sm:w-[400px] lg:w-[350px] xl:w-[394px] bg-white h-[75px] lg:h-[108px] flex items-center justify-center border-0 border-duo-orange rounded-lg lg:rounded-t-none md:rounded-b-lg mb-8 lg:my-0">
                            <Link href={"#hablemos"} className={"text-duo-orange text-3xl sm:text-4xl   font-bold"}>Contáctenos</Link>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Hero