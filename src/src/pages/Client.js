import React, { Component } from 'react';
import $ from 'jquery';

import '../css/client.css';

import logo3 from '../design/logo3.png';
import peopleStage from '../design/ppl_stage.png';

class Client extends Component {

    displayData() {
        $('.client-data-section').css({"visibility":"visible"});
        $('.client-data-section').addClass("moveFromBottomFade delay200");
    }

    render() {
        return (
            <div className="feat-area-bg">
            <div className="row">
                <div className="col s4 m4" />
                <div className="col s4 m4">
                    <div className="card card-panel feat-header-section moveFromTopFade">
                        <div className="feat-header-body">
                        <div className="row">
                            <div className="col s2 m2" />
                            <div className="col s2 m2">
                                <img src={logo3} className="feat-header-img" />
                            </div>
                            <div className="col s6 m6">
                                <div className="feat-header-text">SOURCE Search</div>
                            </div>
                            <div className="col s2 m2" />
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col s4 m4" />
            </div>
            
            <div className="row">
                <div className="col s3 m3" />
                <form className="col s6 m6">
                    <div>ETH Account</div>
                    <div className="card pink lighten-3">
                    <div className="row">
                        <div className="input-field col s12 m12">
                            <input defaultValue="0x4C9d5672Ae33522240532206Ab45508116daF263" id="icon_prefix" type="text" className="validate" />
                        </div>
                    </div>
                </div>
                </form>
                <div className="col s3 m3">
                    <a className="waves-effect waves-light btn client-search-btn"
                    onClick={() => {this.displayData()}}>Search</a>
                </div>
            </div>

            <div className="row">
                <div className="col s3 m3" />
                <div className="client-data-section">
                    <div className="col s6 m6">
                        <table className="card teal lighten-3">
                            <thead>
                            <tr>
                                <th>Token Count</th>
                                <th>Reputation Score</th>
                                <th>Data Analysed</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>3,193</td>
                                <td>9.371</td>
                                <td>85%</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col s3 m3" />
            </div>

            <div className="feat-bot-pic-block">
                <img src={peopleStage} className="feat-bot-pic-img" /> 
            </div>
          </div>
        )
    }
}

export default Client;