import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useStyles from "../styles/EventWindowStyles";
import Rating from "@material-ui/lab/Rating";
import UserShortcut from "./UserShortcut";
import {Avatar} from "@material-ui/core";
import Link from "@material-ui/core/Link";

export default function GroupWindow(props) {
    const [eventOpen, setEventOpen] = React.useState(false);
    const classes = useStyles();

    const handleEventOpen = () => {
        setEventOpen(true);
    };

    const handleEventClose = () => {
        setEventOpen(false);
    };

    return (
        <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image={props.imageUrl}
                    title="Image title"
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Rating name="half-rating" value={props.rating} precision={0.1} />
                    <Typography>
                        {props.description}
                    </Typography>
                    <UserShortcut
                        userName={props.creator.creatorName}
                        userId={props.creator.creatorId}
                        avatarUrl={props.creator.avatarUrl}/>
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                        style={{margin: "10px 0 0 0"}}
                    >
                        <Typography>Participants: {props.participants}</Typography>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                    >
                        <Typography variant="body2">{props.date}</Typography>
                        <Button href="/event" style={{textDecoration: "none"}} size="small" color="primary" variant="outlined">
                            Visit
                        </Button>
                    </Grid>
                </CardActions>
            </Card>
        </Grid>
    );
}
