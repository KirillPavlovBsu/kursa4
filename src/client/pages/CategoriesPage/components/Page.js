import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import useStyles from "../styles/PageStyles";
import PopularInCategory from "../../../shared/components/PopularInCategory";

function Page() {
  const classes = useStyles();

  const categories = [
    {
      id: "#",
      name: "Sport"
    },
    {
      id: "#",
      name: "Languages"
    },
    {
      id: "#",
      name: "Computer games"
    },
    {
      id: "#",
      name: "Table games"
    },
  ]

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
          <Typography align="left" color="inharit" variant="h3">
            Popular in categories
          </Typography>
          <Grid
            container
            item
            direction="colunm"
            justify="center"
            alignItems="center"
          >
            {categories.map(card => (
              <PopularInCategory
                categoryName={card.name}
                categoryId={card.id}
              />
            ))}
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
export default Page;
