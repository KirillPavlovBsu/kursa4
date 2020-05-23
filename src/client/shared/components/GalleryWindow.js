import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import useStyles from "../styles/GalleryWindowStyles";
import Typography from "@material-ui/core/Typography";
import { TextField } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import Comment from "./Comment";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

export default function GalleryWindow() {
  const classes = useStyles();

  const currentUser = {
    userId: `#${String(Math.floor(Math.random() * 1000))}`,
    userName: String(Math.floor(Math.random() * 1000)),
    message: ""
  };

  const commentsList = [
    {
      userId: "#",
      userName: "Molly Nillson",
      message:
        "Happy we played together one last time before corona",
      avatarUrl: "https://i.guim.co.uk/img/media/cb94bd64fcec049c465769b15e97c7c9e519dc16/0_257_2245_1347/master/2245.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&s=8c9c90417b5ce0ef262f7dbd0a36834e",
    },
    {
      userId: "#",
      userName: "Jack Cameron",
      message:
        "Agree, but now I'm bored",
      avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg"
    },
  ];

  const [comments, setComment] = React.useState(commentsList);

  const addCommentHandler = event => {
    const token = localStorage.getItem("token");
    let newComment={};
    if (token) {
      newComment = {
        userId: currentUser.userId,
        userName: localStorage.getItem("username"),
        message: event.target.value,
        avatarUrl: "https://randomuser.me/api/portraits/men/3.jpg"
      };
    } else {
      newComment = {
        userId: currentUser.userId,
        userName: currentUser.userName,
        message: event.target.value,
        avatarUrl: "https://randomuser.me/api/portraits/men/3.jpg"
      };
    }
    setComment([...comments, newComment]);
    event.target.value = null;
  };

  const addCommentByKeyPress = event => {
    if (
      event.key === "Enter" &&
      event.target.value !== "" &&
      event.target.value !== " " &&
      event.target.value !== "\n"
    ) {
      addCommentHandler(event);
      return false;
    }
    return true;
  };

  return (
    <Grid className={classes.root} xs={12} sm={12} md={10}>
      <Container maxWidth="lg" fixed>
        <Card className={classes.card}>
          <Grid container>
            <Grid item xs={12} sm={6} md={8}>
              <CardMedia
                className={classes.cardMedia}
                image="https://sun9-63.userapi.com/c631917/v631917990/e4b5/xnzNGd91rC0.jpg"
                title="Image title"
              />
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={6}
              md={4}
              justify="space-between"
              direction="column"
            >
              <Grid container className={classes.infoContainer}>
                <Grid
                  container
                  item
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                >
                  <Avatar
                    className={classes.marginLeft}
                    src="https://i.guim.co.uk/img/media/cb94bd64fcec049c465769b15e97c7c9e519dc16/0_257_2245_1347/master/2245.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&s=8c9c90417b5ce0ef262f7dbd0a36834e"
                  />
                  <Typography className={classes.marginLeft}>
                    Molly Nillson
                  </Typography>
                </Grid>
                <Typography className={classes.marked}>
                  Marked: Molly Nillson, Jack Cameron, Rob Williams
                </Typography>
              </Grid>
              <Grid
                container
                item
                direction="column"
                justify="space-between"
                className={classes.commentContainer}
              >
                <Grid className={classes.commentsField}>
                  {comments.length ? (
                    comments.map((comment, i) => (
                      <Comment
                        key={i}
                        avatarUrl={comment.avatarUrl}
                        userName={comment.userName}
                        message={comment.message}
                        userId={comment.userId}
                      />
                    ))
                  ) : (
                    <Grid
                      className={classes.commentsField}
                      style={{ opacity: 0.7 }}
                    >
                      No comments
                    </Grid>
                  )}
                </Grid>

                <Grid container item direction="row" justify="space-between">
                  <TextField
                    size="small"
                    label="Comment"
                    className={classes.commentInput}
                    multiline
                    variant="outlined"
                    onKeyPress={event => addCommentByKeyPress(event)}
                  />
                  <Grid item container justify="flex-end">
                    <Button
                      variant="contained"
                      color="primary"
                      disableRipple
                      disableElevation
                      className={classes.sendButton}
                      // onClick={event => addCommentByClick(event)}
                    >
                      Send
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Grid>
  );
}
