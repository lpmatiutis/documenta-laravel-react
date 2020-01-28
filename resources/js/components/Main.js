import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { TipoZona } from './TipoZona';
import AddTipoZona from './AddTipoZona';
import 'bulma/css/bulma.css';
import {Navbar} from './Navbar';
import ExampleDatable from './exampleDatable.js'
import ServicioApi from './ServicioApi'

export default class Main extends Component {
    constructor() {
        super(); //no olvidar esta SUPER - me jodio
        this.state = {
            tipoZonas: [],
            currentTipoZona: null
        }
    }

    componentDidMount() {
        fetch('/api/getTipoZona')
            .then(response => {
                return response.json();
            })
            .then(tipoZonas => {
                this.setState({ tipoZonas });
            });
    }

    handleClick(tipozona) {
        console.log('handleClick');
        this.setState({ currentTipoZona: tipozona });
    }

    handleAddTipoZona = (tipoZona) => {
        console.log('handleAdd1');
        console.log(tipoZona);
        fetch('api/TipoZona/', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'applicacion/json'
            },
            body: JSON.stringify(tipoZona)
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState((prevState) => ({
                    tipoZonas: prevState.tipoZonas.concat(data),
                    currentTipoZona: data
                }))
            })
    }

    //OJO: CUIDADO CON LA KEY(CLAVE)
    renderTipoZona() {
        return this.state.tipoZonas.map(tipoZona => {
            return (
                <li onClick={
                    () => this.handleClick(tipoZona)} key={tipoZona.idtipozona}>
                    {tipoZona.descripcion}
                </li>
            );
        })
    }
    render() {
        return (
            <div className="container">
            <Navbar/>
            <ServicioApi></ServicioApi>
            </div>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}