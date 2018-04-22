import React, { Component } from 'react';
import $ from 'jquery';
import { ToastContainer, toast } from 'react-toastify';

import '../css/lender.css';
import logoImg from '../design/logo.png';

import Web3 from 'web3';
let contractAbi = require("../../build/contracts/SOURCE.json");

class Lender extends Component {

  constructor(props) {
    super(props);
    
    this.connectWeb3 = this.connectWeb3.bind(this);
    this.makeToken = this.makeToken.bind(this);
    this.state = {
      web3: new Web3(new Web3(window.web3.currentProvider)),
      tokenContract: this.connectWeb3()
    };
  }

  connectWeb3(){
    let web3 = new Web3(new Web3(window.web3.currentProvider));
    let contractAddress = "0x345cA3e014Aaf5dcA488057592ee47305D9B3e10"
    const contract = new web3.eth.Contract([{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_RepId","type":"uint256"}],"name":"expireReputation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_RepId","type":"uint256"}],"name":"getReputationWithId","outputs":[{"name":"_creationTime","type":"uint64"},{"name":"_healthScore","type":"uint32"},{"name":"_trustScore","type":"uint32"},{"name":"_patienceScore","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_healthScore","type":"uint32"},{"name":"_trustScore","type":"uint32"},{"name":"_patienceScore","type":"uint32"}],"name":"setReputation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"getReputionIdWithAddress","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_from","type":"address"},{"indexed":false,"name":"_to","type":"address"},{"indexed":false,"name":"_RepId","type":"uint256"}],"name":"Transfer","type":"event"}],contractAddress);
    return contract;
    
  }
  componentDidMount() {
    $('html,body').animate({ scrollTop: 0 }, 'slow');
  }
  
  makeToken() {
      console.log(this.state.tokenContract);
      console.log(this.state.tokenContract.options.address);
      let fromAddress = "0x627306090abaB3A6e1400e9345bC60c78a8BEf57"
      this.state.tokenContract.methods.name().call();
      this.state.tokenContract.methods.setReputation("0xf17f52151EbEF6C7334FAD080c5704D77216b732",1,2,3).send({from: fromAddress,gas: 1000000})
        .on('receipt', function(receipt){
          console.log(receipt);
        });

      // this.state.tokenContract.setReputation.call("0xf17f52151EbEF6C7334FAD080c5704D77216b732", 1,1,1, (result) => {
      //   console.log(result);
      // })
      setTimeout(() => {
        let msg = 'Success! ERC 721 Token Minted!';
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
      }, 10000)
  }

    render() {
        return (
          <div className="grant-area-bg">
            <ToastContainer autoClose={10000} />

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