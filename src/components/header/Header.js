import React, { Component } from 'react'
import logo from '../../assets/logo.svg'
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
        <div className='logo-flex'>
            <div className='logo-placeholder'>
                        <img src={logo} alt='logo' className='logo-img' />
            </div>
                    
        </div>
     
            </div>
        )
    }
}
