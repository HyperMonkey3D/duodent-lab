import {useForm, SubmitHandler } from "react-hook-form"

const Form = () => {

    interface Inputs {
        name: string,
        lab: string,
        phone: number,
        email: string,
        message: string
    }

    const {register, handleSubmit, watch, trigger, formState: {errors} } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (e: any) => {
        console.log("data is", e)
        const isValid = await trigger()
        if(!isValid){
            e.preventDefault()
        }

    }

    return(
        <form 
            onSubmit={()=>onSubmit} 
            className=" border-t border-duo-stroke"
            action="https://formsubmit.co/063a527649569214b50062bd7d089766"
            method="POST"
        >
            <div className="py-6">
                <h3 className="text-3xl text-duo-orange">O escríbanos</h3>
                    </div>
                <div className="w-full">
                    <label htmlFor="" className="font-bold">Nombre</label>
                    <input 
                        type="text" 
                        className="w-full py-2 border border-duo-stroke rounded-lg bg-duo-light-gray mb-9"
                        {...register("name", {required: true, maxLength: 25})}   
                       
                    />
                        
                </div>
                <div>
                    <label htmlFor="" className="font-bold">Laboratorio</label>
                    <input 
                        type="text" 
                        className="w-full py-2 border border-duo-stroke rounded-lg bg-duo-light-gray mb-9"
                        {...register("lab", {required: true, maxLength: 40})}    
                    />
                        
                </div>
                <div>
                    <label htmlFor="" className="font-bold">Teléfono</label>
                    <input 
                        type="text" 
                        className="w-full py-2 border border-duo-stroke rounded-lg bg-duo-light-gray mb-9"
                        {...register("phone", {required: true, minLength:8, maxLength:8})}
                    />
                </div>
                <div>
                    <label htmlFor="" className="font-bold">Email</label>
                    <input 
                        type="text" 
                        className="w-full py-2 border border-duo-stroke rounded-lg bg-duo-light-gray mb-9"
                        {...register("email", {required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g}
                        )}
                    />
                </div>
                <div>
                    <label htmlFor="" className="font-bold">Mensaje</label>
                    <textarea 
                        cols={30} 
                        rows={10} 
                        className="w-full py-2 border border-duo-stroke rounded-lg bg-duo-light-gray mb-9"
                        {...register("message", {required: true, maxLength:240})}  
                    >
                    </textarea>
                </div>
                <button type="submit" className="py-3 bg-duo-orange w-full border border-duo-orange rounded-lg text-2xl text-white">Enviar</button>
            </form>
    )
}

export default Form