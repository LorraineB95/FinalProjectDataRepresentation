import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "font-awesome/css/font-awesome.min.css";
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import {Container} from 'reactstrap';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import  Edit   from './edit';
import { useTheme } from '@material-ui/core/styles';
import axios from 'axios';
import {Link} from 'react-router-dom';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);

const styles = theme => ({
  table: {
    minWidth: 700,
    width: "100%",
    float: 'right',
    padding: '50px 20px',
  },
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

export class MyBooks extends React.Component {

//e.target.value is the value property of the DOM element
//This is when the functions are called

  constructor(){
    super();
      //binds the deletebook function below in the form to the instance of it
    this.DeleteBook = this.DeleteBook.bind(this);
    
    }
    DeleteBook(){
      //logs a message to the console with the book id
    console.log("Delete:" +this.props.myBooks._id);
    //Using axios, the book id is removed from the list with a direct link
    axios.delete('http://localhost:4000/api/books/'+this.props.myBooks._id)

    .then()
    .catch();
    window.location.reload(); 
  }
  //<Link to={"/BookList/edit/"+this.props.myBooks._id}> edits books in the database
  //</Link>&nbsp;&nbsp;<span onClick={this.DeleteBook}> deletes books from the database
  render() {
    const { classes } = this.props;
  return (
    <div>
    <TableContainer component={Paper}>
      <Table  className={classes.table} aria-label="customized table">
        <TableBody style={{ width: "100%", valign: "baseline"}}>
            <StyledTableRow >
              <StyledTableCell style={{ width: "24%", valign: "baseline",}} component="th" scope="row">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.myBooks.title}
              </StyledTableCell>
              <TableCell style={{ width: "19%", valign: "baseline",}}>{this.props.myBooks.author}</TableCell>
              <TableCell style={{ width: "10%", valign: "baseline",}}>{this.props.myBooks.year}</TableCell>
              <TableCell style={{ width: "12%", valign: "baseline",}}>{this.props.myBooks.genre}</TableCell>
              <TableCell style={{ width: "14%", valign: "baseline",}}>  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Rating name="size-small" defaultValue={this.props.myBooks.rating} readOnly/>
    </div></TableCell>
              <TableCell ><Link to={"/BookList/edit/"+this.props.myBooks._id}><i className="fa fa-fw fa-pencil" style={{ fontSize: "1.3em", color: "darkblue" }}/></Link>&nbsp;&nbsp;<span onClick={this.DeleteBook}><i className="fa fa-fw fa-times" style={{ fontSize: "1.3em", color: "red" }} /></span></TableCell>
              <TableCell >&nbsp;&nbsp;&nbsp;</TableCell>
            </StyledTableRow>

        </TableBody>
      </Table>
    </TableContainer>
    <br></br><br></br>
    </div>
        );
      }
  }
export default withStyles(styles, { withTheme: true })(MyBooks);