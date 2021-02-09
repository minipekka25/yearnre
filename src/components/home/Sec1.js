import React, { Component } from 'react'
import emoji from '../../assets/emoji.png'
import './Sec1.css'

export default class Sec1 extends Component {
    render() {
        return (
            <div className="sec1-flex">
                <div className="emoji-bg">
                    <img src={emoji} className="emoji-icn" alt="emoji-icn" />
                </div>
                <div className="sec1-content-main">
                    <div>
                        <div className="sec1-head">Total Number Of Users</div>
                        <div className="sec1-data">#2453</div>
                    </div>
         <div>
                        <div className="sec1-head">Users Joined Today</div>
                        <div className="sec1-data">#243</div>
         </div>
               
                    
                </div>
            </div>
        )
    }
}
