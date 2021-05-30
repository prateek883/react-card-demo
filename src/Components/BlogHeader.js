import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import HomeImg from "../images/Blog-image.jpg";
import { Divider } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export default function MainFeaturedPost(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.mainFeaturedPost} style={{ height: "520px" }}>
      {/* Increase the priority of the hero background image */}
      <img style={{ display: "none" }} src={HomeImg} alt="HomeImg" />
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={12}>
          <ArrowBackIosIcon
            style={{
              color: "#FFF",
              fontSize: "68px",
              marginLeft: "2rem",
              marginTop: "2rem",
              cursor: "pointer",
              "&:hover": {
                boxShadow: "4px 20px 32px rgba(158, 175, 201, 0.5)",
              },
            }}
          />
          <div className={classes.mainFeaturedPostContent}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
              style={{
                marginLeft: "32rem",
                fontSize: "35.6411px",
                fontFamily: "Gotham-bold",
                lineHeight: "37px",
                marginTop: "13rem",
              }}
            >
              Traveller’s journal
            </Typography>
            <Typography
              variant="h5"
              color="inherit"
              paragraph
              style={{
                marginLeft: "32rem",
                fontSize: "35.6411px",
                fontFamily: "Gotham-bold",
                lineHeight: "37px",
              }}
            >
              on the New Jersey country side
            </Typography>
            <Link variant="subtitle1" href="#"></Link>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};
