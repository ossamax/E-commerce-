import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    Width: "100%",
    overflow: "hidden",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    color: "#1abc9c",
    fontSize: "1rem",
    margin: "none",
    fontWeight: "bold",
  },
}));
