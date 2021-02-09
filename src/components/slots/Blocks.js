import React, { Component } from 'react'
import ether from '../../assets/ethb.svg'
import identity from '../../assets/id-card.svg'
import deal from '../../assets/partners.svg'
import reinvest from '../../assets/reinvestb.svg'
import info from '../../assets/info.svg'
import stsimg from '../../assets/sideg.svg'
import { Link } from "react-router-dom";

import './Blocks.css'

export default class Blocks extends Component {

    NumberPadding(num, size) {
        let string = "000000000" + num;
        return string.substr(string.length - size);
    }

    egrrender(){
        if(this.props.place === '3'){
            return <div className="slt-blk-txn-flex"><div className="slt-blk-txn-data">R</div></div> 
        }else{
            return <div className="slt-blk-txn-flex"><div className="slt-blk-txn-data">P</div></div> 
        }
    }

    lzyrender(){
        
         if (this.props.place === '1' || this.props.place === '2'){
            if (this.props.data && this.props.data.txntype === 'slippagesuperior|slippagezero'){       
                return <div className="slt-blk-txn-flex">
                            <div className="slt-blk-txn-data">P</div>
                            <div className="slt-blk-txn-data">SS</div>
                        </div>
             } else if (this.props.data && this.props.data.txntype === 'slippagesuperior|slippageup'){
                return <div className="slt-blk-txn-flex">
                    <div className="slt-blk-txn-data">OU</div>
                    <div className="slt-blk-txn-data">SS</div>
                </div>
            }
           
         } else if (this.props.place === '3' || this.props.place === '4' || this.props.place === '5'){
             if (this.props.data && this.props.data.txntype === 'soldplace|slippagezero') {
                 return <div className="slt-blk-txn-flex">
                     <div className="slt-blk-txn-data">P</div>
                 </div>
             } else if (this.props.data && this.props.data.txntype === 'soldplace|slippagedown') {
                 return <div className="slt-blk-txn-flex">
                     <div className="slt-blk-txn-data">OD</div>
                 </div>
             }
         } else if (this.props.place === '6'){
             if (this.props.data && this.props.data.txntype === 'reinvest|slippagezero') {
                 return <div className="slt-blk-txn-flex">
                     <div className="slt-blk-txn-data">R</div>
                 </div>
             } else if (this.props.data && this.props.data.txntype === 'reinvest|slippagedown') {
                 return <div className="slt-blk-txn-flex">
                     <div className="slt-blk-txn-data">R</div>
                     <div className="slt-blk-txn-data">OD</div>
                 </div>
             }
         }
    }


    render() {
        return (<div>
            {this.props.data ? 
                <Link to={{ pathname: `/slots/${this.props.data && this.props.data.referreraddress}/${this.props.data.matrix === '1' ? 'egr' : 'lzy'}/${this.props.data.level}/latest` }}> 
               <div className="slt-blk-flex">
                <div className="slt-blk-left"><div>0{this.props.place}</div></div>
                <div className="slt-blk-right">
                    <div className="slt-blk-id">{this.props.data ? `ID-${this.NumberPadding(this.props.data.referrerid, 6)}` : 'NOT SOLD YET'}</div>


                    {this.props.data ? <div>
                        {this.props.type === 'egr' ? this.egrrender() : this.lzyrender()}
                    </div> : null}


                </div>
                <div className="slt-blk-img-holder">
                    <img src={stsimg} alt="stsimg" className="slt-blk-img" />
                </div>
                    </div> </Link>: <div className="slt-blk-flex">
                    <div className="slt-blk-left"><div>0{this.props.place}</div></div>
                    <div className="slt-blk-right">
                        <div className="slt-blk-id">{this.props.data ? `ID-${this.NumberPadding(this.props.data.referrerid, 6)}` : 'NOT SOLD YET'}</div>


                        {this.props.data ? <div>
                            {this.props.type === 'egr' ? this.egrrender() : this.lzyrender()}
                        </div> : null}


                    </div>
                    <div className="slt-blk-img-holder">
                        <img src={stsimg} alt="stsimg" className="slt-blk-img" />
                    </div>
                </div>}

        </div>
            
        )
    }
}
