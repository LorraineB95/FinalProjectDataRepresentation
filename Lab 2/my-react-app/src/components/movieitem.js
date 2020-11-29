import React from 'react';
//imports a card from Bootstrap
import Card from'react-bootstrap/Card';
export class MovieItem extends React.Component{

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
  <Card.Header>{this.props.myMovies.Title}</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <img src={this.props.myMovies.Poster} width="200" height="200"/>
      <footer className="blockquote-footer">
        {this.props.myMovies.Year}
      </footer>
    </blockquote>
  </Card.Body>
</Card>
            </div>
        );
    }
}