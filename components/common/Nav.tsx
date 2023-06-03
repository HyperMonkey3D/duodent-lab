import { menu } from "@/app/utils/data"
import Link from "next/link"
import Image from "next/image"
import logo from "../../public/Vector.svg"


const Nav = () => {

    const actionButtonClass = "ml-5 bg-duo-orange px-6 py-2 text-white rounded-lg"
    
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
                <ul className="flex items-center">
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
                </ul>
            </nav>
        </div>
    )
}

export default Nav