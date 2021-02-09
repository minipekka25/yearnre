import React, { Component } from 'react'
import Blockb from './Blockb'
import Blockg from './Blockg'
import './Sec7.css'

export default class Sec7 extends Component {
    render() {
        return (
            <div className="Sec7-container">
                <div className="Sec7-Title">Blocks</div>
                <div className="Sec7-flex">
                    <div className="Sec7-flex-inner">
                        <Blockg />
                        <Blockg />
                        <Blockg />
                        <Blockg />
                        <Blockg />
                    </div>
                    <div className="Sec7-flex-inner">
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
