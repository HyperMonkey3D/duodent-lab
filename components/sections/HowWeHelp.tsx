import Cards from "../common/Cards"
import Image from "next/image"
import lines from "../../public/stars.svg"


const HowWeHelp = () => {
    return(
        <section className="bg-duo-blue py-16 relative">
            <Image 
                src={lines}
                alt="lines"
                className="absolute top-0 right-0 -z-1"
            />
            <div className="container mx-auto z-10">
                <div className="w-[500px] md:w-[800] lg:w-[1200px]  mx-auto">
                    <div className="w-3/4">
                        <h2 className="mb-9 text-white">
                            Ayudamos a los dentistas fabricando prótesis a la <span className="text-duo-light-blue-300">medida</span> y a <span className="text-duo-light-blue-300">tiempo</span>  
                        </h2>
                    </div>
                    <div className="flex justify-between flex-wrap">
                        <Cards side="left"/>
                        <Cards side="right"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowWeHelp