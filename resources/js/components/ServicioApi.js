import DataTable from "react-data-table-component";
import React, { Component } from "react";
import Icon from "@material-ui/icons/Apps";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import { blue } from "@material-ui/core/colors";
import DialogTest from './DialogTest';

class SimpleDialogDemo extends React.Component {
    state = {
      open: false
    };
    openDialog() {
      this.setState({ open: true });
    }
    render() {
      return (
        <div className="App">
          <Button onClick={this.openDialog.bind(this)}>Open dialog</Button>
          <Dialog open={this.state.open} onEnter={console.log("Hey.")}>
            <DialogTitle>Hello CodeSandbox</DialogTitle>
            <DialogContent>Start editing to see some magic happen!</DialogContent>
          </Dialog>
        </div>
      );
    }
  }

let data = [];

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

const ExtrasStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
};

const Extras = ({ data }) => (
    <div style={ExtrasStyle}>
        <p> Parametros: {data.parametros} </p>
        <p> Modalidad: {data.modalidad} </p>
    </div>
);

//Dialogo



//Fin dialogo

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
    {
        name: "Habilitado",
        selector: "habilitado",
        sortable: true,
        grow: -1
    },
    {
        name: "En Api",
        selector: "en_api",
        sortable: true,
        grow: -1
    },
    {
        name: "Pago Parcial",
        selector: "pago_parcial",
        sortable: true,
        grow: -1
    },
    {
        name: "Pago Cheque",
        selector: "pago_en_cheque",
        sortable: true,
        grow: -1
    },
    {
        name: "Anulable",
        selector: "anulable",
        sortable: true,
        grow: -1
    },
    {
        name: "R. Consulta",
        selector: "referencia_consulta",
        sortable: true,
        grow: 0.4
        //right: true
    },
    // {
    //     name: "Observaciones",
    //     selector: "observaciones",
    //     sortable: true,
    //     hide: 'md',
    //     //right: true
    // },
    // {
    //     name: "Parametros",
    //     selector: "parametros",
    //     sortable: true,
    //     grow: 0.4
    //     //right: true
    // },
    // {
    //     name: "Modalidad",
    //     selector: "modalidad",
    //     sortable: true,
    //     grow: 0.3
    //     //right: true,
    // }
    {

        cell: data => <DialogTest idservicio={data.id_servicio}/>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
      }
];

//export default class ServicioApi extends Component {
export const ServicioApi = () => {
    //render() {
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
            expandableRows
            expandableRowsComponent={<Extras />}
        />
    );
    //}
};
