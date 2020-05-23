import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  marginLeft: {
    marginLeft: ".5em"
  },
  commentMessage: {
    fontSize: ".9em",
    marginLeft: "2em",
    marginTop: ".5em"
  },
  infoContainer: {
    display: "block",
    padding:".4em",
    boxSizing: "border-box",
  }
  }));
export default useStyles;