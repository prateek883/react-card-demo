import { makeStyles } from "@material-ui/core";
import React from "react";
import HomeImg from "../images/Blog-image.jpg";
import Grid from "@material-ui/core/Grid";
import CardDetailsinfo from "./CardDetailsinfo";
import BlogAvatar from "./BlogAvatar";

const useStyles = makeStyles((theme) => ({
  HomeImg: {
    width: "1445px",
    height: "423px",
    left: "-103px",
  },
  home_title:{
    fontFamily:"Gotham-bold",
    fontWeight:"normal",
    fontSize:"13px",
    color:"#4E4E4E"
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <Grid items xs={12}>
          <img src={HomeImg} className={classes.HomeImg} alt="HomeImg" />
        </Grid>
        <Grid item xs={4}>
          <BlogAvatar/>
        </Grid>
        <Grid item xs={6}>
            <CardDetailsinfo/>
            <h5 className={classes.home_title}>HOME</h5>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </div>
  );
}
