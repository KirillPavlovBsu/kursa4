import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import useStyles from "../styles/PageStyles";
import EventWindow from "../../../shared/components/EventWindow";
import GroupsWindow from "../../../shared/components/GroupsWindow";
import {eventsList, groupsList, categoriesList} from "../../../constants";
import GroupWindow from "../../../shared/components/GroupWindow";

function Page() {
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
          <Typography align="left" color="primary" variant="h4">
            Popular events
          </Typography>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={4}
            className={classes.blockMargin1}
          >
            {eventsList.map((event) => (
              <EventWindow title={event.title}
                           imageUrl={event.imageUrl}
                           description={event.description}
                           participants={event.participants}
                           date={event.date}
                           rating={event.rating}/>
            ))}
          </Grid>
        </Grid>
        <Grid item className={classes.blockMargin2}>
          <Typography align="left" color="primary" variant="h4">
            Popular groups
          </Typography>
          <Grid
            container
            direction="row" justify="center" alignItems="flex-start" spacing={4}
            className={classes.blockMargin1}>
            {groupsList.map(group => (
                <GroupWindow title={group.title}
                             imageUrl={group.imageUrl}
                             description={group.description}
                             participants={group.participants}
                             date={group.date}
                             rating={group.rating}
                             creator={group.creator}/>
            ))}
          </Grid>
        </Grid>
        <Grid item className={classes.blockMargin2}>
          <Typography align="left" color="primary" variant="h4">
            Groups
          </Typography>
          <Grid
            container
            direction="row" justify="center" alignItems="center" spacing={4}
            className={classes.blockMargin1}>
            {categoriesList.map(category => (
              <GroupsWindow imageUrl={category.imageUrl}
                            category={category.category}/>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
export default Page;
