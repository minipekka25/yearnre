import React, { Component } from 'react'
import './Sec1.css'

const price = [0,0.025, 0.075, 0.15, 0.25, 0.75, 1.75, 3.25, 5.25, 7.75, 10.75];

export default class Sec1 extends Component {

  

    DollarPadding(num) {
        if (String(num).length > 6) {
            let k = num / 1000
            return Math.round(k) + 'K'
        } else {
            return num
        }
    }

    Expcalc(data,type){
       

        let x3active = data.x3active.filter(Boolean).length
        let x6active = data.x6active.filter(Boolean).length

        if(type === 'exp'){
            return this.DollarPadding(Math.round((price[x3active] + price[x6active]) * this.props.ethcost)) 
        }else if(type === 'profit'){
            let k = this.DollarPadding(Math.round((data.earningsTotal - (price[x3active] + price[x6active])) * this.props.ethcost)) 
            if(k > 0){
                return k
            }else{
                return 0 
            }
        }else if(type === 'break'){

            let ex = this.DollarPadding(Math.round((price[x3active] + price[x6active]) * this.props.ethcost))
            let pro = this.DollarPadding(Math.round(( (data.earningsTotal + data.totalgift ) - (price[x3active] + price[x6active])) * this.props.ethcost)) 

            if(pro > ex){
                return 0
            }else{
                return - pro 
            }
        }
        

    }


    render() {
        return (
            <div className="lg-home-sec1">
                
                  
                        <div className="lg-home-sec1-item">
                    <div className="lg-home-sec1-data">${this.props.Maindata && this.DollarPadding(Math.round(this.props.Maindata.earningsTotal * this.props.ethcost)) }</div>
                            <div className="lg-home-sec1-head">Total Earnings</div>
                        </div>
                        <div className="lg-home-sec1-item">
                    <div className="lg-home-sec1-data">${this.props.Maindata && this.DollarPadding(Math.round(this.props.Maindata.earnings3x * this.props.ethcost))}</div>
                            <div className="lg-home-sec1-head">Earnings in EGR</div>
                        </div>
                        <div className="lg-home-sec1-item">
                    <div className="lg-home-sec1-data">${this.props.Maindata && this.DollarPadding(Math.round(this.props.Maindata.earnings6x * this.props.ethcost))}</div>
                            <div className="lg-home-sec1-head">Earnings in LZY</div>
                        </div>
                        <div className="lg-home-sec1-item">
                    <div className="lg-home-sec1-data">${this.props.Maindata && this.Expcalc(this.props.Maindata,'exp')}</div>
                            <div className="lg-home-sec1-head">Expenditure</div>
                        </div>
                        <div className="lg-home-sec1-item">
                    <div className="lg-home-sec1-data">${this.props.Maindata && this.Expcalc(this.props.Maindata, 'profit')}</div>
                            <div className="lg-home-sec1-head">Profit</div>
                        </div>
                        <div className="lg-home-sec1-item">
                    <div className="lg-home-sec1-data">${this.props.Maindata && this.Expcalc(this.props.Maindata, 'break')}</div>
                            <div className="lg-home-sec1-head">Breakeven</div>
                        </div>
             
               
               
            </div>
        )
    }
}
