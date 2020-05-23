import React from "react";
import Grid from "@material-ui/core/Grid";
import GalleryWindow from "../../../shared/components/GalleryWindow"
import Container from "@material-ui/core/Container";
import useStyles from "../styles/PageStyles"

function Page() {
    const classes = useStyles();

    return (
        <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.root}
        >
            <Container maxWidth="lg" fixed>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={4}
                >
                    {[1].map(card => (
                        <GalleryWindow />
                    ))}
                </Grid>

            </Container>
        </Grid>
    );
}
export default Page;
