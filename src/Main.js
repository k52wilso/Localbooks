import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './NavigationBar';
import LeftSideBar from './LeftSideBar';
import Filter from './Filter';
import BookList from './BookList';
import BookOverlay from './BookOverlay';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';


const categoryFilter = {
  type:"category",
  list:[
    {id:1,listItem:"All Categories"},
    {id:2,listItem:"Physics"},
    {id:5,listItem:"History"},
    {id:3,listItem:"Marketing"},
    {id:6,listItem:"Mathematics"},
  ] 
};

const viewedFilter = {
  type:"views",
  list:[
    {id:1,listItem:"Most Viewed"},
    {id:2,listItem:"Least Viewed"},
  ]
};

const recentRelevance = {
  type:"recent",
  list:[
    {id:1,listItem:"Relevance"},
    {id:2,listItem:"Most Recent"},
  ]
};



class Main extends Component {

  constructor(props){
    super(props)

    //Function binded to Component
    this.showOverlay = this.showOverlay.bind(this);
    this.changeBook = this.changeBook.bind(this);
  }

  state = {
    open:false,
    overlayBook:{},
    bookslist:[], 
  }

  showOverlay(book,e){
    this.setState({
      open:!this.state.open,
      overlayBook:book
    })
  }

  // Function : changeBook
  // Description: Will change the Booklist state
  // Parameters:key - the type of filter, value - the value for specified type
  changeBook(key,value){
      let newState = this.state;
      newState[key] = value;
      this.setState(newState);
  }

  async componentDidMount() {
     try {

       // Fetch list of books
       const response = await fetch('http://localhost/api/book/read.php');
       const booksList =  await response.json();

       this.setState({
        bookslist: booksList.records
       });
     } catch (error) {
       
     }
  }

  



  

  render() {

    let divStyle = {
        padding:0
    };

    return (
        <div className="container-fluid" style={divStyle}>
          <div className="row-fluid">
              <LeftSideBar />
              
              {/*Title of selected booktypeslist*/}
              <div className="col-sm-9">
                    <div className="row-fluid">
                        <h2 className="selection-title">Featured Textbooks</h2>
                    </div>
              
              
                  {/*Book Filters*/}
                  <div className="row-fluid border-bottom-grey" >
                            <div className="container-fluid">
                              <Filter filters={categoryFilter} changebook={this.changeBook}/>
                              <Filter filters={viewedFilter} changebook={this.changeBook}/>
                              <Filter filters={recentRelevance} changebook={this.changeBook} dropdownID="sort-date-filter" />
                            </div>
                  </div>

                  {/* Props here are used to sort and filter the books */}
                  <BookList books={this.state.bookslist} open={this.showOverlay} category={this.state.category?this.state.category:1} views={this.state.views?this.state.views:""} recent={this.state.recent?this.state.recent:""} />
                  
              </div>
          </div>
          {this.state.open && <BookOverlay close={this.showOverlay} book={this.state.overlayBook}></BookOverlay>}
        </div>
        
      
    );
  }
}

export default Main;
