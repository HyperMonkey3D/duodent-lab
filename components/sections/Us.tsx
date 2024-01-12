import Technician from "../../public/technician.png";
import Image from "next/image";

const Us = () => {
  return (
    <section
      id="nosotros"
      className="py-16 bg-white border-y border-duo-stroke"
    >
      <div className="flex flex-wrap container mx-auto xl:h-[505px] justify-center w-full sm:px-5 ">
        <div>
          <Image
            src={Technician}
            alt={"technician"}
            className="border-0 sm:rounded-t-lg xl:rounded-l-lg xl:rounded-r-none  "
          />
        </div>
        <div className="w-full lg:w-[728px] xl:w-[490px] h-full lg:h-[300px] xl:h-[505px] bg-duo-blue flex flex-col justify-evenly items-center p-10 xl:border-0 sm:rounded-b-lg xl:rounded-l-none xl:rounded-r-lg  md:py-16">
          <h2 className="text-xl md:text-3xl text-white">
            Somos un Laboratorio Dental con más de 5 años de experiencia.
          </h2>
          <h2 className="text-xl md:text-3xl text-white">
            Nos enfocamos en lo{" "}
            <span className="text-duo-light-blue-300">técnico</span>, para que
            los doctores se enfoquen en lo{" "}
            <span className="text-duo-light-blue-300">humano</span>.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Us;
