import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import ForumIcon from "@material-ui/icons/Forum";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ShareIcon from "@material-ui/icons/Share";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

import Card7 from "../images/card7.jfif";
import Card8 from "../images/card8.jfif";
import Card9 from "../images/card9.jfif";
import Card10 from "../images/card10.jfif";
import Card11 from "../images/card11.jfif";
import Card12 from "../images/card12.jfif";

import ChatBubbleRoundedIcon from "@material-ui/icons/ChatBubbleRounded";
import Profile1 from "../images/profile1.jfif";
import Profile2 from "../images/profile2.jfif";
import Profile3 from "../images/profile3.jfif";
import Profile4 from "../images/profile4.jfif";
import Profile5 from "../images/profile5.jfif";
import Profile6 from "../images/profile6.jfif";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "2rem",
    borderRadius: "22px",
    width: "368px",
    marginLeft: "4.1rem",
    boxShadow: "0px 4px 13px rgba(159, 153, 255, 0.11)",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  Readmore: {
    color: " rgba(55, 43, 255, 1)",
    cursor: "pointer",
    fontFamily: "Calibri",
    fontSize: "12px",
    marginLeft:"0.4rem",
  },
  avatar: {
    width: "3rem",
    height: "3rem",
    borderRadius: "50%",
    top: -51,
    fontFamily: "Calibri",
    fontSize: "24px",
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root1}>
      {/* Grid 1 Card */}
      <Grid container>
        <Grid item xs={4}>
          <Card className={classes.root}>
            <img
              src={Card9}
              alt="Card9"
              style={{
                width: "452px",
                height: "15.8rem",
              }}
            ></img>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  <img
                    src={Profile1}
                    alt={Profile1}
                    style={{ width: "45px" }}
                  ></img>
                </Avatar>
              }
              action={<IconButton aria-label="settings"></IconButton>}
              title="Shrimp and Chorizo Paella"
              subheader="John Doe"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <h4 className={classes.Readmore}>
                Read More<KeyboardArrowRightIcon />
                
              </h4>
              <IconButton
                aria-label="add to favorites"
                style={{ marginLeft: "5.2rem" }}
              >
                <VisibilityOutlinedIcon
                  style={{ fontSize: "21px", color: "#BABABA" }}
                />
              </IconButton>
              <IconButton aria-label="add to favorites">
                <ForumIcon style={{ fontSize: "21px", color: "#BABABA" }} />
              </IconButton>
              <IconButton aria-label="add to favorites">
                <ChatBubbleRoundedIcon
                  style={{ fontSize: "21px", color: "#BABABA" }}
                />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon style={{ fontSize: "21px", color: "#BABABA" }} />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.root}>
            <img
              src={Card8}
              alt="Card8"
              style={{
                width: "452px",
                height: "15.8rem",
              }}
            ></img>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  <img
                    src={Profile2}
                    alt={Profile2}
                    style={{ width: "45px" }}
                  ></img>
                </Avatar>
              }
              action={<IconButton aria-label="settings"></IconButton>}
              title="Shrimp and Chorizo Paella"
              subheader="John Doe"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <h4 className={classes.Readmore}>Read More</h4>
              <IconButton
                aria-label="add to favorites"
                style={{ marginLeft: "6.1rem" }}
              >
                <VisibilityOutlinedIcon
                  style={{ fontSize: "21px", color: "#BABABA" }}
                />
              </IconButton>
              <IconButton aria-label="add to favorites">
                <ForumIcon style={{ fontSize: "21px", color: "#BABABA" }} />
              </IconButton>
              <IconButton aria-label="add to favorites">
                <ChatBubbleRoundedIcon
                  style={{ fontSize: "21px", color: "#BABABA" }}
                />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon style={{ fontSize: "21px", color: "#BABABA" }} />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.root}>
            <img
              src={Card7}
              alt="Card7"
              style={{
                width: "452px",
                height: "15.8rem",
              }}
            ></img>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  <img
                    src={Profile3}
                    alt={Profile3}
                    style={{ width: "45px" }}
                  ></img>
                </Avatar>
              }
              action={<IconButton aria-label="settings"></IconButton>}
              title="Shrimp and Chorizo Paella"
              subheader="John Doe"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <h4 className={classes.Readmore}>Read More</h4>
              <IconButton
                aria-label="add to favorites"
                style={{ marginLeft: "6.1rem" }}
              >
                <VisibilityOutlinedIcon
                  style={{ fontSize: "21px", color: "#BABABA" }}
                />
              </IconButton>
              <IconButton aria-label="add to favorites">
                <ForumIcon style={{ fontSize: "21px", color: "#BABABA" }} />
              </IconButton>
              <IconButton aria-label="add to favorites">
                <ChatBubbleRoundedIcon
                  style={{ fontSize: "21px", color: "#BABABA" }}
                />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon style={{ fontSize: "21px", color: "#BABABA" }} />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      {/* Grid 2 Card */}
      <Grid
        container
        style={{
          backgroundColor: "#FFF9F9",
          marginTop: "6rem",
          height: "706px",
        }}
      >
        <Grid item xs={4}>
          <Card className={classes.root}>
            <img
              src={Card10}
              alt="Card10"
              style={{
                width: "452px",
                height: "15.8rem",
              }}
            ></img>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  <img
                    src={Profile4}
                    alt={Profile4}
                    style={{ width: "72px", height: "72px" }}
                  ></img>
                </Avatar>
              }
              action={<IconButton aria-label="settings"></IconButton>}
              title="Shrimp and Chorizo Paella"
              subheader="John Doe"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <h4 className={classes.Readmore}>Read More</h4>
              <IconButton
                aria-label="add to favorites"
                style={{ marginLeft: "6.1rem" }}
              >
                <VisibilityOutlinedIcon
                  style={{ fontSize: "21px", color: "#BABABA" }}
                />
              </IconButton>
              <IconButton aria-label="add to favorites">
                <ForumIcon style={{ fontSize: "21px", color: "#BABABA" }} />
              </IconButton>
              <IconButton aria-label="add to favorites">
                <ChatBubbleRoundedIcon
                  style={{ fontSize: "21px", color: "#BABABA" }}
                />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon style={{ fontSize: "21px", color: "#BABABA" }} />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.root}>
            <img
              src={Card11}
              alt="Card11"
              style={{
                width: "452px",
                height: "15.8rem",
              }}
            ></img>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  <img
                    src={Profile5}
                    alt={Profile5}
                    style={{ width: "72px", height: "72px" }}
                  ></img>
                </Avatar>
              }
              action={<IconButton aria-label="settings"></IconButton>}
              title="Shrimp and Chorizo Paella"
              subheader="John Doe"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <h4 className={classes.Readmore}>Read More</h4>
              <IconButton
                aria-label="add to favorites"
                style={{ marginLeft: "6.1rem" }}
              >
                <VisibilityOutlinedIcon
                  style={{ fontSize: "21px", color: "#BABABA" }}
                />
              </IconButton>
              <IconButton aria-label="add to favorites">
                <ForumIcon style={{ fontSize: "21px", color: "#BABABA" }} />
              </IconButton>
              <IconButton aria-label="add to favorites">
                <ChatBubbleRoundedIcon
                  style={{ fontSize: "21px", color: "#BABABA" }}
                />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon style={{ fontSize: "21px", color: "#BABABA" }} />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.root}>
            <img
              src={Card12}
              alt="Card12"
              style={{
                width: "452px",
                height: "15.8rem",
              }}
            ></img>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  <img
                    src={Profile6}
                    alt={Profile6}
                    style={{ width: "72px", height: "72px" }}
                  ></img>
                </Avatar>
              }
              action={<IconButton aria-label="settings"></IconButton>}
              title="Shrimp and Chorizo Paella"
              subheader="John Doe"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <h4 className={classes.Readmore}>Read More</h4>
              <IconButton
                aria-label="add to favorites"
                style={{ marginLeft: "6.1rem" }}
              >
                <VisibilityOutlinedIcon
                  style={{ fontSize: "21px", color: "#BABABA" }}
                />
              </IconButton>
              <IconButton aria-label="add to favorites">
                <ForumIcon style={{ fontSize: "21px", color: "#BABABA" }} />
              </IconButton>
              <IconButton aria-label="add to favorites">
                <ChatBubbleRoundedIcon
                  style={{ fontSize: "21px", color: "#BABABA" }}
                />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon style={{ fontSize: "21px", color: "#BABABA" }} />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
