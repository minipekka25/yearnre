import React, { Component } from 'react'
import home from '../../assets/home.svg'
import partners from '../../assets/partners.svg'
import stat from '../../assets/stat.svg'
import invoice from '../../assets/invoice.svg'
import logo from '../../assets/logo.svg'
import './Sidebar.css'
import { Link } from "react-router-dom";


export default class Sidebar extends Component {
    render() {
        return (
            <div className="lg-sidebar-main">
                <div>
                    <div className="lg-sidebar-dots">
                        <div className="lg-sidebar-dots-items"></div>
                        <div className="lg-sidebar-dots-items"></div>
                        <div className="lg-sidebar-dots-items"></div>
                    </div>
                    <Link to={{ pathname: `/dashboard/${ this.props.address}`}}>
                        {this.props.high === 'dashboard' ? <div className="lg-sidebar-menu">
                            <div className="lg-sidebar-menu-bar-green"></div>
                            <div className="lg-sidebar-menu-item-green">
                                <img src={home} alt="home" className="lg-sidebar-meny-icons"></img>
                            </div>
                        </div> : <div className="lg-sidebar-menu">
                                <div className="lg-sidebar-menu-bar-white"></div>
                                <div className="lg-sidebar-menu-item">
                                    <img src={home} alt="home" className="lg-sidebar-meny-icons"></img>
                                </div>
                            </div>}  
                    </Link>
                   
                    <Link to={{ pathname: `/partners/${this.props.address}` }}>
                        {this.props.high === 'partners' ? 
                            <div className="lg-sidebar-menu">
                                <div className="lg-sidebar-menu-bar-green"></div>
                                <div className="lg-sidebar-menu-item-green">
                                    <img src={partners} alt="home" className="lg-sidebar-meny-icons"></img>
                                </div>
                            </div> : <div className="lg-sidebar-menu">
                                <div className="lg-sidebar-menu-bar-white"></div>
                                <div className="lg-sidebar-menu-item">
                                    <img src={partners} alt="home" className="lg-sidebar-meny-icons"></img>
                                </div>
                            </div>
                    }
                  
                    </Link>

                    <Link to={{ pathname: `/stats/${this.props.address}` }}>
                        {this.props.high === 'stats' ?
                            <div className="lg-sidebar-menu">
                                <div className="lg-sidebar-menu-bar-green"></div>
                                <div className="lg-sidebar-menu-item-green">
                                    <img src={stat} alt="home" className="lg-sidebar-meny-icons"></img>
                                </div>
                            </div> : <div className="lg-sidebar-menu">
                                <div className="lg-sidebar-menu-bar-white"></div>
                                <div className="lg-sidebar-menu-item">
                                    <img src={stat} alt="home" className="lg-sidebar-meny-icons"></img>
                                </div>
                            </div>
                        }

                    </Link>

                    <Link to={{ pathname: `/invoice/${this.props.address}` }}>
                        {this.props.high === 'invoice' ?
                            <div className="lg-sidebar-menu">
                                <div className="lg-sidebar-menu-bar-green"></div>
                                <div className="lg-sidebar-menu-item-green">
                                    <img src={invoice} alt="home" className="lg-sidebar-meny-icons"></img>
                                </div>
                            </div> : <div className="lg-sidebar-menu">
                                <div className="lg-sidebar-menu-bar-white"></div>
                                <div className="lg-sidebar-menu-item">
                                    <img src={invoice} alt="home" className="lg-sidebar-meny-icons"></img>
                                </div>
                            </div>
                        }

                    </Link>
                </div>

                <div className="lg-sidebar-logo-placeholder">
                    <img src={logo} alt="logo" className="lg-sidebar-logo"/>
                </div>
            </div>
        )
    }
}
