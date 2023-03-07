import React, { useState, Fragment } from 'react'

const CountHooks = () => {
    // Se declara una nueva variable de estado, que llamaremos "count"
    const [count, setCount] = useState(0);

    return(
        <Fragment>
            <h2>Contador con Hooks</h2>
            <p>
                Haz clikeado {count} veces
            </p>
            <button onClick={() => {
                setCount(count + 1)
            }}>
                Clickme
            </button>
        </Fragment>
    );
}

export default CountHooks;


