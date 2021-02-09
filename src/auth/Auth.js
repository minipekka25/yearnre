import React, { Component } from 'react'
import './Auth.css'
import stsbg from '../assets/stsbg.svg'
import { Link } from "react-router-dom";

export default class Auth extends Component {
    render() {
        return (
            <div className="rgr-main">
                <div className="rgr-title">YEARN</div>
                <div className="rgr-form-flex">
                        <div className="rgr-form-main">
                           
                            <div className="rgr-form-right">
                            <Link to={{ pathname: `/register` }} >  <div className="rgr-form-right-items">
                                        NEW - <br></br> REGISTRATIONS
                                </div> </Link>
                            <Link to={{ pathname: `/login/signin` }} > <div className="rgr-form-right-items">
                                    SIGNIN - <br></br> EXISTING USERS
                                </div> </Link>
                                <Link to={{ pathname: `/view` }} >  <div className="rgr-form-right-items">
                                    VIEW - <br></br> EXISTING USERS
                                </div> </Link>
                            </div>
                        </div>

                </div>
                <img src={stsbg} alt="stsimg" className="rgr-form-bg" />
            </div>
        )
    }
}
