import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 500,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 50,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },

  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
    height: 100,
    flexGrow: 1,
  },
  mainContent: {
    flex: 1,
    flexGrow: 1,
    padding: 40,
    alignItems: "stretch",
  },
  icons: {
    width: 50,
    height: 50,
  },

  header: {
    height: 80,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
  },
  header_message: {
    flexDirection: "column",
    paddingLeft: 10,
  },
  header_settings: {
    paddingRight: 10,
  },

  progress_bar: {
    flex: 0.5,
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
  },

  calendar_view: {
    flex: 0.5,
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
  },

  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },

  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
  footer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "flex-end",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "lightgreen",
    borderColor: "#ddd",
    borderTopWidth: 1,
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 16,
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  homeText: {
    fontSize: 50,
    fontWeight: "bold",
  },
});
