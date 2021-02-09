import React, { Component } from 'react'
import sideart from '../../assets/sideg.svg'
import copy from '../../assets/copy.svg'
import linker from '../../assets/linkw.svg'
import './Sec9.css'

export default class Sec9 extends Component {
    render() {
        return (
            <div>
            <div className="Sec9-container">
                <div className="Sec9-item">
                        <div className="Sec9-data"> https://year.hello/ref/001  <img src={copy} alt="link" className="linker-icn" /> </div>
                        <div className="Sec9-head">Affiliate Link</div>
                </div>
                    <div className="Sec9-item">
                        <div className="Sec9-data">0x8h0fenewfh8wef0fhf <img src={linker} alt="link" className="linker-icn" /> </div>
                        <div className="Sec9-head">Contract Address</div>
                    </div>
                    <div>
                        <div className="Sec9-btn"> Change Beneficiery</div>
                    </div>
                    <img src={sideart} alt="link" className="Sec9-sideart" />
            </div>
            </div>
        )
    }
}
