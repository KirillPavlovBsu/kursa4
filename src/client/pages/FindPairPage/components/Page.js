import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import useStyles from "../styles/PageStyles";

function Page() {
    const classes = useStyles();

    return (
        <Grid className={classes.root}>
            <Container maxWidth="md" fixed>
                <Card className={classes.card}>
                    <Grid container justify="center" alignItems="center">
                        <Grid item xs={12} sm={6} md={6}>
                            <CardMedia
                                className={classes.cardMedia}
                                image="https://sun9-52.userapi.com/c840724/v840724542/4a631/WBEcRnsS7WI.jpg"
                                title="Image title"
                            />
                        </Grid>
                        <Grid item xs={8} sm={3} md={4} className={classes.personInfo}>
                            <Typography color="primary" variant="h4" paragraph>
                                Molly Nilsson
                            </Typography>
                            <Typography color="textPrimary" variant="caption">
                                25 y/o
                            </Typography>
                            <Typography color="textSecondary" variant="h6">
                                Interests
                            </Typography>
                            <Typography color="textPrimary" variant="body1">
                                Music, Parties
                            </Typography>
                            <Typography color="textSecondary" variant="h6">
                                Life position
                            </Typography>
                            <Typography color="textPrimary" variant="body1">
                                Take it all babe
                            </Typography>
                            <Typography color="textSecondary" variant="h6">
                                Last visited event
                            </Typography>
                            <Typography color="textPrimary" variant="body1">
                                Volunteering in animal shelter
                            </Typography>
                            <Typography color="textSecondary" variant="h6">
                                About me
                            </Typography>
                            <Typography color="textPrimary" variant="body1">
                                Cheerful, easygoing, not so "special" as may seem, will be happy to get a companion
                            </Typography>
                        </Grid>
                    </Grid>
                    <CardActions className={classes.cardActions}>
                        <Grid
                            container
                            direction="row"
                            justify="space-evenly"
                            alignItems="center"
                        >
                            <Button size="small" color="primary" variant="outlined">
                                Start chat
                            </Button>
                            <Button href="/profiles" color="primary" variant="outlined">
                                View profile
                            </Button>
                            <Button size="small" color="primary" variant="outlined">
                                See next
                            </Button>
                        </Grid>
                    </CardActions>
                </Card>
            </Container>
        </Grid>
    );
}
export default Page;
