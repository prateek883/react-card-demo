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
import fonts from "../Components/fonts.css";

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
            <Typography
              className={classes.paper}
              style={{
                fontSize: "38px",
                fontFamily: "Calibri",
                color: "#646464",
                textAlign: "center",
                fontWeight: "bolder",
                display: "flex",
                flexDirection: "column",
              }}
            >
              W R I T E
              <Typography
                style={{
                  fontSize: "35px",
                  fontFamily: "Calibri",
                  fontWeight: "bold",
                  color: "#6074E3",
                }}
              >
                A BLOG
              </Typography>
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={1}>
          <img
            src={Logo}
            alt="Logo"
            style={{
              marginLeft: "14rem",
              width: "30.88px",
              height: "30px",
              marginTop: "28px",
              cursor: "pointer",
            }}
          ></img>
          </Grid>
          <Grid item xs={3}>
          <h5
            style={{
              fontStyle: "normal",
              fontWeight: "bold",
              FontSize: "22.6787px",
              fontFamily: "Gotham-bold",
              width:"60.66px",
              color:"#6074E3",
              marginLeft:"9rem",
              marginTop:"2rem"
            }}
          >
            Ostello
          </h5>
          </Grid>
        {/* Grid for Blog Title name 2 */}

        {/* Grid for Blog Title Name */}
        <Grid item xs={1}></Grid>
        <Grid item xs={2}>
          <h5
            style={{
              fontFamily: "Gotham-bold",
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
              backgroundColor:"#FFFFFF",
              borderRadius:"12px",
              width:"881px"
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
              fontFamily: "Gotham-bold",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "16px",
              marginTop: "42px"
            }}
          >
            Tell us your story
          </h5>
        </Grid>
        <Grid item xs={6}>
          <TextField
            style={{
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.16)",
              marginLeft:"0.3rem",
              width:"881px",
              height:"180px",
              borderRadius:"12px"
            }}
            fullWidth
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
              fontFamily: "Gotham-bold",
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
              marginLeft:"0.3rem",
              width:"69px",
              backgroundColor:"#FFFFFF",
              boxShadow:"0px 4px 12px rgba(0, 0, 0, 0.16)",
              borderRadius:"12px"
            }}
          >
            <WallpaperIcon style={{
              width:"39px",
              height:"39px"
            }}/>
          </Button>
        </Grid>
        <Grid item xs={5}></Grid>

        {/* Grid for Cover Image */}
        <Grid item xs={1}></Grid>
        <Grid item xs={2}>
          <h5
            style={{
              fontFamily: "Gotham-bold",
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
              marginLeft:"0.3rem",
              width:"69px",
              backgroundColor:"#FFFFFF",
              boxShadow:"0px 4px 12px rgba(0, 0, 0, 0.16)",
              borderRadius:"12px"
            }}
          >
            <WallpaperIcon style={{
              width:"39px",
              height:"39px"
            }}/>
          </Button>
        </Grid>
        <Grid item xs={5}></Grid>

        {/* Grid for Publish Button */}
        <Grid container item xs={12}>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              startIcon={<PublishRoundedIcon style={{
                width:"24px",
                height:"23.5px",
              }}/>}
              style={{
                width: "179px",
                backgroundColor: "#6074E3",
                color: "#fff",
                marginLeft:"0.3rem",
                height:"59px",
                fontSize:"22.5085px",
                marginTop:"2.8rem"
              }}
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
