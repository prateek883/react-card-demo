import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import TurnedInIcon from '@material-ui/icons/TurnedIn';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    boxShadow:"none",
    marginTop:"2rem",
    marginLeft:"4rem"
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
  date_blog:{
      fontFamily:"Gotham-bold",
      fontStyle:"normal",
      fontSize:"35.1549px",
      marginLeft:"0.5rem",
      marginTop:"801px"
  }
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        title="John Doe"
        subheader="National Institue of Technology.
        Bangalore, India"
      />
      <Divider/>
      <CardActions>
        <Button size="small" color="default">
          Review
        </Button>
        <Button size="small" color="default">
          Comments         
        </Button>
        <QuestionAnswerIcon style={{width:"14.22px",height:"14.22px",cursor:"pointer"}}/>
        <TurnedInIcon style={{width:"14.22px",height:"14.22px",cursor:"pointer"}}/>
      </CardActions>
      <Typography className={classes.date_blog}>Feb 4</Typography>
    </Card>
  );
}
