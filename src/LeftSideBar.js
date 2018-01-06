import React from 'react';



const bookTypesLink = [
    {id:1,bookType:"New Textbooks"},
    {id:2,bookType:"Featured Textbooks"},
    {id:3,bookType:"Best Sellers"},
];

const bookCategories = [
    {id:1,bookCategory:"Physics"},
    {id:2,bookCategory:"History"},
    {id:3,bookCategory:"Marketing"},
    {id:4,bookCategory:"Mathematics"},
];

const colors = ['#f1c40f','#e67e22','#e74c3c','#2980b9'];
let counter = 0;
const LeftSideBar = () =>  (
 
        
    <div className="col-sm-3">
                    <ul id="book-types-list">
                        {bookTypesLink.map( (bookType) => {
                            return (
                                <li key={bookType.id}>
                                    <a href="/" className="book-types-link">{bookType.bookType}</a>
                                </li>
                            );
                        }
                        )}
                    </ul>
                    <ul className="book-categories-list">
                        <p>Book Categories</p>
                        <ul className="book-categories">
                        {bookCategories.map( (bookCategory) => {
                            counter++;
                            let color = colors[counter-1];
                            
                            return (
                                <li key={bookCategory.id}>
                                    <a href="/"><i className="fa fa-eercast" aria-hidden="true" style={{color:color}}></i>{bookCategory.bookCategory}</a>
                                </li>
                            );
                        }
                        )}
                        </ul>
                    </ul>
    </div>
        
);
 

export default LeftSideBar;
