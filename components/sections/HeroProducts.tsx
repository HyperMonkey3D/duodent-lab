
import Image from "next/image"
import technicianTwo from "../../public/technician_two.png"

Image

const HeroProducts = () => {
    return(
        <section className="py-9">
            <div className="container mx-auto justify-center bg-white">
                <div className="w-fit md:w-[600px] lg:w-fit flex flex-wrap lg:flex-nowrap bg-white mx-auto">
                    <div className="w-full lg:w-[400px] xl:w-[531px] bg-duo-orange p-9 flex items-center border-0 sm:rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg">
                        <h1 className="text-4xl text-white">Conozca Los Productos Dentales Que Elaboramos Para Sus Pacientes</h1>
                    </div>
                    <div>
                        <Image
                            src={technicianTwo}
                            alt="technician"
                            width={715}
                            className="border-0 sm:rounded-b-lg lg:rounded-b-none lg:rounded-r-lg"
                        />  
                    </div>
                </div>
               
            </div>
        </section>
    )
}

export default HeroProducts