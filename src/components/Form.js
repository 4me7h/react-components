import React, {useState} from 'react';

const Formulario = () => {

    const [fruta, setFruta] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [lista, setLista] = useState([])

    const guardarDatos = (e) => {
        e.preventDefault()
        
        if(!fruta.trim()){
            console.log('esta vacio fruta')
            return
        }
        
        if(!descripcion.trim()){
            console.log('esta vacio descripcion')
            return
        }
        
        console.log('procesando datos...' + fruta + descripcion)
    
        setLista([
            ...lista,
            {nombreFruta: fruta, nombreDescripcion: descripcion}
        ])
    
        e.target.reset()
        setFruta('')
        setDescripcion('')
    }

    return (
        <div>
            <h2>Formulario</h2>
            <form onSubmit={ guardarDatos } >
                <input 
                    type="text"
                    placeholder="Ingrese Fruta"
                    onChange={ (e) => setFruta(e.target.value) }
                />
                <input 
                    type="text"
                    placeholder="Ingrese Descripcion"
                    onChange={ e => setDescripcion(e.target.value) }
                />
                <button type="submit">Agregar</button>
            </form>
            <ul>
                {
                    lista.map((item, index) => (
                        <li key={index}>
                            {item.nombreFruta} - {item.nombreDescripcion}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Formulario