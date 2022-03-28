import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { obtenerPersonajesAccion, siguenterPersonajesAccion } from '../redux/ricksDucks'

function Personajes() {
    const dispatch = useDispatch()

    const personajes = useSelector(store => store.personajes.array)
    console.log(personajes)

  return (
    <div>
        Lista de personajes
        <button onClick={() => dispatch(obtenerPersonajesAccion()) }>Personajes</button>
        <button onClick={() => dispatch(siguenterPersonajesAccion()) }>Siguiente</button>
        <ul>
            {
                personajes.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default Personajes