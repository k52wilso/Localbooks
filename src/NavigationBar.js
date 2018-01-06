import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components
const UserImage = styled.img`
    width:50px;
    height:50px;
    border-radius:50%;
    float:right;
    box-shadow:2px 2px 2px #fff,
               -2px 2px 2px #fff,                 
               2px -2px 2px #fff,                 
               -2px -2px 2px #fff;

    {$UserImage}:hover{
        cursor:pointer;
    }
`;

const UserDropdown = styled.div`
position:absolute;
width:200px;
height:120px;
bottom:-125px;
left:-150px;
z-index:10;
background-color:#fff;

a {
    display:block;
    color:black;
    text-decoration:none;
    margin:10px 0;
}

a:hover{
    text-decoration:none;
    cursor:pointer;
}

`;

const UserDiv = styled.div`
    position:relative;
    float:right;
`;

const ArrowUp = styled.div`
    position:absolute;
    top:-25px;
    right:0;
    width:0;
    height:0;
    border-left:25px solid transparent;
    border-right:25px solid transparent;
    border-bottom:25px solid #fff;
`;







class NavigationBar extends Component {
 
        
    constructor(props){
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    state = {
        showDropdown:false,
        showUserImage:this.props.showimage
    };

    // Show or Hide Dropdown
    onClick(){
        this.setState({
            showDropdown:!this.state.showDropdown
        })
    }


    render(){
        let {showDropdown} = this.state;
        return (
            <ul className="main-nav min-height">
            <li>
                {/* Logo */}
            <Link to="/">
                    <i className="fa fa-book logo-book" aria-hidden="true"></i>
                    <span className="logo-white lucida">Local TextBooks</span>
            </Link>
            </li>
            <li>
                {/* Search Bar */}
                <div className="searchbar-div">
                    <i className="fa fa-search magnify" aria-hidden="true" title="Night Mode"></i>
                    <input type="text" name="searchtext" placeholder="Search..." />
                </div>
                
            </li>
            <li id="user-navigation">

                {/* User Image */}
                {this.props.showimage?(<UserDiv onClick={this.onClick}>
                    <UserImage src="../images/marketing.png" alt="User Image" />
                    {showDropdown &&
                    <UserDropdown>
                        <ArrowUp></ArrowUp>
                        <Link to="/users/home">Home</Link>
                        <Link to="/users/settings">Account Settings</Link>
                        <Link to="/orders/history">Order History</Link>
                        <Link to="/" onClick={this.props.showimagefunction.bind(this)}>Logout</Link>
                    </UserDropdown>}
                </UserDiv>):""}

                {/* Login & Registration */}
                {!this.props.showimage && <div>
                    <Link to="/register" className="grey-button">
                        Register
                    </Link>
                    <Link to="/login" className="grey-button">
                        Login
                    </Link>
                </div>}
            </li>
        </ul>
        );
    }
        
}
 

export default NavigationBar;
