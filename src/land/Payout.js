import React, { Component } from 'react'
import  './Payout.css'
import lzy from '../assets/lzyimg.png'
import egr from '../assets/egrimg.png'

export default class Payout extends Component {
    render() {
        return (
            <div className="lnd-payout-main">
                <div className="lnd-payout-title">PAYOUT - <br></br>SYSTEM</div>


                <div className="lnd-payout-img">
                    <img src={egr} alt="egr" className="lnd-payout-egr" />
                </div>

                <div className="lnd-payout-img">
                    <img src={lzy} alt="lzy" className="lnd-payout-lzy" />
                </div>
                <div className="land-payout-lines-flex">
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
