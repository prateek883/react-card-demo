import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import BlogImg1 from "../images/blog-image1.jpg";



const useStyles = makeStyles((theme) => ({
  root: {
    width:"811px",
    "&:hover": {
      boxShadow: "4px 20px 32px rgba(158, 175, 201, 0.5)",
    },
    marginLeft:"28rem",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  contant1:{
      marginLeft:"6rem",
      marginRight:"6rem",
      fontFamily:"Gotham-Light",
      fontSize:"12px"
  },
  Blog_img:{
      width:"811px",
      height:"541px"
  },
  Blog_subtitle:{
      width:"659px",
      height:"88px",
      left:"726px",
      fontFamily:"Gotham-Bold",
      fontSize:"18px",
      lineHeight:"23px",
      marginLeft:"6rem", 
  },
  blog_sub1:{
    marginLeft:"6rem",
    marginRight:"6rem",
    fontFamily:"Gotham-Light",
    fontSize:"12px"
  }
}));

export default function RecipeReviewCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" className={classes.contant1}>
            <br/>
            <br/>
            <br/>
        The ipsum dolor sit amet, consectetur adipiscing elit. Interdum facilisis ante nibh nibh. Viverra tortor euismod sit elit. 
        Feugiat mi euismod ultrices donec est vitae aliquam, odio quam.
         Enim, sit faucibus est tellus a. At ac nunc urna lacus, id eleifend ultrices diam urna. Malesuada nec metus quis l
         eo mattis erat. Amet faucibus dolor, ullamcorper aenean et et sed iaculis. Non tempor, scelerisque habitant nul
         la consequat dui nibh. Lobortis at nullam viverra augue nisl turpis aliquet netus. 
        Id orci fermentum consectetur velit, malesuada ornare amet, sed. s nec fringilla quis. Mi viverr
        a ac malesuada lacus tortor enim. Dapibus est, venenatis nisl tellus, montes, faucibus morbi sit lectus. 
        Lectus netus lectus suspendisse eget ornare 
        <br/>
        <br/>

        The ipsum dolor sit amet, consectetur adipiscing elit. Interdum facilisis ante nibh nibh. Viverra tortor euismod sit elit. 
        Feugiat mi euismod ultrices donec est vitae aliquam, odio quam.
         Enim, sit faucibus est tellus a. At ac nunc urna lacus, id eleifend ultrices diam urna. Malesuada nec metus quis l
         eo mattis erat. Amet faucibus dolor, ullamcorper aenean et et sed iaculis. Non tempor, scelerisque habitant nul
         la consequat dui nibh. Lobortis at nullam viverra augue nisl turpis aliquet netus. 
        Id orci fermentum consectetur velit, malesuada ornare amet, sed. s nec fringilla quis. Mi viverr
        a ac malesuada lacus tortor enim. Dapibus est, venenatis nisl tellus, montes, faucibus morbi sit lectus. 
        Lectus netus lectus suspendisse eget ornare 
        <br/>
        <br/>
        The ipsum dolor sit amet, consectetur adipiscing elit. Interdum facilisis ante nibh nibh. Viverra tortor euismod sit elit. 
        Feugiat mi euismod ultrices donec est vitae aliquam, odio quam.
         Enim, sit faucibus est tellus a. At ac nunc urna lacus, id eleifend ultrices diam urna. Malesuada nec metus quis l
         eo mattis erat. Amet faucibus dolor, ullamcorper aenean et et sed iaculis. Non tempor, scelerisque habitant nul
         la consequat dui nibh. Lobortis at nullam viverra augue nisl turpis aliquet netus. 
        Id orci fermentum consectetur velit, malesuada ornare amet, sed. s nec fringilla quis. Mi viverr
        a ac malesuada lacus tortor enim. Dapibus est, venenatis nisl tellus, montes, faucibus morbi sit lectus. 
        Lectus netus lectus suspendisse eget ornare 
        <br/>
        <br/>
        <br/>
        </Typography>
      </CardContent>
      <img src={BlogImg1}
      alt="BlogImg1"
      className={classes.Blog_img}
      />
      <CardContent>
       <h5 className={classes.Blog_subtitle}>Things to know before you go</h5>
        <Typography variant="body2" color="textSecondary" component="p" className={classes.blog_sub1}>
        ltricies eleifend quisque blandit id dictum amet, varius. Ullamcorper sollicitudin volutpat el
        it, sed sit ut at nunc sem. Eget orci, mi elit, dui felis facilisis quis pretium imperdiet. Turpis e
        get odio ut vel, leo interdum vitae mus sollicitudin. Tristique curabitur non sit tristique. Nibh nunc u
        t dui at auctor donec augue. Elementum amet, ipsum a
        uctor dolor ut euismod fermentum laoreet. Nisl est scelerisque velit lorem morbi vulputate et donec euis
          <br/>
        </Typography>
        <br/>
        <br/>
        <br/>
      </CardContent> 
    </Card>
  );
}
