import Cards from "../common/Cards"
import Image from "next/image"
import lines from "../../public/stars.svg"


const HowWeHelp = () => {
    return(
        <section id="como-le-ayudamos" className="bg-duo-blue py-16 relative overflow-clip">
            <div className=" absolute right-0 bottom-0  w-full h-full -z-1 ">
                <Image 
                    src={lines}
                    alt="lines"
                    className="w-full scale-150 xl:scale-100"
                />
            </div>
           

        
            <div className="container mx-auto z-10 ">
                <div className="w-full lg:w-[900px] xl:w-[1100px]  mx-auto ">
                    <div className="w-full px-10 lg:px-0 lg:w-3/4">
                        <h2 className="text-3xl md:text-5xl mb-9 text-white ">
                            Ayudamos a los dentistas fabricando prótesis a la <span className="text-duo-light-blue-300">medida</span> y a <span className="text-duo-light-blue-300">tiempo</span>  
                        </h2>
                    </div>
                    <div className="sm:flex flex-wrap lg:flex-wrap justify-between  ">
                        <Cards side="left"/>
                        <Cards side="right"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowWeHelp