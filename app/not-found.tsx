import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='w-full md:w-[1200px] h-[500px]  m-auto py-10'>
      <h2 className='text-black'>No encontrado</h2>
      <p className='text-black'>No se pudo encontrar el recurso solicitado :(</p>
      <div className='bg-slate-700 w-[150px] h-[30px] flex justify-center items-center mt-5 rounded-2xl'>
      <Link href="/" className='text-white'>Regresar a inicio</Link>
      </div>
      
    </div>
  )
}