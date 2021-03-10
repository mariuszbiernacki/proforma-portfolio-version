import { actionsTypes } from "./actionsTypes";

export const setProformaList = (dataBase) => {
  return {
    type: actionsTypes.SET_PROFORMA_LIST,
    payload: dataBase,
  };
};

export const addProforma = (newProforma) => {
  return {
    type: actionsTypes.ADD_PROFORMA,
    payload: newProforma,
  };
};

export const filterProformaListByName = (companyName) => {
  return {
    type: actionsTypes.FILTER_PROFORMA_LIST_BY_NAME,
    payload: companyName,
  };
};

export const selectProforma = (proformaId) => ({
  type: actionsTypes.SELECT_PROFORMA,
  payload: proformaId,
});
