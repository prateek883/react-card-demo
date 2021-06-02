import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PublishRoundedIcon from "@material-ui/icons/PublishRounded";
import WallpaperIcon from "@material-ui/icons/Wallpaper";
// import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Logo from "../images/ostello-png-1-2@2x.png";
import Vector1 from "../images/vector-64@1x.svg";
import Vector2 from "../images/vector-65@1x.svg";
import { Typography } from "@material-ui/core";
import "../Components/fonts.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  ostello_logo: {
    fontStyle: "normal",
    fontWeight: "bold",
    FontSize: "22.6787px",
    fontFamily: "Gotham-bold",
    width: "60.66px",
    color: "#6074E3",
    marginLeft: "9rem",
    marginTop: "2.2rem",
  },
  Blog_title: {
    fontFamily: "Gotham-Light",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    marginTop: "23px",
    marginLeft: "2.8rem",
  },
  tell_us: {
    fontFamily: "Gotham-Light",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    marginTop: "42px",
    marginLeft: "2.9rem",
  },
  cover_img: {
    fontFamily: "Gotham-Light",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    marginTop: "12px",
    marginLeft: "3rem",
  },
  content_img: {
    fontFamily: "Gotham-Light",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    marginLeft: "3rem",
  },
  publish_btn: {
    width: "179px",
    backgroundColor: "#6074E3",
    color: "#fff",
    marginLeft: "0.3rem",
    height: "49px",
    fontSize: "19.5085px",
    marginTop: "2.8rem",
  },
  text_title_blog: {
    // boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.16)",
    fontFamily: "Gotham-bold",
    backgroundColor: "#FFFFFF",
    borderRadius: "12px",
    width: "881px",
    marginLeft: "3px"
  },
  story_text: {
    // boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.16)",
    marginLeft: "0.3rem",
    width: "881px",
    height: 181,
    borderRadius: "12px",
  },
  cover_btn_icon: {
    position: "absolute",
    marginTop: "12px",
    marginLeft: "0.3rem",
    width: "69px",
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.16)",
    borderRadius: "12px",
  },
  content_btn_icon: {
    position: "absolute",
    marginTop: "21px",
    marginLeft: "0.3rem",
    width: "69px",
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.16)",
    borderRadius: "12px",
  },
  paper: {
    fontSize: "38px",
    fontFamily: "Calibri",
    color: "#646464",
    textAlign: "center",
    fontWeight: "bolder",
    display: "flex",
    flexDirection: "column",
  },
  Blog_headeing: {
    fontSize: "35px",
    fontFamily: "Calibri",
    fontWeight: "bold",
    color: "#6074E3",
  },
  logo_img: {
    marginLeft: "14rem",
    width: "30.88px",
    marginTop: "30px",
    cursor: "pointer",
    fontSize: "62px",
  },
}));





export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        {/* Grid for Blog Title1 */}
        <Grid item xs={2}>
          <img
            src={Vector1}
            alt="Vector1"
            style={{
              width: "323px",
            }}
          ></img>
        </Grid>
        <Grid item xs={6}>
          <Grid>
            <Typography className={classes.paper}>
              W R I T E
              <Typography className={classes.Blog_headeing}>A BLOG</Typography>
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={1}>
          <img src={Logo} alt="Logo" className={classes.logo_img}></img>
        </Grid>
        <Grid item xs={3}>
          <h5 className={classes.ostello_logo}>Ostello</h5>
        </Grid>
        {/* Grid for Blog Title name 2 */}

        {/* Grid for Blog Title Name */}
        <Grid item xs={1}></Grid>
        <Grid item xs={2}>
          <h5 className={classes.Blog_title}>Blog Title</h5>
        </Grid>
        <Grid item xs={6}>
          <TextField
            className={classes.text_title_blog}
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={3}></Grid>

        {/* Grid for Blog Story Content*/}
        <Grid item xs={1}></Grid>
        <Grid item xs={2}>
          <h5 className={classes.tell_us}>Tell us your story</h5>
        </Grid>
        <Grid item xs={6}>
        <TextField
          className={classes.story_text}
          multiline
          rows={8}
          variant="outlined"
          borderLayout="none"
        />
        </Grid>
        <Grid item xs={3}></Grid>

        {/* Grid for Content Image */}
        <Grid item xs={1}></Grid>
        <Grid item xs={2} spacing={2}> 
          <h5 className={classes.cover_img}>Upload Cover Image</h5>
        </Grid>
        <Grid item xs={4}>
          <Button
            className={classes.cover_btn_icon}
            variant="contained"
            color="default"
          >
            <WallpaperIcon
              style={{
                width: "39px",
                height: "39px",
              }}
            />
          </Button>
        </Grid>
        <Grid item xs={5}></Grid>

        {/* Grid for Cover Image */}
        <Grid item xs={1}></Grid>
        <Grid item xs={2}>
          <h5 className={classes.content_img}>Upload Content Image</h5>
        </Grid>
        <Grid item xs={4}>
            <Button
            htmFor="contained-button-file"
              className={classes.content_btn_icon}
              variant="contained"
              color="default"
            >
              <WallpaperIcon
                style={{
                  width: "39px",
                  height: "39px",
                }}
              />
            </Button>
        </Grid>
        <Grid item xs={5}></Grid>

        {/* Grid for Publish Button */}
        <Grid container item xs={12}>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}>
            <Button
              className={classes.publish_btn}
              variant="contained"
              startIcon={
                <PublishRoundedIcon
                  style={{
                    width: "24px",
                    height: "23.5px",
                  }}
                />
              }
            >
              Publish
            </Button>
          </Grid>
          <Grid item xs={6} container direction="column" alignItems="flex-end">
            <img
              src={Vector2}
              alt="Vector2"
              style={{
                marginTop: "1.8rem",
                width: "236px",
              }}
            ></img>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
