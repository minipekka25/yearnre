import React, { Component } from 'react'
import landhero from '../assets/land-hero.svg'
import heroelps from '../assets/heroelps.svg'


import './Hero.css'

export default class Hero extends Component {
    render() {
        return (
            <div className="land-hero-main">
                <div className="land-hero-text-bg">
                    YEARN
                </div>
                <div>
                    <img src={heroelps} alt="hero" className="land-hero-logo-top"></img>
                </div>
                <div>
                    <img src={landhero} alt="hero" className="land-hero-logo-bottom"></img>
                </div>
            
                {/* <div className="land-hero-about-flex">
                    <div className="land-hero-about-text">
                        Yearn is a Non-Custodial Ether based Slots staking service for Networking Marketing Stake Holders based on Ethereum Network.
                    </div>
                    <div className="land-hero-about-arrow-placeholder">
                        <img src={arrow} alt="hero" className="land-hero-about-arrow"></img>
                    </div>
                </div> */}
                <div className="land-hero-lines-flex">
                    <div className="land-hero-lines"></div>
                    <div className="land-hero-lines"></div>
                    <div className="land-hero-lines"></div>
                    <div className="land-hero-lines"></div>
                    <div className="land-hero-lines"></div>
                    <div className="land-hero-lines"></div>
                    <div className="land-hero-lines"></div>
              </div>
            </div>
        )
    }
}
