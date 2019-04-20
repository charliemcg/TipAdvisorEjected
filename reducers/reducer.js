import { countries } from "../countryList";
import { Alert } from "react-native";

function findCountry(payload) {
  for (let i = 0; i < countries.length; i++) {
    if (payload === countries[i].name) {
      return countries[i];
    }
  }
}

const reducer = (
  state = {
    country: {
      // name: "Afghanistan",
      // flag: "AF",
      // tips: [null],
      // selectedTipIndex: 0,
      // currency: "؋"
      // name: "Albania",
      // flag: "AL",
      // tips: [{ percentage: 0.1, optional: false }],
      // selectedTipIndex: 0,
      // currency: "L"
      name: "Croatia",
      flag: "HR",
      tips: [
        { type: "Restaurant", percentage: 0.1, optional: false },
        { type: "Anywhere else", percentage: 0, optional: false }
      ],
      selectedTipIndex: 0,
      currency: "kn"
    },
    amount: 0,
    err: null
  },
  action
) => {
  switch (action.type) {
    case "CHANGE_COUNTRY":
      let newCountry = findCountry(action.payload);
      state = {
        ...state,
        country: newCountry
      };
      break;
    case "CALCULATE_TIP":
      // let newAmount = action.payload * state.country.tip;
      let newAmount =
        action.payload *
        state.country.tips[state.country.selectedTipIndex].percentage;
      newAmount = newAmount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
      state = {
        ...state,
        amount: newAmount
      };
      break;
    case "SET_INDEX":
      state = {
        ...state,
        country: {
          name: state.country.name,
          flag: state.country.flag,
          tips: state.country.tips,
          selectedTipIndex: action.payload,
          currency: state.country.currency,
          optional: state.country.optional
        }
      };
      break;
    case "SET_ERROR":
      state = {
        ...state,
        err: action.payload
      };
      break;
    default:
      return state;
  }
  return state;
};

export default reducer;
