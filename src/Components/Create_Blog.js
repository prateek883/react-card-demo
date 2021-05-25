import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PublishIcon from "@material-ui/icons/Publish";
import WallpaperIcon from "@material-ui/icons/Wallpaper";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Logo from "../images/undraw_blogging_vpvv.svg";
import Container from "@material-ui/core/Container";

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
      <Container maxWidth="lg"></Container>
      <Grid container spacing={1}>
        {/* Grid for Blog Title1 */}
        <Grid item xs={2}>
          <ArrowBackIosIcon
            style={{
              color: "#6074E3",
              fontSize: "45px",
              marginLeft: "55px",
              marginTop: "38px",
              cursor: "pointer",
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
              fontWeight: "bold",
              color: "#646464",
            }}
          >
            W R I T E<br />A BLOG
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
              fontSize: "26px",
              marginTop: "42px",
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
              fontFamily: "Gotham",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "16px",
              marginTop: "42px",
            }}
          >
            Blog Title
          </h5>
        </Grid>
        <Grid item xs={6}>
          <TextField
            style={{ margin: 3 }}
            fullWidth
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
        <Grid item xs={2}>
          <h5
            style={{
              fontFamily: "Gotham",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "16px",
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
              marginTop: "6px",
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
              marginTop: "6px",
            }}
          >
            <WallpaperIcon />
          </Button>
        </Grid>
        <Grid item xs={5}></Grid>

        {/* Grid for Publish Button */}
        <Grid item md={4}></Grid>
        <Grid item md={3}>
          <Button
            variant="primary"
            style={{
              position: "absolute",
              width: "173px",
              backgroundColor: "#6074E3",
              color: "#fff",
            }}
          >
            <PublishIcon />
            Publish
          </Button>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={2} justify="space-evenly">
          <img src={Logo} alt="Logo" style={{ width: "166px" }}></img>
        </Grid>
      </Grid>
    </div>
  );
}
