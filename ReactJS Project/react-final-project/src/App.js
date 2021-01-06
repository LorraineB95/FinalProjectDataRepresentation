import "./App.css";
import React, { Component } from "react";
import { Container } from "reactstrap";
import { Button } from "reactstrap";
import SideNav, {Toggle, Nav, NavItem,NavIcon, NavText,} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import Header from "./components/header";
import  MyBooks   from "./components/BookList/mybooks";
import Home from "./components/Home/home";
import Search from "./components/Search/search";
import News from "./components/News/news";
import  Read  from './components/BookList/read';
import Edit   from './components/BookList/edit';
import  Create   from './components/BookList/create';
import SignUp from "./components/Follow/signup";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//Creates the navigation bar displayed on every page
//<Route> allows for switching between pages
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <SideNav onSelect={(selected) => {}}>
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
              <NavItem eventKey="home">
                <NavIcon>
                  <Link to="/Home/home">
                    <i
                      className="fa fa-fw fa-home"
                      style={{ fontSize: "1.75em" }}
                    />
                  </Link>
                </NavIcon>
                <NavText>Home</NavText>
              </NavItem>
              <NavItem eventKey="books">
                <NavIcon>
                  <Link to="/BookList/read">
                    <i
                      className="fa fa-fw fa-book"
                      style={{ fontSize: "1.75em" }}
                    />
                  </Link>
                </NavIcon>
                <NavText eventKey="mybooks" href="/header">
                  My Books
                </NavText>
              </NavItem>
              <NavItem eventKey="news">
                <NavIcon>
                <Link to="/News/news">
                    <i
                      className="fa fa-fw fa-newspaper-o"
                      style={{ fontSize: "1.75em" }}
                    />
                  </Link>
                </NavIcon>
                <NavText eventKey="news" >
                  News
                </NavText>
              </NavItem>
              <NavItem eventKey="search">
                <NavIcon>
                <Link to="/Search/search">
                    <i
                      className="fa fa-fw fa-search"
                      style={{ fontSize: "1.75em" }}
                    />
                    </Link>
                </NavIcon>
                <NavText eventKey="search" >
                  Search
                </NavText>
              </NavItem>
              <NavItem eventKey="follow">
                <NavIcon>
                <Link to="/Follow/signup">
                    <i
                      className="fa fa-fw fa-users"
                      style={{ fontSize: "1.75em" }}
                    />
                  </Link>
                </NavIcon>
                <NavText eventKey="follow" >
                  Follow
                </NavText>
              </NavItem>
              
            </SideNav.Nav>
          </SideNav>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/Home/home" component={Home} />
            <Route path="/BookList/read/" component={Read} />
            <Route path="/News/news" component={News} />
            <Route path="/Search/search" component={Search} />
            <Route path="/Follow/signup" component={SignUp} />
            <Route path="/BookList/edit/:id" component={Edit} />
            <Route path="/BookList/create" component={Create} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
