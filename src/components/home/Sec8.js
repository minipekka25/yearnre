import React, { Component } from 'react'
import linker from '../../assets/link.svg'
import './Sec8.css'

export default class Sec8 extends Component {
    render() {
        return (
            <div>
                <div className="Sec8-Title">User Board</div>
                <div className="Sec8-container">
                    <div className="Sec8-item">
                        <div className="Sec8-data">0x8h0fenewfh8wef0fhf <img src={linker} alt="link" className="linker-icn" /> </div>
                        <div className="Sec8-head">User Address</div>
                    </div>
                    <div className="Sec8-item">
                        <div className="Sec8-data">0x8h0fenewfh8wef0fhf <img src={linker} alt="link" className="linker-icn" /> </div>
                        <div className="Sec8-head">Beneficiery Address</div>
                    </div>
                    <div className="Sec8-item">
                        <div className="Sec8-data">0x8h0fenewfh8wef0fhf <img src={linker} alt="link" className="linker-icn" /> </div>
                        <div className="Sec8-head">Referrer Address</div>
                    </div>
                    
                    <div className="Sec8-flex">
                       <div className="Sec8-flex-inner">
                            <div className="Sec8-item">
                                <div className="Sec8-data">No</div>
                                <div className="Sec8-head">Overtook</div>
                            </div>
                            <div className="Sec8-item">
                                <div className="Sec8-data">003 <img src={linker} alt="link" className="linker-icn" /> </div>
                                <div className="Sec8-head">Referrer</div>
                            </div>
                            <div className="Sec8-item">
                                <div className="Sec8-data">0.003 ETH </div>
                                <div className="Sec8-head">Gift</div>
                            </div>
                       </div>
                        <div className="Sec8-flex-inner">
                            <div className="Sec8-item">
                                <div className="Sec8-data">0012 <img src={linker} alt="link" className="linker-icn" /> </div>
                                <div className="Sec8-head">Overtaken</div>
                            </div>
                            <div className="Sec8-item">
                                <div className="Sec8-data">003 <img src={linker} alt="link" className="linker-icn" /> </div>
                                <div className="Sec8-head">Partners</div>
                            </div>
                            <div className="Sec8-item">
                                <div className="Sec8-data">0.3 ETH </div>
                                <div className="Sec8-head">Loss</div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        )
    }
}
