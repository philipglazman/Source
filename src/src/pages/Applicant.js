import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import $ from 'jquery';

import '../css/applicant.css';
import phoneImg from '../design/phoneCase.png';
import logoImg from '../design/logo2.png';
import qrImg from '../design/qr.png';
import scanerImg from '../design/scaner.png';

class Applicant extends Component {

    constructor(props) {
        super(props);
        this.state = {isShowing: false};
    }

    changeImg() {
        this.setState({isShowing: true});
    }
    displayRequest() {
        let msg = 'Success! Token Requested!';
        // let txMsg = "tx:" + inputObj.tx ;
        let txMsg = "0x8f0483125fcb9aaaefa9209d8e9d7b9c8b9fb90f";
        // let hash = "blockHash:" + inputObj.receipt.blockHash;
        let hash = "blockHash: 0x36e49d21956c79c3d...";
        toast.success(msg, {
            position: toast.POSITION.TOP_CENTER
        });
        toast.warn(hash, {
            position: toast.POSITION.TOP_CENTER
        });
    }
    displayContent() {
        if(this.state.isShowing == false) {
            return(
                <div className="row">
                    <div className="col s1 m1" />
                    <div className="col s10 m10">
                        <img src={scanerImg} className="phone-qr-img" onClick={() => this.changeImg()} />
                        <div className="applicant-card">Request Token</div>
                    </div>
                    <div className="col s1 m1" />
                </div>
            )
        }else if(this.state.isShowing == true){
            return(
                <div className="row">
                    <div className="col s1 m1" />
                    <div className="col s10 m10">
                        <img src={qrImg} className="phone-qr-img" />
                        <div className="applicant-card" onClick={() => {this.displayRequest()}}>Request Token</div>
                    </div>
                    <div className="col s1 m1" />
                </div>
            )
        }
    }

    render() {
        return (
            <div className="container">
                <ToastContainer autoClose={10000} />

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
