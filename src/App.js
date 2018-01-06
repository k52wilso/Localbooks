import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './NavigationBar';
import LeftSideBar from './LeftSideBar';
import Filter from './Filter';
import BookList from './BookList';
import BookOverlay from './BookOverlay';
import Main from './Main';
import RegistrationForm from './RegistrationForm';
import SellerProfile from './SellerProfile';
import UserHome from './UserHome';
import UserSettings from './UserSettings';
import UserSelling from './UserSelling';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';




class App extends Component {

    constructor(props){
      super(props);

      this.showUserImage = this.showUserImage.bind(this);
    }
  
  state = {
   showUserImage:true, 
  }

    //Show the user's image if they are logged in
  showUserImage(){
    this.setState({
      showUserImage:!this.state.showUserImage
    })
  }


  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <NavigationBar showimage={this.state.showUserImage} showimagefunction={this.showUserImage}/>
        </header>

        <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/register" component={RegistrationForm} />
          <Route path="/sellers/:id" component={SellerProfile} />
          <Route path="/users/home" component={UserHome} />
          <Route path="/users/settings" component={UserSettings} />
          <Route path="/users/sell" component={UserSelling} />
        </Switch>
        
      </div>
      </Router>
    );
  }
}

export default App;
