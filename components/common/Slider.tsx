"use client"
import { testimonials } from "@/app/utils/data"
import Image from "next/image"
import { useState } from "react"
import leftArrow from "../../public/arrow-left-white.svg"
import rightArrow from "../../public/arrow-right-white.svg"

const Slider = () => {
    
    const displayedCard = "bg-duo-orange text-white w-full p-6 text-center border-0 rounded-lg"

    const [counter, setCounter] = useState(0)
    
    const counterUp = () => {
        if(counter < testimonials.length-1){
            setCounter(counter + 1)
        } else {
            setCounter(0)
        }
    }

    const counterDown = () => {
        if(counter > testimonials.length || counter === 0){
            setCounter(testimonials.length-1)
        } else {
            setCounter(counter - 1)
        }
    }

    return(
        <div className="bg-duo-orange  flex  flex-col-reverse lg:flex-row p-10 border rounded-lg  w-full  h-[430px] sm:h-[350px] lg:h-[250px] relative">

            <div className="w-full lg:w-[750px] lg:h-[230px] absolute top-0 left-0 lg:left-20">
                {
                    testimonials
                    .map((item) => {
                        const {index, name, clinic, message} = item
                        return(
                            <div className={counter === index ? displayedCard : "hidden"} key={index}>
                                <h3 className="text-3xl font-bold mb-2">{name}</h3>
                                <p className="text-xl mb-5">{clinic}</p>
                                <q className="text-3xl md:text-4xl">{message}</q>
                            </div>
                        )
                    })
                }
            </div>
            <div className="w-full flex justify-evenly lg:justify-between">
                <button
                onClick={()=>counterDown()}
                
            >
                <Image 
                    src={leftArrow}
                    alt={"Left arrow"}
                    height={30}
                />   
            </button>
            
            <button 
                onClick={()=>counterUp()}
                 
            >
                <Image
                    src={rightArrow}
                    alt={"Right arrow"}
                    height={30}
                />
            </button>
            </div>
            
        </div>
    )
}

export default Slider