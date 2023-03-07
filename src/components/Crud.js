import React from 'react';
import shortid from 'shortid' //https://www.npmjs.com/package/shortid

function Crud() {
  const [tarea, setTarea] = React.useState('')
  const [tareas, setTareas] = React.useState([])
  const [modoEdicion, setModoEdicion] = React.useState(false)
  const [id, setId] = React.useState('')
  const [error, setError] = React.useState(null)

  const agregarTarea = e => {
    e.preventDefault()
    if(!tarea.trim()){
      console.log('Campo vacio')
      setError('El campo no puede estar Vacío')
      return
    }
    setTareas([
      ...tareas,
      {tarea, id: shortid.generate()}
    ])
    setTarea('')
    setError(null)
  }

  const eliminarTarea = id => {
    const arrayFiltrado = tareas.filter(item => item.id !== id)
    setTareas(arrayFiltrado)
  }

  const editar = item => {
    setModoEdicion(true)
    setTarea(item.tarea)
    setId(item.id)
  }

  const editarTarea = e => {
    e.preventDefault()
    if(!tarea.trim()){
      console.log('Campo vacio')
      setError('El campo no puede estar vacío')
      return
    }

    const arrayEditado = tareas.map(item => item.id === id ? {id, tarea} : item)
    setTareas(arrayEditado)
    setModoEdicion(false)
    setTarea('')
    setId('')
    setError(null)
  }

  return (
    <div>
  <h1>CRUD APP</h1>
  <hr/>
  <div>
    <div>
      <h4>Lista de Tareas</h4>
      <ul>
        {
          tareas.length === 0 ? (
            <li>Sin Tareas</li>
          ) : (
            tareas.map(item => (
              <li key={item.id}>
                <span>{item.tarea}</span>
                <button 
                  onClick={() => eliminarTarea(item.id)}
                >Eliminar</button>
                <button 
                  onClick={() => editar(item)}
                >Editar</button>
              </li>
            ))
          )
        }
      </ul>
    </div>
    <div>
      <h4>
        {
          modoEdicion ? 'Editar Tarea' : 'Agregar Tarea'
        }
      </h4>
      <form onSubmit={modoEdicion ? editarTarea : agregarTarea}>
        {
          error ? <span>{error}</span> : null
        }
        <input 
          type="text" 
          placeholder="Ingrese Tarea"
          onChange={e => setTarea(e.target.value)}
          value={tarea}
        />
        {
          modoEdicion ? (
            <button type="submit">Editar</button>
          ) : (
            <button type="submit">Agregar</button>
          )
        }
      </form>
    </div>
  </div>
</div>
  );
}

export default Crud;