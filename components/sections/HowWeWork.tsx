"use client"
import {cardsData} from "@/app/utils/data";
import cardOne from "../../public/card-1-white.json"
import cardTwo from "../../public/card-2-white.json"
import cardThree from "../../public/card-three-white.json"
import progressBar from "@/public/progress-bar.json"
import Lottie from "lottie-react";
import {useEffect, useState} from "react";

const HowWeWork = () => {

    const [isIndex, setIsIndex] = useState(0);
    const [graphics, setGraphics] = useState(cardOne);
    const cardStyle = "z-40 w-full lg:w-[401px] xl:w-[501px] h-[150px] my-3 rounded-lg  flex-col relative overflow-clip"

    const selectedGraphics = () => {
        switch (isIndex) {
            case 0:
                setGraphics(cardOne);
                break
            case 1:
                setGraphics(cardTwo);
                break;
            case 2:
                // @ts-ignore
                setGraphics(cardThree);
                break
            default:
                return
        }
    }

    useEffect(() => {
        selectedGraphics();
    }, [isIndex]);

    return (
        <section className="bg-white px-12  relative flex justify-center items-center pt-20 pb-32">
            <div className="container mx-auto relative bg-white flex flex-col-reverse lg:flex-row justify-evenly">
                <div className="flex flex-col w-fit h-fit justify-between  bg-white py-3 lg:py-0 rounded-l-lg">
                    {cardsData.map((item) => {
                        const {index, title, message} = item;
                        return (
                            <div
                                onMouseEnter={() => setIsIndex(index)}
                                key={index}
                                className={isIndex === index ? `${cardStyle} bg-duo-light-gray` : `${cardStyle} bg-duo-lighter-gray`}
                            >
                                <div className="flex flex-col justify-center px-8  w-full h-full">
                                    <div className="h-fit w-full relative">
                                        <h3 className="text-3xl font-normal z-50 text-duo-dark-gray ">
                                            {title}
                                        </h3>
                                    </div>
                                    <div className="w-full h-[20px] ">
                                        {
                                            isIndex === index && (
                                                <div className="w-fit  ">
                                                    <Lottie animationData={progressBar} loop={false}/>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="w-full  lg:w-fit bg-white   rounded-xl flex flex-col justify-center">
                    <div
                        className="w-full lg:w-[500px] xl:w-[700px] h-fit flex flex-col justify-between items-end bg-duo-orange-secondary border border-duo-orange-secondary  rounded-lg overflow-clip">
                        <div className="bg-duo-orange-secondary w-full h-[250px] flex items-end px-8 py-8">
                            {
                                isIndex >= 0 && (<div>
                                    <p className="text-3xl font-sans font-extralight text-white">
                                        {
                                            cardsData[isIndex].message
                                        }
                                    </p>
                                </div>)
                            }
                        </div>
                        <div className="w-full h-fit bg-white flex justify-center items-end">
                            <Lottie
                                animationData={graphics}
                                className="w-[300px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWeWork;
