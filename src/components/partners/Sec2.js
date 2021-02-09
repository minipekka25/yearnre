import React, { Component } from 'react'
import './Sec2.css'


export default class Sec2 extends Component {
    render() {
        return (
            <div>
                <div className="PrtSec1-title">Partners Table</div>
                <div className="PrtSec2-container">
                    <div className="PrtSec2-select-flex">
                        <div >
                            <select id="type" className="PrtSec2-Select1">
                                <option value="volvo">Eager</option>
                                <option value="saab">Lazy</option>
                            </select>
                        </div>
                        <div>
                            <select id="level" className="PrtSec2-Select1">
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
               
                        
                  
                   
                       
                  
                    
                    <div className="PrtSec2-input-flex">
                        <input className="PrtSec2-input" placeholder="Search User ID"></input>
</div>
                    <div className="PrtSec2-input-flex">
                        <input className="PrtSec2-input" placeholder=" Search User Address"></input>
                    </div>                           
                    
                </div>
             
                 
               
            </div>
        )
    }
}
