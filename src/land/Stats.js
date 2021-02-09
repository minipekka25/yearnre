import React, { Component } from 'react'
import './Stats.css'
import stsimg from '../assets/stsimg.svg'
import stsbg from '../assets/stsbg.svg'
import arrow from '../assets/arr-r.svg'

export default class Stats extends Component {
    render() {
        return (
            <div className="lnd-stats-main">
                <div className="lnd-stats-title">NETWORK - <br></br> STATS </div>

                <div className="lnd-stats-plat-flex">
                    <div className="lnd-stats-plat-item">
                        <div className="lnd-stats-plat-head">TOTAL CAPITAL</div>
                        <div className="lnd-stats-plat-data">354 ETH</div>
                    </div>
                    <div className="lnd-stats-plat-item">
                        <div className="lnd-stats-plat-head">EGR CAPITAL</div>
                        <div className="lnd-stats-plat-data">134 ETH</div>
                    </div>
                    <div className="lnd-stats-plat-item">
                        <div className="lnd-stats-plat-head">LZY CAPITAL</div>
                        <div className="lnd-stats-plat-data">134 ETH</div>
                    </div>
                </div>
                <div className="lnd-stats-cards-flex">
                    <div>
                        <img src={arrow} alt='arrow' className="lnd-stats-arr-left" />
                    </div>
                    <div className="lnd-stats-cards-flex-inner">
                        <div className="lnd-stats-cards-left">
                            <div className="lnd-stats-cards-left-item">
                                <div className="lnd-stats-cards-left-data">223</div>
                                <div className="lnd-stats-cards-left-head">USER ID</div>
                            </div>
                            <div className="lnd-stats-cards-left-item">
                                <div className="lnd-stats-cards-left-data">213 ETH</div>
                                <div className="lnd-stats-cards-left-head">EARNINGS</div>
                            </div>
                            <div className="lnd-stats-cards-left-item">
                                <div className="lnd-stats-cards-left-data">213 ETH</div>
                                <div className="lnd-stats-cards-left-head">EGR EARNINGS</div>
                            </div>
                            <div className="lnd-stats-cards-left-item">
                                <div className="lnd-stats-cards-left-data">213 ETH</div>
                                <div className="lnd-stats-cards-left-head">LZY EARNINGS</div>
                            </div>
                            <div className="lnd-stats-cards-left-item">
                                <div className="lnd-stats-cards-left-data">18.12.20</div>
                                <div className="lnd-stats-cards-left-head">JOINED DATE</div>
                            </div>
                        </div>

                        <div className="lnd-stats-cards-middle">
                                <div>
                                <img src={stsimg} alt='stsimg' className="lnd-stats-cards-middle-img"/>
                                </div>
                                <div>
                                <div className="lnd-stats-cards-middle-item">
                                    <div className="lnd-stats-cards-middle-data">223</div>
                                    <div className="lnd-stats-cards-middle-head">USER ID</div>
                                </div>
                                <div className="lnd-stats-cards-middle-item">
                                    <div className="lnd-stats-cards-middle-data">213 ETH</div>
                                    <div className="lnd-stats-cards-middle-head">EARNINGS</div>
                                </div>
                                <div className="lnd-stats-cards-middle-item">
                                    <div className="lnd-stats-cards-middle-data">213 ETH</div>
                                    <div className="lnd-stats-cards-middle-head">EGR EARNINGS</div>
                                </div>
                                <div className="lnd-stats-cards-middle-item">
                                    <div className="lnd-stats-cards-middle-data">213 ETH</div>
                                    <div className="lnd-stats-cards-middle-head">LZY EARNINGS</div>
                                </div>
                                <div className="lnd-stats-cards-middle-item">
                                    <div className="lnd-stats-cards-middle-data">18.12.20</div>
                                    <div className="lnd-stats-cards-middle-head">JOINED DATE</div>
                                </div>
                                </div>
                        </div>

                        <div className="lnd-stats-cards-right">
                            <div className="lnd-stats-cards-right-item">
                                <div className="lnd-stats-cards-right-data">223</div>
                                <div className="lnd-stats-cards-right-head">USER ID</div>
                            </div>
                            <div className="lnd-stats-cards-right-item">
                                <div className="lnd-stats-cards-right-data">213 ETH</div>
                                <div className="lnd-stats-cards-right-head">EARNINGS</div>
                            </div>
                            <div className="lnd-stats-cards-right-item">
                                <div className="lnd-stats-cards-right-data">213 ETH</div>
                                <div className="lnd-stats-cards-right-head">EGR EARNINGS</div>
                            </div>
                            <div className="lnd-stats-cards-right-item">
                                <div className="lnd-stats-cards-right-data">213 ETH</div>
                                <div className="lnd-stats-cards-right-head">LZY EARNINGS</div>
                            </div>
                            <div className="lnd-stats-cards-right-item">
                                <div className="lnd-stats-cards-right-data">18.12.20</div>
                                <div className="lnd-stats-cards-right-head">JOINED DATE</div>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <img src={arrow} alt='arrow' className="lnd-stats-arr-right" />
                    </div>

                    <div className="lnd-stats-bg">
                        <img src={stsbg} alt='stsbg' className="lnd-stats-bg-img" />
                    </div>
                </div>
               
            </div>
        )
    }
}
