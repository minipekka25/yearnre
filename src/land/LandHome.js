import React, { Component } from 'react'
import Header from './Header'
import Hero from './Hero'
import Features from './Features'
import Marquee from './Marquee'
import Stats from './Stats'

import './LandHome.css'
import Payout from './Payout'
import About from './About'
import Faq from './Faq'

export default class LandHome extends Component {
    render() {
        return (
            <div className="land-main">
               <Header/>
               <Hero/>
               <About/>
               <Features/>
               <Marquee/>
               <Stats/>
               <Payout/>
               <Faq/>
            </div>
            
        )
    }
}
