"use client"

import { menu } from "@/app/utils/data"
import Link from "next/link"
import Image from "next/image"
import logo from "../../public/Vector1.svg"
import { useEffect, useState } from "react"
import menuIcon from "../../public/list1.svg"

const getCurrentSize = () => {
    if(typeof window !== "undefined") {
        return{
            width: window.innerWidth,
            height: window.innerHeight
        }
    }
}

const Nav = () => {
    
   
    const [screnSize, setScreenSize] = useState(getCurrentSize())
    const [large, setLarge] = useState(true)
    
   

    const actionButtonClass = "ml-5 bg-duo-orange px-6 py-2 text-white rounded-lg"

    

    useEffect(() => {
        

        const updateSize = () => {
            setScreenSize(getCurrentSize())
        }
        window.addEventListener("resize", updateSize)
        if(typeof screnSize !== "undefined" && screnSize.width < 1000) {
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
        <div className="pt-4 pb-4 border-b border-slate-200">
            <nav className="container m-auto flex justify-between ">
                <div className="flex items-center">
                    <Image 
                        src={logo}
                        alt={"logo"}
                    />   
                    <h3 className="ml-5">DuoDent</h3>
                    
                </div>
                {
                   !large && (
                    <div>
                        <Image
                            src={menuIcon}
                            alt="menu"
                         
                        />

        
                    </div>
                   )
                }
                {
                
                large && (<ul className="flex items-center">
                                {
                                    menu
                                    .map((item)=> {
                                    const {index, title, route} = item
                                    return(
                                            <li 
                                                key={`menu-${index}`} 
                                                className={title === "Hablemos" ? `${actionButtonClass}` : `ml-5`}
                                            >
                                            <Link href={route}>
                                                {title}
                                            </Link>
                                            </li>
                                        )
                        })
                    }    
                </ul>)}
            </nav>
        </div>
    )
}

export default Nav