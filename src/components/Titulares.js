import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  titulares: state.titulares
});
const mapDispatchToProps = dispatch => ({
  deleteTitular(titular){
    dispatch({
      type: 'DELETE_TITULAR', 
      titular
    })
  }
});

function Titulares({titulares, deleteTitular}) {
  return (
    <section>
      <h2>Titulares</h2>
      <div className="cancha">
        {
          titulares.map(t => (
            <article key={t.id}>
              <div>
                <p>{t.camiseta}</p>
                <button onClick={()=>deleteTitular(t)}>X</button>
              </div>
              <p>{t.name}</p>
            </article>
          ))
        }
      </div>
    </section>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Titulares)
