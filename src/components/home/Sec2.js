import React, { Component } from "react";
import etherblack from "../../assets/ethb.svg";
import "./Sec2.css";

export default class Sec2 extends Component {
  render() {
    return (
    
        <div className="Sec2-container">
          <div>
          <div className="Sec2-left">
            <div className="Sec2-head">Current User</div>
            <div className="Sec2-data">ID-002</div>
          </div>
            <div className="Sec2-left">
              <div className="Sec2-head">Total Capital Infused</div>
              <div className="Sec2-data">$25762</div>
            </div>
            <div className="Sec2-left">
              <div className="Sec2-head">Total Capital In EGR</div>
              <div className="Sec2-data">$253</div>
            </div>
            <div className="Sec2-left">
              <div className="Sec2-head">Total Capital In LZY</div>
              <div className="Sec2-data">$5222</div>
            </div>
            <div className="Sec2-left">
              <div className="Sec2-head">Ether Cost</div>
              <div className="Sec2-data">$25762</div>
            </div>
            <div className="Sec2-left">
              <div className="Sec2-head">24h Change</div>
              <div className="Sec2-data">-2.1334 </div>
            </div>
          </div>
<div className="Sec2-right">
                <img src={etherblack} alt="ethb" className="etherb-icon1"/>
                <img src={etherblack} alt="ethb" className="etherb-icon2" />
                <img src={etherblack} alt="ethb" className="etherb-icon3" />
                </div>
</div>
          
    
    );
  }
}
