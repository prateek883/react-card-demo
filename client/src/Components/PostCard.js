import React from "react";
import ShortenText from "../utils/ShortenText";
import ToText from "../utils/ToText";
import VisibilitySharp from "@material-ui/icons/Visibility";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareSharpIcon from "@material-ui/icons/ShareSharp";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import { faUser } from "@fortawesome/free-solid-svg-icons";
// import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {
  makeStyles,
  Avatar,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Badge,
  withStyles,
  Link,
  CardActions,
} from "@material-ui/core";
import "../Components/fonts.css";


import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton
} from "react-share";


const styles = makeStyles((muiBaseTheme) => ({
  grid: {
    marginTop: "45px",
    minHeight: "391px",
  },
  card: {
    flexGrow: 1,
    marginTop: "2rem",
    borderRadius: "22px",
    width: "368px",
    marginLeft: "3.8rem",
    justifyContent:"space-evenly",
    boxShadow: "0px 4px 13px rgba(159, 153, 255, 0.11)",
    "&:hover": {
			boxShadow: "4px 20px 32px rgba(158, 175, 201, 0.5)"
		}
  },
  media: {
    width: "452px",
    height: "15.8rem",
  },
  content: {
    textAlign: "left",
    padding: muiBaseTheme.spacing(3),
  },
  divider: {
    margin: `${muiBaseTheme.spacing(2)}px 0`,
  },
  heading: {
    fontFamily: "Gotham-Medium",
    fontSize: "11px",
    fontWeight: "normal",
    color: "#393939",
    lineHeight: "12px",
    marginTop:"2rem",
    fontStyle:"normal"
  },
  subheading: {
    fontFamily: ("Gotham-Light"),
    fontSize: "14px",
    lineHeight: 1.8,
    marginTop: "1.5rem",
    color: "#4B4B4B",
    fontStyle:"normal"
  },
  avatar: {
    width: "3rem",
    height: "3rem",
    borderRadius: "50%",
    bottom: -136,
    marginTop:"5.8rem"
  },
  Readmore: {
    color: " rgba(55, 43, 255, 1)",
    cursor: "pointer",
    fontFamily: "Gotham-bold",
    fontSize: "10px",
    marginLeft:"0.4rem",
  },
}));
const StyledBadge = withStyles((theme) => ({
  badge: {
    display: "flex",
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    bottom: -131,

    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);

export default function MediumCard(props) {
  const classes = styles();
  const monthShortname = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const splitDate = props.pubDate.split(" ");
  const date = splitDate[0];
  const splitMonth = date.split("-");
  const finalDate =
    monthShortname[Number(splitMonth[1] - 1)] +
    " " +
    splitMonth[2] +
    "," +
    " " +
    splitMonth[0];
  const d = new Date();
  const [value, setValue] = React.useState(0);

  return (
    <Grid xs={12} sm={12} lg={4} className={classes.grid}>
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={props.thumbnail}>
          {d.getHours() >= 5 && d.getHours() <= 20 ? (
            <StyledBadge
              overlap="circle"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              variant="dot"
              style={{
                display: "inline-block",
                alignItems: "center",
                marginLeft: "1.5625rem",
              }}
            >
              <Avatar
                alt="sabesan sathananthan"
                className={classes.avatar}
                src={props.avatar}
                component="a"
                varient="rounded"
                href={props.profilelink}
                target="_blank"
              />
            </StyledBadge>
          ) : (
            <Avatar
              alt="sabesan sathananthan"
              className={classes.avatar}
              src={props.avatar}
              component="a"
              style={{
                display: "inline-block",
                alignItems: "center",
                marginLeft: "1.5625rem",
              }}
              varient="rounded"
              href={props.profilelink}
              target="_blank"
            />
          )}
        </CardMedia>
        <CardContent
          className={classes.content}
          style={{
            paddingTop: "2.1875rem",
            minHeight: "120px",
            paddingBottom: "0",
          }}
        >
          <Typography className={classes.heading} variant={"h5"} gutterBottom>
            <Link
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
            >
              {ShortenText(props.title, 0, 75)}
            </Link>
          </Typography>
          <Typography className={classes.subheading} variant="body1" color="textSecondary">
            {ShortenText(ToText(props.content), 0, 120) + "..."}
          </Typography>
        </CardContent>
        <CardActions
          style={{ paddingLeft: "1.5625rem", paddingRight: "1.5625rem", marginTop: "3rem"}}
        >
          <Grid>
            <Typography
              style={{
                fontSize: "14px",
                color: "#212529",
              }}
              display="block"
              variant="body1"
              gutterBottom
            >
              <h4 className={classes.Readmore}>
                Read More
              </h4>
              
            </Typography>
          </Grid>
          {/* <Grid>
            <Typography
              display="block"
              variant="body1"
              style={{
                fontSize: "14px",
                color: "#868e96",
                display: "inline-block",
              }}
              gutterBottom
            >
              <FontAwesomeIcon icon={faCalendarAlt} /> {finalDate}
            </Typography>
          </Grid> */}
          <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            showLabels
            className={classes.root}
            style={{marginLeft:"14px",Color:"#5e72eb",justifyContent:"space-evenly"}}
          >
            <BottomNavigationAction label="view" icon={<VisibilitySharp  style={{fontSize:"16px"}}/>} />
            <BottomNavigationAction label="Like" icon={<FavoriteIcon style={{fontSize:"16px"}}/>} />
            <BottomNavigationAction label="share" icon={<ShareSharpIcon style={{fontSize:"16px"}}/>} />
          </BottomNavigation>
        </CardActions>
      </Card>
    </Grid>
  );
}