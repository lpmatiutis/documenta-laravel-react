import DataTable from 'react-data-table-component';
import React, { Component } from 'react';

let data = [];

function getZona () {
    fetch('api/getTipoZona')
    .then(response => {
        return response.json();
    })
    .then(tipoZonas => {
        console.log(tipoZonas);
        data = tipoZonas;
    });
}

getZona();
console.log(data);
//const data = tipoZona;

const columns = [
    {
        name: 'Descripcion',
        selector: 'descripcion',
        sortable: true,
        
    },
    {
        name: 'Codigo',
        selector: 'codigo',
        sortable: true,
        right: true,
    },
];

const handleChange = (state) => {
    // You can use setState or dispatch with something like Redux so we can use the retrieved data
    console.log('Selected Rows: ', state.selectedRows);
  };

export default class ExampleDatable extends Component {
    render() {
        return (
            <DataTable
                title="Arnold Movies"
                columns={columns}
                data={data}
                selectableRows
                Clicked
                Selected={handleChange}
            />
        )
    }
};