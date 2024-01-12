import { cardsData } from "@/app/utils/data";

const HowWeWork = () => {
  return (
    <section className="bg-duo-light-gray border-y border-duo-stroke px-12 py-16">
      <div className="container mx-auto">
        <div className="flex flex-wrap w-full justify-evenly">
          {cardsData.map((item) => {
            const { index, message } = item;
            return (
              <div
                key={index}
                className="w-[320px] sm:w-[401px] h-[380px] lg:h-[352px] bg-white flex items-center px-5 sm:px-10 border border-duo-stroke rounded-lg mb-3 xl:mb-0"
              >
                <p className="text-2xl sm:text-3xl font-normal">{message}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
