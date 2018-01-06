import React, { Component } from 'react';
import styled from 'styled-components';
import Review from './Review';


const SellerName = styled.h2`
    color:#fff;
    text-align:center;
    margin:10px 30px;
    display:left;
`;

const SellerPhoto = styled.img`
    width:300px;
    height:300px;
    box-shadow:3px 3px 3px #755b5b;
    margin:20px;
`;

const Rating = styled.i`
    color:#f1c40f;
    font-size:20px;
    margin:5px;
`;

const ContactButton = styled.button`
    padding:15px 35px;
    border-radius:5px;
    margin:10px 0;
    margin-top:40px;
    min-width:175px;
    background-color:#16a085;
    border:none;
    color:white;
`;

const ReportButton = styled.button`
    padding:15px 35px;
    border-radius:5px;
    margin:10px 0;
    min-width:175px;
    background-color:#e74c3c;
    border:none;
    color:white;
`;

const CurrentBooksTitle = styled.h3`
    color:#fff;
    text-align:left;
    margin-left:60px;
`;

const CurrentBooks = styled.div`
    min-height:200px;
    border:2px solid #fff;
    border-radius:3px;
    width:90%;
    margin:20px 5%;
    padding:10px;
`;

const ReviewsTitle = styled.h3`
color:#fff;
text-align:left;
margin-left:60px;
`;

const Reviews = styled.div`
    min-height:200px;
    width:90%;
    margin:20px 5%;
    padding:10px;
`;

const AddComment = styled.span`
color:#c6c6c6;
font-size:16px;
    {$AddComment}:hover{
        color:#fff;
        cursor:pointer;
    }
`;


class SellerProfile extends Component {

    constructor (props){
        super(props);
        
        
      
      }

    


    render() {
        return(
            <div className="container-fluid">
                
                {/* Image and Profile info */}
                <div className="row">

                    {/* Seller Photo/Logo */}
                    <div className="col-sm-4">
                        <SellerName>Kyle Wilson-McCormack</SellerName>
                        <SellerPhoto src="../images/marketing.png" title="Seller Photo"/>

                        {/* Rating */}
                        <div className="row">
                        {Array.apply(null, Array(5)).map(function(item, i){                                        
                                return (
                                    <Rating  key={i} className="fa fa-star" aria-hidden="true"></Rating>
                                );                
                            }, this)}
                        </div>

                        {/* Buttons */}
                        <div className="row">
                            <ContactButton>Send Message</ContactButton>
                        </div>
                        <div className="row">
                            <ReportButton >Report</ReportButton>
                        </div>
                    </div>

                    {/* Seller Info */}
                    <div className="col-sm-8">
                        <div className="row">
                            <CurrentBooksTitle>Currently Selling</CurrentBooksTitle>
                            <CurrentBooks></CurrentBooks>
                        </div>
                        <div className="row">
                            <ReviewsTitle>Reviews <AddComment>+ Add Review</AddComment></ReviewsTitle>
                            <Reviews>
                                <Review />
                            </Reviews>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


 

export default SellerProfile;

// Styled Components for SellerProfile


