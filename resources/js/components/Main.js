import React, {useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { TipoZona } from './TipoZona';
import AddTipoZona from './AddTipoZona';
//import 'bulma/css/bulma.css';
//import {Navbar} from './Navbar';
//import {ServicioApi} from './ServicioApi'
import DialogTest from './DialogTest';
import TestBulma from './modelTestTwo/TestBulma';

//export default class Main extends Component {
const Main = () =>{

    return (
            <div className="container">
            {/* <Navbar/> */}
            <TestBulma></TestBulma>
            {/* <ServicioApi/> */}
            </div>
        );
}

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}