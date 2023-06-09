import Slider from "../common/Slider"

const Trust = () => {
    return(
        <section id="confianza" className="bg-white py-11">
            <div className="w-[500px] sm:w-[600px] md:w-[800] lg:w-[1191px] mx-auto p-11">
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