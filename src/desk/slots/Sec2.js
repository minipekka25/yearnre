import React, { Component } from 'react'
import './Sec2.css'
import Pair1 from './Pair1'
import stsimg from '../../assets/stsimg.svg'
import Pair2 from './Pair2'
import { Redirect } from "react-router-dom";

const slotprice = ['0.025', '0.050', '0.075', '0.100', '0.500', '1.000', '1.500', '2.000', '2.500', '3.000'];

export default class Sec2 extends Component {


    state = { nav: false,redirect:false,reinvestbutton:false }

    levref = React.createRef()

    componentDidMount() {
        window.addEventListener("resize", this.checkscroll.bind(this));
        if (this.levref.current && this.levref.current.clientWidth < this.levref.current.scrollWidth) {
            this.setState({ nav: true })
        } else {
            this.setState({ nav: false })
        }
    }

    checkscroll() {
        if (this.levref && this.levref.current && this.levref.current.clientWidth < this.levref.current.scrollWidth) {
            this.setState({ nav: true })
        } else {
            this.setState({ nav: false })
        }
    }


    scrollnow(direction) {
        if (direction === "right") {
            this.levref.current.scrollLeft += 200
        } else if (direction === "left") {
            this.levref.current.scrollLeft -= 200
        }
    }

    NumberPadding(num, size) {
        let string = "000000000" + num;
        return string.substr(string.length - size);
    }

    ethlimiter(data) {
        if (String(data).length > 5) {
            return String(data).slice(0, 5)
        } else {
            return String(data)
        }
    }

    calcearnings(){
        if(this.props.matrixobj){
            let sold = this.props.matrixobj.soldspots
            let reinvest = this.props.matrixobj.reinvests
            let cost = slotprice[this.props.matrixobj.level - 1]
            let gift = this.props.matrixobj.gift

            let earnings = ((sold * cost) - (reinvest * cost)) + gift

            return this.ethlimiter(earnings)
        }
    }
 

    render() {

        return (
            <div>
                {this.state.redirect ? <Redirect to={{ pathname: `/slots/${this.props.Maindata && this.props.Maindata.address}/${this.props.matrix}/${this.props.level}/${this.state.reinvestcount}` }} />:null}
                <div className="lg-slots-sec2-title">
                    <div>Eager Spots</div>
                    {this.state.nav ? <button className="lg-slots-sec2-title-left-button" onClick={()=> this.scrollnow('left')}>&#60;</button> : null}
                    {this.state.nav ? <button className="lg-slots-sec2-title-right-button" onClick={() => this.scrollnow('right')}>&#62;</button> : null} 
                </div>
                <div className="lg-slots-sec2-overflow" ref={this.levref}>
                 
                <div className="lg-slots-sec2-flex" >
                    <div className="lg-slots-sec2-left">
                        <div className="lg-slots-sec2-left-set1">
                            <div className="lg-slots-sec2-left-ite-w">
                                <div>
                                        <img src={stsimg} alt="sideart" className="lg-slots-sec2-left-set2-sideart" />
                                </div>
                                <div>
                                        <div className="lg-slots-sec2-left-item">
                                            <div className="lg-slots-sec2-left-data">ID-{this.props.Maindata && this.NumberPadding(this.props.Maindata.id, 6)}</div>
                                            <div className="lg-slots-sec2-left-head">Current User</div>
                                        </div>
                                    <div className="lg-slots-sec2-left-item">
                                            <div className="lg-slots-sec2-left-data">#{this.props.matrixobj && this.NumberPadding(this.props.matrixobj.soldspots, 6)}</div>
                                        <div className="lg-slots-sec2-left-head">Sold Spots</div>
                                    </div>
                                    <div className="lg-slots-sec2-left-item">
                                            {this.state.reinvestbutton ? <div className="lg-slots-sec2-left-data"><input className="lg-slots-sec2-left-input" onChange={(e) => this.setState({ reinvestcount: e.target.value })}></input> / {this.props.matrixobj && this.props.matrixobj.reinvests} </div> : null}   
                                            {this.state.reinvestbutton ? null : <div className="lg-slots-sec2-left-data" onClick={() => this.setState({ reinvestbutton: true })}>{this.props.reinvest === 'latest' ? this.props.matrixobj && this.props.matrixobj.reinvests : this.props.reinvest}/{this.props.matrixobj && this.props.matrixobj.reinvests}</div>}    
                                            <div className="lg-slots-sec2-left-head">Reinvests {this.state.reinvestbutton?<button className="lg-slots-sec2-left-button" onClick={() => this.setState({ redirect: true })}>Go</button>:null}</div>
                                    </div>
                                    <div className="lg-slots-sec2-left-item">
                                            <div className="lg-slots-sec2-left-data">{this.props.matrixobj && this.ethlimiter(this.props.matrixobj.gift)} ETH</div>
                                        <div className="lg-slots-sec2-left-head">Gift</div>
                                    </div>
                                </div>
                        </div>

                                
                        </div>
                        <div className="lg-slots-sec2-left-set2">
                                <div className="lg-slots-sec2-left-item">
                                    <div className="lg-slots-sec2-left-data">{this.props.Maindata && this.props.Maindata.referrer && this.props.Maindata.referrer.id ? 'ID-' + this.NumberPadding(this.props.Maindata.referrer.id, 6) : 'NO SUP'}</div>
                                    <div className="lg-slots-sec2-left-head">Superior</div>
                                </div>
                            
                            <div className="lg-slots-sec2-left-item">
                                    <div className="lg-slots-sec2-left-data">{this.NumberPadding(this.props.level,2) }</div>
                                <div className="lg-slots-sec2-left-head">Current Level</div>
                            </div>
                            <div className="lg-slots-sec2-left-item">
                                <div className="lg-slots-sec2-left-data">{this.calcearnings()} ETH</div>
                                <div className="lg-slots-sec2-left-head">Earnings</div>
                            </div>
                                <div className="lg-slots-sec2-left-item">
                                    <div className="lg-slots-sec2-left-data">{this.props.matrixobj && this.ethlimiter(this.props.matrixobj.loss)} ETH</div>
                                    <div className="lg-slots-sec2-left-head">Loss</div>
                                </div>
                            
                        </div>
                    </div>

                    <div className="lg-slots-sec2-right">

                            {this.props.matrix === "egr" ? <Pair1 data={this.props.Slotobj && this.props.Slotobj.slotholder} /> : <Pair2 data={this.props.Slotobj && this.props.Slotobj.slotholder}/>}
                            
                    </div>
                </div>
                    
            </div>
            </div>
        )
    }
}
