import { useEffect, useState } from 'react'
import './App.css'

// function suma (x, y) {
//   return x + y
// }

function App () {
  const [personajes, setPersonajes] = useState([])
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((datos) => datos.json())
      .then((datos) => {
        return setPersonajes(datos.results)
      })
  }, [])
  useEffect(() => {
    console.log(personajes)
  }, [personajes])
  return (
    <div className='global'>
      <div className='navbar'>
        <h1 className='home'>Rick & Morty Wiki</h1>
        <div className='rutas'>
          <h2>Characters</h2>
          <h2>Episode</h2>
          <h2>Location</h2>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, padding: 20, border: '1px solid red' }}>
        <h1>Characters</h1>
        <div style={{ height: 40, display: 'flex', gap: 15, alignItems: 'center' }}>
          <input type='text' style={{ height: '30px', padding: 0, paddingBlock: 0, paddingInline: 0 }} />
          <button style={{ background: 'aqua', height: '30px', width: 100 }}>Añadir</button>
        </div>
      </div>
      <div className='CardsAndFilters'>
        <div className='filters'>
          <h2>Filters</h2>
          <h3>Clear Filters</h3>
          <h3>Status</h3>
          <div>
            <button>alive</button><button>dead</button><button>unknown</button>
          </div>
          <h3>Species</h3>
          <div>
            <button>human</button>
            <button>alien</button>
            <button>animal</button>
          </div>
          <h3>Gender</h3>
          <div>
            <button>female</button>
            <button>male</button>
            <button>unknown</button>
          </div>
        </div>
        <div className='cards'>{personajes.map((elemento, index) => {
          return (
            <div key={index}>
              <h1>{elemento.name}</h1>
              <h2>{elemento.id}</h2>
            </div>
          )
        })}
        </div>
      </div>
      <div>
        <button>Botones</button>
      </div>
    </div>
  )
}

export default App
