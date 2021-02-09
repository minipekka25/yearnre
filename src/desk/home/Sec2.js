import React, { Component } from 'react'
import './Sec2.css'
import Chart from '../../components/Helpers/Chart'
import Blockg from '../../components/home/Blockg'
import Blockb from '../../components/home/Blockb'
import { Link } from "react-router-dom";

const price = [0.025, 0.075, 0.15, 0.25, 0.75, 1.75, 3.25, 5.25, 7.75, 10.75];
const slotprice = ['0.025', '0.050', '0.075', '0.100', '0.500', '1.000', '1.500', '2.000', '2.500', '3.000'];


export default class Sec2 extends Component {


    state = { nav: false,ch1:false,ch2:false }

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

    DollarPadding(num) {
        if (String(num).length > 6) {
            let k = num / 1000
            return Math.round(k) + 'K'
        } else {
            return num
        }
    }

    NumberPadding(num, size) {
        let string = "000000000" + num;
        return string.substr(string.length - size);
    }

    Expcalc(data, type) {


        let x3active = data.x3active.filter(Boolean).length
        

        if (type === 'exp') {
            return this.DollarPadding(Math.round((price[x3active - 1]) * this.props.ethcost))
        } else if (type === 'profit') {
            let k = this.DollarPadding(Math.round((data.earnings3x - price[x3active - 1]) * this.props.ethcost))
            if (k > 0) {
                return k
            } else {
                return 0
            }
        } else if(type === 'active'){
            return x3active
        }
    }


    blockcalcup(data){
        let x3active = Array.from(data && data.x3active) 
        x3active.splice(5, 10)
        return x3active.map((i, idx) => { return i ? <Link to={{ pathname: `/slots/${data && data.address}/egr/${idx + 1}/latest` }}> <Blockg cost={slotprice[idx]} partners={data.x3Matrix[idx] && data.x3Matrix[idx].soldspots} reinvests={data.x3Matrix[idx] && data.x3Matrix[idx].reinvests} /> </Link> : <Link to={{ pathname: `/upgrade/${this.props.Maindata.address}/EAGER/${idx + 1}` }}><Blockb cost={slotprice[idx]} /> </Link>  }) 
    }

    blockcalcdown(data) {
        let x3active = Array.from(data && data.x3active)
        x3active.splice(0, 5)
        return x3active.map((i, idx) => {
            return i ? <Link to={{ pathname: `/slots/${data && data.address}/egr/${idx + 6}/latest` }}> <Blockg cost={slotprice[idx + 5]} partners={data.x3Matrix[idx + 5].soldspots} reinvests={data.x3Matrix[idx + 5].reinvests} /> </Link> : <Link to={{ pathname: `/upgrade/${this.props.Maindata.address}/EAGER/${idx + 6}` }}> <Blockb cost={slotprice[idx+5]}/> </Link>})
    }

    


    render() {
        return (
            <div className="lg-home-sec2">
                <div className="lg-home-sec2-left">
                    
                    <div className="lg-home-sec2-title-left">Eager Platform</div>
                    <div className="lg-home-sec2-left-flex">
                        <div>
                            <div className="lg-home-sec2-item">
                                <div className="lg-home-sec2-data">${this.props.Maindata && this.Expcalc(this.props.Maindata,'exp') }</div>
                                <div className="lg-home-sec2-head">Expense</div>
                            </div>
                            <div className="lg-home-sec2-item">
                                <div className="lg-home-sec2-data">#{this.props.Maindata && this.NumberPadding(this.Expcalc(this.props.Maindata, 'active'),2) }</div>
                                <div className="lg-home-sec2-head">Active Levels</div>
                            </div>
                        </div>
                        <div>
                            <div className="lg-home-sec2-item" onMouseEnter={() => this.setState({ ch1: true })}
                                onMouseLeave={() => this.setState({ ch1: false })}>
                                <Chart left={this.props.Maindata && this.Expcalc(this.props.Maindata, 'profit') } right={ this.props.Maindata && this.Expcalc(this.props.Maindata, 'exp') }/>
                                <div className="lg-home-sec2-head" >{this.state.ch1 ? `$${this.props.Maindata && this.Expcalc(this.props.Maindata, 'profit') } vs $${this.props.Maindata && this.Expcalc(this.props.Maindata, 'exp')}`   : 'Profit vs Spent'}</div>
                            </div>
                            <div className="lg-home-sec2-item" onMouseEnter={() => this.setState({ ch2: true })}
                                onMouseLeave={() => this.setState({ ch2: false })}>
                                <Chart left={this.props.Maindata && this.Expcalc(this.props.Maindata, 'active')} right={10}/>
                                <div className="lg-home-sec2-head" > {this.state.ch2 ? `${this.props.Maindata && this.Expcalc(this.props.Maindata, 'active')} vs 12` : 'Active vs Inactive'}</div>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className="lg-home-sec2-right">
                    <div className="lg-home-sec2-title">
                        <div>Blocks</div>
                        {this.state.nav ? <button className="lg-slots-sec2-title-left-button" onClick={() => this.scrollnow('left')}>&#60;</button> : null}
                        {this.state.nav ? <button className="lg-slots-sec2-title-right-button" onClick={() => this.scrollnow('right')}>&#62;</button> : null}
                    </div>
                    {/* <div className="lg-home-sec2-title-right">Blocks</div> */}
                    <div className="lg-home-sec2-right-container" ref={this.levref}>
                        <div className="lg-home-sec2-title-right-row1">
                            {this.blockcalcup(this.props.Maindata)}
                        </div>
                        <div className="lg-home-sec2-title-right-row2">
                            {this.blockcalcdown(this.props.Maindata)}
                        </div>
                    </div>
                  
                </div>
            </div>
        )
    }
}
