import React, { Component } from 'react'
import './Faq.css'
import plus from '../assets/plus.svg'
import footbg from '../assets/footbg.svg'
import eth from '../assets/ethb.svg'

export default class Faq extends Component {
    render() {
        return (
            <div className="land-faq-main">
                <div className="land-faq-title">
                    FREQUENTLY<br></br> ASKED - <br></br> QUESTIONS
                </div>

                <div className="land-faq-holder">
                    <div className="land-faq-item">
                        <div className="land-faq-head">
                            WHAT IS YEARN ?
                        </div>
                        <div>
                        <img src={plus} alt="plus" className="land-faq-head-plus"/>
                        </div>
                    </div>
                </div>

                <div className="land-faq-holder">
                    <div className="land-faq-item">
                        <div className="land-faq-head">
                            WHAT IS YEARN ?
                        </div>
                        <div>
                            <img src={plus} alt="plus" className="land-faq-head-plus" />
                        </div>
                    </div>
                </div>

                <div className="land-faq-holder">
                    <div className="land-faq-item">
                        <div className="land-faq-head">
                            WHAT IS YEARN ?
                        </div>
                        <div>
                            <img src={plus} alt="plus" className="land-faq-head-plus" />
                        </div>
                    </div>
                </div>

                <div className="land-faq-holder">
                    <div className="land-faq-item">
                        <div className="land-faq-head">
                            WHAT IS YEARN ?
                        </div>
                        <div>
                            <img src={plus} alt="plus" className="land-faq-head-plus" />
                        </div>
                    </div>
                </div>

                <div className="land-faq-holder">
                    <div className="land-faq-item">
                        <div className="land-faq-head">
                            WHAT IS YEARN WHAT IS YEARN WHAT IS YEARN ?
                        </div>
                        <div>
                            <img src={plus} alt="plus" className="land-faq-head-plus" />
                        </div>
                    </div>
                    <div className="land-faq-data">
                        Yearn is a Non-Custodial Ether based Slots staking service for Networking Marketing Stake Holders based on Ethereum Network.
                    </div>
                </div>

                <div>
                    <div className="land-faq-foot-bg-flex">
                        <img src={footbg} alt="plus" className="land-faq-foot-bg" />
                        <img src={eth} alt="plus" className="land-faq-foot-eth" />
                    </div>
                    
                </div>
                <div className="land-faq-lines-flex">
                    <div className="land-ftr-lines"></div>
                    <div className="land-ftr-lines"></div>
                    <div className="land-ftr-lines"></div>
                    <div className="land-ftr-lines"></div>
                    <div className="land-ftr-lines"></div>
                    <div className="land-ftr-lines"></div>
                    <div className="land-ftr-lines"></div>
                </div>
            </div>
        )
    }
}
