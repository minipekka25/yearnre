import React, { Component } from 'react'
import landlogo from '../assets/landlogo.png'
import './Header.css'
import { Link } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <div className="land-head-main">
                <div className="land-head-main-flex">
                    <div>
                        <img src={landlogo} alt="landlogo" className="land-head-logo" />
                    </div>
                    <div className="land-head-menu-flex">
                        <Link to={{ pathname: '/auth' }} >    <div className="land-head-menu-items-button">DASHBOARD</div> </Link>
                        <Link to={{ pathname: '/register/1' }} >    <div className="land-head-menu-items-button">JOIN NOW</div> </Link>
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
