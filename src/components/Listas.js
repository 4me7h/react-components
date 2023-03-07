import React, { Fragment } from 'react';

const Listas = () => {

    const arrayuno = ['chile', 'argentina'];
    const arraydos = ['peru', 'mexico'];

    const unidos = [...arrayuno, ...arraydos];
    return (
        <Fragment>
            <h2>Añadiendo listas con map</h2>
            <p>Concatenando arrays</p>
            <code>
                const arrayuno = ['chile', 'argentina'];
                const arraydos = ['peru', 'mexico'];

                const unidos = [...arrayuno, ...arraydos];
            </code>
            <ul>
                {
                    unidos.map((item) => 
                        <li>
                            {item} 
                        </li>
                    )
                }
            </ul>
        </Fragment>
    );
}
 
export default Listas;