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
    $('html,body').animate({ scrollTop: 1000 }, 'slow');
  }

  render() {
    return (
      <div className="home-page">

        {/* splash img */}
        <div className="home-background-color">
            <div className="row">
                <div className="col s12 m12 home-splash-block">
                    <img src={splashImg} className="home-splash-img card moveFromTopFade" onClick={() => this.scrollDown()} />
                    <div className="row">
                        <div className="col s1 m1" />
                        <div className="col s10 m10">
                            <div className="home-title-main-text moveFromTopFade">
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
                <Link to="/lender">
                <div className="home-nav-card">
                    <div className="home-nav-box-top">Lenders Page</div>
                    <div className="home-page-rep-main-text">
                        <div className="row">
                            <div className="col s2 m2"><i className="home-page-icon fa fa-pencil-square" aria-hidden="true"></i></div>
                            <div className="col s10 m10">Lenders choose the metadata they deem most relevant to calculate the SOURCE score. A template is generated for the endorser to populate, an endorsement token is minted, and a QR code is transmitted to the endorser’s device</div>
                        </div>
                    </div>
                </div>
                </Link>
                <div className="home-link-bar" />
                
                <Link to="/applicant">
                <div className="home-end-card">
                    <div className="home-end-box-top">Applicant Page</div>
                    <div className="home-page-end-main-text">
                        <div className="row">
                            <div className="col s2 m2"><i className="home-end-page-icon fa fa-address-card" aria-hidden="true"></i></div>
                            <div className="col s10 m10">The Applicant scans the QR code on their device to request a token from the lender</div>
                        </div>
                    </div>
                </div>
                </Link>

                <div className="home-link-bar" />
                
                <Link to="/client">
                <div className="home-client-card">
                    <div className="home-client-box-top">Client Page</div>
                    <div className="home-page-client-main-text">
                        <div className="row">
                            <div className="col s2 m2"><i className="home-client-page-icon fa fa-file-text-o" aria-hidden="true"></i></div>
                            <div className="col s10 m10">A global database of SOURCE scores is created and stored publicly, enabling the generation of meaningful reports</div>
                        </div>
                    </div>
                </div>
                </Link>

            </div>
            <div className="col s1 m1" />
        </div>

      </div>
    );
  }
};

export default Home;