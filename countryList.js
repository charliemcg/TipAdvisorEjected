export const countries = [
  // { name: "Afghanistan", flag: "AF", tip: null, currency: "؋", optional: null },
  // { name: "Albania", flag: "AL", tip: 0.1, currency: "L", optional: false },
  // { name: "Algeria", flag: "DZ", tip: null, currency: "د.ج", optional: null },
  // { name: "Andorra", flag: "AD", tip: null, currency: "€", optional: null },
  // { name: "Angola", flag: "AO", tip: null, currency: "Kz", optional: null },
  {
    name: "Afghanistan",
    flag: "AF",
    tips: [null],
    selectedTipIndex: 0,
    currency: "؋",
    optional: null
  },
  {
    name: "Albania",
    flag: "AL",
    tips: [
      { type: "Restaurant", percentage: 0.1 },
      { type: "Hotel", percentage: 0.05 }
    ],
    selectedTipIndex: 0,
    currency: "L",
    optional: false
  }, //The two tip types are for testing and need to be changed
  {
    name: "Algeria",
    flag: "DZ",
    tips: [{ /* type: "Restaurant", */ percentage: 0.1 }],
    selectedTipIndex: 0,
    currency: "د.ج",
    optional: false
  }, //The tip type must be removed
  {
    name: "Andorra",
    flag: "AD",
    tips: [null],
    selectedTipIndex: 0,
    currency: "€",
    optional: null
  },
  {
    name: "Angola",
    flag: "AO",
    tips: [null],
    selectedTipIndex: 0,
    currency: "Kz",
    optional: null
  },
  {
    name: "Antigua and Barbuda",
    flag: "AG",
    tips: [null],
    selectedTipIndex: 0,
    currency: "$",
    optional: null
  },
  {
    name: "Argentina",
    flag: "AR",
    tips: [{ percentage: 0.05 }],
    selectedTipIndex: 0,
    currency: "$",
    optional: true
  },
  {
    name: "Armenia",
    flag: "AM",
    tips: [{ percentage: 0.1 }],
    selectedTipIndex: 0,
    currency: "֏",
    optional: false
  },
  {
    name: "Australia",
    flag: "AU",
    tips: [{ percentage: 0.05 }],
    selectedTipIndex: 0,
    currency: "$",
    optional: true
  },
  {
    name: "Austria",
    flag: "AT",
    tips: [{ percentage: 0.05 }],
    selectedTipIndex: 0,
    currency: "€",
    optional: true
  },
  {
    name: "Azerbaijan",
    flag: "AZ",
    tips: [null],
    selectedTipIndex: 0,
    currency: "₼",
    optional: null
  },
  {
    name: "Bahamas",
    flag: "BS",
    tips: [null],
    selectedTipIndex: 0,
    currency: "$",
    optional: null
  },
  {
    name: "Bahrain",
    flag: "BH",
    tips: [null],
    selectedTipIndex: 0,
    currency: ".د.ب",
    optional: null
  },
  {
    name: "Bangladesh",
    flag: "BD",
    tips: [null],
    selectedTipIndex: 0,
    currency: "৳",
    optional: null
  },
  {
    name: "Barbados",
    flag: "BB",
    tips: [null],
    selectedTipIndex: 0,
    currency: "$",
    optional: null
  },
  {
    name: "Belarus",
    flag: "BY",
    tips: [null],
    selectedTipIndex: 0,
    currency: "Br",
    optional: null
  },
  {
    name: "Belgium",
    flag: "BE",
    tips: [null],
    selectedTipIndex: 0,
    currency: "€",
    optional: null
  },
  {
    name: "Belize",
    flag: "BZ",
    tips: [null],
    selectedTipIndex: 0,
    currency: "$",
    optional: null
  },
  {
    name: "Benin",
    flag: "BJ",
    tips: [null],
    selectedTipIndex: 0,
    currency: "Fr",
    optional: null
  },
  {
    name: "Bhutan",
    flag: "BT",
    tips: [null],
    selectedTipIndex: 0,
    currency: "Nu",
    optional: null
  },
  {
    name: "Bolivia",
    flag: "BO",
    tips: [null],
    selectedTipIndex: 0,
    currency: "Bs",
    optional: null
  },
  {
    name: "Bosnia and Herzogovina",
    flag: "BA",
    tips: [null],
    selectedTipIndex: 0,
    currency: "КМ",
    optional: null
  },
  {
    name: "Botswana",
    flag: "BW",
    tips: [null],
    selectedTipIndex: 0,
    currency: "P",
    optional: null
  },
  {
    name: "Brazil",
    flag: "BR",
    tips: [null],
    selectedTipIndex: 0,
    currency: "R$",
    optional: null
  },
  {
    name: "Bulgaria",
    flag: "BG",
    tips: [{ percentage: 0.1 }],
    selectedTipIndex: 0,
    currency: "лв",
    optional: true
  },
  {
    name: "Burkina Faso",
    flag: "BF",
    tips: [null],
    selectedTipIndex: 0,
    currency: "Fr",
    optional: null
  },
  {
    name: "Burundi",
    flag: "BI",
    tips: [null],
    selectedTipIndex: 0,
    currency: "Fr",
    optional: null
  },
  {
    name: "Brunei",
    flag: "BN",
    tips: [null],
    selectedTipIndex: 0,
    currency: "$",
    optional: null
  },
  {
    name: "Cambodia",
    flag: "KH",
    tips: [null],
    selectedTipIndex: 0,
    currency: "៛",
    optional: null
  },
  {
    name: "Cameroon",
    flag: "CM",
    tips: [null],
    selectedTipIndex: 0,
    currency: "Fr",
    optional: null
  },
  {
    name: "Canada",
    flag: "CA",
    tips: [{ percentage: 0.1 }],
    selectedTipIndex: 0,
    currency: "$",
    optional: false
  },
  {
    name: "Cape Verde",
    flag: "CV",
    tips: [null],
    selectedTipIndex: 0,
    currency: "Esc",
    optional: null
  },
  {
    name: "Central African Republic",
    flag: "CF",
    tips: [null],
    selectedTipIndex: 0,
    currency: "Fr",
    optional: null
  },
  {
    name: "Chad",
    flag: "TD",
    tips: [null],
    selectedTipIndex: 0,
    currency: "Fr",
    optional: null
  },
  {
    name: "Chile",
    flag: "CL",
    tips: [{ percentage: 0.1 }],
    selectedTipIndex: 0,
    currency: "$",
    optional: false
  },
  {
    name: "China",
    flag: "CN",
    tips: [null],
    selectedTipIndex: 0,
    currency: "元",
    optional: null
  },
  {
    name: "Colombia",
    flag: "CO",
    tips: [{ percentage: 0.1 }],
    selectedTipIndex: 0,
    currency: "$",
    optional: true
  },
  {
    name: "Comoros",
    flag: "KM",
    tips: [null],
    selectedTipIndex: 0,
    currency: "Fr",
    optional: null
  },
  {
    name: "Congo",
    flag: "CG",
    tips: [null],
    selectedTipIndex: 0,
    currency: "Fr",
    optional: null
  },
  {
    name: "D.R. Congo",
    flag: "CD",
    tips: [null],
    selectedTipIndex: 0,
    currency: "Fr",
    optional: null
  },
  {
    name: "Costa Rica",
    flag: "CR",
    tips: [null],
    selectedTipIndex: 0,
    currency: "₡",
    optional: null
  },
  {
    name: "Croatia",
    flag: "HR",
    tips: [{ percentage: 0.1 }],
    selectedTipIndex: 0,
    currency: "kn",
    optional: false
  },
  {
    name: "Cuba",
    flag: "CU",
    tips: [null],
    selectedTipIndex: 0,
    currency: "$",
    optional: null
  },
  {
    name: "Cyprus",
    flag: "CY",
    tips: [null],
    selectedTipIndex: 0,
    currency: "€",
    optional: null
  },
  {
    name: "Czechia",
    flag: "CZ",
    tips: [null],
    selectedTipIndex: 0,
    currency: "Kč",
    optional: null
  },
  {
    name: "Denmark",
    flag: "DK",
    tips: [null],
    selectedTipIndex: 0,
    currency: "kr",
    optional: null
  },
  {
    name: "Djibouti",
    flag: "DJ",
    tips: [null],
    selectedTipIndex: 0,
    currency: "Fr",
    optional: null
  },
  {
    name: "Dominica",
    flag: "DM",
    tips: [null],
    selectedTipIndex: 0,
    currency: "$",
    optional: null
  },
  {
    name: "Dominican Republic",
    flag: "DO",
    tips: [{ percentage: 0.1 }],
    selectedTipIndex: 0,
    currency: "$",
    optional: false
  },
  {
    name: "East Timor",
    flag: "TL",
    tips: [null],
    selectedTipIndex: 0,
    currency: "$",
    optional: null
  },
  {
    name: "Ecuador",
    flag: "EC",
    tips: [{ percentage: 0.05 }],
    selectedTipIndex: 0,
    currency: "$",
    optional: true
  },
  {
    name: "Egypt",
    flag: "EG",
    tips: [{ percentage: 0.1 }],
    selectedTipIndex: 0,
    currency: "ج.م",
    optional: false
  },
  {
    name: "El Salvador",
    flag: "SV",
    tips: [null],
    selectedTipIndex: 0,
    currency: "$",
    optional: null
  },
  {
    name: "Equatorial Guinea",
    flag: "GQ",
    tips: [null],
    selectedTipIndex: 0,
    currency: "Fr",
    optional: null
  },
  {
    name: "Eritrea",
    flag: "ER",
    tips: [null],
    selectedTipIndex: 0,
    currency: "Nfk",
    optional: null
  },
  {
    name: "Estonia",
    flag: "EE",
    tips: [{ percentage: 0.1 }],
    selectedTipIndex: 0,
    currency: "€",
    optional: true
  },
  {
    name: "Eswatini",
    flag: "SZ",
    tips: [null],
    selectedTipIndex: 0,
    currency: "L",
    optional: null
  },
  {
    name: "Ethiopia",
    flag: "ET",
    tips: [null],
    selectedTipIndex: 0,
    currency: "Br",
    optional: null
  },
  {
    name: "Fiji",
    flag: "FJ",
    tips: [null],
    selectedTipIndex: 0,
    currency: "$",
    optional: null
  },
  {
    name: "Finland",
    flag: "FI",
    tips: [null],
    selectedTipIndex: 0,
    currency: "€",
    optional: null
  },
  {
    name: "France",
    flag: "FR",
    tips: [null],
    selectedTipIndex: 0,
    currency: "€",
    optional: null
  },
  {
    name: "Gabon",
    flag: "GA",
    tips: [null],
    selectedTipIndex: 0,
    currency: "Fr",
    optional: null
  },
  {
    name: "The Gambia",
    flag: "GM",
    tips: [null],
    selectedTipIndex: 0,
    currency: "D",
    optional: null
  },
  {
    name: "Georgia",
    flag: "GE",
    tips: [null],
    selectedTipIndex: 0,
    currency: "₾",
    optional: null
  },
  {
    name: "Germany",
    flag: "DE",
    tips: [{ percentage: 0.05 }],
    selectedTipIndex: 0,
    currency: "€",
    optional: false
  },
  {
    name: "Ghana",
    flag: "GH",
    tips: [null],
    selectedTipIndex: 0,
    currency: "₵",
    optional: null
  },
  {
    name: "Greece",
    flag: "GR",
    tips: [null],
    selectedTipIndex: 0,
    currency: "€",
    optional: null
  },
  {
    name: "Grenada",
    flag: "GD",
    tips: [null],
    selectedTipIndex: 0,
    currency: "$",
    optional: null
  },
  {
    name: "Guatemala",
    flag: "GT",
    tips: [null],
    selectedTipIndex: 0,
    currency: "Q",
    optional: null
  },
  {
    name: "Guinea",
    flag: "GN",
    tips: [null],
    selectedTipIndex: 0,
    currency: "Fr",
    optional: null
  },
  {
    name: "Guinea-Bissau",
    flag: "GW",
    tips: [null],
    selectedTipIndex: 0,
    currency: "Fr",
    optional: null
  },
  {
    name: "Guyana",
    flag: "GY",
    tips: [null],
    selectedTipIndex: 0,
    currency: "$",
    optional: null
  },
  {
    name: "Haiti",
    flag: "HT",
    tips: [null],
    selectedTipIndex: 0,
    currency: "G",
    optional: null
  },
  {
    name: "Honduras",
    flag: "HN",
    tips: [null],
    selectedTipIndex: 0,
    currency: "L",
    optional: null
  },
  {
    name: "Hungary",
    flag: "HU",
    tips: [null],
    selectedTipIndex: 0,
    currency: "Ft",
    optional: null
  },
  {
    name: "Iceland",
    flag: "IS",
    tips: [null],
    selectedTipIndex: 0,
    currency: "kr",
    optional: null
  },
  {
    name: "India",
    flag: "IN",
    tips: [{ percentage: 0.05 }],
    selectedTipIndex: 0,
    currency: "₹",
    optional: true
  },
  {
    name: "Indonesia",
    flag: "ID",
    tips: [{ percentage: 0.1 }],
    selectedTipIndex: 0,
    currency: "Rp",
    optional: false
  },
  {
    name: "Italy",
    flag: "IT",
    tips: [null],
    selectedTipIndex: 0,
    currency: "€",
    optional: null
  },
  {
    name: "Iran",
    flag: "IR",
    tips: [null],
    selectedTipIndex: 0,
    currency: "﷼",
    optional: null
  },
  {
    name: "Iraq",
    flag: "IQ",
    tips: [null],
    selectedTipIndex: 0,
    currency: "ع.د",
    optional: null
  },
  {
    name: "Ireland",
    flag: "IE",
    tips: [null],
    selectedTipIndex: 0,
    currency: "€",
    optional: null
  },
  {
    name: "Israel",
    flag: "IL",
    tips: [{ percentage: 0.1 }],
    selectedTipIndex: 0,
    currency: "₪",
    optional: false
  },
  {
    name: "Ivory Coast",
    flag: "CI",
    tips: [null],
    selectedTipIndex: 0,
    currency: "Fr",
    optional: null
  },
  {
    name: "Jamaica",
    flag: "JM",
    tips: [null],
    selectedTipIndex: 0,
    currency: "$",
    optional: null
  },
  {
    name: "Japan",
    flag: "JP",
    tips: [null],
    selectedTipIndex: 0,
    currency: "¥",
    optional: null
  },
  {
    name: "Jordan",
    flag: "JO",
    tips: [null],
    selectedTipIndex: 0,
    currency: "د.ا",
    optional: null
  },
  {
    name: "Kazakhstan",
    flag: "KZ",
    tips: [null],
    selectedTipIndex: 0,
    currency: "₸",
    optional: null
  },
  {
    name: "Kenya",
    flag: "KE",
    tips: [null],
    selectedTipIndex: 0,
    currency: "Sh",
    optional: null
  },
  {
    name: "Kiribati",
    flag: "KI",
    tips: [null],
    selectedTipIndex: 0,
    currency: "$",
    optional: null
  },
  {
    name: "North Korea",
    flag: "KP",
    tips: [null],
    selectedTipIndex: 0,
    currency: "₩",
    optional: null
  },
  {
    name: "South Korea",
    flag: "KR",
    tips: [null],
    selectedTipIndex: 0,
    currency: "₩",
    optional: null
  },
  {
    name: "Kuwait",
    flag: "KW",
    tips: [null],
    selectedTipIndex: 0,
    currency: "د.ك",
    optional: null
  },
  {
    name: "Kyrgyzstan",
    flag: "KG",
    tips: [null],
    selectedTipIndex: 0,
    currency: "c",
    optional: null
  },
  {
    name: "Laos",
    flag: "LA",
    tips: [null],
    selectedTipIndex: 0,
    currency: "₭",
    optional: null
  },
  {
    name: "Latvia",
    flag: "LV",
    tips: [null],
    selectedTipIndex: 0,
    currency: "€",
    optional: null
  },
  {
    name: "Lebanon",
    flag: "LB",
    tips: [null],
    selectedTipIndex: 0,
    currency: "ل.ل",
    optional: null
  },
  {
    name: "Lesotho",
    flag: "LS",
    tips: [null],
    selectedTipIndex: 0,
    currency: "L",
    optional: null
  },
  {
    name: "Liberia",
    flag: "LR",
    tips: [null],
    selectedTipIndex: 0,
    currency: "$",
    optional: null
  },
  {
    name: "Liechtenstein",
    flag: "LI",
    tips: [null],
    selectedTipIndex: 0,
    currency: "Fr",
    optional: null
  },
  {
    name: "Lithuania",
    flag: "LT",
    tips: [{ percentage: 0.05 }],
    selectedTipIndex: 0,
    currency: "€",
    optional: false
  },
  {
    name: "Libya",
    flag: "LY",
    tips: [null],
    selectedTipIndex: 0,
    currency: "ل.د",
    optional: null
  },
  {
    name: "Luxembourg",
    flag: "LU",
    tips: [null],
    selectedTipIndex: 0,
    currency: "€",
    optional: null
  },
  {
    name: "Macedonia",
    flag: "MK",
    tips: [null],
    selectedTipIndex: 0,
    currency: "ден",
    optional: null
  },
  {
    name: "Madagascar",
    flag: "MG",
    tips: [null],
    selectedTipIndex: 0,
    currency: "Ar",
    optional: null
  },
  {
    name: "Malawi",
    flag: "MW",
    tips: [null],
    selectedTipIndex: 0,
    currency: "MK",
    optional: null
  },
  {
    name: "Malaysia",
    flag: "MY",
    tips: [null],
    selectedTipIndex: 0,
    currency: "RM",
    optional: null
  },
  {
    name: "Maldives",
    flag: "MV",
    tips: [null],
    selectedTipIndex: 0,
    currency: ".ރ",
    optional: null
  },
  {
    name: "Mali",
    flag: "ML",
    tips: [null],
    selectedTipIndex: 0,
    currency: "Fr",
    optional: null
  },
  {
    name: "Malta",
    flag: "MT",
    tips: [null],
    selectedTipIndex: 0,
    currency: "€",
    optional: null
  },
  {
    name: "Marshall Islands",
    flag: "MH",
    tips: [null],
    selectedTipIndex: 0,
    currency: "$",
    optional: null
  },
  {
    name: "Mauritania",
    flag: "MR",
    tips: [null],
    selectedTipIndex: 0,
    currency: "UM",
    optional: null
  },
  {
    name: "Mauritius",
    flag: "MU",
    tips: [null],
    selectedTipIndex: 0,
    currency: "Rs",
    optional: null
  },
  {
    name: "Mexico",
    flag: "MX",
    tips: [{ percentage: 0.1 }],
    selectedTipIndex: 0,
    currency: "$",
    optional: false
  },
  {
    name: "Moldova",
    flag: "MD",
    tips: [{ percentage: 0.05 }],
    selectedTipIndex: 0,
    currency: "L",
    optional: true
  },
  {
    name: "Monaco",
    flag: "MC",
    tips: [null],
    selectedTipIndex: 0,
    currency: "€",
    optional: null
  },
  {
    name: "Mongolia",
    flag: "MN",
    tips: [null],
    selectedTipIndex: 0,
    currency: "₮",
    optional: null
  },
  {
    name: "Montenegro",
    flag: "ME",
    tips: [null],
    selectedTipIndex: 0,
    currency: "€",
    optional: null
  },
  {
    name: "Morocco",
    flag: "MA",
    tips: [null],
    selectedTipIndex: 0,
    currency: "€",
    optional: null
  },
  {
    name: "Mozambique",
    flag: "MZ",
    tips: [null],
    selectedTipIndex: 0,
    currency: "MT",
    optional: null
  },
  {
    name: "Myanmar",
    flag: "MM",
    tips: [null],
    selectedTipIndex: 0,
    currency: "Ks",
    optional: null
  },
  {
    name: "Namibia",
    flag: "NA",
    tips: [null],
    selectedTipIndex: 0,
    currency: "$",
    optional: null
  },
  {
    name: "Nauru",
    flag: "NR",
    tips: [null],
    selectedTipIndex: 0,
    currency: "$",
    optional: null
  },
  {
    name: "Nepal",
    flag: "NP",
    tips: [null],
    selectedTipIndex: 0,
    currency: "Rs",
    optional: null
  },
  {
    name: "Netherlands",
    flag: "NL",
    tips: [null],
    selectedTipIndex: 0,
    currency: "€",
    optional: null
  },
  {
    name: "New Zealand",
    flag: "NZ",
    tips: [{ percentage: 0.05 }],
    selectedTipIndex: 0,
    currency: "$",
    optional: true
  },
  {
    name: "Nicaragua",
    flag: "NI",
    tips: [null],
    selectedTipIndex: 0,
    currency: "C$",
    optional: null
  },
  {
    name: "Niger",
    flag: "NE",
    tips: [null],
    selectedTipIndex: 0,
    currency: "Fr",
    optional: null
  },
  {
    name: "Nigeria",
    flag: "NG",
    tips: [null],
    selectedTipIndex: 0,
    currency: "₦",
    optional: null
  },
  {
    name: "Norway",
    flag: "NO",
    tips: [null],
    selectedTipIndex: 0,
    currency: "kr",
    optional: null
  },
  {
    name: "Oman",
    flag: "OM",
    tips: [null],
    selectedTipIndex: 0,
    currency: "ر.ع.",
    optional: null
  },
  {
    name: "Pakistan",
    flag: "PK",
    tips: [null],
    selectedTipIndex: 0,
    currency: "Rs",
    optional: null
  },
  {
    name: "Palau",
    flag: "PW",
    tips: [null],
    selectedTipIndex: 0,
    currency: "$",
    optional: null
  },
  {
    name: "Panama",
    flag: "PA",
    tips: [null],
    selectedTipIndex: 0,
    currency: "B/.",
    optional: null
  },
  {
    name: "Papua New Guinea",
    flag: "PG",
    tips: [null],
    selectedTipIndex: 0,
    currency: "K",
    optional: null
  },
  {
    name: "Paraguay",
    flag: "PY",
    tips: [null],
    selectedTipIndex: 0,
    currency: "₲",
    optional: null
  },
  {
    name: "Peru",
    flag: "PE",
    tips: [null],
    selectedTipIndex: 0,
    currency: "S/.",
    optional: null
  },
  {
    name: "Philippines",
    flag: "PH",
    tips: [null],
    selectedTipIndex: 0,
    currency: "₱",
    optional: null
  },
  {
    name: "Poland",
    flag: "PL",
    tips: [{ percentage: 0.1 }],
    selectedTipIndex: 0,
    currency: "zł",
    optional: false
  },
  {
    name: "Portugal",
    flag: "PT",
    tips: [null],
    selectedTipIndex: 0,
    currency: "€",
    optional: null
  },
  {
    name: "Qatar",
    flag: "QA",
    tips: [null],
    selectedTipIndex: 0,
    currency: "ر.ق",
    optional: null
  },
  {
    name: "Romania",
    flag: "RO",
    tips: [{ percentage: 0.05 }],
    selectedTipIndex: 0,
    currency: "lei",
    optional: false
  },
  {
    name: "Russia",
    flag: "RU",
    tips: [{ percentage: 0.05 }],
    selectedTipIndex: 0,
    currency: "₽",
    optional: false
  },
  {
    name: "Rwanda",
    flag: "RW",
    tips: [null],
    selectedTipIndex: 0,
    currency: "Fr",
    optional: null
  },
  {
    name: "Saint Kitts and Nevis",
    flag: "KN",
    tips: [null],
    selectedTipIndex: 0,
    currency: "$",
    optional: null
  },
  {
    name: "Saint Lucia",
    flag: "LC",
    tips: [null],
    selectedTipIndex: 0,
    currency: "$",
    optional: null
  },
  {
    name: "Saint Vincent and the Grenadines",
    flag: "VC",
    tips: [null],
    selectedTipIndex: 0,
    currency: "$",
    optional: null
  },
  {
    name: "Samoa",
    flag: "WS",
    tips: [null],
    selectedTipIndex: 0,
    currency: "T",
    optional: null
  },
  {
    name: "San Marino",
    flag: "SM",
    tips: [null],
    selectedTipIndex: 0,
    currency: "€",
    optional: null
  },
  {
    name: "Sao Tome and Principe",
    flag: "ST",
    tips: [null],
    selectedTipIndex: 0,
    currency: "Db",
    optional: null
  },
  {
    name: "Saudi Arabia",
    flag: "SA",
    tips: [null],
    selectedTipIndex: 0,
    currency: "ر.س",
    optional: null
  },
  {
    name: "Senegal",
    flag: "SN",
    tips: [null],
    selectedTipIndex: 0,
    currency: "Fr",
    optional: null
  },
  {
    name: "Serbia",
    flag: "RS",
    tips: [null],
    selectedTipIndex: 0,
    currency: "дин",
    optional: null
  },
  {
    name: "Seychelles",
    flag: "SC",
    tips: [null],
    selectedTipIndex: 0,
    currency: "Rs",
    optional: null
  },
  {
    name: "Sierra Leone",
    flag: "SL",
    tips: [null],
    selectedTipIndex: 0,
    currency: "Le",
    optional: null
  },
  {
    name: "Singapore",
    flag: "SG",
    tips: [null],
    selectedTipIndex: 0,
    currency: "$",
    optional: null
  },
  {
    name: "Slovakia",
    flag: "SK",
    tips: [{ percentage: 0.1 }],
    selectedTipIndex: 0,
    currency: "€",
    optional: true
  },
  {
    name: "Slovenia",
    flag: "SI",
    tips: [null],
    selectedTipIndex: 0,
    currency: "€",
    optional: null
  },
  {
    name: "Solomon Islands",
    flag: "SB",
    tips: [null],
    selectedTipIndex: 0,
    currency: "$",
    optional: null
  },
  {
    name: "Somalia",
    flag: "SO",
    tips: [null],
    selectedTipIndex: 0,
    currency: "Sh",
    optional: null
  },
  {
    name: "South Africa",
    flag: "ZA",
    tips: [null],
    selectedTipIndex: 0,
    currency: "R",
    optional: null
  },
  {
    name: "South Sudan",
    flag: "SS",
    tips: [null],
    selectedTipIndex: 0,
    currency: "	£",
    optional: null
  },
  {
    name: "Spain",
    flag: "ES",
    tips: [null],
    selectedTipIndex: 0,
    currency: "€",
    optional: null
  },
  {
    name: "Sri Lanka",
    flag: "LK",
    tips: [null],
    selectedTipIndex: 0,
    currency: "Rs",
    optional: null
  },
  {
    name: "Sudan",
    flag: "SD",
    tips: [null],
    selectedTipIndex: 0,
    currency: "ج.س.",
    optional: null
  },
  {
    name: "Suriname",
    flag: "SR",
    tips: [null],
    selectedTipIndex: 0,
    currency: "$",
    optional: null
  },
  {
    name: "Sweden",
    flag: "SE",
    tips: [null],
    selectedTipIndex: 0,
    currency: "kr",
    optional: null
  },
  {
    name: "Switzerland",
    flag: "CH",
    tips: [null],
    selectedTipIndex: 0,
    currency: "Fr",
    optional: null
  },
  {
    name: "Syria",
    flag: "SY",
    tips: [null],
    selectedTipIndex: 0,
    currency: "£",
    optional: null
  },
  {
    name: "Tajikistan",
    flag: "TJ",
    tips: [null],
    selectedTipIndex: 0,
    currency: "SM",
    optional: null
  },
  {
    name: "Tanzania",
    flag: "TZ",
    tips: [null],
    selectedTipIndex: 0,
    currency: "Sh",
    optional: null
  },
  {
    name: "Thailand",
    flag: "TH",
    tips: [null],
    selectedTipIndex: 0,
    currency: "฿",
    optional: null
  },
  {
    name: "Togo",
    flag: "TG",
    tips: [null],
    selectedTipIndex: 0,
    currency: "Fr",
    optional: null
  },
  {
    name: "Tonga",
    flag: "TO",
    tips: [null],
    selectedTipIndex: 0,
    currency: "T$",
    optional: null
  },
  {
    name: "Trinidad and Tobago",
    flag: "TT",
    tips: [null],
    selectedTipIndex: 0,
    currency: "$",
    optional: null
  },
  {
    name: "Tunisia",
    flag: "TN",
    tips: [null],
    selectedTipIndex: 0,
    currency: "د.ت",
    optional: null
  },
  {
    name: "Turkey",
    flag: "TR",
    tips: [{ percentage: 0.05 }],
    selectedTipIndex: 0,
    currency: "₺",
    optional: true
  },
  {
    name: "Turkmenistan",
    flag: "TM",
    tips: [null],
    selectedTipIndex: 0,
    currency: "m",
    optional: null
  },
  {
    name: "Tuvalu",
    flag: "TV",
    tips: [null],
    selectedTipIndex: 0,
    currency: "$",
    optional: null
  },
  {
    name: "Uganda",
    flag: "UG",
    tips: [null],
    selectedTipIndex: 0,
    currency: "Sh",
    optional: null
  },
  {
    name: "Ukraine",
    flag: "UA",
    tips: [{ percentage: 0.1 }],
    selectedTipIndex: 0,
    currency: "₴",
    optional: false
  },
  {
    name: "United Arab Emirates",
    flag: "AE",
    tips: [null],
    selectedTipIndex: 0,
    currency: "د.إ",
    optional: null
  },
  {
    name: "United Kingdom",
    flag: "GB",
    tips: [null],
    selectedTipIndex: 0,
    currency: "£",
    optional: null
  },
  {
    name: "United States of America",
    flag: "US",
    tips: [{ percentage: 0.15 }],
    selectedTipIndex: 0,
    currency: "$",
    optional: false
  },
  {
    name: "Uruguay",
    flag: "UY",
    tips: [{ percentage: 0.1 }],
    selectedTipIndex: 0,
    currency: "$",
    optional: true
  },
  {
    name: "Uzbekistan",
    flag: "UZ",
    tips: [null],
    selectedTipIndex: 0,
    currency: "so'm",
    optional: null
  },
  {
    name: "Vanuatu",
    flag: "VU",
    tips: [null],
    selectedTipIndex: 0,
    currency: "Vt",
    optional: null
  },
  {
    name: "Venezuela",
    flag: "VE",
    tips: [null],
    selectedTipIndex: 0,
    currency: "Bs.S",
    optional: null
  },
  {
    name: "Vietnam",
    flag: "VN",
    tips: [null],
    selectedTipIndex: 0,
    currency: "₫",
    optional: null
  },
  {
    name: "Yemen",
    flag: "YE",
    tips: [null],
    selectedTipIndex: 0,
    currency: "﷼",
    optional: null
  },
  {
    name: "Zambia",
    flag: "ZM",
    tips: [null],
    selectedTipIndex: 0,
    currency: "ZK",
    optional: null
  },
  {
    name: "Zimbabwe",
    flag: "ZW",
    tips: [null],
    selectedTipIndex: 0,
    currency: "$",
    optional: null
  }
];
