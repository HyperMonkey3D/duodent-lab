import { works } from "@/app/utils/data"

const PriceList = () => {



    return(
        <section className="border-y border-duo-stroke py-10">
            <div className="container mx-auto ">
                <div className="w-5/6 lg:w-[1000px] mx-auto border border-duo-stroke rounded-lg">
                    <table className="mx-auto w-full table-auto h-[700px] ">
                        <thead>
                            <tr >
                                <th className="text-2xl lg:text-3xl text-left px-4 py-3 lg:px-8 lg:py-7 bg-duo-light-gray border-0 rounded-tl-lg">Producto</th>
                                <th className="text-2xl lg:text-3xl text-left px-4 py-3 lg:px-8 lg:py-7 bg-duo-light-gray border-0 rounded-tr-lg">Precio Unidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                works
                                .map((item) => {
                                    const {index, product, price} = item
                                    return(
                                            <tr key={index} >
                                                <td className="text-xl lg:text-2xl text-left border-t border-duo-stroke px-2 py-4 lg:px-8 lg:py-7">{product}</td>
                                                <td className="text-xl lg:text-2xl text-left border-t border-duo-stroke px-2 py-4 lg:px-8 lg:py-7">Q{price}</td>
                                            </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>  
                </div>
                 
            </div>
        </section>
    )
}

export default PriceList