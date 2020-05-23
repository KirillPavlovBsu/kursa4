import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import DropzoneDialogImg from "../../../shared/components/Dropzone";

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Page() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
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
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Repeat your password"
                        type="password"
                        id="repeat-password"
                        autoComplete="current-password"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        name="firstname"
                        label="First Name"
                        type="text"
                        id="firstname"
                        autoComplete="first-name"
                        style={{width: "47%",marginRight: "20px"}}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        name="lastname"
                        label="Last name"
                        type="text"
                        id="lastname"
                        autoComplete="last-name"
                        style={{width: "47%"}}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        multiline={true}
                        required
                        name="about"
                        label="About"
                        type="text"
                        id="about"
                        placeholder="Tell about yourself"
                        autoComplete="Information about me"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        multiline={true}
                        required
                        name="interests"
                        label="Interests"
                        type="text"
                        id="interests"
                        placeholder="Describe your interests"
                        autoComplete="Interests"
                    />
                    <DropzoneDialogImg/>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        href="/"
                    >
                        Sign Up
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link href="/signin" variant="body2">
                                {"Already has an account? Sign In"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}