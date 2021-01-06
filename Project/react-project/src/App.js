import './App.css';
import React from 'react';
import {Container} from 'reactstrap';
import { Button } from 'reactstrap';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Header from './components/header';




function App() {
  return (
    <div className="App">
      <Header />
      <img />

      <SideNav
    onSelect={(selected) => {
        // Add your code here
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Home
            </NavText>
        </NavItem>
        <NavItem eventKey="books">
            <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                My Books
            </NavText>
          <NavItem eventKey="wishlist">
              <NavText>
                Wish List
              </NavText>
            </NavItem>
          <NavItem eventKey="explore">
              <NavText>
                  Explore
              </NavText>
            </NavItem>
        </NavItem>
    </SideNav.Nav>
</SideNav>
      <Container maxWidth="sm">
          <h1>Your Year in Reading</h1>
          <h3>As 2020 comes to a close lets look back at what you've read this year</h3>
        <Button variant="contained" color="blue">
          Your Reading Wrap Up
        </Button>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </Container>
      <Container maxWidth="sm">
          <h3>Looking For Your Next Read?</h3>
          <h4>Fantasy</h4>
          <img src={require("assets/nameof.jpg")} alt="NameOfTheWind" />
          <img src=''/>
          <h4>Contemporary</h4>
          <img src=''/>
          <img src=''/>
          <img src=''/>
      </Container>
    </div>
  );
}

export default App;
