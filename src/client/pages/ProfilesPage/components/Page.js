import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Carousel from "react-material-ui-carousel";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import useStyles from "../styles/PageStyles";
import EventWindow from "../../../shared/components/EventWindow";
import { Link } from "react-router-dom";
import {picsForGallery,eventsList} from "../../../constants";

var items = [
  {
    name: "Random Name #1",
    description: "Probably the most random thing you have ever seen!",
    img: "https://sun9-52.userapi.com/c840724/v840724542/4a631/WBEcRnsS7WI.jpg"
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
    img:
      "https://lastfm.freetls.fastly.net/i/u/770x0/4f5b1d6f361b08bd84b280682b00955d.jpg"
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
    img:
      "https://lastfm.freetls.fastly.net/i/u/770x0/22dd804372ca4ee4ce2e687a17578fdc.jpg"
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
    img: "https://i.ytimg.com/vi/JD_2Zn1_kLI/maxresdefault.jpg"
  }
];

export default function Profile() {
  const classes = useStyles();

  const events=eventsList.slice(0,1);

  const planned=eventsList.slice(1,2);
  return (
      <Grid>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          maxWidth="lg"
        >
          <Carousel className={classes.carousel} autoPlay={false}>
            {items.map((l, i) => (
              <Grid container className={classes.caurouselGrid}>
                <CardMedia title={l.name} autoPlay={false}>
                  <img
                    src={l.img}
                    className={classes.cardMediaProfile}
                    alt="Profile"
                  />
                </CardMedia>
              </Grid>
            ))}
          </Carousel>
        </Grid>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            maxWidth="lg"
          >
            <Typography color="primary" variant="h4" paragraph>
              Molly Nilsson
            </Typography>
            <Typography color="textPrimary" variant="h6">
              (1 events visited)
            </Typography>
            <Grid xs={2}/>
            <Grid
              xs={8}
              container
              direction="column"
              alignItems="flex-start"
              justify="center"
              maxWidth="lg"
            >
              <Typography color="textSecondary" variant="h5">
                About myself
              </Typography>
              <Typography color="textPrimary" variant="body1">
                Cheerful, easygoing, not so "special" as may seem, will be happy to get a companion
              </Typography>
              <Typography color="textSecondary" variant="h5">
                Interests
              </Typography>
              <Typography color="textPrimary" variant="body1">
                Music, Parties
              </Typography>
            </Grid>
            <Grid xs={2}/>
          </Grid>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            maxWidth="lg"
          >
            <Typography color="textSecondary" variant="h5">
              Gallery
            </Typography>
            <GridList cellHeight={200} cols={3} spacing={25} style={{margin: "0 20% 0 20%"}}>
              {picsForGallery.map((photo) => (
                <GridListTile>
                  <Link
                    to="/gallery"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <img
                      src={photo.imageUrl}
                    />
                  </Link>
                </GridListTile>
              ))}
            </GridList>
          </Grid>
        <Grid container spacing={1} xs={12}>
          <Grid
            container
            item
            xs={6}
            spacing={1}
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Typography color="textSecondary" variant="h3">
              Attended events
            </Typography>
            {events.map((event,i) => (
              <EventWindow  title={event.title}
                            imageUrl={event.imageUrl}
                            description={event.description}
                            participants={event.participants}
                            date={event.date}
                            rating={event.rating}/>
            ))}
          </Grid>

          <Grid
            container
            item
            xs={6}
            spacing={1}
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Typography color="textSecondary" variant="h3">
              Planned events
            </Typography>
            {planned.map((event) => (
              <EventWindow title={event.title}
                           imageUrl={event.imageUrl}
                           description={event.description}
                           participants={event.participants}
                           date={event.date}
                           rating={event.rating}/>
            ))}
          </Grid>
        </Grid>
        <Button>
          <Typography color="primary" variant="h6">
            Nope
          </Typography>
        </Button>
        <Button>
          <Typography color="primary" variant="h6">
            Like
          </Typography>
        </Button>
      </Grid>
  );
}
