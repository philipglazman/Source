import React, { Component } from 'react';
import $ from 'jquery';

import '../css/client.css';

import logo3 from '../design/logo3.png';
import peopleStage from '../design/ppl_stage.png';

class Client extends Component {

    render() {
        return (
            <div className="feat-area-bg">
            <div className="row">
                <div className="col s4 m4" />
                <div className="col s4 m4">
                    <div className="card card-panel feat-header-section moveFromTopFade delay100">
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

            <div className="feat-bot-pic-block">
                <img src={peopleStage} className="feat-bot-pic-img moveFromBottomFade delay300" /> 
            </div>
          </div>
        )
    }
}

export default Client;