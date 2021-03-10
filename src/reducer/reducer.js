import { actionsTypes } from "../actions/actionsTypes";

const initialState = {
  proformaList: [],
  filteredProformaList: [],
  selectedProforma: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionsTypes.SET_PROFORMA_LIST:
      return {
        ...state,
        proformaList: [...payload],
      };
    case actionsTypes.ADD_PROFORMA:
      return {
        ...state,
        proformaList: [...state.proformaList, payload],
      };
    case actionsTypes.FILTER_PROFORMA_LIST_BY_NAME:
      const chosenProformas = state.proformaList.filter((proforma) =>
        proforma.companyName.includes(payload)
      );

      return {
        ...state,
        filteredProformaList: [...chosenProformas],
      };

    case actionsTypes.SELECT_PROFORMA:
      const chosenProforma = state.proformaList.find(
        (proforma) => proforma.id === payload
      );

      return {
        ...state,
        selectedProforma: chosenProforma,
      };

    default: {
      return state;
    }
  }
};

export default reducer;
