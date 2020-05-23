import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        direction: "row",
        justify: "space-evenly",
        alignItems: "center",
        marginTop: "3.5em",
        overflowX: "hidden",
        overflowY: "hidden"
    },
    cardMedia: {
        marginLeft: "50px",
        paddingTop: "80%",
        maxWidth: "28em",
        maxHeight: "350px"
    },
    bodyText: {
        fontSize: "1.3em",
        marginTop: "0.5em",
        maxWidth: "400px"
    },
    content: {
        marginTop: "20px",
        maxWidth: "100%"
    },
    button: {
        backgroundColor:"#9a9acf",
        marginLeft: "10px",
        minWidth: "100px"
    }
}));
export default useStyles;
