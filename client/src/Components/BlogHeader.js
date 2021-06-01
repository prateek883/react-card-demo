import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import HomeImg from "../images/Blog-image.jpg";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Box from "@material-ui/core/Box";
import { red } from "@material-ui/core/colors";
import CardDetailsinfo from "./CardDetailsinfo";


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
  root: {
    width: "811px",
    "&:hover": {
      boxShadow: "4px 20px 32px rgba(158, 175, 201, 0.5)",
    },
    direction: "flex-start",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  contant1: {
    marginLeft: "6rem",
    marginRight: "6rem",
    fontFamily: "Gotham-Light",
    fontSize: "12px",
  },
  Blog_img: {
    width: "811px",
    height: "541px",
  },
  Blog_subtitle: {
    width: "659px",
    height: "88px",
    left: "726px",
    fontFamily: "Gotham-Bold",
    fontSize: "18px",
    lineHeight: "23px",
    marginLeft: "6rem",
  },
  blog_sub1: {
    marginLeft: "6rem",
    marginRight: "6rem",
    fontFamily: "Gotham-Light",
    fontSize: "12px",
  },
}));

export default function MainFeaturedPost(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.mainFeaturedPost} style={{ height: "520px" }}>
      {/* Increase the priority of the hero background image */}
      <Box color="default">
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
                  fontFamily: "Calibri",
                  lineHeight: "37px",
                  marginTop: "9rem",
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
                  fontFamily: "Calibri",
                  lineHeight: "37px",
                }}
              >
                on the New Jersey country side
              </Typography>
              <CardDetailsinfo/>              
            </div>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};
