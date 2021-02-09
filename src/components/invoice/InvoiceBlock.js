import React, { Component } from 'react'
import linker from '../../assets/linkb.svg'
import ether from '../../assets/ethb.svg'
import './Sec3.css'

export default class InvoiceBlock extends Component {
    render() {
        return (
            <div>
                <div className="InvSec3-Container">
                    <div className="InvSec3-left">
                        <div className="InvSec3-item">
                            <div className="InvSec3-Data">0xlkpqwepcqemcsnlkc <img src={linker} alt="link" className="linkerb-slt-sec4" /></div>
                            <div className="InvSec3-Head">Transaction Hash</div>
                        </div>

                        <div className="InvSec3-item">
                            <div className="InvSec3-Data">22/12/2020 02:45</div>
                            <div className="InvSec3-Head">Transaction Time</div>
                        </div>
                        <div className="InvSec3-item-flex">
                            <div >
                                <div className="InvSec3-item-flex-inner">
                                    <div className="InvSec3-Data">Eager</div>
                                    <div className="InvSec3-Head">Platform</div>
                                </div>
                                <div className="InvSec3-item-flex-inner">
                                    <div className="InvSec3-Data">0.022 ETH</div>
                                    <div className="InvSec3-Head">Price</div>
                                </div>

                            </div>

                            <div className="InvSec3-item-f-r">

                                <div className="InvSec3-item-flex-inner">
                                    <div className="InvSec3-Data">2/10</div>
                                    <div className="InvSec3-Head">Level</div>
                                </div>
                                <div className="InvSec3-item-flex-inner">
                                    <div className="InvSec3-Data">3/4</div>
                                    <div className="InvSec3-Head">Mined</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="InvSec3-right">
                        <img src={ether} alt="ethw" className="InvSec3-ethicn1" />
                        <img src={ether} alt="ethw" className="InvSec3-ethicn2" />
                        <img src={ether} alt="ethw" className="InvSec3-ethicn3" />
                    </div>
                </div>

            </div>
        )
    }
}
