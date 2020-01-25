import React, { Component } from 'react';

export const TipoZona = ({tipoZona}) =>{
    const divStyle = {

    }
    if(!tipoZona){
        console.log('test1');
        return(<div style={divStyle}>No existe la zona</div>);
    }
    console.log('test2');
    console.log(tipoZona);
    return(
        <div className="container is-fluid">
            <div className="notification">
            <h3> {tipoZona.descripcion} </h3>
            <p> {tipoZona.codigo} </p>
        </div>
        </div>
    )
}

export default TipoZona;