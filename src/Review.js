import React, { Component } from 'react';
import styled from 'styled-components';

const ReviewText = styled.p`
    color:#fff;
    text-align:left;
`;

const ReviewerName = styled.p`
    color:#fff;
    text-align:right;
`

const Date = styled.p`
    color:#fff;
    text-align:left;
    margin:5px;
`;

const Rating = styled.i`
    color:#f1c40f;
    font-size:20px;
    margin:5px;
    float:left;
`;




class Review extends Component {

    constructor (props){
        super(props);
        
        
      
      }

    


    render() {
        return(
            <div className="container-fluid">
                {/* Review Date and Rating */}
                <div className="row">
                    {Array.apply(null, Array(5)).map(function(item, i){                                        
                        return (
                            <Rating key={i} className="fa fa-star" aria-hidden="true"></Rating>
                        );                
                    }, this)}
                </div>
                <div className="row">
                    <Date>2017-12-16</Date>
                </div>

                {/* Review Text */}
                <div className="row">
                    <ReviewText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis magna nec consectetur pharetra. Fusce semper turpis et tellus porta mattis. In tincidunt
                        , orci nec iaculis porttitor, est ipsum suscipit nulla, nec aliquet augue nunc quis ex. Curabitur ut massa felis. </ReviewText>
                </div>

                {/* Reviewer */}
                <div className="row">
                    <ReviewerName>- Kyle Wilson</ReviewerName>
                </div>
                
            </div>
        );
    }
}


 

export default Review;
