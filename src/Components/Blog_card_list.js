import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import Card1 from "../images/card1.jpg";
import Card2 from "../images/card2.jpg";
import Card3 from "../images/card3.jpg";
import ChatBubbleTwoToneIcon from "@material-ui/icons/ChatBubbleTwoTone";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "2rem",
    borderRadius: "22px",
    boxShadow: " 0 0 0 0.125rem #fff, 0 0.1875rem 0.4375rem rgba(90,97,105,.5)",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  Readmore: {
    color: " rgba(55, 43, 255, 1)",
    cursor: "pointer",
    fontFamily: "Calibri"
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root1}>
      <Grid container spacing={5}>
        <Grid item xs={4}>
          <Card className={classes.root}>
            <img
              src={Card1}
              alt="Card1"
              style={{
                width: "452px",
                height: "15.8rem",
              }}
            ></img>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
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
                aria-label="add to eye"
                style={{ marginLeft: "10.2rem" }}
              >
                <VisibilityOutlinedIcon />
              </IconButton>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="add to favorites">
                <ChatBubbleTwoToneIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.root}>
            <img
              src={Card2}
              alt="Card2"
              style={{
                width: "452px",
                height: "15.8rem",
              }}
            ></img>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
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
                style={{ marginLeft: "10.2rem" }}
              >
                <VisibilityOutlinedIcon />
              </IconButton>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="add to favorites">
                <ChatBubbleTwoToneIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.root}>
            <img
              src={Card3}
              alt="Card3"
              style={{
                width: "452px",
                height: "15.8rem",
              }}
            ></img>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
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
                style={{ marginLeft: "10.2rem" }}
              >
                <VisibilityOutlinedIcon />
              </IconButton>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="add to favorites">
                <ChatBubbleTwoToneIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={5} style={{backgroundColor:"#FFF9F9"}}>
        <Grid item xs={4}>
          <Card className={classes.root}>
            <img
              src={Card1}
              alt="Card1"
              style={{
                width: "452px",
                height: "15.8rem",
              }}
            ></img>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
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
                style={{ marginLeft: "10.2rem" }}
              >
                <VisibilityOutlinedIcon />
              </IconButton>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="add to favorites">
                <ChatBubbleTwoToneIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.root}>
            <img
              src={Card3}
              alt="Card3"
              style={{
                width: "452px",
                height: "15.8rem",
              }}
            ></img>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
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
                style={{ marginLeft: "10.2rem" }}
              >
                <VisibilityOutlinedIcon />
              </IconButton>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="add to favorites">
                <ChatBubbleTwoToneIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.root}>
            <img
              src={Card1}
              alt="Card1"
              style={{
                width: "452px",
                height: "15.8rem",
              }}
            ></img>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
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
                style={{ marginLeft: "10.2rem" }}
              >
                <VisibilityOutlinedIcon />
              </IconButton>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="add to favorites">
                <ChatBubbleTwoToneIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
