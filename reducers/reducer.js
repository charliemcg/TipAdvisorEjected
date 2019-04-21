import { countries } from "../countryList";
import { Alert } from "react-native";
import DeviceInfo from "react-native-device-info";

function findCountry(payload) {
  for (let i = 0; i < countries.length; i++) {
    if (payload === countries[i].name) {
      return countries[i];
    }
  }
}

function getCountryFromDevice() {
  const countryCode = DeviceInfo.getDeviceCountry();
  for (let i = 0; i < countries.length; i++) {
    if (countryCode === countries[i].flag) {
      return {
        country: {
          name: countries[i].name,
          flag: countryCode,
          tips: countries[i].tips,
          selectedTipIndex: countries[i].selectedTipIndex,
          currency: countries[i].currency
        },
        enteredValue: 0,
        amount: 0,
        err: null
      };
    }
  }
  return {
    country: {
      name: "Afghanistan",
      flag: "AF",
      tips: [null],
      selectedTipIndex: 0,
      currency: "؋"
    },
    enteredValue: 0,
    amount: 0,
    err: null
  };
}

const reducer = (state = getCountryFromDevice(), action) => {
  switch (action.type) {
    case "CHANGE_COUNTRY":
      let newCountry = findCountry(action.payload);
      state = {
        ...state,
        country: newCountry
      };
      break;
    case "CALCULATE_TIP":
      let newAmount =
        action.payload *
        state.country.tips[state.country.selectedTipIndex].percentage;
      newAmount = newAmount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
      state = {
        ...state,
        enteredValue: action.payload,
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
