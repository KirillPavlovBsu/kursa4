import React, {Component} from 'react'
import {TextField, Button} from '@material-ui/core';
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import DropzoneDialogImg from "../../../shared/components/Dropzone";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import PropTypes from 'prop-types';
import {withStyles} from "@material-ui/styles";


const styles = theme => ({
    paper: {
        margin: "100px 0 0 0",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        backgroundColor: "red"
    },
    form: {
        width: '100%', // Fix IE 11 issue.
    },
    submit: {
        margin: "15px 0 0 0"
    },
});

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      login:'',
      password:''
    }
  }
 
  handleClick = async (event) => {
    const {login, password} = this.state;
    const response = await fetch("http://localhost:8000/api/auth/login", {
        method: 'POST',
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify({login, password})
        }
    );
    const data = await response.json();
    localStorage.setItem("token",data.accessToken);
    localStorage.setItem("username",data.username)
    console.log(data);
  }

  render() {
      const {classes} = this.props;
      return (
      <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                  Sign in
              </Typography>
              <form className={classes.form} noValidate>
                  <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="login"
                      label="Login"
                      name="login"
                      autoComplete="login"
                      autoFocus
                      onChange = {(e) => this.setState({login:e.target.value})}
                  />
                  <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      onChange = {(e) => this.setState({password:e.target.value})}
                  />
                  <Button href="/" contained fullWidth label="Submit" primary={true} style={{marginTop:"15px", backgroundColor: "#ff7e91"}} onClick={(event) => this.handleClick(event)}>Sign in </Button>
              </form>
          </div>
      </Container>
      );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);