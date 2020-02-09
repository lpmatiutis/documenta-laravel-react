import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";
import SendIcon from '@material-ui/icons/Send';

let data = [];

function obtenerDatospruebas(idservicio) {
    console.log('ingreso datosprueba1');
    fetch(`api/LogConsultas/${idservicio}`)
        .then(response => {
            console.log('ingreso datosprueba2');
            return response.json();
        })
        .then(servicios => {
            //console.log(servicios);
            console.log('ingreso datosprueba3');
            data = servicios;
            console.log('datos: ' + data);
        });
}

const emails = ["username@gmail.com", "user02@gmail.com"];
const useStyles = makeStyles({
    avatar: {
        backgroundColor: blue[100],
        color: blue[600]
    }
});

function SimpleDialog(props) {
    console.log('Props test: ' + props);
    const classes = useStyles();
    const { onClose, selectedValue, open } = props;

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
                 {data.map(data => ( //data
                    <ListItem
                        //button
                        //onClick={() => handleListItemClick(data.referencia_consulta)}
                        key={data.id_log_consulta}
                    >
                        {/* <ListItemAvatar>
                            <Avatar className={classes.avatar}>
                                <PersonIcon />
                            </Avatar>
                        </ListItemAvatar> */}
                        <ListItemText primary={data.referencia_consulta} />
                    </ListItem>
                ))}

                {/* <ListItem
                    autoFocus
                    button
                    onClick={() => handleListItemClick("addAccount")}
                >
                    <ListItemAvatar>
                        <Avatar>
                            <AddIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Add account" />
                </ListItem> */}
            </List>
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired
};

export default function SimpleDialogDemo(props) {
    const { idservicio } = props;
    console.log('Props test2: ' + idservicio);
    obtenerDatospruebas(idservicio);
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(data[1]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = value => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
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
            />
        </div>
    );
}
