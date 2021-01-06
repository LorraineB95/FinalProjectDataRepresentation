import React from 'react';
import axios from 'axios';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Paper from "@material-ui/core/Paper";
import { withStyles, makeStyles } from "@material-ui/core/styles";
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

//Exports the contents of class 'edit' when called
class Edit extends React.Component {

    constructor() {
        super();

       //This binds contexts to the functions to be run later
       this.onSubmit = this.onSubmit.bind(this);
       this.onChangeTitle = this.onChangeTitle.bind(this)
       this.onChangeAuthor = this.onChangeAuthor.bind(this);
       this.onChangeYear = this.onChangeYear.bind(this);
       this.onChangeRating = this.onChangeRating.bind(this);
       this.onChangeGenre = this.onChangeGenre.bind(this);
       this.handleOpen = this.handleOpen.bind(this);
       this.handleClose = this.handleClose.bind(this);

       //State stores data relevant to the component
       this.state = {
           title: '',
           author: '',
           year: '',
           rating: '',
           genre: '',
           open: true,
        }
    }

    componentDidMount(){
    
        //Returns a book by id and updates the state of the book
        axios.get('http://localhost:4000/api/books/'+this.props.match.params.id)
        .then(response =>{
            this.setState({
                _id:response.data._id,
                title:response.data.title,
                author:response.data.author,
                year:response.data.year,
                rating:response.data.rating,
                genre:response.data.genre
            })
        })
        .catch((error)=>{
            console.log(error);
        });
    }
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

    //window.location.href sends you back to the read page after the modal is closed and the book has been edited
    this.setState({ open: false });
    window.location.href = "/BookList/read/"; 
    const newBook = {
        title: this.state.title,
        author: this.state.author,
        year: this.state.year,
        rating: this.state.rating,
        genre: this.state.genre
        
    }
         
    //calls findByIdAndUpdate method
     axios.put('http://localhost:4000/api/books/'+this.state._id, newBook)
        .then(res =>{
            console.log(res.data)
         })
        .catch();
            
    }
    // Opens the modal
    handleOpen() {
        this.setState({ open: true });
    };
    // If the modal is closed without any changes, the user will be sent back to the read page 
    handleClose(){
        this.setState({ open: false });
        window.location.href = "/BookList/read/"; 
    };

    render() {
        
        const { classes } = this.props;
        return (
            <div>   
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
            <h2 id="transition-modal-title">Edit Book</h2>
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
            <Button type='submit' variant="contained" color="secondary"  onClick={this.handleOpen.bind(this)}>
        Edit Book
      </Button>
      </form>
          </div>
        </Fade>
      
      </Modal>
            </div>
        );
    }
}
export default withStyles(useStyles, { withTheme: true })(Edit)