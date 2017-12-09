import React, { Component } from 'react';
import cit from './photos/cit-01.png'
import logo from './logo.svg';
import kung from './photos/kung.png'
import vivi from './photos/vivi.jpg'
import starbucks from './photos/starbucks.png'
import denden from './photos/denden.png'
import durks from './photos/durks.jpeg'
import kabob from './photos/kabob.png'
import bajas from './photos/bajas.jpg'
import ben from './photos/ben.png'
import tal from './photos/tallulahs.jpeg'
import ja from './photos/ja.webp'
import flat from './photos/flat.jpg'
import per from './photos/per.jpg'
import duck from './photos/duck.jpg'
import yans from './photos/yans.png'
import './App.css';
import FilteredList from './FilteredList';

const restaurants = [
  {name: "Kung Fu Tea", image: kung, type: "Cafe", price: "$", distance: 0.05, address: "108 Waterman St."},
  {name: "Den Den Fried Chicken", image: denden, type: "Asian", price: "$$", distance: 0.1, address: "182 Angell St."},
  {name: "Durk's BBQ", image: durks, type: "American", price: "$$", distance: 0.2, address: "275 Thayer St."},
  {name: "Kabob and Curry", image: kabob, type: "Asian", price: "$", distance: 0.2, address: "261 Thayer St."},
  {name: "Duck and Bunny", image: duck, type: "American", price: "$$", distance: 0.7, address: "312 Wickenden St."},
  {name: "Bajas", image: bajas, type: "Tex-Mex", price: "$", distance: 0.2, address: "273 Thayer St."},
  {name: "Ben and Jerry's", image: ben, type: "Desserts", price: "$", distance: 0.1, address: "224 Thayer St."},
  {name: "Tallulah's Taqueria", image: tal, type: "Tex-Mex", price: "$$", distance: 0.8, address: "146 Ives St."},
  {name: "Vivi Bubble Tea", image: vivi, type: "Cafe", price: "$", distance: 0.05, address: "224 Thayer St."},
  {name: "Jahunger", image: ja, type: "Asian", price: "$$", distance: 0.7, address: "333 Wickenden St."},
  {name: "Flatbread", image: flat, type: "American", price: "$$", distance: 0.3, address: "161 Cushing St."},
  {name: "Persimmon", image: per, type: "American", price: "$$$", distance: 0.5, address: "99 Hope St."},
  {name: "Starbucks", image: starbucks, type: "Cafe", price: "$", distance: 0.05, address: "218 Thayer St."},
  {name: "Yan's", image: yans, type: "Asian", price: "$", distance: 0.2, address: "83 Benevolent St."},
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={cit} className="header-image" alt="cit" style={{paddingRight: '0px', marginTop: '20px'}} />
          <h1 className="App-title" style={{fontFamily: 'verdana'}}>HUNGR</h1>
        </header>
        <FilteredList items = {restaurants} />
      </div>
    );
  }
}

export default App;
