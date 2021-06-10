import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PublishRoundedIcon from "@material-ui/icons/PublishRounded";
import WallpaperIcon from "@material-ui/icons/Wallpaper";
import Logo from "../images/ostello-png-1-2@2x.png";
import Vector1 from "../images/vector-64@1x.svg";
import Vector2 from "../images/vector-65@1x.svg";
import { Typography } from "@material-ui/core";
import "../Components/fonts.css";
import BlogStyles from "../Components/blogStyles";
import { useDispatch, useSelector } from 'react-redux';



const CreateBlog = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ blogTitle:'', blogDescription:'',coverImg:'',contentImg:''});
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const classes = BlogStyles();


  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      clear();
    }
  };



  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit}>
      <Grid container spacing={0}>
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
            <Typography className={classes.paper}>
              W R I T E
              <Typography className={classes.Blog_headeing}>A BLOG</Typography>
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={1}>
          <img src={Logo} alt="Logo" className={classes.logo_img}></img>
        </Grid>
        <Grid item xs={3}>
          <h5 className={classes.ostello_logo}>Ostello</h5>
        </Grid>



        <Grid item xs={1}></Grid>
        <Grid item xs={2}>
          <h5 className={classes.Blog_title}>Blog Title</h5>
        </Grid>
        <Grid item xs={6}>
          <TextField
            className={classes.text_title_blog}
            fullWidth
            variant="outlined"
            value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
          />
        </Grid>
        <Grid item xs={3}></Grid>



        <Grid item xs={1}></Grid>
        <Grid item xs={2}>
          <h5 className={classes.tell_us}>Tell us your story</h5>
        </Grid>
        <Grid item xs={6}>
          <TextField
            className={classes.story_text}
            multiline
            rows={8}
            variant="outlined"
            borderLayout="none"
            value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}
          />
        </Grid>
        <Grid item xs={3}></Grid>




        <Grid item xs={1}></Grid>
        <Grid item xs={2} spacing={2}>
          <h5 className={classes.cover_img}>Upload Cover Image</h5>
        </Grid>
        <Grid item xs={4}>
          <input
            accept="image/*"
            className={classes.input}
            id="icon-button-file"
            type="file"
          />
          <label htmlFor="icon-button-file">
            <Button
              color="primary"
              aria-label="upload picture"
              component="span"
              className={classes.cover_btn_icon}
              variant="contained"
              color="default"
              multiple={false}
              onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
            >
              <WallpaperIcon
                style={{
                  width: "39px",
                  height: "39px",
                }}
              />
              
            </Button>
          </label>
        </Grid>
        <Grid item xs={5}></Grid>




        <Grid item xs={1}></Grid>
        <Grid item xs={2}>
          <h5 className={classes.content_img}>Upload Content Image</h5>
        </Grid>
        <Grid item xs={4}>
        <input
            accept="image/*"
            className={classes.input}
            id="icon-button-file"
            type="file"
          />
          <label htmlFor="icon-button-file">
            <Button
              color="primary"
              aria-label="upload picture"
              component="span"
              className={classes.cover_btn_icon}
              variant="contained"
              color="default"
            >
              <WallpaperIcon
                style={{
                  width: "39px",
                  height: "39px",
                }}
              />
            </Button>
          </label>
        </Grid>
        <Grid item xs={5}></Grid>




        <Grid container item xs={12}>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}>
            <Button
              className={classes.publish_btn}
              variant="contained"
              startIcon={
                <PublishRoundedIcon
                  style={{
                    width: "24px",
                    height: "23.5px",
                  }}
                />
              }
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
      </form>
    </div>
  );
}


export default CreateBlog;
