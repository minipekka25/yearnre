import React, { Component } from 'react'
import './Sec2.css'

export default class Sec2 extends Component {
    render() {
        return (
            <div>
                <div className="PrtSec1-title">Financials</div>
                <div className="StsSec2-container">
                    <div className="StsSec2-select-flex">
                        <div >
                            <select id="type" className="StsSec2-Select1">
                                <option value="volvo">Eager</option>
                                <option value="saab">Lazy</option>
                            </select>
                        </div>
                        <div>
                            <select id="level" className="StsSec2-Select1">
                                <option value="volvo">Level 1</option>
                                <option value="volvo">Level 2</option>
                                <option value="volvo">Level 3</option>
                                <option value="volvo">Level 4</option>
                                <option value="volvo">Level 5</option>
                                <option value="volvo">Level 6</option>
                                <option value="volvo">Level 7</option>
                                <option value="volvo">Level 8</option>
                                <option value="volvo">Level 9</option>
                                <option value="volvo">Level 10</option>
                            </select>
                        </div>
                    </div>

                    <div className="StsSec2-select-flex">
                        <div >
                            <select id="type2" className="StsSec2-Select1">
                                <option value="volvo">Partner</option>
                                <option value="volvo">Overflow U</option>
                                <option value="volvo">Overflow D</option>
                                <option value="volvo">Reinvest</option>
                            </select>
                           
                        </div>
                        <div>
                            <select id="flow" className="StsSec2-Select1">
                                <option value="volvo">Inflow</option>
                                <option value="volvo">Outflow</option>
                            </select>
                        </div>
                    </div>




                    <div className="StsSec2-input-flex">
                        <input className="StsSec2-input" placeholder="Search Trx Hash"></input>
                    </div>
                    

                </div>



            </div>
        )
    }
}
