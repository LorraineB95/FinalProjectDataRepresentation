import React from 'react';
//imports a card from Bootstrap
import Card from'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export class MovieItem extends React.Component{


  constructor(){
      super();

      //binds the deletmovie function below in the form to the instance of it
      this.DeleteMovie = this.DeleteMovie.bind(this);
  }

  //logs a message to the console with the movie id
  DeleteMovie(e){

    //e.preventDefault prevents the method from being called every time the page loads
    e.preventDefault();
        console.log("Delete: "+this.props.movie._id);

        axios.delete("http://localhost:4000/api/movies"+this.props.movie._id)
        .then(()=>{
            this.props.ReloadData();
        })
        .catch();
  }
  
  //render will display the desired information
  //Card is a container based UI and displays the information using css and HTML5 from Bootstrap
  //Props passes information between the parent and child component
   
  render(){
        return(
            <div>
                {/* <h3>{this.props.myMovies.Title}</h3>
                <p>{this.props.myMovies.Year}</p>
                <img src={this.props.myMovies.Poster} width="200" height="200"/> */}


                <Card>
  <Card.Header>{this.props.myMovies.title}</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <img src={this.props.myMovies.poster} width="200" height="200"/>
      <footer className="blockquote-footer">
        {this.props.myMovies.year}
      </footer>
    </blockquote>
  </Card.Body>
  <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button>
</Card>
            </div>
        );
    }
}