import React, { Component } from 'react'
import './Blockg.css'
import reinvest from '../../assets/reinvestb.svg'
import partners from '../../assets/deal.svg'

export default class Blockg extends Component {

    NumberPadding(num, size) {
        let string = "000000000" + num;
        return string.substr(string.length - size);
    }

    render() {
        return (
            <div className="blockg-container">
                <div className="blockg-main-flex">
                    <div className="blockg-head">{this.props.cost} ETH</div>
                    <div className="blockg-flex-inner">
                        <div className="blockg-flex-inner2">
                            <img src={partners} alt="partners" className="partner-icn"/>
                            <div className="blockg-data">{this.NumberPadding(this.props.partners,4)}</div>
                        </div>
                        <div className="blockg-flex-inner2">
                            <img src={reinvest} alt="reinvest" className="partner-icn" />
                            <div className="blockg-data">{this.NumberPadding(this.props.reinvests,4)}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
