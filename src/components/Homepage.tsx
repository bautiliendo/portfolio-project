import { SobreMi } from './SobreMi'
import { Proyectos } from './Proyectos'
import { Contacto } from './Contacto'
import { Habilidades } from './Habilidades'

export const Homepage = () => {
  return (
    <div>
        <SobreMi />
        <Habilidades />
        <Proyectos />
        <Contacto />
    </div>
  )
}
