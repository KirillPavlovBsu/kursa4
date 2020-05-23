import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useStyles from "../styles/ChatStyles";
import { TextField } from "@material-ui/core";
import UserShortcut from "./UserShortcut";
import Comment from "./Comment";
import {users,commentsList} from "../../constants";

const currentUser = {
  userId: `#${String(Math.floor(Math.random() * 1000))}`,
  userName: String(Math.floor(Math.random() * 1000)),
  message: ""
};


export default function Chat() {
  const classes = useStyles();

  // const addCommentHandler = event => {
  //   const newComment = {
  //     userId: currentUser.userId,
  //     userName: currentUser.userName,
  //     message: event.target.value
  //   };
  //   setComment([...comments, newComment]);
  //   event.target.value = null;
  // };

  // const addMemberHandler = event => {
  //   const newMember = {
  //     userId: currentUser.userId,
  //     userName: currentUser.userName
  //   };
  //   setMember([...members, newMember]);
  // };

  // const addCommentByKeyPress = event => {
  //   if (
  //     event.key === "Enter" &&
  //     event.target.value !== "" &&
  //     event.target.value !== " " &&
  //     event.target.value !== "\n"
  //   ) {
  //     addCommentHandler(event);
  //     return false;
  //   }
  //   return true;
  // };

  return (
    <Grid
      container
      justify="flex-start"
      alignItems="center"
      spacing={4}
      className={classes.chatBox}
    >
      <Grid item xs={5} spacing={3} style={{marginBottom: "11%"}}>
        <Typography color="textSecondary" variant="h5" paragraph>
          List of members
        </Typography>
        <Grid
          container
          direction="column"
          className={classes.chatFieldContainer}
        >
          <Grid className={classes.scrollField}>
            {users.length ? (
              users.map((user, i) => (
                <UserShortcut
                  key={i}
                  userName={user.userName}
                  userId={user.userId}
                  avatarUrl={user.avatarUrl}
                />
              ))
            ) : (
              <Grid style={{ opacity: 0.7 }}>No members</Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={7} spacing={3} className={classes.leftBorder}>
        <Typography color="textSecondary" variant="h5" paragraph>
          Chat with members
        </Typography>
        <Grid container direction="column" className={classes.chatFieldContainer}>
          <Grid className={classes.scrollField}>
            {commentsList.length ? (
              commentsList.map((comment, i) => (
                <Comment
                  key={i}
                  userName={comment.userName}
                  message={comment.message}
                  userId={comment.userId}
                  avatarUrl={comment.avatarUrl}
                />
              ))
            ) : (
              <Grid style={{ opacity: 0.7 }}>No comments</Grid>
            )}
          </Grid>
        </Grid>
        <Grid container item direction="row" justify="space-between">
          <TextField
            size="small"
            label="Comment"
            className={classes.commentInput}
            multiline
            variant="outlined"
            //onKeyPress={event => addCommentByKeyPress(event)}
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
  );
}
