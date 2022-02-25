import React from 'react';

const ElementoLista = props => {
    return(
        <li>
            <a href={props.el.web} target="_blank" rel="noreferrer">{props.el.name}</a>
        </li>
    )
}
     
export default ElementoLista;