import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import WallpaperIcon from "@material-ui/icons/Wallpaper";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Logo from "../images/undraw_Blog_post_re_fy5x.svg";

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
      <Grid container spacing={2}>
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
        <Grid item xs={6} alignItems="stretch">
          <h1
            className={classes.paper}
            style={{
              fontSize: "30px",
              fontFamily: "Gotham",
              fontStyle: "normal",
              color: "#6074E3",
            }}
          >
            WRITE A BLOG
          </h1>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}>
          <h5
            style={{
              fontFamily: "Gotham",
              fontStyle: "normal",
              fontWeight: "bold",
              color: "#6074E3",
              fontSize: "18px",
              marginTop: "42px",
            }}
          >
            Ostello
          </h5>
        </Grid>
        {/* Grid for Blog Title name 2 */}
        <Grid item xs={5}></Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={3}></Grid>

        {/* Grid for Blog Title Name */}
        <Grid item xs={1}></Grid>
        <Grid item xs={2}>
          <h5
            style={{
              fontFamily: "Gotham",
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
              fontFamily: "Gotham",
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
              fontFamily: "Gotham",
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
            rowsMax={12}
          ></TextField>
        </Grid>
        <Grid item xs={3}></Grid>

        {/* Grid for Content Image */}
        <Grid item xs={1}></Grid>
        <Grid item xs={2} spacing={2}>
          <h5
            style={{
              fontFamily: "Gotham",
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
        <Grid item xs={3}></Grid>
        <Grid item xs={2}></Grid>

        {/* Grid for Cover Image */}
        <Grid item xs={1}></Grid>
        <Grid item xs={2}>
          <h5
            style={{
              fontFamily: "Gotham",
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
              style={{
                width: "173px",
                backgroundColor: "#6074E3",
                color: "#fff"
              }}
            >
              <SendIcon />
              Publish
            </Button>
          </Grid>
          <Grid
            item xs={4}
            container
            direction="column"
            alignItems="flex-end"
          >
            <img
              src={Logo}
              alt="Logo"
              style={{ width: "196px", bottom: "486px" }}
            ></img>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
