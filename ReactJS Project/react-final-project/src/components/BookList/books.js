import React from'react';
import  MyBooks  from './mybooks';

export class Books extends React.Component{

    //Map is used to render the list of data from state
    //Props passes the books data between parent and child component
    render(){
        return this.props.myBooks.map((myBooks)=>{
        return <MyBooks key={myBooks._id} myBooks={myBooks}
        ReloadDataMethod={this.props.ReloadDataMethod}></MyBooks>
});

    }
}