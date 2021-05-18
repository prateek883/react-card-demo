import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Button from "@material-ui/core/Button";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

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
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper
            className={classes.paper}
            style={{
              fontSize: "44px",
              fontFamily: "Poppins",
              color: "#5e72eb",
            }}
          >
            Write a Blog{" "}
          </Paper>
        </Grid>
        {/* Grid1 */}
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-full-width"
            style={{ margin: 8 }}
            placeholder="Blog Title"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={3}></Grid>
        {/* Grid2 */}
        <Grid item xs={3}></Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-full-width"
            style={{ margin: 8, color: "ButtonFace" }}
            placeholder="Upload Image"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={3}>
          <Button
            style={{marginTop:"8px", width:"173px", height:"55px", color:"#5e72eb"}}
            variant="contained"
            size="large"
            className={classes.button}
            startIcon={<CloudUploadIcon />}
          >
            Upload
          </Button>
        </Grid>
        <Grid item xs={3}></Grid>
        {/* Grid3 */}
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Write awesome things about your Blog..."
            multiline
            rows={42}
            rowsMax={18}
            size="123px"
          ></TextField>
        </Grid>
        <Grid item xs={3}></Grid>
        {/* Grid3 */}
        <Grid item xs={3}></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
        <Button variant="contained" size="medium" color="primary">
        <ArrowDownwardIcon fontSize="inherit" />
          Submit
        </Button>
        </Grid>
      </Grid>
    </div>
  );
}
