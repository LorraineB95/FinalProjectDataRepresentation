import React from 'react';
import { Books} from './books';
import axios from 'axios';
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
import  Create   from './create';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useTheme } from '@material-ui/core/styles';
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
      width: "97%",
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

 class Read extends React.Component {

    //state stores data relevent to the component
    state = {

        books: []
    };
    constructor(){
        super();
        this.ReloadDataMethod = this.ReloadDataMethod.bind(this);
        
      }

    //componentDidMount executes after the first render on the client side
    //axios retrives book information from the link
    ReloadDataMethod(){
        axios.get('http://localhost:4000/api/books')
        .then((response)=>{
        this.setState({books: response.data.books})
        })
        .catch((error)=>{
        console.log(error);
        });
        }
        
    componentDidMount() {
        axios.get('http://localhost:4000/api/books')
            .then((response) => {
                    this.setState({ books: response.data})
                }
            )
    //if there is an error an error message will be returned
            .catch(
                (error)=>{
                        console.log(error)
                }
            );
    }

    //Render will display the book data stored in state
    //<Books myBooks={this.state.books}></Books> pulls data from the database
    //<Create></Create> pulls from create.js
    render() {
        const { classes } = this.props;
        return (
            <div>
                
         
    <TableContainer component={Paper}>

      <Table className={classes.table} aria-label="customized table">

        <TableHead >
          <TableRow>
            <StyledTableCell style={{ height: "32px", backgroundColor: "#DB3D44"  }}>Book List 2021</StyledTableCell>
            <StyledTableCell style={{ backgroundColor: "#DB3D44" }} >Book Author</StyledTableCell>
            <StyledTableCell style={{ backgroundColor: "#DB3D44" }} >Year</StyledTableCell>
            <StyledTableCell style={{ backgroundColor: "#DB3D44" }} >Genre</StyledTableCell>
            <StyledTableCell style={{ backgroundColor: "#DB3D44" }} >Book Rating</StyledTableCell>
            <StyledTableCell style={{ backgroundColor: "#DB3D44" }} align="left">&nbsp;&nbsp;&nbsp;&nbsp;</StyledTableCell>
            <StyledTableCell style={{ backgroundColor: "#DB3D44" }} ></StyledTableCell>
          </TableRow>
        </TableHead>

      </Table>
    </TableContainer>
      
    <Books myBooks={this.state.books}></Books>
    <Create></Create>
            </div>
        );
    }
}
export default withStyles(styles, { withTheme: true })(Read);
