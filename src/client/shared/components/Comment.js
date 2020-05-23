import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import useStyles from "../styles/CommentStyles";
import UserShortcut from "./UserShortcut";

export default function Comment(props) {
  const classes = useStyles();
  return (
    <>
      <UserShortcut userName={props.userName} userId={props.userId} avatarUrl={props.avatarUrl}/>
      <Grid
        container
        item
        direction="row"
        justify="flex-start"
        alignItems="center"
      >
        <Typography className={classes.commentMessage}>
          {props.message}
        </Typography>
      </Grid>
    </>
  );
}
