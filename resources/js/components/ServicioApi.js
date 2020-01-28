import DataTable from "react-data-table-component";
import React, { Component } from "react";
import Icon from "@material-ui/icons/Apps";

let data = [];

function convertArrayOfObjectsToCSV(array) {
    let result;

    const columnDelimiter = ",";
    const lineDelimiter = "\n";
    const keys = Object.keys(data[0]);

    result = "";
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    array.forEach(item => {
        let ctr = 0;
        keys.forEach(key => {
            if (ctr > 0) result += columnDelimiter;

            result += item[key];

            ctr++;
        });
        result += lineDelimiter;
    });

    return result;
}

function downloadCSV(array) {
    const link = document.createElement("a");
    let csv = convertArrayOfObjectsToCSV(array);
    if (csv == null) return;

    const filename = "export.csv";

    if (!csv.match(/^data:text\/csv/i)) {
        csv = `data:text/csv;charset=utf-8,${csv}`;
    }

    link.setAttribute("href", encodeURI(csv));
    link.setAttribute("download", filename);
    link.click();
}


const Export = ({ onExport }) => (
    <Button onClick={e => onExport(e.target.value)}>Export</Button>
  );

function getServicioApi() {
    fetch("api/getServicioApiAll")
        .then(response => {
            return response.json();
        })
        .then(servicios => {
            //console.log(servicios);
            data = servicios;
            console.log(data);
        });
}

// const ExpanableComponent = ({ data }) => {
//     data.moneda;
// };

getServicioApi();

const customStyles = {
    headRow: {
        style: {
            border: "none"
        }
    },
    headCells: {
        style: {
            color: "#202124",
            fontSize: "14px"
        }
    },
    rows: {
        highlightOnHoverStyle: {
            backgroundColor: "rgb(230, 244, 244)",
            borderBottomColor: "#FFFFFF",
            borderRadius: "25px",
            outline: "1px solid #FFFFFF"
        }
    },
    pagination: {
        style: {
            border: "none"
        }
    }
};

const columns = [
    {
        cell: () => <Icon style={{ fill: "#43a047" }} />,
        width: "56px", // custom width for icon button
        style: {
            borderBottom: "1px solid #FFFFFF",
            marginBottom: "-1px"
        }
    },
    {
        name: "Facturador",
        selector: "facturador",
        sortable: true,
        grow: 0.2
    },
    {
        name: "Servicio",
        selector: "servicio",
        // cell: row => (
        //     <div>
        //         <div style={{ fontWeight: 700 }}>{row.servicio}</div>
        //         {row.parametros}
        //     </div>
        // ),
        sortable: true,
        grow: 0.4
        //hide: 'sm',
        //right: true
    },
    {
        name: "Moneda",
        selector: "moneda",
        sortable: true,
        grow: 0
        //right: true
    },
    // {
    //     name: 'Habilitado',
    //     selector: 'habilitado',
    //     sortable: true,
    //     right: true,
    // },
    // {
    //     name: 'EnApi',
    //     selector: 'en_api',
    //     //sortable: true,
    //     right: true,
    // },
    // {
    //     name: 'Pago Parcial',
    //     selector: 'pago_parcial',
    //     //sortable: true,
    //     right: true,
    // },
    // {
    //     name: 'Pago Cheque',
    //     selector: 'pago_en_cheque',
    //     sortable: true,
    //     right: true,
    // },
    // {
    //     name: 'Anulable',
    //     selector: 'anulable',
    //     sortable: true,
    //     right: true,
    // },
    {
        name: "R. Consulta",
        selector: "referencia_consulta",
        sortable: true,
        grow: 0.3
        //right: true
    },
    // {
    //     name: "Observaciones",
    //     selector: "observaciones",
    //     sortable: true,
    //     hide: 'md',
    //     //right: true
    // },
    {
        name: "Parametros",
        selector: "parametros",
        sortable: true,
        grow: 0.4
        //right: true
    },
    {
        name: "Modalidad",
        selector: "modalidad",
        sortable: true,
        grow: 0.3
        //right: true,
    }
];

const handleChange = state => {
    // You can use setState or dispatch with something like Redux so we can use the retrieved data
    console.log("Selected Rows: ", state.selectedRows);
};

export default class ServicioApi extends Component {
    render() {
        return (
            <DataTable
                title="Servicios API"
                columns={columns}
                data={data}
                //selectableRows
                Clicked
                //Selected={handleChange}
                customStyles={customStyles}
                highlightOnHover
                pointerOnHover
                pagination
                dense
                //expandableRows
            />
        );
    }
}
