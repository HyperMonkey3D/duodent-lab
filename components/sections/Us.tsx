import Technician from "../../public/technician.png"
import Image from "next/image"

const Us = () => {
    return(
        <section id="nosotros" className="py-16 bg-duo-light-gray border-y border-duo-stroke">
            <div className="flex flex-wrap container mx-auto h-[505px] justify-center w-[300px] sm:w-[400px] md:2-[500px] lg:w-[1300px]">
                    <div >
                        <Image 
                            src={Technician}
                            alt={"technician"}
                            className="border-0 rounded-l-lg"
                        />                 
                    </div>
                    <div className="w-[490px] h-[505px] bg-slate-400 flex justify-center items-center px-10 border-0 rounded-r-lg">
                        <h2 className="text-4xl text-white">
                            Somos un Laboratorio Dental con más de 5 años de experiencia. Nos enfocamos en lo <span className="text-duo-light-blue-300">técnico</span>, para que los doctores se enfoquen 
                            en lo <span className="text-duo-light-blue-300">humano</span>.
                        </h2>
                    </div>
            </div>
        </section>
    )
}

export default Us