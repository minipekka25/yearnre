import React, { Component } from 'react'
import './About.css'


export default class about extends Component {
    render() {
        return (

            <div>
                {/* eslint-disable-next-line */}
                <marquee behavior="alternate" direction="right" height="100%" bgcolor="white" scrolldelay="0" scrollamount="10" className="lnd-about-marquee-main">
                    Yearn is a Non-Custodial Ether based Slots staking service for Networking Marketing Stake Holders based on Ethereum Network. Know More . . .

</marquee>
            </div>
        )
    }
}
