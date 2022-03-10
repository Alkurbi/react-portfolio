import React, { Component } from 'react';
import { items } from './MenuItems';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="header">
        <div className="inner">
          <div className="logo">
            <h1>My<span>Portfolio</span></h1>
          </div>
          <ul className="navigation">
            {items.map((item, index) => {
              return (
                <a href={item.url}>
                  <li key={index}>
                    {item.titel}
                  </li></a>)
            })}

          </ul>
        </div>
      </div>
    )
  }
}
export default Navbar
