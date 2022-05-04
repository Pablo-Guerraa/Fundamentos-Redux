import React from 'react';
import { connect } from 'react-redux';

const mapStoreToProps = state => ({
  suplentes: state.suplentes
});
const mapDispatchToProps = dispatch => ({
  eliminarSuplente(suplente){
    dispatch({
      type: 'DELETE_SUPLENTE',
      suplente 
    })
  }
})

function Suplentes({suplentes, eliminarSuplente}) {
  return (
    <section>
    <h2>Suplentes</h2>
    <div className="banco">
      {
        suplentes.map(s => (
          <article key={s.id}>
            <div>
              <p>{s.camiseta}</p>
              <button onClick={()=>eliminarSuplente(s)}>X</button>
            </div>
            <p>{s.name}</p>
          </article>
        ))
      }
    </div>
  </section>
  )
}
export default connect(mapStoreToProps, mapDispatchToProps)(Suplentes)
