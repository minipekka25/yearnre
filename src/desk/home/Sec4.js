import React, { Component } from 'react'
import linker from '../../assets/link.svg'
import linkerw from '../../assets/linkw.svg'
import sideart from '../../assets/sideg.svg'
import copy from '../../assets/copy.svg'
import { Link } from "react-router-dom";
import './Sec4.css'

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
            this.levref.current.scrollLeft += 200
        } else if (direction === "left") {
            this.levref.current.scrollLeft -= 200
        }
    }

    strlimiter(data){
        return data.length > 20 ? data.slice(0, 15) + '...' + data.slice(data.length - 5, data.length) : data
    }

    NumberPadding(num, size) {
        let string = "000000000" + num;
        return string.substr(string.length - size);
    }
    DollarPadding(num) {
        if (String(num).length > 5) {
            return String(num).slice(0, 5)
        } else {
            return num
        }
    }

    render() {
        return (
            <div >
                <div className="lg-home-sec2-title">
                    <div>User Board</div>
                    {this.state.nav ? <button className="lg-slots-sec2-title-left-button" onClick={() => this.scrollnow('left')}>&#60;</button> : null}
                    {this.state.nav ? <button className="lg-slots-sec2-title-right-button" onClick={() => this.scrollnow('right')}>&#62;</button> : null}
                </div>
                <div className="lg-home-sec4" ref={this.levref}>
                    <div className="lg-home-sec4-flex">
                        <div className="lg-home-sec4-left">
                            <div>
                                <div className="lg-home-sec4-left-item">
                                    <div className="lg-home-sec4-left-data">{this.strlimiter(this.props.Maindata.address) }<img src={linker} alt="linker" className="lg-home-sec4-left-icon" /></div>
                                    <div className="lg-home-sec4-left-head">User Address</div>
                                </div>
                                <div className="lg-home-sec4-left-item">
                                    <div className="lg-home-sec4-left-data">{this.strlimiter(this.props.Maindata.beneficiery)}<img src={linker} alt="linker" className="lg-home-sec4-left-icon" /></div>
                                    <div className="lg-home-sec4-left-head">Beneficiery Address</div>
                                </div>
                                <div className="lg-home-sec4-left-item">
                                    <div className="lg-home-sec4-left-data">{this.props.Maindata.referrer ? this.strlimiter(this.props.Maindata.referrer.address) : 'No Referrer'}<img src={linker} alt="linker" className="lg-home-sec4-left-icon" /></div>
                                    <div className="lg-home-sec4-left-head">Referrer Address</div>
                                </div>
                            </div>

                            <div>
                                <div className="lg-home-sec4-left-item">
                                    <div className="lg-home-sec4-left-data">{this.props.Maindata.overtook ? 'Yes' : 'No'}</div>
                                    <div className="lg-home-sec4-left-head">Overtook</div>
                                </div>
                                <div className="lg-home-sec4-left-item">
                                    <div className="lg-home-sec4-left-data">{this.props.Maindata.referrer ? 'ID-' + this.NumberPadding(this.props.Maindata.referrer.id,6) : 'No Referrer'}<img src={linker} alt="linker" className="lg-home-sec4-left-icon" /></div>
                                    <div className="lg-home-sec4-left-head">Referrer</div>
                                </div>
                                <div className="lg-home-sec4-left-item">
                                    <div className="lg-home-sec4-left-data">{this.DollarPadding(this.props.Maindata.totalloss)} ETH</div>
                                    <div className="lg-home-sec4-left-head">Gift</div>
                                </div>
                            </div>

                            <div>
                                <div className="lg-home-sec4-left-item">
                                    <div className="lg-home-sec4-left-data">{this.props.Maindata.overtaken.length}<img src={linker} alt="linker" className="lg-home-sec4-left-icon" /></div>
                                    <div className="lg-home-sec4-left-head">Overtaken</div>
                                </div>
                                <div className="lg-home-sec4-left-item">
                                    <div className="lg-home-sec4-left-data">{this.NumberPadding(this.props.Maindata.partnersCount,6)}<img src={linker} alt="linker" className="lg-home-sec4-left-icon" /></div>
                                    <div className="lg-home-sec4-left-head">Total Partners</div>
                                </div>
                                <div className="lg-home-sec4-left-item">
                                    <div className="lg-home-sec4-left-data">{this.DollarPadding(this.props.Maindata.totalloss)} ETH</div>
                                    <div className="lg-home-sec4-left-head">Loss</div>
                                </div>
                            </div>
                        </div>

                        <div className="lg-home-sec4-right">
                            <div>
                                <div className="lg-home-sec4-right-item">
                                    <div className="lg-home-sec4-right-data">{`https://yearn.biz/ref/${this.props.Maindata.id}`}<img src={copy} alt="linker" className="lg-home-sec4-right-icon" /></div>
                                    <div className="lg-home-sec4-right-head">Affiliate Link</div>
                                </div>
                                <div className="lg-home-sec4-right-item">
                                    <div className="lg-home-sec4-right-data">{this.strlimiter(this.props.contractaddress)}<img src={linkerw} alt="linker" className="lg-home-sec4-left-icon" /></div>
                                    <div className="lg-home-sec4-right-head">Smart Contract Address</div>
                                </div>
                                <Link to={{ pathname: `/changebene/${this.props.Maindata.address}` }}>     <div className="lg-home-sec4-right-item-button">
                                    CHANGE BENEFICIERY
                            </div> </Link>

                            </div>

                            <img src={sideart} alt="sideart" className="lg-home-sec4-right-art" ></img>

                        </div>

                    </div>
                </div>
                
            </div>
        )
    }
}
