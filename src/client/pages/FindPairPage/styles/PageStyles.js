import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        direction: "row",
        justify: "space-evenly",
        alignItems: "center",
        marginTop: "4em"
    },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#bbdefb"
    },
    cardMedia: {
        paddingTop: "80%",
        marginTop: "2em",
        maxWidth: "350px"
    },
    cardMediaProfile: {
        maxWidth: "28em",
    },
    caurouselGrid: {
        height: "560px",
        position: "relative"
    },
    cardActions: {
        marginTop: "1em",
        marginBottom: "0.5em"
    },
    personInfo: {
        marginLeft: "2em"
    },
}));
export default useStyles;
