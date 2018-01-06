import React, { Component } from 'react';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';



class Book extends Component {

    

    state = {
        book:{},
    }

    componentDidMount() {
        try {
            this.setState({
                book: this.props.book
            });
        }catch(e){
            console.log(e.which);
        }
    }
     
    
    onClick(e){
        let element = e.target.parentNode;
        
        let moreInfo = element.getElementsByClassName('more-info-div')[0];
        if(e.which === 2 || e.button === 2){
            let elements = document.getElementsByClassName('more-info-div');
            for(let i = 0 ; i < elements.length;i++){
                elements[i].style.display = "none";
            }
            moreInfo.style.display = "block";
        }else if(moreInfo){
            let element = e.target.parentNode;
            let moreInfo = element.getElementsByClassName('more-info-div')[0];
            moreInfo.style.display = "none";
        }
    }

    
    


    render(){
        const { book } = this.state; 
        return (
            
            <div className={!book.featured ? ("featured-book"):("mini-book")} onMouseDown={this.onClick.bind(this)}>
                <div className="views">
                    <span><i className="fa fa-eye" aria-hidden="true"></i> {book.views}</span>
                </div>
                 <img src={book.imagepath} alt={book.name}/>
                
                <div className={!book.featured ? ("featured-book-info-div"):("mini-book-info-div")}>
                    <h4>{book.name}</h4> 
                    <p>{book.publisher} | <span>{book.published_year}</span></p>
                    
                </div>
                <span className="tooltiptext"> Right Click Me!</span>
                <div className="more-info-div">
                    <ul>
                        <li><a href="#" onClick={this.props.open.bind(this,book)} >Details</a></li>                                        
                        
                        <li><a href="#">Share</a></li>
                    </ul>
                </div>
                
            </div>
           
        );
    }
}


 

export default Book;
