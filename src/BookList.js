import React, { Component } from 'react';
import styled from 'styled-components';
import Book from './Book';

// var books = [
//     {
//         id:1,
//         name:"Calculus Textbook",
//         published_year: "2017",
//         publisher:"Pearson",
//         featured:false,
//         imagepath:'./images/calcbook.jpg',
//         views:3230,
//         upload_date:"2017-12-11",
//         category:"mathematics",
//     },
//     {
//         id:2,
//         name:"Marketing Textbook 101",
//         published_year: "2017",
//         publisher:"University of Toronto",
//         featured:false,
//         imagepath:'./images/marketing.png',
//         views:650,
//         upload_date:"2017-12-02",
//         category:"marketing",
//     },
//     {
//         id:3,
//         name:"History Textbook",
//         published_year: "2017",
//         publisher:"University of Toronto",
//         featured:false,
//         imagepath:'./images/textbook.jpg',
//         views:200,
//         upload_date:"2017-12-01",
//         category:"history",
//     },
//     {
//         id:4,
//         name:"Physics Textbook",
//         published_year: "2017",
//         publisher:"University of Toronto",
//         featured:false,
//         imagepath:'./images/physics.jpg',
//         views:500,
//         upload_date:"2017-11-30",
//         category:"physics",
//     },
//     {
//         id:5,
//         name:"Marketing Textbook 201",
//         published_year: "2017",
//         publisher:"University of Toronto",
//         featured:false,
//         imagepath:'./images/marketing.png',
//         views:4000,
//         upload_date:"2017-12-26",
//         category:"marketing",
//     },
// ];

class BookList extends Component {

    constructor (props){
        super(props);
        
        
        this.sortBooks = this.sortBooks.bind(this);
        this.sortByViews = this.sortByViews.bind(this);
      }

    state = {
        selected:[],
        currentFilter:{},
        showDropdown:false,
        dropdownID:"",
        currentCategory:"",
    }

    componentDidMount() {

        try {
            this.setState({
                selected:this.props.filters,
                showDropdown:false,
                dropdownID:this.props.dropdownID,
                currentCategory: this.props.category, //If a category exist filter by it
            });
        }catch(e){
            console.log(e);
        }
    }

        // Function : sortBooks
        // Description: Will sort books by most recent
        // Parameters:books - list of books
        sortBooks(books){
            books.sort(function(a,b){
                let dateA = new Date(a.upload_date);
                let dateB = new Date(b.upload_date);
                if(dateA < dateB) return 1;
                if(dateA > dateB) return -1;
                
                return 0;
            });
        }
        // Function : sortByViews
        // Description: Will sort books by views
        // Parameters:books - list of books,type - sort by least to greatest or vice-versa
        sortByViews(books,type){
            if(type === 'Least Viewed'){
                books.sort(function(a,b){
                    if(a.views > b.views) return 1;
                    if(a.views < b.views) return -1;
                    
                    return 0;
                });
            }else{
                books.sort(function(a,b){
                    if(a.views < b.views) return 1;
                    if(a.views > b.views) return -1;
                    
                    return 0;
                });
            }
        }
     
    

    
    

    render(){

        const {books} = this.props;

        if(this.props.recent != ""){//Sort the books by most recent
            this.sortBooks(books);
        }

        if(this.props.views != ""){//Sort by views
            this.sortByViews(books,this.props.views);
        }

        let divStyle= {"textAlign":"center"};
        return(
            <div className="row-fluid" style={divStyle}>
                <div className="loader"></div>
                <div className="container-fluid">
                {books.map((book) => {
                        if(this.props.category == 1 || this.props.category == ""){//return all categories
                            return (<Book key={book.id} book={book} open={this.props.open}/>);
                        }
                        else if(book.category ==  this.props.category) {//If category filter is used
                            return (<Book key={book.id} book={book} open={this.props.open}/>);
                        }

                    })}
                </div>
            </div>
        );
    }
}


 

export default BookList;
