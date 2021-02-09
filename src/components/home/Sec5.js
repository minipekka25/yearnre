import React, { Component } from 'react'
import Blockb from './Blockb'
import Blockg from './Blockg'
import './Sec5.css'

export default class Sec5 extends Component {
    render() {
        return (
            <div className="Sec5-container">
                <div className="Sec5-Title">Blocks</div>
                <div className="Sec5-flex">
                    <div className="Sec5-flex-inner">
                        <Blockg />
                        <Blockg />
                        <Blockg />
                        <Blockg />
                        <Blockg />
                    </div>
                    <div className="Sec5-flex-inner">
                        <Blockg />
                        <Blockb />
                        <Blockb />
                        <Blockb />
                        <Blockb />
                    </div>
                </div>
               
            </div>
        )
    }
}
