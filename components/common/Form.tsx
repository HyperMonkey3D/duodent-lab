const Form = () => {
    return(
        <form action="" className=" border-t border-duo-stroke">
            <div className="py-6">
                <h3 className="text-3xl text-duo-orange">O escríbanos</h3>
                    </div>
                <div className="w-full">
                    <label htmlFor="" className="font-bold">Nombre</label>
                    <input type="text" className="w-full py-2 border border-duo-stroke rounded-lg bg-duo-light-gray mb-9"/>
                </div>
                <div>
                    <label htmlFor="" className="font-bold">Laboratorio</label>
                    <input type="text" className="w-full py-2 border border-duo-stroke rounded-lg bg-duo-light-gray mb-9"/>
                </div>
                <div>
                    <label htmlFor="" className="font-bold">Teléfono</label>
                    <input type="text" className="w-full py-2 border border-duo-stroke rounded-lg bg-duo-light-gray mb-9"/>
                </div>
                <div>
                    <label htmlFor="" className="font-bold">Mensaje</label>
                    <textarea name="" id="" cols={30} rows={10} className="w-full py-2 border border-duo-stroke rounded-lg bg-duo-light-gray mb-9"></textarea>
                </div>
                <button type="submit" className="py-3 bg-duo-orange w-full border border-duo-orange rounded-lg text-2xl text-white">Enviar</button>
            </form>
    )
}

export default Form