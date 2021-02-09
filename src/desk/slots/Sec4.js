import React, { Component } from 'react'
import linker from '../../assets/linkb.svg'
import './Sec4.css'
import error from '../../assets/erroranime.gif'

const slotprice = ['0.025', '0.050', '0.075', '0.100', '0.500', '1.000', '1.500', '2.000', '2.500', '3.000'];


export default class Sec4 extends Component {

    state = { nav: false }

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
            this.levref.current.scrollLeft += 100
        } else if (direction === "left") {
            this.levref.current.scrollLeft -= 100
        }
    }

    egrrender(data) {
        if (data.place === 3 || data.place === 0) {
            if (data.txntype === 'gift' && data.place === 3) {
                return <div className="lg-slots-sec4-table-td-type">
                    <div className="lg-slots-sec4-table-td-type-item">G</div>
                    <div className="lg-slots-sec4-table-td-type-item">R</div>
                </div>
            } else if (data.txntype === 'loss' && data.place === 3 ) {
                return <div className="lg-slots-sec4-table-td-type">
                    <div className="lg-slots-sec4-table-td-type-item">L</div>
                    <div className="lg-slots-sec4-table-td-type-item">R</div>
                </div>
            } else if (data.txntype === 'loss'){
                return <div className="lg-slots-sec4-table-td-type">
                    <div className="lg-slots-sec4-table-td-type-item">L</div>
                </div>
            } else if (data.txntype === 'gift') {
                return <div className="lg-slots-sec4-table-td-type">
                    <div className="lg-slots-sec4-table-td-type-item">G</div>
                </div>
            } else if (data.place === 3) {
                return <div className="lg-slots-sec4-table-td-type">
                    <div className="lg-slots-sec4-table-td-type-item">R</div>
                </div>
            } 
            
        } else if (data.place === 1 || data.place === 2 || data.place === 0) {
            if (data.txntype === 'gift'){
                return <div className="lg-slots-sec4-table-td-type">
                    <div className="lg-slots-sec4-table-td-type-item">G</div>
                </div>
            } else if (data.txntype === 'loss'){
                return <div className="lg-slots-sec4-table-td-type">
                    <div className="lg-slots-sec4-table-td-type-item">L</div>
                </div>
            } else{
                return <div className="lg-slots-sec4-table-td-type">
                    <div className="lg-slots-sec4-table-td-type-item">P</div>
                </div>
            }
            
        } 
    }

    lzyrender(data) {

        if (data.place === 1 || data.place === 2 || data.place === 0) {
            if (data && data.txntype === 'slippagesuperior|slippagezero') {
                return <div className="lg-slots-sec4-table-td-type">
                    <div className="lg-slots-sec4-table-td-type-item">P</div>
                    <div className="lg-slots-sec4-table-td-type-item">SS</div>
                </div>
            } else if (data && data.txntype === 'slippagesuperior|slippageup') {
                return <div className="lg-slots-sec4-table-td-type">
                    <div className="lg-slots-sec4-table-td-type-item">OU</div>
                    <div className="lg-slots-sec4-table-td-type-item">SS</div>
                </div>
            } else if (data && data.txntype === 'gift'){
                return <div className="lg-slots-sec4-table-td-type">
                    <div className="lg-slots-sec4-table-td-type-item">G</div>
                </div>
            } else if (data && data.txntype === 'loss'){
                return <div className="lg-slots-sec4-table-td-type">
                    <div className="lg-slots-sec4-table-td-type-item">L</div>
                </div>
            }

        } else if (data.place === 3 || data.place === 4 || data.place === 5 || data.place === 0) {
            if (data && data.txntype === 'soldplace|slippagezero') {
                return <div className="lg-slots-sec4-table-td-type">
                    <div className="lg-slots-sec4-table-td-type-item">P</div>
                </div>
            } else if (data && data.txntype === 'soldplace|slippagedown') {
                return <div className="lg-slots-sec4-table-td-type">
                    <div className="lg-slots-sec4-table-td-type-item">OD</div>
                </div>
            }
        } else if (data.place === 6 || data.place === 0) {
            if (data && data.txntype === 'reinvest|slippagezero') {
                return <div className="lg-slots-sec4-table-td-type">
                    <div className="lg-slots-sec4-table-td-type-item">R</div>
                </div>
            } else if (data && data.txntype === 'reinvest|slippagedown') {
                return <div className="lg-slots-sec4-table-td-type">
                    <div className="lg-slots-sec4-table-td-type-item">R</div>
                    <div className="lg-slots-sec4-table-td-type-item">OU</div>
                </div>
            }
        }
    }

   


    NumberPadding(num, size) {
        let string = "000000000" + num;
        return string.substr(string.length - size);
    }

    txnlimiter(data){
        return data.length > 25 ? data.slice(0, 25) + '...' + data.slice(data.length - 5, data.length) : data
    }


    render() {
       
        return (
            <div>
                <div className="lg-slots-sec4-title">
                    <div className="lg-slots-sec4-title-main">Transactions</div>
                    {this.state.nav ? <div><button className="lg-slots-sec3-item-left-button" onClick={() => this.scrollnow("left")}>&#60; </button></div> : null}
                    {this.state.nav ? <div><button className="lg-slots-sec3-item-left-button" onClick={() => this.scrollnow("right")}>&#62; </button></div> : null}
                    
                </div>
                <div className="lg-slots-sec4-table" ref={this.levref}>
                    <table className="lg-slots-sec4-table-main" >
                        {this.props.data && this.props.data.length > 0 ? <thead className="lg-slots-sec4-table-thead">
                            <th className="lg-slots-sec4-table-th">Type</th>
                            <th className="lg-slots-sec4-table-th">Date</th>
                            <th className="lg-slots-sec4-table-th">ID</th>
                            <th className="lg-slots-sec4-table-th">Transaction Address</th>
                            <th className="lg-slots-sec4-table-th">Earnings in ETH</th>
                        </thead> : null}
                        

                        <tbody className="lg-slots-sec4-table-tbody">
                            {this.props.data.map((i)=>{
                                return (<tr className="lg-slots-sec4-table-tr">
                                    <td>
                                       {this.props.matrix === 'egr' ? this.egrrender(i) : this.lzyrender(i)}
                                    </td>
                                    <td className="lg-slots-sec4-table-td">11.12.2020 03:45</td>
                                    <td className="lg-slots-sec4-table-td">ID-{this.NumberPadding(i.referrerid,6)}</td>
                                    <td className="lg-slots-sec4-table-td">{this.txnlimiter(i.transactionId)} <img src={linker} alt="linker" className="lg-slots-sec4-img" /> </td>
                                    <td className="lg-slots-sec4-table-td-eth">{i.place === 3 && (this.props.matrix === 'egr' || i.place === 6) && (this.props.matrix === 'lzy'|| i.txntype === 'loss') ? - slotprice[i.level - 1] : slotprice[i.level - 1]} ETH</td>
                                </tr>)
                            })}
                           

                        </tbody>
                    </table>
                
                    {this.props.data && this.props.data.length > 0 ? null:  <div className="error-anime-flex">
                        <div><img src={error} className="error-anime-img"/></div>
                        <div className="error-anime-text">No Transactions Yet !!!</div>
                    </div>}
                </div>
            </div>
        )
    }
}

