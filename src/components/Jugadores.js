import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  jugadores: state.jugadores
});
const mapDispatchToProps = dispatch => ({
  agregarTitular(jugador){
    dispatch({
      type: 'AÑADIR_TITULAR',
      jugador
    })
  },
  agregarSuplente(jugador) {
    dispatch({
      type: 'AÑADIR_SUPLENTE',
      jugador
    })
  }
});

function Jugadores({jugadores, agregarTitular, agregarSuplente}) {

  return (
    <section>
      <h2>Jugadores</h2>
      <div className='contenedor-jugadores'>
        {
          jugadores.map(j=>(
            <article key={j.id}>
              <h3>{j.name}</h3>
              <p>{j.camiseta}</p>
              <div>
                <button onClick={()=>agregarTitular(j)}>Titular</button>
                <button onClick={()=>agregarSuplente(j)}>Suplente</button>
              </div>
            </article>
          ))
        }
      </div>
    </section>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Jugadores)