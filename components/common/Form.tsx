import {useForm } from "react-hook-form"

interface Inputs {
    name: string,
    lab: string,
    phone: number,
    email: string,
    message: string
}

const Form = () => {

    const {
            register,
            trigger, 
            formState: {errors} 
        } = useForm<Inputs>()

    const onSubmit  = async (e: any) => {
        const isValid = await trigger()
        if(!isValid){
         e.preventDefault()
        }
    }

    return(
        <form 
            onSubmit={onSubmit} 
            className=" border-t border-duo-stroke"
            action="https://formsubmit.co/063a527649569214b50062bd7d089766"
            method="POST"
        >
            <div className="py-6">
                <h3 className="text-3xl text-duo-orange">O escríbanos</h3>
            </div>
            <div className="w-full h-fit bg-white mb-9"> 
                <label htmlFor="" className="font-bold">Nombre</label>
                <input 
                    type="text" 
                    className="w-full py-2 border border-duo-stroke rounded-lg bg-duo-light-gray "
                    {...register("name", {required: true, maxLength: 35})}   
                />
                {errors.name && (<small className="text-rose-600">Por favor ingrese los valores correctos (hasta 35 caracteres)</small>)}
            </div>
                <div className="w-full h-fit bg-white mb-9">
                    <label htmlFor="" className="font-bold">Laboratorio</label>
                    <input 
                        type="text" 
                        className="w-full py-2 border border-duo-stroke rounded-lg bg-duo-light-gray "
                        {...register("lab", {required: true, maxLength: 40})}    
                    />
                        {errors.lab && (<small className="text-rose-600">Por favor ingrese los valores correctos</small>)}
                </div>
                <div className="w-full h-fit bg-white  mb-9">
                    <label htmlFor="" className="font-bold">Teléfono</label>
                    <input 
                        type="text" 
                        className="w-full py-2 border border-duo-stroke rounded-lg bg-duo-light-gray"
                        {...register("phone", {required: true, minLength:8, maxLength:8})}
                    />
                    {errors.phone && (<small className="text-rose-600">Por favor ingrese los valores correctos (8 números sin espacio)</small>)}
                </div>
                <div className="w-full h-fit bg-white mb-9">
                    <label htmlFor="" className="font-bold">Email</label>
                    <input 
                        type="text" 
                        className="w-full py-2 border border-duo-stroke rounded-lg bg-duo-light-gray "
                        {...register("email", {required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g}
                        )}
                    />
                    {errors.email && (<small className="text-rose-600">Por favor ingrese los valores correctos</small>)}
                </div>
                <div className="w-full h-fit bg-white mb-9">
                    <label htmlFor="" className="font-bold">Mensaje</label>
                    <textarea 
                        cols={30} 
                        rows={10} 
                        className="w-full py-2 border border-duo-stroke rounded-lg bg-duo-light-gray "
                        {...register("message", {required: true, maxLength:240})}  
                    />
                        {errors.message && (<small className="text-rose-600">Por favor ingrese los valores correctos (hasta 240 caracteres)</small>)}
                </div>
            <button type="submit" className="py-3 bg-duo-orange w-full border border-duo-orange rounded-lg text-2xl text-white">Enviar</button>
        </form>
    )
}

export default Form