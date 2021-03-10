import React from "react";
import TextField from "@material-ui/core/TextField";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Form from "../styledComponents/Form";
import StyledButton from "../styledComponents/Button";
import { connect } from "react-redux";
import { filterProformaListByName as filterProformaListByNameAction } from "../actions/actions";

const useStyles = makeStyles({
  table: {
    maxWidth: 650,
    margin: "50px auto",
  },
});

const FilterProformaTable = ({
  filteredProformaList,
  filterProformaListByName,
}) => {
  const classes = useStyles();

  const handleFilter = (e) => {
    e.preventDefault();
    filterProformaListByName(e.target.companyName.value);
    e.target.reset();
  };
  return (
    <div>
      <Form onSubmit={handleFilter}>
        <TextField
          id="outlined-basic"
          label="podaj nazwe firmy"
          variant="outlined"
          name="companyName"
        />
        <StyledButton variant="contained" type="submit">
          szukaj
        </StyledButton>
      </Form>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>numer faktury proforma</TableCell>
              <TableCell align="right">nazwa firmy</TableCell>
              <TableCell align="right">zamówione produkty</TableCell>
              <TableCell align="right">wartość zamówienia</TableCell>
              <TableCell align="right">data wystawienia proformy</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProformaList.map((proforma) => {
              const {
                proformaNumber,
                companyName,
                product,
                orderValue,
                currency,
                date,
              } = proforma;
              return (
                <TableRow key={proformaNumber}>
                  <TableCell>{proformaNumber}</TableCell>
                  <TableCell>{companyName}</TableCell>
                  <TableCell>{product}</TableCell>
                  <TableCell>
                    {orderValue} {currency}
                  </TableCell>
                  <TableCell>{date}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filteredProformaList: state.filteredProformaList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterProformaListByName: (companyName) =>
      dispatch(filterProformaListByNameAction(companyName)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterProformaTable);
