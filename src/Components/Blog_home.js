// BLog Home Updated
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import Logo from "../images/ostello_logo.png";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Logo2 from "../images/undraw_Development_re_g5hq.svg";
import Blog_card_list from "./Blog_card_list";
import Pagination_blog from "./Pagination_blog";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

// CSS Codes
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  root1: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "313px",
    marginLeft: "8rem",
    marginTop: "0.8rem",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  Blog_Name: {
    fontSize: "43px",
    fontFamily: "Calibri",
    FontWeight: "Italic",
    color: "#6A6A6A",
    marginLeft: "8rem",
    marginTop: "1rem",
  },
  logo_img: {
    marginLeft: "8rem",
    width: "226px",
    bottom: "486px",
    marginTop: "6rem",
    cursor: "pointer",
    height: "56px",
  },
  home_info: {
    marginLeft: "8rem",
    fontSize: "12px",
    color: "#474747",
    fontFamily: "Calibri",
    fontStyle: "normal",
    fontWeight: "normal",
  },
  subscribe_heading: {
    color: "#2F2F2F",
    marginLeft: "8rem",
    fontStyle: "bold",
    fontSize: "12px",
    fontFamily: "Calibri",
    marginTop: "5rem",
  },
  text_susbcribe: {
    marginLeft: "8rem",
    marginTop: "0.5rem",
    width: "18rem",
    borderRadius: "5px",
    boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.1)",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  down_card: {
    color: "#6074E3",
    marginTop: "38px",
    cursor: "pointer",
    fontSize: "83px",
  },
  arrow_card_down: {
    color: "#6074E3",
    marginLeft: "6.5rem",
    marginTop: "38px",
    cursor: "pointer",
    fontSize: "102px",
  },
  article_heading: {
    fontFamily: "Calibri",
    fontWeight: "normal",
    color: "#2F2F2FF",
    fontSize: "43px",
    textAlign: "center",
    letterSpacing: "0.25rem",
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div>
      <Grid
        container
        spacing={3}
        style={{ backgroundColor: "#FFF9F9", height: "734px" }}
      >
        <Grid item xs={5}>
          <Typography>
            <img className={classes.logo_img} src={Logo} alt="Logo"></img>
          </Typography>
          <Typography className={classes.Blog_Name}>Excellence</Typography>
          <Typography className={classes.home_info}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.  nulla eu, turpis ut. Sem in diam arcu et ac vel sed. Sed nunc sit mauris id lorem imperdiet tellus mattis.
            <br />
            Condimentum magna massa vitae amet purus. Consequat tincidunt in blandit mattis
            Consequat tincidunt in blandit mattis nulla eu, turpis ut.
          </Typography>
          <Typography className={classes.subscribe_heading}>
            Subscribe now, amazing contets on your way!
          </Typography>
          <Paper component="form" className={classes.root1}>
            <InputBase
              className={classes.input}
              placeholder="Jondoeostello579@gmail.com"
              inputProps={{ "aria-label": "subscribe for blog updates" }}
            />
            <IconButton
              color="primary"
              className={classes.iconButton}
              aria-label="directions"
            >
              <CheckCircleOutlineOutlinedIcon style={{ color: "green" }} />
            </IconButton>
          </Paper>
          <Button
            variant="contained"
            size="large"
            style={{
              width: "321px",
              backgroundColor: "#6074E3",
              color: "#fff",
              boxShadow: "0px 4px 10px rgba(46, 78, 255, 0.47)",
              marginLeft: "8rem",
              marginTop: "1.2rem",
              textTransform:"Uppercase"
            }}
          >
            Get Started
          </Button>
        </Grid>
        <Grid item xs={6}>
          <img
            src={Logo2}
            alt="Logo2"
            style={{
              fontSize: "31px",
              height: "252px",
              cursor: "pointer",
              marginTop: "18rem",
            }}
          ></img>
        </Grid>
        <Grid item xs={1}>
            <FacebookIcon
              style={{
                marginTop: "14.8rem",
                marginLeft: "2.5rem",
                color: "#959BAB",
                cursor: "pointer"
              }}
            />
            <br />
            <br />
            <InstagramIcon style={{ marginLeft: "2.5rem", color: "#959BAB",cursor: "pointer" }} />
            <br />
            <br />
            <LinkedInIcon style={{ marginLeft: "2.5rem", color: "#959BAB",cursor: "pointer" }} />
        </Grid>
        <Grid item xs={12}>
          <ExpandMoreIcon className={classes.arrow_card_down} />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <h5 className={classes.article_heading}>ARTICLES</h5>
      </Grid>
      <Blog_card_list />
      <Pagination_blog />
    </div>
  );
}
