import React, { Component } from 'react'
import landlogo from '../assets/landlogo.png'
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <div className="land-head-main">
                <div className="land-head-main-flex">
                    <div>
                        <img src={landlogo} alt="landlogo" className="land-head-logo" />
                    </div>
                    <div className="land-head-menu-flex">
                        <div className="land-head-menu-items-button">DASHBOARD</div>
                        <div className="land-head-menu-items-button">JOIN NOW</div>
                    </div>
                </div>
                <div className="land-head-lines-flex">
                    <div className="land-head-lines"></div>
                    <div className="land-head-lines"></div>
                    <div className="land-head-lines"></div>
                    <div className="land-head-lines"></div>
                    <div className="land-head-lines"></div>
                    <div className="land-head-lines"></div>
                    <div className="land-head-lines"></div>
                </div>
            </div>
        )
    }
}
