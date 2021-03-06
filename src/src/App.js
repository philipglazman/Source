import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import getWeb3 from './utils/getWeb3'

import Home from './pages/Home';
import Lender from './pages/Lender';
import Applicant from './pages/Applicant';
import Client from './pages/Client';

import './css/index.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      storageValue: 0,
      web3: null
    }
  }

  // console.log(this.props.match.url);
  routeRender() {
    switch (this.props.match.url) {
      case "/": return( <Route path="/" component={ Home } />);
      case "/sender": return( <Route path="/lender" component={ Lender } />);
      case "/applicant": return( <Route path="/applicant" component={ Applicant } />);
      case "/client": return( <Route path="/client" component={ Client } />);
      default: break;
    }
  }

  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.

    getWeb3
    .then(results => {
      this.setState({
        web3: results.web3
      })
        
    })
    .catch(() => {
      console.log('Error finding web3.')
    })
  }

  render() {
    return (
      <div className="">
        { this.routeRender() }
      </div>
    );
  }
}

export default App