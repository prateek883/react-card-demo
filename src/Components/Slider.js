import React from "react";
import { Grid } from "@material-ui/core";
import PostCard from "./PostCard";
import Button from "@material-ui/core/Button";
import axios from "axios";
import CreateIcon from "@material-ui/icons/Create";


// wrapper for items
class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { itemRows: [], avatar: "", profileLink: "" };
  }
  mediumURL =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@Sabesan96";

  async componentDidMount() {
    await axios
      .get(this.mediumURL)
      .then(async (res) => await res.data)
      .then((data) => {
        // create two-dimensional array with 3 elements per inner array
        const avatar = data.feed.image;
        const profileLink = data.feed.link;
        const res = data.items; //This is an array with the content. No feed, no info about author etc..
        const posts = res.filter((item) => item.categories.length > 0);

        this.setState({ avatar: avatar, profileLink: profileLink });
        const itemRows = [];
        posts.forEach((item, i) => {
          item["avatar"] = this.state.avatar; // push avatar inside the json
          item["profilelink"] = this.state.profileLink; // push profile link inside the JSON
          const row = Math.floor(i / 3);
          if (!itemRows[row]) itemRows[row] = [];
          itemRows[row].push(item);
        });

        this.setState({ itemRows: itemRows });
      });
  }
  render() {
    const { itemRows } = this.state;

    return (
      <div>
        <div><img className='bg'
         src={'https://images.pexels.com/photos/373892/pexels-photo-373892.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'}
         style={{width: "1410px", height: "356px"}}
         />
         </div>
        <Button
          size="large"
          variant="contained"
          startIcon={<CreateIcon />}
          color="primary"
          style={{
            fontFamily: "Poppins, sans-serif",
            width: "362px",
            marginLeft: "523px",
            borderRadius: "18px",
            marginTop: "12px"
          }}
        >
          Write a Blog
        </Button>
        <Grid container spacing={1}>
          {itemRows.map((row, id) =>
            row.map((item, key) => <PostCard {...item} key={key} />)
          )}
        </Grid>
      </div>
    );
  }
}
export default Slider;
