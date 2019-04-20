export default {
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#eee"
  },
  titleWrapper: {
    height: 150
  },
  title: {
    padding: 15,
    fontSize: 39,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    zIndex: 1,
    position: "absolute"
  },
  map: {
    flex: 1,
    resizeMode: "stretch"
  },
  countryRow: {
    position: "absolute",
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    paddingRight: 20,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 100,
    height: 100,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    elevation: 20
  },
  flag: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center"
  },
  picker: {
    width: "80%",
    height: "80%",
    justifyContent: "center",
    alignItems: "center"
  },
  tipRow: {
    flex: 5
  },
  buffer: {
    height: 50,
    backgroundColor: "white",
    elevation: 10
  },
  input: {
    flex: 1,
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "white",
    elevation: 10
  },
  description: {
    flex: 5,
    backgroundColor: "white",
    marginTop: 10
  },
  errorText: {
    color: "#f00",
    fontSize: 25
  }
};
