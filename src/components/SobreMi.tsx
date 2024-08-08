import Foto from '../assets/imagen_cv-transformed.jpeg'

export const SobreMi = () => {
  return (
    <section className="bg-gray-900 py-10 sm:py-16 lg:py-24 mx-auto h-screen text-white flex justify-center items-center">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className='md:flex gap-10 items-center'>
          <div className="relative flex-shrink-0 w-56 h-56 mx-auto pb-10">
            <div className="absolute w-56 h-56 bg-orange-600 rounded-full -bottom-2 -right-1"></div>
            <img className="relative object-cover w-56 h-56 rounded-full" src={Foto} alt="Foto bautista liendo" />
          </div>

          <div className='space-y-1 pt-10 md:pt-0'>
            <p className="text-4xl font-bold text-center md:text-left">Juan Bautista Liendo</p>
            <p className="">Estudiante de <strong className='text-orange-600'>Ingeniería en Software</strong> en la Universidad Siglo 21, actualmente cursando el segundo año. Me especializo en la creción páginas web informativas y negocios e-commerce para crecer profesionalmente, adquiriendo y reforzando conocimientos.</p>
          </div>
        </div>
      </div>
    </section>
  )
}