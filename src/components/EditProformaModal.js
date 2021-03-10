import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import moment from "moment";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Form from "../styledComponents/Form";
import StyledButton from "../styledComponents/Button";
import { closeEditForm, editProforma } from "../firebaseConfig/firebaseUtils";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const EditProformaModal = ({ id, isEditing }) => {
  const classes = useStyles();
  const [currency, setCurrency] = useState("PLN");
  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };
  const [proformaDate, setProformaDate] = useState();

  const handleProformaDateChange = (date) => {
    setProformaDate(date);
  };

  const formattedDate = moment(proformaDate).format("DD/MM/YYYY");

  const handleForm = (e) => {
    e.preventDefault();

    const editedProforma = {
      id,
      proformaNumber: e.target.proformaNumber.value,
      companyName: e.target.companyName.value,
      product: e.target.product.value,
      orderValue: e.target.orderValue.value,
      currency,
      date: formattedDate,
    };
    editProforma(id, editedProforma);
    e.target.reset();
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={isEditing}
      onClose={() => closeEditForm(id)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isEditing}>
        <div className={classes.paper}>
          <h2 id="transition-modal-title">Edit modal</h2>
          <Form onSubmit={handleForm}>
            <TextField
              id="outlined-basic"
              label="podaj numer proformy"
              variant="outlined"
              name="proformaNumber"
            />
            <TextField
              id="outlined-basic"
              label="podaj nazwe zamawiającej firmy"
              variant="outlined"
              name="companyName"
            />
            <TextField
              id="outlined-basic"
              label="podaj co zamawia klient (nazwa produktu)"
              variant="outlined"
              name="product"
            />
            <TextField
              id="outlined-basic"
              label="podaj wartość zamówienia"
              variant="outlined"
              name="orderValue"
            />

            <FormControl component="fieldset">
              <FormLabel component="legend">Waluta</FormLabel>
              <RadioGroup
                aria-label="currency"
                name="currency"
                value={currency}
                onChange={handleCurrencyChange}
              >
                <FormControlLabel value="PLN" control={<Radio />} label="PLN" />
                <FormControlLabel value="EUR" control={<Radio />} label="EUR" />
              </RadioGroup>
            </FormControl>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="data wystawienia proformy"
                format="dd/MM/yyyy"
                name="deliveryDate"
                value={proformaDate}
                onChange={handleProformaDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>
            <StyledButton
              variant="contained"
              type="submit"
              style={{ backgroundColor: "green" }}
            >
              zapisz
            </StyledButton>
          </Form>
        </div>
      </Fade>
    </Modal>
  );
};

export default EditProformaModal;
