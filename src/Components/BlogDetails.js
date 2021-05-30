import { makeStyles } from "@material-ui/core";
import React from "react";
import BlogHeader from "./BlogHeader"
import Grid from "@material-ui/core/Grid";
import CardDetailsinfo from "./CardDetailsinfo";
import BlogAvatar from "./BlogAvatar";

const useStyles = makeStyles((theme) => ({
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
          <BlogHeader />
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



