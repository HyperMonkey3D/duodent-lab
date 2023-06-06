import { works } from "@/app/utils/data"

const PriceList = () => {
    return(
        <section>
            <div className="container mx-auto">
                <table className="mx-auto ">
                    <thead className="border-t border-r border-l border-duo-stroke  bg-duo-light-gray">
                        <tr>
                            <th>Producto</th>
                            <th>Precio Unidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            works
                            .map((item) => {
                                const {index, product, price} = item
                                return(
                                    <tr key={index} className="border  border-duo-stroke">
                                        <td >{product}</td>
                                        <td>Q{(price)}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>   
            </div>
        </section>
    )
}

export default PriceList