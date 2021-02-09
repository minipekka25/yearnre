import React, { Component } from 'react'
import './Sec2.css'


export default class Sec2 extends Component {
    render() {
        return (
            <div>
                <div className="SltSec2-title">Eager Slots</div>
                <div className="SltSec2-flex">
                    <div className="SltSec2-left">
                        <div className="SltSec2-item">
                            <div className="SltSec2-data">ID-0012</div>
                            <div className="SltSec2-head">Superior</div>
                        </div>
                        <div className="SltSec2-item">
                            <div className="SltSec2-data">008</div>
                            <div className="SltSec2-head">Partners</div>
                        </div>
                        <div className="SltSec2-item">
                            <div className="SltSec2-data">110/221</div>
                            <div className="SltSec2-head">Reinvests</div>
                        </div>
                    </div>
                    <div className="SltSec2-right">
                        <div className="SltSec2-item">
                            <div className="SltSec2w-data">ID-002</div>
                            <div className="SltSec2w-head">Current User</div>
                        </div>
                        <div className="SltSec2-item">
                            <div className="SltSec2w-data">008</div>
                            <div className="SltSec2w-head">Level</div>
                        </div>
                        <div className="SltSec2-item">
                            <div className="SltSec2w-data">21 ETH</div>
                            <div className="SltSec2w-head">Earnings</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}
