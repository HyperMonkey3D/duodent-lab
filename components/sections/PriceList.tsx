import { works } from "@/app/utils/data"

const PriceList = () => {



    return(
        <section className="border-y border-duo-stroke py-10">
            <div className="container mx-auto ">
                <div className="w-[1000px] mx-auto border border-duo-stroke rounded-lg">
                    <table className="mx-auto w-full table-auto h-[700px] ">
                        <thead className=" h-[50px] ">
                            <tr >
                                <th className="text-3xl text-left px-8 py-7 bg-duo-light-gray border-0 rounded-tl-lg">Producto</th>
                                <th className="text-3xl text-left px-8 py-7 bg-duo-light-gray border-0 rounded-tr-lg">Precio Unidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                works
                                .map((item) => {
                                    const {index, product, price} = item
                                    return(
                                            <tr key={index} >
                                                <td className="text-2xl text-left border-t border-duo-stroke px-8 py-7">{product}</td>
                                                <td className="text-2xl text-left border-t border-duo-stroke px-8 py-7">Q{price}</td>
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