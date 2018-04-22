import React, { Component } from 'react';
import $ from 'jquery';
import { ToastContainer, toast } from 'react-toastify';

import '../css/lender.css';
import logoImg from '../design/logo.png';

import getWeb3 from './../utils/getWeb3'
let contractAbi = require("../../build/contracts/SOURCE.json");

class Lender extends Component {

  constructor(props) {
    super(props);
    this.state = {
        web3: null,
        tokenContract: null
    };
    
    getWeb3.then(results => {
      this.setState({
        web3: results.web3
      });
      
      console.log(this.state.web3);
      
      if(this.state.web3) {
        console.log("import contract")
        var token = this.state.web3.eth.contract(contractAbi).at("0x8f0483125fcb9aaaefa9209d8e9d7b9c8b9fb90f");
        console.log(token);
        this.setState({tokenContract: token});
      }
    
    }).catch(() => {
        console.log('Error finding web3.')
    });
  }

  componentDidMount() {
    $('html,body').animate({ scrollTop: 0 }, 'slow');
  }
  makeToken() {
      this.state.tokenContract.setReputation.call("0xf17f52151EbEF6C7334FAD080c5704D77216b732", 1,1,1, (result) => {
        console.log(result);
      })
  }

    render() {
        return (
          <div className="grant-area-bg">
            {/* <ToastContainer autoClose={100000} /> */}

            {/* grant header */}
            <div className="grant-header-block moveFromTopFade">
              <div className="row">
                <div className="col s3 m3" />
                <div className="col s6 m6">
                  <div className="grant-header-card card sender-area-bg">
                    <div className="grant-header-top" />
                    <div className="row">
                      <div className="col s2 m2">
                        <div className="circle-teal-one" />
                      </div>
                      <div className="col s1 1">
                        <img src={logoImg} className="grant-header-logo3" />
                      </div>
                      <div className="col s1 m1" />
                      <div className="col s7 m7">
                        <div className="grant-header-text">ERC 721 Token Creation Page</div>
                      </div>
                      <div className="col s1 m1" />
                    </div>
                  </div>
                </div>
                <div className="col s3 m3" />
              </div>
            </div>
    
            {/* grant body */}
            <div className="row">
              <div className="col s1 m1" />
              <div className="col s6 m6">
    
                <div className="grant-body-card card moveFromBottomFade delay200 z-depth-2">
                <div className="row grant-body-card-first">
                    <div className="grant-header-top" />
                    <div className="col s1 m1" />
                    <div className="col s10 m10">
                      <div className="grant-body-form">
                        <div className="input-field">
                          <label className="active" htmlFor="grant-name">Endorser Account ID:</label>
                          <input defaultValue="0x8Ef221474A213F5CAf5fAf8F28126F31692F6Cee" id="grant-name" type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="col s1 m1" />
                  </div>
                  <div className="row grant-body-card-second">
                    <div className="col s1 m1">
                        <form id='captureMedia' action="#" onSubmit={()=>{}}>
                            <div className="file-field input-field">
                            </div>
                        </form>
                    </div>
                    <div className="col s10 m10">
                      <div className="grant-body-form">
                        <div className="input-field">
                          <label className="active" htmlFor="ipfs-hash">Applicant Account ID:</label>
                          <input value="0xF61b85A19eA91446eE14d18ace0BfEd83eE59155" disabled={true} id="ipfs-hash" type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="col s1 m1" />
                  </div>
                  <div className="row grant-body-card-third">
                    <div className="col s1 m1" />
                    <div className="col s10 m10">
                      <div className="grant-body-form">
                        <div className="input-field">
                          <label className="active" htmlFor="grant-topic">Health Score:</label>
                          <input defaultValue="" id="health-score" type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="col s1 m1" />
                  </div>
                  <div className="row grant-body-card-fourth">
                    <div className="col s1 m1" />
                    <div className="col s10 m10">
                      <div className="grant-body-form">
                        <div className="input-field">
                          <label className="active" htmlFor="amount-needed">Trust Score:</label>
                          <input defaultValue="" id="trust-score" type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="col s1 m1" />
                  </div>
                  <div className="row grant-body-card-fifth">
                    <div className="col s1 m1" />
                    <div className="col s10 m10">
                      <div className="grant-body-form">
                        <div className="input-field">
                          <label className="active" htmlFor="summary">Patience Score:</label>
                          <input defaultValue="" id="patience-score" type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="col s1 m1" />
                  </div>
                </div>
    
              </div>
    
              <div className="col s4 m4">
                
                <div className="grant-submit-card card moveFromBottomFade delay200 z-depth-1">
                  <div className="grant-submit-bar">
                    <div className="row">
                      <div className="col s2 m2" />
                      <div className="col s2 m2">
                        <i className="fa fa-cogs gear-icon"></i>
                      </div>
                      <div className="col s6 m6">
                        <div className="click-sumbit-text">Click Create when ready!</div>
                      </div>
                      <div className="col s2 m2" />
                    </div>
                  </div>
    
                  <div className="grant-submit-block">
                    <div className="circle-gold-one grant-submit-square" />
                    <a className="waves-effect waves-light btn" onClick={()=>{this.makeToken()}}>Create Reputation Token</a>
                  </div> 
    
                </div>
    
              </div>
              <div className="col s1 m1" />
            </div>
    
          </div>
        );
    }
};
 
export default Lender;