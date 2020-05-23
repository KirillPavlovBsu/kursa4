import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import useStyles from "../styles/PopularInCategoryStyles";
import EventWindow from "./EventWindow";

function Page(props) {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Container maxWidth="lg" fixed>
        <Grid item className={classes.blockMargin}>
          <Link href={props.categoryId} align="left" color="primary" variant="h4">
            {props.categoryName}
          </Link>
          <Grid
            container
            item
            direction="colunm"
            justify="center"
            alignItems="center"
          >
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={4}
              className={classes.blockMargin1}
            >
              {[1, 2, 3, 4].map(card => (
                <EventWindow />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
export default Page;
