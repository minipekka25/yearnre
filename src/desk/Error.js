import React, { Component } from 'react'
import './error.css'
import error from '../assets/erroranimet.gif'
import stsbg from '../assets/stsbg.svg'

export default class Error extends Component {
    render() {
        return (
            <div>
                <div className="error-page-anime-flex">
                    <div className="error-page-anime-head">YEARN</div>
                    <div><img src={error} className="error-page-anime-img" /></div>
                    <div className="error-page-anime-text">{this.props.message}</div>
                    <div><img src={stsbg} className="error-page-anime-bg-img" /></div>
                </div>
            </div>
        )
    }
}
