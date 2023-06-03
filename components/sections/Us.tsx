import Technician from "../../public/technician.png"
import Image from "next/image"

const Us = () => {
    return(
        <section className="py-16 bg-duo-light-gray border-y border-duo-stroke">
            <div className="flex flex-wrap container mx-auto h-[505px] justify-center ">
                    <div >
                        <Image 
                            src={Technician}
                            alt={"technician"}
                            className="border-0 rounded-l-lg"
                        />                 
                    </div>
                    <div className="w-[490px] h-[505px] bg-duo-blue flex justify-center items-center px-10 border-0 rounded-r-lg">
                        <h3 className="text-4xl text-white">
                            Somos un Laboratorio Dental con más de 5 años de experiencia. Nos enfocamos en lo <span className="text-duo-light-blue-300">técnico</span>, para que los doctores se enfoquen 
                            en lo <span className="text-duo-light-blue-300">humano</span>.
                        </h3>
                    </div>
            </div>
        </section>
    )
}

export default Us