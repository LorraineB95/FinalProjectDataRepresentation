import React, { useState } from "react";  
import axios from 'axios';  
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import { BrowserRouter as Link } from "react-router-dom";

    const useStyles = makeStyles((theme) => ({
        root: {
          width: "97%",
          float: "right",
        },
      }));
      // useState grabs the API key amd reveals all the information within the google books API.
      export default function Search() {
        const classes = useStyles();
        const [open, setOpen] = React.useState(false);
        const [book, setBook] = useState("");  
        const [result, setResult] = useState([]);  
        const [apiKey, setApiKey] = useState("AIzaSyCS-Sj1STm0T27ckzrcN2X1NiUrfP9pBmA")  
     
      
        function handleChange(event) {  
            const book = event.target.value;  
            setBook(book);  
        }  
    
        function handleSubmit(event) {  
            event.preventDefault();  
            axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey + "&maxResults=12")  
                .then(data => {  
                    console.log(data.data.items);  
                    setResult(data.data.items);  
                })  
        } 
    //displays the books in a Card component 
    return (  
        <div className={classes.root}>
        <form onSubmit={handleSubmit}>  
            <div className="card-header main-search" style={{ backgroundColor: "#DB3D44" }}>  
                <div className="row">  
                    <div className="col-12 col-md-3 col-xl-3">  
                        <input onChange={handleChange} className="AutoFocus form-control" placeholder="Search Book..." type="text" />  
                    </div>  
                    <div className="ml-auto">  
                        <input type="submit" value="Search"  className="btn btn-primary search-btn" />  
                    </div> 
                </div>  
            </div>  
            <div className="container">  
                <div className="row">  
                    {result.map(book => (  
                        <div className="col-sm-2">  
                            <Card style={{ 'marginTop': '25px' }}>  
                                <Card.Img style={{ 'height': '230px' }}variant="top" src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : ''} />  
                                <Card.Body>  
                                    <p style={{ 'white-space': 'nowrap', 'overflow': 'hidden', 'text-overflow': 'ellipsis',  }} className="card-title">{book.volumeInfo.title}</p>  
                                    <a className="btn btn-danger" href={book.volumeInfo.canonicalVolumeLink} target="_blank">Learn More</a>  
                                </Card.Body>  
                            </Card>  
                        </div>  
                    ))}  
                </div>  
            </div>  
        </form>  
        </div>
  );
}
