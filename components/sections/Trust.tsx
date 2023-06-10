import Slider from "../common/Slider"

const Trust = () => {
    return(
        <section id="confianza" className="bg-white py-11">
            <div className="w-[300px] sm:w-[500px] md:w-[600] lg:w-[1000px] mx-auto p-11 bg-slate-600 flex flex-col justify-center items-center">
                <div className="mb-12">
                    <h2 className="w-full text-4xl">
                        Muchos de los mejores dentistas de Guatemala <span className="text-duo-orange">confían</span> en nuestra <span className="text-duo-orange">destreza</span>   
                    </h2>
                </div>
                <Slider />
            </div>
        </section>
    )
}

export default Trust