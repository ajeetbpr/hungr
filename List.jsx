import React, {Component} from 'react';
import logo from './logo.svg';

class List extends Component {
  renderList() {
    const items = this.props.items.map(item => {
      return <li key={item.name}>
          <div className='location-img'>
            <img src={item.image}/>
          </div>
          <div className='location-title'>
            <b>{item.name}</b>
            <br/>
            {item.address}
            <br/>
            Type: {item.type}
            <br/>
            Price: {item.price}
            <br/>
            Distance from CIT: {item.distance} miles
          </div>
        </li>
    });

    return items;
  }

  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}

export default List;
