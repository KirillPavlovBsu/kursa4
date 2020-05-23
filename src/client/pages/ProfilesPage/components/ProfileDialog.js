import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Carousel from "react-material-ui-carousel";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import useStyles from "../styles/PageStyles";
import EventWindow from "../../../shared/components/EventWindow";
import { Link } from "react-router-dom";

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

export default function Profile(props) {
  const classes = useStyles();
  const { open, handleClose } = props;

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogContent>
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
        <DialogContentText>
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
              (0 events visited)
            </Typography>
            <Grid
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
                I'm gay
              </Typography>
              <Typography color="textSecondary" variant="h5">
                Interests
              </Typography>
              <Typography color="textPrimary" variant="body1">
                I'm gay
              </Typography>
            </Grid>
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
            <GridList cellHeight={160} cols={3}>
              {[1, 2, 3, 4, 5, 6].map((tile, i) => (
                <GridListTile>
                  <Link
                    to="/gallery"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <img
                      src={"https://source.unsplash.com/random"}
                      alt={i}
                    />
                  </Link>
                </GridListTile>
              ))}
            </GridList>
          </Grid>
        </DialogContentText>
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
            {[1, 2, 3].map((item, i) => (
              <EventWindow />
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
            {[1, 2, 3].map((item, i) => (
              <EventWindow />
            ))}
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          <Typography color="primary" variant="h6">
            Nope
          </Typography>
        </Button>
        <Button onClick={handleClose} autoFocus>
          <Typography color="primary" variant="h6">
            Like
          </Typography>
        </Button>
      </DialogActions>
    </Dialog>
  );
}
