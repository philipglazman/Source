import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import $ from 'jquery';

import '../css/home.css';

import splashImg from '../design/splashImg.png';
import laptopImg from '../design/laptopImg.png';

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
                    <img src={splashImg} className="home-splash-img card moveFromTopFade" />
                    <div className="row">
                        <div className="col s1 m1" />
                        <div className="col s10 m10">
                            <div className="home-title-main-text moveFromTopFade delay300">
                            A distributed reputation platform
                            </div>
                        </div>
                        <div className="col s1 m1" />
                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col s1 m1" />
            <div className="col s10 m10">
                <div className="home-title-bot-text moveFromBottomFade delay100">
                Enabling financial risk management for the world’s unbanked
                </div>
            </div>
            <div className="col s1 m1" />
        </div>
        
        <div className="home-page-space" />

        <div className="row">
            <div className="col s6 m6">
                <div className="laptop-img-block">
                    <div className="laptop-text">What can source do for you?</div>
                    <img src={laptopImg} className="laptop-img" />
                </div>
            </div>
            <div className="col s5 m5">
                <div className="home-nav-card">
                    <div className="home-nav-box-top">Reputation Health Score</div>
                    <div className="home-page-rep-main-text">
                        <div className="row">
                            <div className="col s2 m2"><i className="home-page-icon fa fa-pencil-square" aria-hidden="true"></i></div>
                            <div className="col s10 m10">Ask endorser to judge health choices of individual</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col s1 m1" />
        </div>

      </div>
    );
  }
};

export default Home;