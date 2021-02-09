import React, { Component } from 'react'
import Blocks from './Blocks'
import './Sec3.css'

export default class Sec3 extends Component {
    render() {
        return (
            <div>
                <div className="SltSec3-container">
                    <div>
                        <Blocks />
                        <Blocks />
                        <Blocks />
                    </div>
                    <div>
                        <Blocks />
                        <Blocks />
                        <Blocks />
                    </div>
                    
                </div>
                <div className="SltSec3-over">
                    <div className="SltSec3-Lvl">
                        <div className="SltSec3-btn">Level 1</div>
                        <div className="SltSec3-btn">Level 2</div>
                        <div className="SltSec3-btn">Level 3</div>
                        <div className="SltSec3-btn">Level 4</div>
                        <div className="SltSec3-btn">Level 5</div>
                        <div className="SltSec3-btn">Level 6</div>
                        <div className="SltSec3-btn">Level 7</div>
                        <div className="SltSec3-btn">Level 8</div>
                        <div className="SltSec3-btn">Level 9</div>
                        <div className="SltSec3-btn">Level 10</div>
                    </div>
                </div>
                
            </div>
            
        )
    }
}
