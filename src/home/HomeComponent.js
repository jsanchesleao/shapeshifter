import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class HomeComponent extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/host">Host</Link>
        </div>
        <div>
          <Link to="/join">Join</Link>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
