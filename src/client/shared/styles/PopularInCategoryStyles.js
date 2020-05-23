import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    direction: "row",
    justify: "space-evenly",
    alignItems: "center",
    marginTop: "4em"
  },
  blockMargin1: {
    marginTop: "1em"
  },
}));
export default useStyles;
