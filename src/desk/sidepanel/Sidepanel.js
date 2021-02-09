import React, { Component } from 'react'
import emoji from '../../assets/emoji.png'
import ether from '../../assets/ethb.svg'

import './Sidepanel.css'

export default class Sidepanel extends Component {


    NumberPadding(num, size) {
    let string = "000000000" + num;
    return string.substr(string.length - size);
}

DollarPadding(num){
    if(String(num).length > 6){
        let k = num/1000
        return Math.round(k) + 'K'
    }else{
        return num
    }
}

    render() {
        return (
            <div className="lg-sidepanel-main">
                <div className="lg-sidepanel-sec1">
                    <div className="lg-sidepanel-sec1-emoji-flex">
                        <div className="lg-sidepanel-sec1-emoji-bg"><img src={emoji} alt="emoji" className="lg-sidepanel-sec1-emoji" /></div>
                    </div>
         
                    <div className="lg-sidepanel-sec1-head">Current User</div>
                    <div className="lg-sidepanel-sec1-data">ID - {this.props.Maindata.topbar && this.NumberPadding(this.props.Maindata.topbar.id,6)  }</div>
                </div>
                <div className="lg-sidepanel-sec2">
                    <div className="lg-sidepanel-sec2-item">
                        <div className="lg-sidepanel-sec2-head">Total Number Of Users</div>
                        <div className="lg-sidepanel-sec2-data">#{this.props.Maindata.sidebar && this.NumberPadding(this.props.Maindata.sidebar.totalParticipants,6)}</div>
                    </div>
                    <div className="lg-sidepanel-sec2-item">
                        <div className="lg-sidepanel-sec2-head">Users Joined in 24h</div>
                        <div className="lg-sidepanel-sec2-data">#{this.props.Maindata.sidebar && this.NumberPadding(this.props.Maindata.sidebar.Usersjoined, 6)}</div>
                    </div>
                    <div className="lg-sidepanel-sec2-item">
                        <div className="lg-sidepanel-sec2-head">Total Capital Infused</div>
                        <div className="lg-sidepanel-sec2-data">${this.props.Maindata.sidebar && this.DollarPadding(Math.round(this.props.Maindata.sidebar.totalCapital) * Math.round(this.props.Maindata.sidebar.ethcost))}</div>
                    </div>
                    <div className="lg-sidepanel-sec2-item">
                        <div className="lg-sidepanel-sec2-head">Total Capital in EGR</div>
                        <div className="lg-sidepanel-sec2-data">${this.props.Maindata.sidebar && this.DollarPadding(Math.round(this.props.Maindata.sidebar.total3xCapital) * Math.round(this.props.Maindata.sidebar.ethcost))}</div>
                    </div>
                    <div className="lg-sidepanel-sec2-item">
                        <div className="lg-sidepanel-sec2-head">Total Capital in LZY</div>
                        <div className="lg-sidepanel-sec2-data">${this.props.Maindata.sidebar && this.DollarPadding(Math.round(this.props.Maindata.sidebar.total6xCapital) * Math.round(this.props.Maindata.sidebar.ethcost))}</div>
                    </div>
                    <div className="lg-sidepanel-sec2-item">
                        <div className="lg-sidepanel-sec2-head">Ether Cost</div>
                        <div className="lg-sidepanel-sec2-data">${this.props.Maindata.sidebar && this.DollarPadding(Math.round(this.props.Maindata.sidebar.ethcost))}</div>
                    </div>
                    <div className="lg-sidepanel-sec2-item">
                        <div className="lg-sidepanel-sec2-head">ETH 24h Change</div>
                        <div className="lg-sidepanel-sec2-data">{this.props.Maindata.sidebar && this.props.Maindata.sidebar.ethchange}</div>
                    </div>
              </div>
                <div className="lg-sidepanel-sec3">
                    <img src={ether} alt="ether" className="lg-sidepanel-sec3-eth1" />
                    <img src={ether} alt="ether" className="lg-sidepanel-sec3-eth2" />
                    <img src={ether} alt="ether" className="lg-sidepanel-sec3-eth3" />
              </div>
            </div>
        )
    }
}
