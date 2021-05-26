import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PublishRoundedIcon from '@material-ui/icons/PublishRounded';
import WallpaperIcon from "@material-ui/icons/Wallpaper";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Logo from "../images/ostello_logo.png";
import Blog1 from "../images/undraw_Blog_post_re_fy5x.svg";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        {/* Grid for Blog Title1 */}
        <Grid item xs={2}>
          <ArrowBackIosIcon
            variant="contained"
            style={{
              color: "#6074E3",
              marginLeft: "55px",
              marginTop: "38px",
              cursor: "pointer",
              fontSize: "42px",
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Grid>
            <Typography
              className={classes.paper}
              style={{
                fontSize: "38px",
                fontFamily: "Calibri",
                color: "#646464",
                textAlign: "center",
                fontWeight:'bolder',
                display: 'flex',
                flexDirection: 'column'

              }}
            >
              W R I T E
              <Typography style={{
                fontSize:"35px",
                fontFamily:"Calibri",
                fontWeight:"bold",
                color:"#6074E3"
              }}>
              A  BLOG
              </Typography>
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <img
            src={Logo}
            alt="Logo"
            style={{
              marginLeft:"10rem",
              width: "146px",
              bottom: "486px",
              marginTop: "28px",
              cursor: "pointer",
            }}
          ></img>
        </Grid>
        {/* Grid for Blog Title name 2 */}

        {/* Grid for Blog Title Name */}
        <Grid item xs={1}></Grid>
        <Grid item xs={2}>
          <h5
            style={{
              fontFamily: "Calibri",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "16px",
              marginTop: "23px",
            }}
          >
            Blog Title
          </h5>
        </Grid>
        <Grid item xs={6}>
          <TextField
            style={{
              margin: 3,
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.16)",
              fontFamily: "Calibri",
            }}
            fullWidth
            placeholder="Blog Tilte"
            margin="small"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={3}></Grid>

        {/* Grid for Blog Story Content*/}
        <Grid item xs={1}></Grid>
        <Grid item xs={2}>
          <h5
            style={{
              fontFamily: "Calibri",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "16px",
              marginTop: "42px",
            }}
          >
            Tell us your story
          </h5>
        </Grid>
        <Grid item xs={6}>
          <TextField
            style={{
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.16)",
            }}
            fullWidth
            variant="outlined"
            multiline
            rows={42}
            rowsMax={8}
          ></TextField>
        </Grid>
        <Grid item xs={3}></Grid>

        {/* Grid for Content Image */}
        <Grid item xs={1}></Grid>
        <Grid item xs={2} spacing={2}>
          <h5
            style={{
              fontFamily: "Calibri",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "16px",
              marginTop: "12px",
            }}
          >
            Upload Content Image
          </h5>
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            color="default"
            style={{
              position: "absolute",
              marginTop: "12px",
            }}
          >
            <WallpaperIcon />
          </Button>
        </Grid>
        <Grid item xs={5}></Grid>

        {/* Grid for Cover Image */}
        <Grid item xs={1}></Grid>
        <Grid item xs={2}>
          <h5
            style={{
              fontFamily: "Calibri",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            Upload Cover Image
          </h5>
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            color="default"
            style={{
              position: "absolute",
              marginTop: "21px",
            }}
          >
            <WallpaperIcon />
          </Button>
        </Grid>
        <Grid item xs={5}></Grid>

        {/* Grid for Publish Button */}
        <Grid container item xs={12}>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              startIcon={<PublishRoundedIcon />}
              style={{
                width: "193px",
                backgroundColor: "#6074E3",
                color: "#fff",
              }}
            >
              Publish
            </Button>
          </Grid>
          <Grid item xs={4} container direction="column" alignItems="flex-end">
            <img
              src={Blog1}
              alt="Blog1"
              style={{
                width: "226px",
              }}
            ></img>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
