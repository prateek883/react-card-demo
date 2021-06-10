// Blog Pagination Card

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
  blog_form: {
    width: "321px",
    backgroundColor: "#6074E3",
    color: "#fff",
    boxShadow: "0px 4px 10px rgba(46, 78, 255, 0.47)",
    marginTop: "1.2rem",
    marginBottom: "1.2rem",
    marginLeft: "5.5rem",
    textTransform: "lowercase",
  },
}));

export default function PaginationRounded() {
  const classes = useStyles();


  const history = useHistory();
  
  const handleRoute = () =>{ 
    history.push("../CreateBlog");
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item spacing xs={4}></Grid>
        <Grid item spacing xs={6}>
          <Button
            variant="contained"
            size="large"
            className={classes.blog_form}
            onClick={handleRoute}
          >
            Write your own Blog
          </Button>
          <Pagination
            count={5}
            shape="rounded"
            style={{
              marginLeft: "6.5rem",
              marginTop: "2.5rem",
              fontSize: "28px",
              color: "#A1A1A1",
              fontFamily: "Roboto",
            }}
          />
        </Grid>
        <Grid item spacing xs={2}></Grid>
      </Grid>
    </div>
  );
}

