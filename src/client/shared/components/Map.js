import React from "react";
import Grid from "@material-ui/core/Grid";
import GoogleMapReact from "google-map-react";
import { googleMapsApi } from "../../constants";
import useStyles from "../styles/MapStyles";
import RoomIcon from "@material-ui/icons/Room";
import Typography from "@material-ui/core/Typography";

const defaultProps = {
  center: {
    lat: 59.95,
    lng: 30.33
  },
  zoom: 11
};

export default function Map(props) {
  const classes = useStyles();
  props = defaultProps;

  return (
    <Grid container direction="column" alignItems="center" className={classes.mapWrap}>
      <Grid style={{ height: "28em", width: "50em" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleMapsApi }}
          defaultCenter={props.center}
          defaultZoom={props.zoom}
        >
          <RoomIcon lat={59.955413} lng={30.337844} />
          <Typography color="primary" variant="body1">
            Location name
          </Typography>
        </GoogleMapReact>
      </Grid>
    </Grid>
  );
}
