import logo from "../../public/Vector1.svg";
import Image from "next/image";
import Link from "next/link";

export default function Logo () {

    return (
        <div className="flex items-center">
            <Image src={logo} alt={"logo"}/>
            <div className="flex items-end bg-transparent ml-3 ">
                <Link href={"/"}>
                    <h3 className="text-3xl sm:text-4xl font-bold bg-transparent">
                        DuoDent
                    </h3>
                </Link>
            </div>
        </div>
    )
}