import { works } from "@/app/utils/data"
import Link from "next/link"
import arrowRight from "../../public/arrow-right.svg"
import Image from "next/image"

interface CardProps  {
    side: string
}

const Cards = ( { side } : CardProps ) => {
    return(
        <div className="w-[517px] h-[326px] bg-white px-14 py-14 border border-white rounded-lg flex flex-col justify-between z-10">
            <ul>
                {
                    side === "left" && (
                        works
                        .filter(item => item.side === side)
                        .map((item) => {
                            const {index, work} = item
                            return(
                                <li key={index}><p className="text-2xl">{work}</p></li>
                            )
                        })
                    )
                    
                }
                {
                    side === "right" && (
                        works
                        .filter(item => item.side === side)
                        .map((item) => {
                            const {index, work} = item
                            return(
                                <li key={index}><p className="text-2xl">{work}</p></li>
                            )
                        })
                    )
                }
            </ul>
            <div className="border border-black w-[180px] rounded-md pl-2">
                <Link href={"/productos"} className="flex justify-between">
                Conozca Más
                <Image 
                    src={arrowRight}
                    alt={"arrow right"}
                    className="ml-4"
                    height={24}
                />
                </Link>
            </div>
            
        </div>
        
    )
}

export default Cards