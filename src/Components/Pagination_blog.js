import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    }
  },

}));

export default function PaginationRounded() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid container spacing={2}>
        <Grid item spacing xs={4}>
        </Grid>
        <Grid item spacing xs={4}>
        <Button
            variant="contained"
            size="large"
            style={{
              width: "321px",
              backgroundColor: "#6074E3",
              color: "#fff",
              boxShadow: "0px 4px 10px rgba(46, 78, 255, 0.47)",
              marginLeft: "0.8rem",
              marginBottom: "1.2rem",
            }}
          >
            Write a Blog
          </Button>
        <Pagination count={10} shape="rounded" />
        </Grid>
        <Grid item spacing xs={4}></Grid>
        </Grid>
    </div>
  );
}