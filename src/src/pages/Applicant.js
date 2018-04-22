import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import $ from 'jquery';

import '../css/applicant.css';
import phoneImg from '../design/phoneCase.png';
import qrImg from '../design/qr.png';
import scanerImg from '../design/scaner.png';
import logoImg from '../design/logo2.png';

class Applicant extends Component {

    displayContent() {
        if(true) {
            return(
                <div className="row">
                    <div className="col s1 m1" />
                    <div className="col s10 m10">
                        <img src={scanerImg} className="phone-qr-img" />
                        <div className="applicant-card">Request Token</div>
                    </div>
                    <div className="col s1 m1" />
                </div>
            )
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s4 m4" />
                    <div className="col s4 m4">
                        <img src={phoneImg} className="phone-case-section" />
                        <div className="row">
                            <div className="col s1 m1" />
                            <div className="col s10 m10">
                                <div className="phone-login-section">
                                    <div className="row">

                                        <div className="col s3 m3">
                                            <img src={logoImg} className="phone-icon-logo" />
                                        </div>
                                        <div className="col s9 m9">
                                            <div className="phone-main-text">Source</div>
                                        </div>

                                        <div className="col s12 m12">
                                            <div className="phone-qr-section">
                                                {this.displayContent()}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col s1 m1" />
                        </div>
                    </div>
                    <div className="col s4 m4" />
                </div>
            </div>
        );
    }
};
  
export default Applicant;
