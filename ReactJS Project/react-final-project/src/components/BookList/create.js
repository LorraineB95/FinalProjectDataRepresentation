import React from 'react';
import axios from 'axios';
import {Container} from 'reactstrap';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Paper from "@material-ui/core/Paper";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useTheme } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';


const useStyles = theme => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      width: '18%',
    },
    
  });

//Exports the contents of class 'create' when called
class Create extends React.Component {

    
    constructor() {
        super();

        //This binds contexts to the functions to be run later
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this)
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangeGenre = this.onChangeGenre.bind(this);
        this.onChangeRating = this.onChangeRating.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);

        //State stores data relevant to the component
        this.state = {
            title: '',
            author: '',
            year: '',
            genre: '',
            rating: '',
            open: false,
        }
    }
    //e.target.value is the value property of the DOM element, ie the info submitted in the form
    //This is when the functions are called
    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        })
    }
    onChangeAuthor(e) {
        this.setState({
            author: e.target.value
        })
    }

    onChangeYear(e) {
        this.setState({
            year: e.target.value
        })
    }
    onChangeGenre(e) {
        this.setState({
            genre: e.target.value
        })
    }
    onChangeRating(e) {
        this.setState({
            rating: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();

//open:false closes the modal after adding book
//window.location.reload reloads the page window after adding a book
    this.setState({ open: false });
    window.location.reload(); 
            const newBook = {
                title: this.state.title,
                author: this.state.author,
                year: this.state.year,
                genre: this.state.genre,
                rating: this.state.rating,
            }
            axios.post('http://localhost:4000/api/books', newBook)
            .then((res)=>{
                console.log(res);
            })
            .catch((err)=>{
                console.log(err);
            });
            
    }
    // Opens the modal
     handleOpen() {
        this.setState({ open: true });
      };
    // Closes the modal
      handleClose(){
        this.setState({ open: false });
      };
    //<Modal> creates a modal which contains a form for the user to interact with and add book information
    //Add Book button opens up the modal
    render() {
        const { classes } = this.props;
        return (
            <div>
           <Button variant="contained" color="secondary" onClick={this.handleOpen.bind(this)}>
        Add Book
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={this.state.open}
        onClose={this.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={this.state.open}>
          <div className={classes.paper}>
          <form onSubmit={this.onSubmit}>
            <h2 id="transition-modal-title">Add a Book</h2>
            <div className="form-group"><label>Book Name: &nbsp;</label>
            <input type='text' className='form-control' value={this.state.title} onChange={this.onChangeTitle}></input></div>    
            <div className="form-group"><label>Book Author: &nbsp;</label>
            <input type='text' className='form-control' value={this.state.author} onChange={this.onChangeAuthor}></input></div>   
            <div className="form-group"><label>Year: &nbsp;</label>
            <input type='text' className='form-control' value={this.state.year}  onChange={this.onChangeYear}></input></div>
            <label>Rating: &nbsp;&nbsp;</label><br></br>
            <Rating onChange={this.onChangeRating} name="size-large" defaultValue={this.state.rating}/>
            <br></br>
            <label for="genres">Genre: &nbsp;</label>
            <br></br>
            <select value={this.state.genre}  onChange={this.onChangeGenre} name="genres" id="genres">
            <option>Fantasy</option>
            <option>Historical Fiction</option>
            <option>Horror</option>
            <option>Biography</option>
            <option>Contemporary</option>
            <option>Other</option>
            </select>
            <br></br><br></br>
            <Button type='submit' variant="contained" color="secondary" onClick={this.handleOpen.bind(this)}>
        Add Book
      </Button>
      </form>
          </div>
        </Fade>
      
      </Modal>
        </div>
        );
    }
}
export default withStyles(useStyles, { withTheme: true })(Create)