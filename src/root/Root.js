import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AddProformaFormPage from "../pages/AddProformaFormPage";
import ProformaTablePage from "../pages/ProformaTablePage";
import FilterProformaTablePage from "../pages/FilterProformaTablePage";
import Template from "../NavigationTemplate/Template";
import { connect } from "react-redux";
import { setProformaList as setProformaListAction } from "../actions/actions";
import {
  baseCollection,
  getDocumentsFormCollection,
} from "../firebaseConfig/firebaseUtils";

const Root = ({ setProformaList }) => {
  useEffect(() => {
    const subscribe = baseCollection.onSnapshot((snap) => {
      const documentsCollection = snap.docs.map(getDocumentsFormCollection);
      setProformaList([...documentsCollection]);
    });
    return () => subscribe;
  }, []);

  return (
    <BrowserRouter>
      <Template>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/AddProformaFormPage" component={AddProformaFormPage} />
          <Route path="/ProformaTablePage" component={ProformaTablePage} />
          <Route
            path="/FilterProformaTablePage"
            component={FilterProformaTablePage}
          />
        </Switch>
      </Template>
    </BrowserRouter>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setProformaList: (dataBase) => dispatch(setProformaListAction(dataBase)),
  };
};

export default connect(null, mapDispatchToProps)(Root);
