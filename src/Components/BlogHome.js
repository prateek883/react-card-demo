// BLog Home Updated
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import Logo from "../images/ostello-png-1-2@2x.png";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Logo2 from "../images/undraw_Development_re_g5hq.svg";
import BlogCardList from "./BlogCardList";
import PaginationBlog from "./PaginationBlog";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../Components/fonts.css";

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
    marginLeft: "150px",
    marginTop: "0.8rem",
    boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.1)",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  Blog_Name: {
    fontSize: "42.0249px",
    fontFamily: "Gotham-bold",
    FontWeight: "bold",
    color: "#6A6A6A",
    marginLeft: "150px",
    top: "238px",
    lineHeight: "40px",
    fontStyle: "normal",
  },
  logo_img: {
    marginLeft: "150px",
    width: "66.4px",
    bottom: "486px",
    marginTop: "6rem",
    cursor: "pointer",
    height: "64.51px",
  },
  home_info: {
    marginLeft: "150px",
    fontSize: "12px",
    color: "#474747",
    fontFamily: "Calibri",
    fontStyle: "normal",
    fontWeight: "normal",
    width: "448px",
    lineHeight: "13px",
    marginTop:"2rem"
  },
  subscribe_heading: {
    color: "#2F2F2F",
    marginLeft: "150px",
    fontStyle: "bold",
    fontSize: "12px",
    fontFamily: "Calibri",
    marginTop: "5rem",
    lineHeight: "13px",
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
    borderRadius: "9px",
    height: "55px",
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
    marginLeft: "134px",
    marginTop: "8px",
    cursor: "pointer",
    fontSize: "102px",
  },
  article_heading: {
    fontFamily: "Gotham-bold",
    fontWeight: "normal",
    color: "#2F2F2FF",
    fontSize: "30px",
    textAlign: "center",
    letterSpacing: "0.25rem",
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div style={{ backgroundColor: "#FFF9F9", height: "734px", }}>
      <Grid
        container
        spacing={2}
      >
        <Grid item xs={5} alignContent="start" lg={5}>
          <Typography>
            <img className={classes.logo_img} src={Logo} alt="Logo"></img>
          </Typography>
          <Typography className={classes.Blog_Name}>Excellence</Typography>
          <Typography className={classes.home_info}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. nulla eu,
            turpis ut. Sem in diam arcu et ac vel sed. Sed nunc sit mauris id
            lorem imperdiet tellus mattis.
            <br />
            Condimentum magna massa vitae amet purus.
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
              width: "317px",
              backgroundColor: "#6074E3",
              color: "#fff",
              boxShadow: "0px 4px 10px rgba(46, 78, 255, 0.47)",
              marginLeft: "150px",
              marginTop: "1.2rem",
              height: "57px",
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
              width: "664px",
              height: "322px",
              cursor: "pointer",
              marginTop: "281px",
            }}
          ></img>
        </Grid>
        <Grid item xs={1}>
          <InstagramIcon
            style={{
              marginLeft: "2.5rem",
              color: "#959BAB",
              cursor: "pointer",
              opacity: "0.6",
              width: "37.31px",
              height: "37.2px",
              marginTop: "11rem",
            }}
          />

          <br />
          <br />
          <FacebookIcon
            style={{
              marginLeft: "2.5rem",
              color: "#959BAB",
              cursor: "pointer",
              width: "37.31px",
              height: "37.2px",
            }}
          />
          <br />
          <br />
          <LinkedInIcon
            style={{
              marginLeft: "2.5rem",
              color: "#959BAB",
              cursor: "pointer",
              opacity: "0.6",
              width: "37.31px",
              height: "37.2px",
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <ExpandMoreIcon className={classes.arrow_card_down} />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <h5 className={classes.article_heading}>ARTICLES</h5>
      </Grid>
      <BlogCardList />
      <PaginationBlog />
    </div>
  );
}
