import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'


const NavTab = styled.a`
    color:white;
`;

const Title = styled.h3`
    color:white;
`;

const Description = styled.p`
    color:white;
`;


class UserSelling extends Component {

    constructor (props){
        super(props);
        
        
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeInput = this.handleChangeInput.bind(this);
      }

      state = {
          categories:[],
          tags:[],
          tag:'',
      }

      handleChange(tags){
          this.setState({
              tags:tags
          })
      }

      handleChangeInput(tag){
          this.setState({
              tag:tag
          })
      }

      async componentDidMount(){
            const response = await fetch('http://localhost/api/categories/read.php');
            const categories = await response.json();

            this.setState({
               categories:categories.records 
            });
      }

    


    render() {
        const { categories } = this.state;
        return(
            <div className="container-fluid">
               <div className="row">
               <ul className="nav nav-tabs">
                    <li className="active"><NavTab data-toggle="tab" href="#home">Step 1 of 2: Book Details</NavTab></li>
                    <li><NavTab data-toggle="tab" href="#menu1">Step 2 of 2: Confirm</NavTab></li>
                </ul>

                <form id="book-form" method="POST" action="http://localhost/api/book/create.php" encType='multipart/form-data'>
                <div className="tab-content">
                    <div id="home" className="tab-pane fade in active">
                    <Title>Step 1 of 2: Book Details</Title>
                    <Description>Please provide all the relevant information in regards to the Book(s) you wish to sell</Description>
                    
                        {/* Book Name */}
                        <div className="form-group col-sm-6">
                            <label>Textbook Name</label>
                            <input type="text" className="form-control" name="name"/>
                        </div>
                        <div className="form-group col-sm-6">
                            <label>Textbook Description</label>
                            <textarea className="form-control" name="description" cols="50" rows="4"></textarea>
                        </div>
                        <div className="form-group col-sm-4">
                            <label>Book Author</label>
                            <input type="text" className="form-control" name="book_author"/>
                        </div>
                        <div className="form-group col-sm-4">
                            <label>Year of Publication</label>
                            <input type="text" className="form-control" name="published_year"/>
                        </div>
                        <div className="form-group col-sm-4">
                            <label>Publisher</label>
                            <input type="text" className="form-control" name="publisher"/>
                        </div>
                        <div className="form-group col-sm-3">
                            <label>Book ISBN</label>
                            <input type="text" className="form-control" name="book_isbn"/>
                        </div>
                        <div className="form-group col-sm-3">
                            <label>Category</label>
                            <select name="category" className="form-control">
                                {categories.map((category) => {
                                    return (<option key={category.id} value={category.id}>{category.name}</option>);
                                })}
                            </select>
                        </div>
                        <div className="form-group col-sm-6">
                            <label>Tags</label>
                            <TagsInput name="tags" 
                                value={this.state.tags} onChange={this.handleChange}
                                inputValue={this.state.tag}
                                onChangeInput={this.handleChangeInput}
                            
                            />
                        </div>
                        <div className="form-group col-sm-6 col-sm-offset-3">
                            <label>Upload Images</label>
                            <input type="file" multiple className="form-control"/>
                        </div>
                        
                    
                    </div>
                        <div id="menu1" className="tab-pane fade">
                        <Title>Step 2 of 2: Confirm</Title>
                        <Description>Please confirm that the following is correct</Description>
                        <div className="col-sm-12">
                                <button type="submit">Submit Book Details</button>
                        </div>
                        </div>
                </div>
                </form>
                </div>
            </div>
        );
    }
}


 

export default UserSelling;




