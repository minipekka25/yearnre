import React, { Component } from 'react'
import './Sec1.css'

export default class Sec1 extends Component {
    render() {
        return (
            <div>
                <div className="InvSec1-title">Earnings</div>
                <div className="InvSec1-flex">
                    <div>
                        <div className="InvSec1-data">$235</div>
                        <div className="InvSec1-head">Total Earnings</div>
                    </div>
                    <div>
                        <div className="InvSec1-data">$165</div>
                        <div className="InvSec1-head">EGR Earnings</div>
                    </div>
                    <div>
                        <div className="InvSec1-data">$135</div>
                        <div className="InvSec1-head">LZY Earnings</div>
                    </div>
                </div>
                <div className="InvSec1-title">Profit & Expenditure</div>
                <div className="InvSec1-flex">
                    <div>
                        <div className="InvSec1-data">$235</div>
                        <div className="InvSec1-head">Expenditure</div>
                    </div>
                    <div>
                        <div className="InvSec1-data">$165</div>
                        <div className="InvSec1-head">Profit</div>
                    </div>
                    <div>
                        <div className="InvSec1-data">$135</div>
                        <div className="InvSec1-head">To Breakeven</div>
                    </div>
                </div>
            </div>
        )
    }
}
