import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import useStyles from "../styles/CreateEventStyles";
import Map from "../../../shared/components/Map";
import DropzoneDialogImg from "../../../shared/components/Dropzone";

export default function Page() {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={4}
      className={classes.page}
    >
      <form noValidate className={classes.formWrap}>
        <Grid item xs={4}>
          <Typography color="textPrimary" variant="h6">
            Event name
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Event name"
            name="name"
            autoComplete="name"
            autoFocus
          />
        </Grid>
        <Grid item xs={4}>
          <Typography color="textPrimary" variant="h6">
            Event category
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="category"
            label="Event category"
            name="category"
            autoComplete="category"
            autoFocus
          />
        </Grid>
        <Grid item>
          <Typography color="textPrimary" variant="h6">
            Description
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            multiline
            rows="5"
            id="description"
            label="Event description"
            name="description"
            autoComplete="description"
            autoFocus
          />
        </Grid>
        <Grid item xs={4}>
          <Typography color="textPrimary" variant="h6">
            Max members
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="maxmembers"
            label="Max members"
            type="number"
            name="type"
            autoComplete="type"
            autoFocus
          />
        </Grid>
        <Grid style={{margin: "10px 0 10px 0"}} item xs={4}>
          <DropzoneDialogImg/>
        </Grid>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Make private"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Enable chat"
        />
      </form>
      <Grid item>
        <Typography color="textPrimary" variant="h6">
          Choose place
        </Typography>
        <Map />
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary">
          Confirm
        </Button>
      </Grid>
    </Grid>
  );
}
