import React, {Component} from "react";
import { Link, withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() => ({
  root: {
    direction: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  logo: {
    width: "64px",
    height: "64px"
  }
}));

class Header extends Component {

    state = {
        login:  <Link to="/signin" style={{textDecoration: "none", color: "white"}}>Sign in</Link>
    }

    async componentDidMount() {
        const token = localStorage.getItem("token");
        if (!token) {
            this.setState({
                login:  <Link to="/signin" style={{textDecoration: "none", color: "white"}}>Sign in</Link>
            })
        } else {
            const res = await fetch("http://localhost:8000/api/auth/check", {
                method: 'GET',
                headers: {
                    'authorization': token
                }
            })
            const checkUser = await res.json();
            if (checkUser.user!=null) {
                this.setState({
                    login:  <Link to="/signin" style={{textDecoration: "none", color: "white"}}>{checkUser.user.firstName+" " +checkUser.user.lastName}</Link>
                })
            }
        }
    }

    render() {
      return (
          <div>
              <AppBar position="static">
                  <Toolbar>
                      <Grid container style={{direction: "row", justifyContent: "space-between", alignItems: "center"}}>
                          <Grid item>
                              <Link to="/" style={{textDecoration: "none", color: "white"}}>
                                  Miss Me?
                              </Link>
                          </Grid>
                          <Grid item>
                              <Button color="inherit" disableRipple>
                                  <Link
                                      to="/findpair"
                                      style={{textDecoration: "none", color: "white"}}
                                  >
                                      Find pair
                                  </Link>
                              </Button>
                              <Button color="inherit" disableRipple>
                                  <Link to="/createmeeting" style={{textDecoration: "none", color: "white"}}>
                                      Create meeting
                                  </Link>
                              </Button>
                              <Button color="inherit" disableRipple>
                                  {this.state.login}
                              </Button>
                          </Grid>
                      </Grid>
                  </Toolbar>
              </AppBar>
          </div>
      )
  }
}
export default withRouter(Header);
