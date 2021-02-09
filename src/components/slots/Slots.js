import React, { Component } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Sec1 from './Sec1'
import Sec2 from './Sec2'
import Sec3 from './Sec3'
import Sec4 from './Sec4'


export default class Slots extends Component {
    render() {
        return (
             <div className='grid-container'>
               
                <div className='main'>
                      <Header/>
                
              <Sec1/>
              <Sec2/>
              <Sec3/>
              <Sec4/>
                </div>
                <Footer/>
            </div>
        )
    }
}
