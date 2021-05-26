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
import Logo2 from "../images/undraw_Blog_post_re_fy5x.svg";

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
    width: "126px",
    bottom: "486px",
    marginTop: "6rem",
    cursor: "pointer",
    height: "56px",
  },
  home_info: {
    marginLeft: "8rem",
    fontSize: "16px",
    color: "#474747",
    fontFamily: "Calibri",
    fontStyle: "normal",
    fontWeight: "normal",
  },
  subscribe_heading: {
    color: "#2F2F2F",
    marginLeft: "8rem",
    fontStyle: "bold",
    fontSize: "16px",
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
    marginLeft: theme.spacing(0),
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
    fontSize: "72px",
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Typography>
            <img className={classes.logo_img} src={Logo} alt="Logo"></img>
          </Typography>
          <Typography className={classes.Blog_Name}>Excellence</Typography>
          <Typography className={classes.home_info}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Consequat tincidunt in blandit mattis nulla eu, turpis ut.
          </Typography>
          <Typography className={classes.subscribe_heading}>
            Subscribe now, amazing contets on your way!
          </Typography>
          <Paper component="form" className={classes.root1}>
            <IconButton
              className={classes.iconButton}
              aria-label="menu"
            ></IconButton>
            <InputBase
              className={classes.input}
              placeholder="Jondoeostello579@gmail.com"
              inputProps={{ "aria-label": "search google maps" }}
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
            }}
          >
            Get Started
          </Button>
        </Grid>
        <Grid item xs={4}>
          <img
            src={Logo2}
            alt="Logo2"
            style={{
              width: "416px",
              height: "356px",
              cursor: "pointer",
              marginTop: "12rem",
            }}
          ></img>
        </Grid>
        <Grid item xs={12}>
          <ExpandMoreIcon className={classes.arrow_card_down} />
        </Grid>
      </Grid>
    </div>
  );
}
