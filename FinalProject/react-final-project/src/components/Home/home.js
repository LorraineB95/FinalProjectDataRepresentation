import React from 'react';
import {Container} from 'reactstrap';
import { Button } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

//contains the list of book images
const tileData = [
  {
  img: 'https://www.irishtimes.com/polopoly_fs/1.4271688!/image/image.jpg_gen/derivatives/landscape_620/image.jpg',
  title: 'East of Eden',
  },
  {
  img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546406996l/17927395._SY475_.jpg',
  title: 'A Court Of Mist and Fury',
  },
  {
    img: 'https://kbimages1-a.akamaihd.net/f361dcce-8c2e-4ff4-9775-b409ccd6d624/1200/1200/False/godsgrave-book-two-of-sunday-times-bestselling-fantasy-adventure-the-nevernight-chronicle-the-nevernight-chronicle-book-2.jpg',
    title: 'GodsGrave',
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/81-349iYbfL.jpg',
    title: 'Where The Crawdads Sing',
  },
  {
    img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1504250606l/36161350._SY475_.jpg',
    title: 'Oh My God What A Complete Aisling',
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/8134AkhQJgL.jpg',
    title: 'The Lord Of The Rings',
  },
  {
    img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1508937133l/36341609.jpg',
    title: 'Into The Drowning Deep',
  },
  {
    img: 'https://www.bookstation.ie/wp-content/uploads/2019/02/9781408855652.jpg',
    title: 'Harry Potter',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/52/StephenKingPetSematary.jpg/220px-StephenKingPetSematary.jpg',
    title: 'Pet Semetary',
  },
  {
    img: 'https://www.dubraybooks.ie/images/thumbs/074/0746181_9781913183578_625.jpeg',
    title: 'The Twins of Auschwitz',
  },
  {
    img: 'https://kbimages1-a.akamaihd.net/f5f95d18-f32e-4481-a025-be99e325a174/1200/1200/False/all-the-light-we-cannot-see-the-breathtaking-world-wide-bestseller.jpg',
    title: 'All The Light We Cannot See',
  },
  {
    img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1584633432l/50623864.jpg',
    title: 'The Invisible Life of Addie Larue',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,

  },
  gridList: {
    width: 1830,
    height: 800,
    float: 'right',

  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },

}));

//Displasy the images in a Gridlist component
  export default function Home() {
    const classes = useStyles();
    return(
      <div className={classes.root}>
        <p></p>
        <h2>Year in Review</h2>
        <hr></hr>
      <GridList cellHeight={400}  spacing={5} cols={6} className={classes.gridList}> 
        <GridListTile key="Subheader"  cols={6} style={{ height: 'auto' }}>
          <ListSubheader component="div"></ListSubheader>
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}