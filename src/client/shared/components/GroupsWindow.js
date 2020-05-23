import React from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useStyles from "../styles/GroupWindowStyles";

export default function GroupsWindow(props) {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={4} md={3}>
      <Paper
        className={classes.mainFeaturedPost}
        style={{ backgroundImage: `url(${props.imageUrl})` }}
      >
        {
          <img
            style={{ display: "none" }}
            src={props.imageUrl}
            alt="Alt"
          />
        }
        <div className={classes.overlay} />
        <Grid container>
          <Grid item md={6}>
            <div className={classes.mainFeaturedPostContent}>
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
              >
                {props.category}
              </Typography>
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                See more
              </Link>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
