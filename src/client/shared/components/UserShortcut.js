import React from "react";
import { Avatar } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import useStyles from "../styles/CommentStyles";

export default function UserShortcut(props) {
  const classes = useStyles();
  return (
    <Grid
      container
      item
      direction="row"
      justify="flex-start"
      alignItems="center"
      style={{ marginTop: '1em'}}
    >
      <Avatar
        className={classes.marginLeft}
        alt="https://source.unsplash.com/random"
        src={props.avatarUrl}
      />
      <Typography className={classes.marginLeft}>
        <Link href={props.userId} color="inherit">
          {props.userName}
        </Link>
      </Typography>
    </Grid>
  );
}
