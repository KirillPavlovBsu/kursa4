import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  chatBox: {
    marginTop: "1em",
    marginBottom: "2em",
    maxWidth: "50em",
    borderStyle: "solid",
    borderWidth: "1px"
  },
  leftBorder: {
    borderStyle: "solid",
    borderWidth: "0px",
    borderLeftWidth: "1px"
  },
  membersField: {
    position: "static",
    maxHeight: "28em",
    overflowY: "auto"
  },
  commentInput: {
    width: "100%",
    marginTop: ".6em"
  },
  sendButton: {
    // width: '100%',
    marginTop: ".6em",
    alignSelf: "flex-end"
  },
  scrollField: {
    position: 'static',
    maxHeight: "28em",
    overflowY: "auto",
  },
  chatFieldContainer: {
    display: "block",
    padding:"0.5em",
    boxSizing: "border-box",
    //marginBottom: theme.spacing(1)
  },
}));
export default useStyles;
