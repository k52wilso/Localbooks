import React, { Component } from 'react';




class Filter extends Component {

    constructor (props){
        super(props);
        
        this.showHideDropdown = this.showHideDropdown.bind(this);
      
      }

    state = {
        selected:[],
        currentFilter:{},
        showDropdown:false,
        dropdownID:"",
        changebook: () => {

        },
    }

    componentDidMount() {
        try {
            this.setState({
                selected:this.props.filters.list,
                currentFilter:this.props.filters.list[0],
                showDropdown:false,
                dropdownID:this.props.dropdownID,
                changebook:this.props.changebook,    
            });

            
        }catch(e){
            console.log(e);
        }
    }
     
    showHideDropdown(e) {
        this.setState({
            showDropdown:!this.state.showDropdown
        });       
    }

     // Function : changeFitler
    // Description: Will update the value of the dropdown filter
    // Parameters: e - the event, listitem - the filter object, callback - function
    changeFilter(e,listitem,callback){
        this.setState({
            currentFilter:listitem,
            showDropdown:!this.state.showDropdown
        });
        
        //e.g. ('category','1')
         this.state.changebook(this.props.filters.type,listitem.id);

       

        // Show loader
        // let loader = document.getElementsByClassName('loader')[0];
        // loader.style.display = "block";
        // setTimeout(function(){
        //     loader.style.display = "none";
        // },800);
    }


    render() {
        return(
            <ul className={`filter-dropdown-list ${this.state.dropdownID}`}>
                <li className="filter-dropdown">
                    <ul>
                        <li key={this.state.currentFilter.id} onClick={this.showHideDropdown}>
                            {this.state.currentFilter.listItem}

                            {this.state.showDropdown ? (
                                <i className="fa fa-chevron-up" aria-hidden="true"></i>
                            ):(
                                <i className="fa fa-chevron-down" aria-hidden="true"></i>
                            )}
                            
                        </li>
                    </ul>
                    {this.state.showDropdown && (
                        <ul className="dropdown">
                            {this.state.selected.map((listitem) => {
                                if(this.state.currentFilter.id != listitem.id){
                                    return(
                                        <li key={listitem.id} onClick={(e) => {this.changeFilter(e,listitem,this.props.change)}}>
                                            {listitem.listItem}
                                        </li>
                                    );
                                }
                            })}
                         </ul> 
                    )}
                    
                </li>
            </ul>
        );
    }
}


 

export default Filter;
