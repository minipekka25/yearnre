import React, { Component } from 'react'
import './Sec3.css'

export default class Sec3 extends Component {
    render() {
        return (
            <div>
                <div className="Sec3-title">Earnings</div>
                <div className="Sec3-flex">
                    <div>
                        <div className="Sec3-data">$235</div>
                         <div className="Sec3-head">Total Earnings</div>
                    </div>
                    <div>
                        <div className="Sec3-data">$165</div>
                         <div className="Sec3-head">EGR Earnings</div>
                    </div>
                    <div>
                        <div className="Sec3-data">$135</div>
                         <div className="Sec3-head">LZY Earnings</div>
                    </div>
                </div>
                <div className="Sec3-title">Profit & Expenditure</div>
                <div className="Sec3-flex">
                    <div>
                        <div className="Sec3-data">$235</div>
                        <div className="Sec3-head">Expenditure</div>
                    </div>
                    <div>
                        <div className="Sec3-data">$165</div>
                        <div className="Sec3-head">Profit</div>
                    </div>
                    <div>
                        <div className="Sec3-data">$135</div>
                        <div className="Sec3-head">To Breakeven</div>
                    </div>
                </div>
            </div>
        )
    }
}
