import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import $ from 'jquery';

import '../css/home.css';

import splashImg from '../design/splashImg.png';

class Home extends Component {
  componentDidMount() {
    $('html,body').animate({ scrollTop: 0 }, 'slow');
  }
  scrollDown() {
    $('html,body').animate({ scrollTop: 650 }, 'slow');
  }

  render() {
    return (
      <div className="home-page">

        {/* splash img */}
        <div className="home-background-color">
            <div className="row">
                <div className="col s12 m12 home-splash-block">
                    <img src={splashImg} className="home-splash-img card moveFromTopFade delay100" />
                </div>
            </div>
        </div>

      </div>
    );
  }
};

export default Home;