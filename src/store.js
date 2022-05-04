import { createStore } from "redux";

const initialState = {
  jugadores: [
    {
      id: 1,
      name: 'Pablo',
      camiseta: 8
    },   {
      id: 2,
      name: 'Daniel',
      camiseta: 6
    },
    {
      id: 3,
      name: 'Mauricio',
      camiseta: 9
    }
  ],
  titulares: [], 
  suplentes: []
} 

const reducerEntrTec = (state = initialState, action) =>{
  console.log(action)
  if(action.type === 'AÑADIR_TITULAR') {
    return {
      ...state,
      titulares: state.titulares.concat(action.jugador),
      jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)

    }
  } else if(action.type === 'AÑADIR_SUPLENTE') {
    return {
      ...state,
      suplentes: state.suplentes.concat(action.jugador),
      jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
    }
  } else if(action.type === 'DELETE_SUPLENTE') {
    return {
      ...state, 
      suplentes: state.suplentes.filter(s => s.id !== action.suplente.id),
      jugadores: state.jugadores.concat(action.suplente)
    }

  } else if (action.type === 'DELETE_TITULAR') {
    return {
      ...state, 
      jugadores: state.jugadores.concat(action.titular),
      titulares: state.titulares.filter(t => t.id !== action.titular.id),
    }
  }
  return state
}
export default createStore(reducerEntrTec) 