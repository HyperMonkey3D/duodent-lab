import { works } from "@/app/utils/data";
import Link from "next/link";
// import arrowRight from "../../public/arrow-right1.svg";

import Image from "next/image";
import ArrowRight from "@/app/utils/ArrowRight";

interface CardProps {
  side: string;
}

const Cards = ({ side }: CardProps) => {
  return (
    <div className="z-40 w-full lg:w-[400px] xl:w-[517px] h-fit lg:h-[326px] card px-10 py-14 border border-white sm:rounded-lg flex flex-col justify-between  mb-[2px] lg:mb-0">
      <ul className="z-20">
        {side === "left" &&
          works
            .filter((item) => item.side === side)
            .map((item) => {
              const { index, product } = item;
              return (
                <li key={index}>
                  <p className="text-2xl">{product}</p>
                </li>
              );
            })}
        {side === "right" &&
          works
            .filter((item) => item.side === side)
            .map((item) => {
              const { index, product } = item;
              return (
                <li key={index}>
                  <p className="text-2xl">{product}</p>
                </li>
              );
            })}
      </ul>
      <div className=" w-[180px] pl-2 mt-8 lg:mt-0 z-20 ">
        <Link href={"/productos"} className="flex justify-between ">
          Conozca Más
            <ArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default Cards;
