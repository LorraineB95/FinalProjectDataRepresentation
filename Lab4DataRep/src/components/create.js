import React from 'react';

//Exports the contents of class 'create' when called
export class Create extends React.Component {

    //Render returns the <h3> contents 
    constructor() {
        super();

        //This binds contexts to the functions to be run later
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);

        //State stores data relevant to the component
        this.state = {
            Title: '',
            Year: '',
            Poster: '',
        }
    }
    //e.target.value is the value property of the DOM element, ie the info submitted in the form
    //This is when the functions are called
    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        })
    }
    onChangePoster(e) {
        this.setState({
            Poster: e.target.value
        })
    }

    onChangeYear(e) {
        this.setState({
            Year: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();

        //alert returns a pop up so we know the data has been entered
        alert("Movie:" + this.state.Title + " " + this.state.Year
            + " " + this.state.Poster);
    }

    //<form> creates a form for the user to interact with and add movie information
    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Movie Title</label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Title}
                            onChange={this.onChangeTitle}></input>
                    </div>
                    <div className="form-group">
                        <label>Add Movie Year:</label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Year}
                            onChange={this.onChangeYear}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Movie Poster:</label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.Poster}
                            onChange={this.onChangePoster}>
                        </textarea>
                    </div>

                    <div className="form-group">
                        <input type='submit'
                            value='Add Movie'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}