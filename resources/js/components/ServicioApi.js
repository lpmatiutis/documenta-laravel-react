import DataTable from "react-data-table-component";
import React, { useState, useEffect } from "react";
import Icon from "@material-ui/icons/Apps";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import { blue } from "@material-ui/core/colors";
import DialogTest from "./DialogTest";
import ExampleDatable from "./ExampleDatable";
import Example from "./modalTestBoostrapTwo/Example";

//Dialogo

//Fin dialogo

export const ServicioApi = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);

    //const getServicioApi = () => {
    console.log("Obteniendo servicios");
    useEffect(() => {
        async function getServicioApi() {
            setIsLoading(true);
            await fetch("api/getServicioApiAll")
                .then(response => {
                    return response.json();
                })
                .then(servicios => {
                    //console.log(servicios);
                    //data = servicios;
                    setData(servicios);
                    setIsLoading(false);
                    console.log("obtenido");
                });
        }
        getServicioApi();
    }, []);

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

    const FilterComponent = ({ filterText, onFilter, onClear }) => (
        <>
            <TextField
                id="search"
                type="text"
                placeholder="Filter By Name"
                value={filterText}
                onChange={onFilter}
            />
            <ClearButton onClick={onClear}>X</ClearButton>
        </>
    );

    //Estilo de los extras
    const ExtrasStyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
    };

    const handleButtonClick = servicio => {
        console.log("clicked : " + servicio);
        //return (
        <Example idservicio={servicio} />;
        //AlertDialog();
        //);
        console.log("fin : ");
    };

    //Estas para datos adicionales
    // const Extras = ({ data }) => (
    //     <div style={ExtrasStyle}>
    //         <p> Parametros: {data.parametros} </p>
    //         <p> Modalidad: {data.modalidad} </p>
    //     </div>
    // );
    //columnos para la tabla
    const columns = [
        {
            cell: () => <Icon style={{ fill: "#43a047" }} />,
            width: "96px", // custom width for icon button
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
            sortable: true,
            grow: 0.4
        },
        {
            name: "Moneda",
            selector: "moneda",
            sortable: true,
            grow: 0
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
        },
        {
            //cell: data => <Example idservicio={data.id_servicio} />,
            // cell: data => (
            //     <button
            //         onClick={() => {
            //             //e.preventDefault()
            //             return handleButtonClick(data.id_servicio);
            //         }}
            //     >
            //         Consultar
            //     </button>
            // ),
            cell: data => (
                <Button
                // onClick={e => {
                //     <DialogTest idservicio={data.id_servicio} />;
                // }}
                >
                    <DialogTest idservicio={data.id_servicio} />
                </Button>
            ),
            ignoreRowClick: true,
            allowOverflow: true,
            button: true
        }
    ];

    console.log("creando tabla");
    console.log("data: " + data);
    return isLoading ? (
        <div>Cargando...</div>
    ) : (
        //return (
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
            //expandableRowsComponent={<Extras data={data} />}
        />
    );
    //);
};

const AlertDialog = () => {
    console.log("hola");
    //alert('kore alert');
    return (
        <div id="pruebafinal" className="container">
            Open alert dialog
        </div>
    );
};
