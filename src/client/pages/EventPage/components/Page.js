import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useStyles from "../styles/PageStyles";
import CardMedia from "@material-ui/core/CardMedia";
import Rating from "@material-ui/lab/Rating";
import Chat from "../../../shared/components/Chat";
import Map from "../../../shared/components/Map";
import {Link} from "react-router-dom";
import {Avatar} from "@material-ui/core";

export default function Page() {
    const classes = useStyles();
    return (
        <Grid container
              justify="center"
              alignItems="center"
              className={classes.root}>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    spacing={4}
                    className={classes.content}>
                    <Grid xs={5}/>
                    <Grid xs={5} style={{margin: "0px 25px 20px 0px"}} container>
                        <Grid xs={10} item spacing={5}>
                            <Typography color="textPrimary" variant="h4">
                                Playing Volleyball
                            </Typography>
                            <Typography color="textSecondary" variant="h5">
                                Antony Phillips
                            </Typography>
                            <Avatar
                                className={classes.marginLeft}
                                src="https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg"
                            />
                            <Typography color="textSecondary" variant="h5">
                                Location: Beach
                            </Typography>
                        </Grid>
                        <Grid xs={2} direction="column" alignContent="center" item>
                            <Button href="/" style={{ textDecoration: "none", color: "white", fontSize: "1.4em" }} className={classes.button}>
                                Join
                            </Button>
                            <Rating name="half-rating" value={3.5} precision={0.5} />
                        </Grid>
                    </Grid>
                    <Grid xs={2}/>
                    <Grid xs={4}/>
                    <Grid container spacing={4} xs={6}>
                        <Grid item xs={4} spacing={3}>
                            <CardMedia
                                title="Title"
                                image="https://c8.alamy.com/comp/X98CYK/group-of-teenage-friends-playing-volleyball-on-beach-X98CYK.jpg"
                                className={classes.cardMedia}/>
                        </Grid>
                        <Typography
                            color="textPrimary"
                            variant="body1"
                            className={classes.bodyText}
                        >
                            We are searching for three players who wants to play volleyball and to have a good time)
                        </Typography>
                    </Grid>
                    <Grid xs={2}/>
                    <Chat />
                    <Map />
                </Grid>
    </Grid>
    );
}
