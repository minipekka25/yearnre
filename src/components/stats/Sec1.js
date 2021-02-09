import React, { Component } from 'react'
import './Sec1.css'

export default class Sec1 extends Component {
    render() {
        return (
            <div>
                <div className="StsSec1-title">Earnings</div>
                <div className="StsSec1-flex">
                    <div>
                        <div className="StsSec1-data">$235</div>
                        <div className="StsSec1-head">Total Earnings</div>
                    </div>
                    <div>
                        <div className="StsSec1-data">$165</div>
                        <div className="StsSec1-head">EGR Earnings</div>
                    </div>
                    <div>
                        <div className="StsSec1-data">$135</div>
                        <div className="StsSec1-head">LZY Earnings</div>
                    </div>
                </div>
                <div className="StsSec1-title">Profit & Expenditure</div>
                <div className="StsSec1-flex">
                    <div>
                        <div className="StsSec1-data">$235</div>
                        <div className="StsSec1-head">Expenditure</div>
                    </div>
                    <div>
                        <div className="StsSec1-data">$165</div>
                        <div className="StsSec1-head">Profit</div>
                    </div>
                    <div>
                        <div className="StsSec1-data">$135</div>
                        <div className="StsSec1-head">To Breakeven</div>
                    </div>
                </div>
            </div>
        )
    }
}
