import React, { Component } from 'react'
import linker from '../../assets/linkw.svg'
import sideart from '../../assets/sideg.svg'
import './Sec2.css'

const slotprice = ['0.025', '0.050', '0.075', '0.100', '0.500', '1.000', '1.500', '2.000', '2.500', '3.000'];


export default class Sec2 extends Component {
    

    state = { nav: false,invoice:[] }

    levref = React.createRef()

    componentDidMount() {
        window.addEventListener("resize", this.checkscroll.bind(this));
        if (this.levref.current && this.levref.current.clientWidth < this.levref.current.scrollWidth) {
            this.setState({ nav: true })
        } else {
            this.setState({ nav: false })
        }

        this.fetchinvoice()
    }

    fetchinvoice(){
        fetch(`https://mainserve.herokuapp.com/invoice/${this.props.address}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ invoice: data})


            }).catch(e => { this.setState({ error: true, isloading: false }) })
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

    matrixfinder(data){
        if(data==='0'){
            return 'EGR | LZY'
        }else if(data === '1'){
            return 'Eager'
        }else if(data === '2'){
            return 'Lazy'
        }
    }


    txnlimiter(data) {
        return data && data.length > 15 ? data.slice(0, 15) + '...' + data.slice(data.length - 3, data.length) : data
    }


    render() {
        return (
            <div>
                <div className="lg-slots-sec4-title">
                    <div className="lg-slots-sec4-title-main">Invoices</div>
                    {this.state.nav ? <div><button className="lg-slots-sec3-item-left-button" onClick={() => this.scrollnow("left")}>&#60; </button></div> : null}
                    {this.state.nav ? <div><button className="lg-slots-sec3-item-left-button" onClick={() => this.scrollnow("right")}>&#62; </button></div> : null}
                </div>

                
                <div className="lg-invoice-sec2-main">
                    {this.state.invoice.length > 0 && this.state.invoice.map((i)=>{
                        return <div className="lg-invoice-sec2-item-flex">
                            <div className="lg-invoice-sec2-item-box"></div>
                            <div className="lg-invoice-sec2-item-left">
                                <div className="lg-invoice-sec2-item">
                                    <div className="lg-invoice-sec2-data">{this.matrixfinder(i.matrix)}</div>
                                    <div className="lg-invoice-sec2-Head">Platform</div>
                                </div>
                                <div className="lg-invoice-sec2-item">
                                    <div className="lg-invoice-sec2-data">{i.level===0 ? '1' : i.level}/10</div>
                                    <div className="lg-invoice-sec2-Head">Level</div>
                                </div>
                                <div className="lg-invoice-sec2-item">
                                    <div className="lg-invoice-sec2-data">{i.level===0 ? slotprice[i.level] : slotprice[i.level-1]} ETH</div>
                                    <div className="lg-invoice-sec2-Head">Price</div>
                                </div>
                            </div>

                            <div className="lg-invoice-sec2-item-right">
                                <div className="lg-invoice-sec2-item">
                                    <div className="lg-invoice-sec2-data">{this.txnlimiter(i.transactionId) } <img src={linker} alt="linker" className="lg-slots-sec4-img" /></div>
                                    <div className="lg-invoice-sec2-Head">Transaction Hash</div>
                                </div>
                                <div className="lg-invoice-sec2-item">
                                    <div className="lg-invoice-sec2-data">{new Date(i.createdAt).toDateString()}</div>
                                    <div className="lg-invoice-sec2-Head">Transaction Date</div>
                                </div>
                                <div className="lg-invoice-sec2-item">
                                    <div className="lg-invoice-sec2-data">Processed</div>
                                    <div className="lg-invoice-sec2-Head">Confirmations</div>
                                </div>
                            </div>

                            <div className="lg-invoice-sec2-item-image-item">
                                <img src={sideart} alt="sideart" className="lg-invoice-sec2-item-image" />
                            </div>
                        </div>

                    })}
                   
                    

                   
                </div>
            </div>
        )
    }
}
