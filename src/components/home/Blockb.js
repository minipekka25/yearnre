import React, { Component } from 'react'
import './Blockb.css'
import ether from '../../assets/ethw.svg'

export default class Blockb extends Component {
    render() {
        return (
            <div className="bloakb-container">
                <div className="blockb-flex">
                    <div className="blockb-left">
                        <img src={ether} alt="eth" className="ethw-icon-l1" />
                        <img src={ether} alt="eth" className="ethw-icon-l2" />
                        <img src={ether} alt="eth" className="ethw-icon-l3" />
                    </div>
                    <div className="blockb-flex-inner">
                        <div className="blockb-head">{`${this.props.cost} ETH`}</div>
                        <div className="blockb-data">BUY NOW</div>
                    </div>
                    <div className="blockb-right">
                        <img src={ether} alt="eth" className="ethw-icon-r1" />
                        <img src={ether} alt="eth" className="ethw-icon-r2" />
                        <img src={ether} alt="eth" className="ethw-icon-r3" />
                    </div>
                </div>
            </div>
        )
    }
}
