
import Image from "next/image"
import technicianTwo from "../../public/technician_two.png"

Image

const HeroProducts = () => {
    return(
        <section className="py-9">
            <div className="container mx-auto flex flex-wrap justify-center ">
                <div className="w-[531px] bg-duo-orange p-9 flex items-center border-0 rounded-l-lg">
                    <h1 className="text-4xl text-white">Conozca Los Productos Dentales Que Elaboramos Para Sus Pacientes</h1>
                </div>
                <div>
                    <Image
                        src={technicianTwo}
                        alt="technician"
                        width={715}
                        className="border-0 rounded-r-lg"
                    />  
                </div>
            </div>
        </section>
    )
}

export default HeroProducts