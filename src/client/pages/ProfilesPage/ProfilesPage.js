import React, { PureComponent } from "react";
import Grid from "@material-ui/core/Grid";
import Header from "../../shared/components/Header";
import Page from "./components/Page";

export default class ProfilesPage extends PureComponent {
  render() {
    return (
      <Grid container direction="column">
        <Grid item>
          <Header />
        </Grid>
        <Grid item>
          <Page />
        </Grid>
      </Grid>
    );
  }
}
