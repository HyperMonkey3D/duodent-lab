"use client"
import Cards from "../common/Cards"
import Image from "next/image"
import lines from "../../public/stars.svg"
import { useEffect, useState } from "react"

const getCurrentSize = () => {
    if(typeof window !== "undefined") {
        return{
            width: window.innerWidth,
            height: window.innerHeight
        }
    }
}
const getCurrentSize = () => {
    if(typeof window !== "undefined") {
        return{
            width: window.innerWidth,
            height: window.innerHeight
        }
    }
}

const HowWeHelp = () => {

    const [screnSize, setScreenSize] = useState(getCurrentSize())
    const [large, setLarge] = useState(true)

    useEffect(() => {
        const updateSize = () => {
            setScreenSize(getCurrentSize())
        }
        window.addEventListener("resize", updateSize)
        if(typeof screnSize !== "undefined" && screnSize.width < 500) {
            setLarge(false)
        } else {
            setLarge(true)
        }
        
        console.log(screnSize)
        return(()=> {
            window.removeEventListener("resize", updateSize)
        })
    }, [screnSize])

    return(
        <section id="como-le-ayudamos" className="bg-duo-blue py-16 relative overflow-clip">
            {large &&(<div className=" absolute right-0 bottom-0  w-full h-full -z-1 overflow-clip">
                <Image 
                    src={lines1}
                    alt="lines"
                    className="w-full "
                />
            </div>)}
           

        
            <div className="container mx-auto z-10">
                <div className="w-full lg:w-[900px] xl:w-[1100px]  mx-auto ">
                    <div className="w-full px-10 lg:px-0 lg:w-3/4">
                        <h2 className="text-3xl md:text-5xl mb-9 text-white ">
                            Ayudamos a los dentistas fabricando prótesis a la <span className="text-duo-light-blue-300">medida</span> y a <span className="text-duo-light-blue-300">tiempo</span>  
                        </h2>
                    </div>
                    <div className="sm:flex flex-wrap lg:flex-wrap justify-between  overflow-clip">
                        <Cards side="left"/>
                        <Cards side="right"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowWeHelp