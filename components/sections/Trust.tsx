import Slider from "../common/Slider";

const Trust = () => {
  return (
    <section id="confianza" className="bg-white py-11 my-20">
      <div className="w-full md:w-[800px] lg:w-[1000px] mx-auto p-2 sm:p-11 bg-white flex flex-col justify-center items-center">
        <div className="mb-12 px-8 sm:px-0">
          <h2 className="w-full text-3xl md:text-5xl">
            Muchos de los mejores dentistas de Guatemala{" "}
            <span className="text-duo-orange">confían</span> en nuestra{" "}
            <span className="text-duo-orange">destreza</span>
          </h2>
        </div>
        <Slider />
      </div>
    </section>
  );
};

export default Trust;
