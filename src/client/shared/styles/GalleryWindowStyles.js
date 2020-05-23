import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    direction: "row",
    justify: "center",
    alignItems: "center",
    margin: "4em 0"
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "100%",
    width: "100%"
  },
  commentInput: {
    width: '100%',
    marginTop: ".6em"
  },
  sendButton: {
    // width: '100%',
    marginTop: ".6em",
    alignSelf: "flex-end"
  },
  infoContainer: {
    display: "block",
    // maxHeight: "30%",
    padding:".4em",
    boxSizing: "border-box",
    borderWidth: "0 0 1px 0",
    borderColor: "#000"
  },
  commentContainer: {
    display: "block",
    // height: '70%',
    padding:"0 .5em",
    boxSizing: "border-box",
    marginBottom: theme.spacing(1)
  },
  marginLeft: {
    marginLeft: ".5em"
  },
  marked: {
    fontSize: "1rem",
    marginLeft: ".5em",
    marginTop: "1em"
  },
  commentsField: {
    position: 'static',
    maxHeight: "25em",
    overflowY: "auto"
  }
  }));
export default useStyles;