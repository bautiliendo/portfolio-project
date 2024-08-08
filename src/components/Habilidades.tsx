import React from '../assets/react.png'
import Ts from '../assets/ts.png'
import Js from '../assets/javascript.png'
import Java from '../assets/java.png'
import Html from '../assets/html.png'
import Css from '../assets/css.png'
import Tailwind from '../assets/tailwind.png'
import Mongo from '../assets/mongo.png'
import Node from '../assets/node.png'
import Github from '../assets/github.png'

export const Habilidades = () => {
  return (
    <section className="bg-gray-900 py-10 sm:py-16 lg:py-24 mx-auto text-white flex justify-center items-center">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <h2 className='font-bold text-3xl text-center py-6'>Habilidades</h2>
        <ul className='flex gap-6'>
          <li className='hover:scale-[1.10] transition-transform'><img style={{width: 65}} className='rounded-sm' src={React}/></li>
          <li className='hover:scale-[1.10] transition-transform'><img style={{width: 65}} className='rounded-sm' src={Ts}/></li>
          <li className='hover:scale-[1.10] transition-transform'><img style={{width: 65}} className='rounded-sm'  src={Js}/></li>
          <li className='hover:scale-[1.10] transition-transform'><img style={{width: 65}} className='rounded-sm'  src={Java}/></li>
          <li className='hover:scale-[1.10] transition-transform'><img style={{width: 65}} className='rounded-sm'  src={Html}/></li>
          <li className='hover:scale-[1.10] transition-transform'><img style={{width: 65}} className='rounded-sm'  src={Css}/></li>
          <li className='hover:scale-[1.10] transition-transform'><img style={{width: 65}} className='rounded-sm'  src={Tailwind}/></li>
          <li className='hover:scale-[1.10] transition-transform'><img style={{width: 65}} className='rounded-sm'  src={Mongo}/></li>
          <li className='hover:scale-[1.10] transition-transform'><img style={{width: 65}} className='rounded-sm'  src={Node}/></li>
          <li className='hover:scale-[1.10] transition-transform'><img style={{width: 65}} className='rounded-sm'  src={Github}/></li>
        </ul>
      </div>
    </section>
  )
}
