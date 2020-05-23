import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useStyles from "../styles/EventDialogStyles";
import CardMedia from "@material-ui/core/CardMedia";
import Rating from "@material-ui/lab/Rating";
import Chat from "./Chat";
import Map from "./Map";
import {Link} from "react-router-dom";

export default function EventDialog(props) {
  const { open, handleClose } = props;
  const classes = useStyles();

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
      className={classes.hideOverflow}
    >
      <DialogContent>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={4}
          className={classes.content}
        >
          <Grid container spacing={4}>
            <Grid item xs={4} spacing={3}>
              <CardMedia
                title="Title"
                image="https://source.unsplash.com/random"
                className={classes.cardMedia}
              />
            </Grid>
            <Grid item xs={8} spacing={5}>
              <Typography color="textSecondary" variant="h5">
                Event name
              </Typography>
              <Rating name="half-rating" value={2.5} precision={0.5} />
              <Typography color="textSecondary" variant="h5">
                Creator: Creator name
              </Typography>
              <Typography color="textSecondary" variant="h5">
                Location: Location name
              </Typography>
              <Typography
                color="textPrimary"
                variant="body1"
                className={classes.bodyText}
              >
                Description
              </Typography>
            </Grid>
          </Grid>
          <Chat />
          <Map />
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
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Join
            </Link>
          </Typography>
        </Button>
      </DialogActions>
    </Dialog>
  );
}
