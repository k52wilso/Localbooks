import React, { Component } from 'react';
import styled from 'styled-components';
import Book from './Book';
import Overdrive from 'react-overdrive';

const books = [
    {
        id:1,
        name:"Calculus Textbook",
        published_year: "2017",
        publisher:"Pearson",
        featured:true,
        imagepath:'./images/calcbook.jpg'
    },
    {
        id:2,
        name:"Marketing Textbook",
        published_year: "2017",
        publisher:"University of Toronto",
        featured:true,
        imagepath:'./images/marketing.png'
    },
    {
        id:3,
        name:"History Textbook",
        published_year: "2017",
        publisher:"University of Toronto",
        featured:false,
        imagepath:'./images/textbook.jpg'
    },
    {
        id:4,
        name:"Physics Textbook",
        published_year: "2017",
        publisher:"University of Toronto",
        featured:false,
        imagepath:'./images/physics.jpg'
    },
    {
        id:5,
        name:"Marketing Textbook",
        published_year: "2017",
        publisher:"University of Toronto",
        featured:false,
        imagepath:'./images/marketing.png'
    },
];

class BookOverlay extends Component {

    constructor (props){
        super(props);
        
        
      
      }

    state = {
        selected:[],
        currentFilter:{},
        showDropdown:false,
        dropdownID:""
    }

    componentDidMount() {
        try {
            this.setState({
                selected:this.props.filters,
                currentFilter:this.props.filters[0],
                showDropdown:false,
                dropdownID:this.props.dropdownID    
            });
        }catch(e){
            console.log(e);
        }
    }
     
    

    


    render(){
        const { book } = this.props;
        return(
            <div className="overlay">
                <div className="overlay-image-div">
                    
                    <img className="overlay-image" src={book.imagepath} alt={this.props.book.name}/>
                    
                </div>
                <div className="details-tab">
                    <h2>{this.props.book.name}</h2>
                    <h3>{this.props.book.publisher}</h3>
                    <p><strong>Description:</strong>This is book goes into great detail about</p>

                    <button type="button">Contact Seller</button>
                    <button type="button">Add to Cart</button>
                    <button type="button">Save to Wishlist</button>
                <div className="overlay-close">
                    <i className="fa fa-times-circle" aria-hidden="true" onClick={this.props.close}></i>
                </div>
                </div>
            </div>
        );
    }
}


 

export default BookOverlay;
