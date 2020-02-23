import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";
import SendIcon from '@material-ui/icons/Send';

// function obtenerDatospruebas(idservicio) {
//     fetch(`api/LogConsultas/${idservicio}`)
//         .then(response => {
//             return response.json();
//         })
//         .then(servicios => {
//             data = servicios;
//         });
// }
const useStyles = makeStyles({
    avatar: {
        backgroundColor: blue[100],
        color: blue[600]
    }
});

const SimpleDialog = (props) => {
    const { onClose, selectedValue, open }  = props;
    const [{ datos }] = useState(props);
    console.log('datos recibidos: ' + datos);

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = value => {
        onClose(value);
    };

    return (
        <Dialog
            onClose={handleClose}
            aria-labelledby="simple-dialog-title"
            open={open}
        >
            <DialogTitle id="simple-dialog-title">
                Set backup account
            </DialogTitle>
            <List>
                 {datos.map(data => (
                    <ListItem
                        //onClick={() => handleListItemClick(data.referencia_consulta)}
                        key={data.id_log_consulta}
                    >
                        <ListItemText primary={data.referencia_consulta} />
                    </ListItem>
                ))}
            </List>
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string
};

const DialogTest = (props) => {
    const [ {idservicio} ] = useState(props)
    const [ data, setData ] = useState([])
    const [open, setOpen] = useState(false);
    const [ isLoading, setIsLoading ] = useState(false)
    const [selectedValue, setSelectedValue] = useState(data[1]);
    console.log('ingresando');
    //const { idservicio } = props;
    console.log('recibido :' + idservicio);
    //obtenerDatospruebas(idservicio);
    useEffect(() =>{
        async function fetcData() {
            setIsLoading(true)
            fetch(`api/LogConsultas/${idservicio}`)
            .then(response => {
                return response.json();
            })
            .then(servicios => {
                setData(servicios)
                setIsLoading(false)
            });
        }
    fetcData()
    }, []);
    

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = value => {
        setOpen(false);
        setSelectedValue(value);
    };

    return isLoading ? <div>Cargando...</div> : (
        <div>
            <Button
                variant="outlined"
                color="primary"
                onClick={handleClickOpen}
            >
                <SendIcon/>
            </Button>
            <SimpleDialog
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
                datos = {data}
            />
        </div>
    );
}

export default DialogTest;