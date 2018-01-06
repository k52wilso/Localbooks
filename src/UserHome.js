import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Title = styled.h2`
    color:#fff;
    text-align:left;
    font-size:20px;
    margin-left:60px;
`;

const ContentDiv = styled.div`
    min-height:70px;
    width:90%;
    margin:5%;
`;

const UserImage  = styled.img`
    width:200px;
    height:300px;
    margin:30px 0;
`;

const SubTitle = styled.h3`
    color:white;
`;

const SubSubTitle = styled.p`
    color:white;
`;

const ActionLink = styled(Link)`
    color:white;
    text-decoration:none;
    width:100%;
    display:block;
    margin:15px 0;    
`


class UserHome extends Component {

    constructor (props){
        super(props);
        
        
      
      }

    


    render() {
        return(
            <div className="container-fluid">
               <div className="row">

                    {/* Recommendations/Saved Searches*/}
                    <div className="col-sm-9">

                        {/* Recommendations */}
                        <div className="row">
                            <Title>Recommendations</Title>
                            <ContentDiv></ContentDiv>
                        </div>

                        {/* Searches */}
                        <div className="row">
                            <Title>Previous Searches</Title> 
                            <ContentDiv></ContentDiv>                           
                        </div>
                        <div className="row">
                            <Title>Buy/Sell Books</Title> 
                            <ContentDiv>
                                <Link to="/">
                                    <button type="button" className="btn btn-primary">Buy Books</button> 
                                </Link>
                                <Link to="/users/sell">   
                                    <button type="button" className="btn btn-success">Sell Books</button>
                                </Link>    
                            </ContentDiv>                           
                        </div>
                    </div>
                    {/* Profile Image and Settings*/}
                    <div className="col-sm-3">
                        <div className="row">
                            <UserImage src="../images/marketing.png" />
                        </div>
                        <div className="row">
                            <SubTitle>Kyle Wilson-McCormack</SubTitle>
                            <SubSubTitle>Member Since: 2017-12-16</SubSubTitle>
                        </div>
                        <div className="row">
                            <ActionLink to="/">
                                Account Settings
                            </ActionLink>
                            <ActionLink to="/">
                                Order History
                            </ActionLink>
                        </div>
                    </div>
               </div>
            </div>
        );
    }
}


 

export default UserHome;




