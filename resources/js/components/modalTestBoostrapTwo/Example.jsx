import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SendIcon from "@material-ui/icons/Send";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const Example = props => {
    const [{ idservicio }] = useState(props);
    const [show, setShow] = useState(false);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedValue, setSelectedValue] = useState(data[1]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log("recibido :" + idservicio);

    useEffect(() => {
        async function fetcData() {
            setIsLoading(true);
            fetch(`api/LogConsultas/31`)
                .then(response => {
                    return response.json();
                })
                .then(servicios => {
                    setData(servicios);
                    setIsLoading(false);
                });
        }
        fetcData();
    }, []);

    return isLoading ? (
        <div>Cargando ...</div>
    ) : (
        <>
            <Button variant="primary" onClick={handleShow}>
                <SendIcon></SendIcon>
            </Button>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Datos de prueba</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <List>
                        {data.map(datos => (
                            <ListItem key={datos.id_log_consulta}>
                                <ListItemText
                                    primary={datos.referencia_consulta}
                                ></ListItemText>
                            </ListItem>
                        ))}
                    </List>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Example;
