import React, { Component } from 'react'
import arrow from '../assets/mararr.svg'
import './Marquee.css'

export default class Marquee extends Component {
    render() {
        return (
            <div>
                {/*  eslint-disable-next-line */}
                <marquee behavior="alternate" direction="right" height="100%" bgcolor="#ccff00" scrolldelay="0" scrollamount="10" className="lnd-marquee-main">
                   <div className="lnd-marquee-flex">
                        <div class="lnd-marquee-head">LATEST <br></br> REGISTRATIONS</div>
                        <div class="lnd-marquee-divider">-</div>
                        <div class="lnd-marquee-item">
                            <div >
                                <div class="lnd-marquee-item-head">ID-223</div>
                                <div class="lnd-marquee-item-data">18.12.2020 03:44</div>
                            </div>
                            <div>
                                <img src={arrow} alt="mararr"  className="lnd-marquee-arr"></img>
                            </div>
                        </div>
                        <div class="lnd-marquee-divider">-</div>
                        <div class="lnd-marquee-item">
                            <div >
                                <div class="lnd-marquee-item-head">ID-223</div>
                                <div class="lnd-marquee-item-data">18.12.2020 03:44</div>
                            </div>
                            <div>
                                <img src={arrow} alt="mararr" className="lnd-marquee-arr"></img>
                            </div>
                        </div>
                        <div class="lnd-marquee-divider">-</div>
                        <div class="lnd-marquee-item">
                            <div >
                                <div class="lnd-marquee-item-head">ID-223</div>
                                <div class="lnd-marquee-item-data">18.12.2020 03:44</div>
                            </div>
                            <div>
                                <img src={arrow} alt="mararr" className="lnd-marquee-arr"></img>
                            </div>
                        </div>
                        <div class="lnd-marquee-divider">-</div>
                        <div class="lnd-marquee-item">
                            <div >
                                <div class="lnd-marquee-item-head">ID-223</div>
                                <div class="lnd-marquee-item-data">18.12.2020 03:44</div>
                            </div>
                            <div>
                                <img src={arrow} alt="mararr" className="lnd-marquee-arr"></img>
                            </div>
                        </div>
                        <div class="lnd-marquee-divider">-</div>
                        <div class="lnd-marquee-item">
                            <div >
                                <div class="lnd-marquee-item-head">ID-223</div>
                                <div class="lnd-marquee-item-data">18.12.2020 03:44</div>
                            </div>
                            <div>
                                <img src={arrow} alt="mararr" className="lnd-marquee-arr"></img>
                            </div>
                        </div>
                        <div class="lnd-marquee-divider">-</div>
                        <div class="lnd-marquee-item">
                            <div >
                                <div class="lnd-marquee-item-head">ID-223</div>
                                <div class="lnd-marquee-item-data">18.12.2020 03:44</div>
                            </div>
                            <div>
                                <img src={arrow} alt="mararr" className="lnd-marquee-arr"></img>
                            </div>
                        </div>
                        <div class="lnd-marquee-divider">-</div>
                        <div class="lnd-marquee-head">LATEST <br></br> REGISTRATIONS</div>
                   </div>
                </marquee>
            </div>
        )
    }
}
