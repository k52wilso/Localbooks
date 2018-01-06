import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './App.css';


const Panel = styled.div`
    width:100%;
    background-color:#595959;
    height:auto;
    border-radius:5px;
    margin:15px 0;

    h2,h3 {
        color:#fff;
        margin:15px 0;
    }

    {$Panel}:first-child{
        padding:5px 0;
    }
`;

const PanelTitle = styled.h1`
    color:#fff;
    text-align:left;
    margin:20px 30px;
`;

const PanelDescription = styled.p`
    color:#fff;
    text-align:left;  
    margin:20px 30px;
    font-size:16px;  
`;

const SettingsList = styled.ul`
    list-style:none;
    width:100%;
    height:auto;
    margin:0;
    padding:0;

    li:last-child{
        border:none;
    }
`;

const ListItem = styled.li`
    width: 100%;
    height: 50px;
    padding: 10px;
    border-bottom:1px solid #212020;

    {$ListItem}:hover{
        cursor:pointer;
    }

    p {
        color:#fff;
        text-align:left;
        margin:0;
        font-size:20px;

        i {
            color:#b1aeae;
            float:right;
            margin-top:5px;
        }
    }
`;

// CSS for all form-groups on page
const FormDiv = styled.div`
    
    label {
        float:left;
        font-size:16px;
    }

    input,select,textarea{
        margin-bottom:10px;
    }
`;

const SectionTitle = styled.h4`
    color:white;
    text-align:left;
    margin-left:100px;
`;


class UserSettings extends Component {

    constructor (props){
        super(props);
        
        
        this.changePanel = this.changePanel.bind(this);
      }

    state = {
        // The panels on this Settings Page
        panels:[
            "Account",
            "Security",
            "Mobile",
            "Email Notifications",
            "Profile",
            "Help",
        ],
        currentPanel:"",
    };

    componentDidMount() {
        this.setState({
            currentPanel:"Account"
        })
    }

     // Function : changePanel
    // Description: Will change the Panel being displayed
    // Parameters: panel - the new panel, e- the event
    changePanel(panel,e){
        this.setState({
            currentPanel:panel
        })
    }
    


    render() {
        const {currentPanel} = this.state;
        return(
            <div className="container-fluid">
               <div className="row">

                    {/* Settings List */}
                    <div className="col-sm-3">
                        {/* Settings List Header Panel */}
                        <Panel>
                            <h2>Kyle Wilson-McCormack</h2>
                            <h3>Settings Page</h3>
                        </Panel>
                        {/* Settings List Panel */}
                        <Panel>
                            <SettingsList>
                                {this.state.panels.map( (panel) => {
                                    return (<ListItem key={panel} className="active" onClick={this.changePanel.bind(this,panel)}>
                                    <p>{panel}<i className="fa fa-chevron-right" aria-hidden="true"></i></p>
                                    </ListItem>)
                                } )}
                                
                                
                            </SettingsList>
                        </Panel>
                    </div>

                    {/* Settings Panel */}
                    <div className="col-sm-9">

                        {/* Account Panel View */}
                        {currentPanel == "Account" && <Panel>
                            <div className="row">
                                <PanelTitle>Account</PanelTitle>
                                <PanelDescription>Change your basic settings and language</PanelDescription>
                                
                                <div className="container-fluid">
                                    <FormDiv className="form-group col-sm-6 col-sm-offset-2">
                                        <label>Name</label>
                                        <input type="text" name="name" className="form-control"/>
                                    </FormDiv>
                                    <FormDiv className="form-group col-sm-6 col-sm-offset-2">
                                        <label>Email</label>
                                        <input type="email" name="email" className="form-control"/>
                                    </FormDiv>
                                    <FormDiv className="form-group col-sm-6 col-sm-offset-2">
                                        <label>Password</label>
                                        <input type="password" name="password" className="form-control"/>
                                    </FormDiv>
                                    <FormDiv className="form-group col-sm-6 col-sm-offset-2">
                                        <label>Language</label>
                                        <select className="form-control" name="language">
                                            <option value="english">English</option>
                                            <option value="french">Francais</option>
                                        </select>
                                    </FormDiv>
                                    <FormDiv className="form-group col-sm-6 col-sm-offset-2">
                                        <label>Country</label>
                                        <select className="form-control" name="language">
                                            <option value="CAN">Canada</option>
                                            <option value="US">United States</option>
                                        </select>
                                    </FormDiv>
                                    <div className="col-sm-6 col-sm-offset-2">
                                        <button type="button" className="btn btn-success">Save Changes</button>
                                    </div>
                                </div>
                            </div>
                        </Panel>}
                        {/* Security Panel View */}
                        {currentPanel == "Security" && <Panel>
                            <div className="row">
                                <PanelTitle>Security</PanelTitle>
                                <PanelDescription>Change your Security Settings</PanelDescription>
                                <div className="container-fluid">
                                    <div className="row">
                                    <SectionTitle>Login Details</SectionTitle>
                                    <FormDiv className="form-group col-sm-6 col-sm-offset-2">
                                        <label>New Password</label>
                                        <input type="password" name="password" className="form-control"/>
                                    </FormDiv>
                                    <FormDiv className="form-group col-sm-6 col-sm-offset-2">
                                        <label>Confirm Password</label>
                                        <input type="password" name="confirmpassword" className="form-control"/>
                                    </FormDiv>
                                    </div>
                                    <div className="row">
                                        <SectionTitle>Extra Security</SectionTitle>
                                        <FormDiv className="form-group col-sm-6 col-sm-offset-2">
                                            <label>Be Notified of unrecognized logins?</label>
                                            <label className="switch">
                                            <input type="checkbox"/>
                                            <span className="slider round"></span>
                                            </label>
                                        </FormDiv>
                                    </div>
                                    <div className="row">
                                        <SectionTitle>Where You're Logged In</SectionTitle>
                                        
                                    </div>
                                    <div className="col-sm-6 col-sm-offset-2">
                                        <button type="button" className="btn btn-success">Save Changes</button>
                                    </div>
                                </div>
                                
                            </div>
                        </Panel>}
                        {/* Mobile Panel View */}
                        {currentPanel == "Mobile" && <Panel>
                            <div className="row">
                                <PanelTitle>Mobile</PanelTitle>
                                <PanelDescription>Change your Mobile Settings</PanelDescription>
                            </div>
                        </Panel>}
                        {/* Email Notifications Panel View */}
                        {currentPanel == "Email Notifications" && <Panel>
                            <div className="row">
                                <PanelTitle>Email Notifications</PanelTitle>
                                <PanelDescription>Change your email/notifications</PanelDescription>
                            </div>
                        </Panel>}
                        {/* Profile Panel View */}
                        {currentPanel == "Profile" && <Panel>
                            <div className="row">
                                <PanelTitle>Profile</PanelTitle>
                                <PanelDescription>Change your public profile settings</PanelDescription>
                            </div>
                        </Panel>}
                        {/* Help Panel View */}
                        {currentPanel == "Help" && <Panel>
                            <div className="row">
                                <PanelTitle>Help</PanelTitle>
                                <PanelDescription>Read the following for suggestions and/or help.</PanelDescription>
                            </div>
                        </Panel>}
                        
                    </div>
               </div>
            </div>
        );
    }
}


 

export default UserSettings;




