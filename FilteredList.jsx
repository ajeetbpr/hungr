import React, { Component } from 'react';
import {DropdownButton, ButtonToolbar, MenuItem} from 'react-bootstrap'
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      type: "All",
      price: "All",
      items: this.props.items,
      unsorted: this.props.items
    };
  }

  // function to set search state of FilteredList
  onSearch = (event) => {
    this.setState({search: event.target.value.trim().toLowerCase()});
  }

  // function to set type state of FilteredList
  onTypeFilter = (event) => {
    if (event == 1){
      this.setState({type: "All"});
    }
    if (event == 2){
      this.setState({type: "American"})
    }
    if (event == 3){
      this.setState({type: "Asian"});
    }
    if (event == 4){
      this.setState({type: "Cafe"});
    }
    if (event == 5){
      this.setState({type: "Desserts"});
    }
    if (event == 6){
      this.setState({type: "Tex-Mex"})
    }
  }

  // function to set price state of FilteredList
  onPriceFilter = (event) => {
    if (event == 1){
      this.setState({price: "All"});
    }
    if (event == 2){
      this.setState({price: "$"});
    }
    if (event == 3){
      this.setState({price: "$$"});
    }
    if (event == 4){
      this.setState({price: "$$$"});
    }
  }

  /* filters items by seeing if they match the current search, type, and price states */
  filterItem = (item) => {
    if (this.state.type == "All" && this.state.price == "All"){
      return item.name.toLowerCase().search(this.state.search) !== -1
    }
    else if(this.state.type == "All" && this.state.price != "All"){
      return item.name.toLowerCase().search(this.state.search) !== -1 && (item.price === this.state.price)
    }
    else if(this.state.type != "All" && this.state.price == "All"){
      return item.name.toLowerCase().search(this.state.search) !== -1 && item.type === this.state.type
    }
    else {
      return item.name.toLowerCase().search(this.state.search) !== -1 && item.type === this.state.type && (item.price === this.state.price)
    }
  }

  /* sorts results by distance from CIT */
  sortDistance = () => {
    /* checks to see if the list is already sorted. if not, it sorts it and updates
      the list. if it is sorted, it restores it to the original version */
    if (this.state.items === this.state.unsorted){
      var sorted = this.state.unsorted.slice();
      sorted.sort(function(a,b){
        if(a.distance < b.distance) return -1;
        if (a.distance > b.distance) return 1;
        return 0;
      })
      this.setState({items: sorted});
    }
    else {
      this.setState({items: this.state.unsorted});
    }
  }

  render(){
    return (
      <div className ="button-menu">
      <ButtonToolbar>
        <DropdownButton bsSize="small" id="dropdown-size-small" title={"Type"} onSelect = {this.onTypeFilter}>
              <MenuItem eventKey="1">All</MenuItem>
              <MenuItem eventKey="2">American</MenuItem>
              <MenuItem eventKey="3">Asian</MenuItem>
              <MenuItem eventKey="4">Cafe</MenuItem>
              <MenuItem eventKey="5">Desserts</MenuItem>
              <MenuItem eventKey="6">Tex-Mex</MenuItem>
        </DropdownButton>
        <DropdownButton bsSize="small" id="dropdown-size-small" title={"Price"} onSelect = {this.onPriceFilter}>
              <MenuItem eventKey="1">All</MenuItem>
              <MenuItem eventKey="2">$</MenuItem>
              <MenuItem eventKey="3">$$</MenuItem>
              <MenuItem eventKey="4">$$$</MenuItem>
        </DropdownButton>
        <input type = "text" placeholder = "Search" onChange = {this.onSearch} />
        <button className = "button" onClick={this.sortDistance}>Distance from CIT</button>
      </ButtonToolbar>
      <List items = {this.state.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;
