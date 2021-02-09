import React, { Component } from 'react'
import linker from '../../assets/linkb.svg'
import Confetti from 'react-dom-confetti';
import error from '../../assets/erroranime.gif'

const config = {
    angle: "90",
    spread: "57",
    startVelocity: "20",
    elementCount: "100",
    dragFriction: 0.10,
    duration: "1530",
    stagger: "2",
    width: "4px",
    height: "5px",
    perspective: "754px",
    colors: ["#000", "#d7ff37"]
};


export default class Sec2 extends Component {
    state = { nav: false,stats:[],txn:''}

    levref = React.createRef()

    componentDidMount() {
        window.addEventListener("resize", this.checkscroll.bind(this));
        
        if (this.levref.current && this.levref.current.clientWidth < this.levref.current.scrollWidth) {
            this.setState({ nav: true })
        } else {
            this.setState({ nav: false })
        }
        this.fetchstats(0, 0, 0,'normal')
    }

    fetchstats(type,txn,skip,ref){
        if(ref==='normal'){
            fetch(`https://mainserve.herokuapp.com/stats/${this.props.address}/?type=${type}&txn=${txn}&skip=${skip}`)
            .then(response => response.json())
            .then(data => {
                 if (data && data.length < 10){
                    let k
                    if (this.state.stats.length < 10) {
                        k = []
                    } else {
                        k = Array.from(this.state.stats)
                    }
                   
                    data.map((i) => k.push(i))
                    this.setState({ stats: k, loadmore: false})
                }
                
            }).catch(e => { this.setState({ error: true, isloading: false, loadmore: false }) })
        } else if(ref === 'txn'){
            fetch(`https://mainserve.herokuapp.com/stats/${this.props.address}/?type=${type}&txn=${txn}&skip=${skip}`)
                .then(response => response.json())
                .then(data => {
                    if(data) {
                        this.setState({ stats: data, loadmore: false })
                    } 

                }).catch(e => { this.setState({ error: true, isloading: false, loadmore: false }) })
        }
        
    }

    checkscroll() {
        if (this.levref && this.levref.current && this.levref.current.clientWidth < this.levref.current.scrollWidth) {
            this.setState({ nav: true })
        } else {
            this.setState({ nav: false })
        }
    }

    confetti(){
        this.setState({confetti:true})
        
    }

    scrollnow(direction) {
        if (direction === "right") {
            this.levref.current.scrollLeft += 100
        } else if (direction === "left") {
            this.levref.current.scrollLeft -= 100
        }
    }

    typerender(data,plt){

        if(plt === '1'){
            if (data === 'soldplace') {
                return <div className="lg-slots-sec4-table-td-type">
                    <div className="lg-slots-sec4-table-td-type-item">P</div>
                </div>
            } else if (data === 'reinvest') {
                return <div className="lg-slots-sec4-table-td-type">
                    <div className="lg-slots-sec4-table-td-type-item">P</div>
                </div>
            } else if ( data === 'gift') {
                return <div className="lg-slots-sec4-table-td-type">
                    <div className="lg-slots-sec4-table-td-type-item">G</div>
                </div>
            }  else if (data === 'loss') {
                return <div className="lg-slots-sec4-table-td-type">
                    <div className="lg-slots-sec4-table-td-type-item">L</div>
                </div>
            } 
        }else if(plt === '2'){
            if (data === 'slippagesuperior|slippagezero') {
                return <div className="lg-slots-sec4-table-td-type">
                    <div className="lg-slots-sec4-table-td-type-item">SS</div>
                    <div className="lg-slots-sec4-table-td-type-item">P</div>
                </div>
            } else if ( data === 'slippagesuperior|slippageup') {
                return <div className="lg-slots-sec4-table-td-type">
                    <div className="lg-slots-sec4-table-td-type-item">SS</div>
                    <div className="lg-slots-sec4-table-td-type-item">OU</div>
                </div>
            } else if (data === 'soldplace|slippagezero') {
                return <div className="lg-slots-sec4-table-td-type">
                    <div className="lg-slots-sec4-table-td-type-item">P</div>
                </div>
            } else if (data === 'soldplace|slippagedown') {
                return <div className="lg-slots-sec4-table-td-type">
                    <div className="lg-slots-sec4-table-td-type-item">P</div>
                    <div className="lg-slots-sec4-table-td-type-item">OD</div>
                </div>
            } else if (data === 'reinvest|slippagezero') {
                return <div className="lg-slots-sec4-table-td-type">
                    <div className="lg-slots-sec4-table-td-type-item">R</div>
                </div>
            } else if (data === 'reinvest|slippagedown') {
                return <div className="lg-slots-sec4-table-td-type">
                    <div className="lg-slots-sec4-table-td-type-item">R</div>
                    <div className="lg-slots-sec4-table-td-type-item">OD</div>
                </div>
            } else if (data === 'gift') {
                return <div className="lg-slots-sec4-table-td-type">
                    <div className="lg-slots-sec4-table-td-type-item">G</div>
                </div>
            } else if (data === 'loss') {
                return <div className="lg-slots-sec4-table-td-type">
                    <div className="lg-slots-sec4-table-td-type-item">L</div>
                </div>
            } 
        }else if(plt==='0'){
            if(data === 'registered'){
                return <div className="lg-slots-sec4-table-td-type">
                    <div className="lg-slots-sec4-table-td-type-item">R</div>
                </div>
            } else if (data === 'upgrade') {
                return <div className="lg-slots-sec4-table-td-type">
                    <div className="lg-slots-sec4-table-td-type-item">U</div>
                </div>
            } 
        }
    }

    NumberPadding(num, size) {
        let string = "000000000" + num;
        return string.substr(string.length - size);
    }

    txnlimiter(data) {
        return data && data.length > 25 ? data.slice(0, 25) + '...' + data.slice(data.length - 5, data.length) : data
    }

    DollarPadding(num) {
        if (String(num).length > 6) {
            let k = num / 1000
            return Math.round(k) + 'K'
        } else {
            return num
        }
    }

    
    submit(){
        if(this.state.txn !== ''){
            this.fetchstats(0, this.state.txn, 0, 'txn')
        }
    }

    reset(){
        this.fetchstats(0, 0, 0, 'normal')
    }


    render() {
        return (
            <div>
                <div className="lg-slots-sec4-title">
                    <div className="lg-slots-sec4-title-main">Financials</div>
                    {this.state.nav ? <div><button className="lg-slots-sec3-item-left-button" onClick={() => this.scrollnow("left")}>&#60; </button></div> : null}
                    {this.state.nav ? <div><button className="lg-slots-sec3-item-left-button" onClick={() => this.scrollnow("right")}>&#62; </button></div> : null}
                </div>

                

                <div className="lg-partners-sec2-flex">
                    <div>
                        
                        <input className="lg-partners-sec1-input" placeholder="Type Hash Here ..." onChange={(e) => this.setState({ txn: e.target.value, type: '', level: '', platform: '' })}></input>
                    </div>
                    <div>

                        <div className="lg-partners-sec1-button-item"><button className="lg-partners-sec1-button" onClick={() => this.submit()}>GO</button> </div>
                    </div>
                    <div>

                        <div className="lg-partners-sec1-button-item"><button className="lg-partners-sec1-button" onClick={() => this.reset()}>RESET</button> </div>
                    </div>
                </div>

                {/* <div>
                    <button onClick={()=>this.confetti()}>ccc</button>
                    <Confetti active={this.state.confetti} config={config} />

                </div> */}
                    <div>

                    </div>
                <div className="lg-slots-sec4-table-top">
                    <div className="lg-slots-sec4-table" ref={this.levref}>
                        {this.state.stats.length > 0 && <table className="lg-slots-sec4-table-main" >
                            <thead className="lg-slots-sec4-table-thead">
                                <th className="lg-slots-sec4-table-th">Type</th>
                                <th className="lg-slots-sec4-table-th">Date</th>
                                <th className="lg-slots-sec4-table-th">ID</th>
                                <th className="lg-slots-sec4-table-th">Transaction Address</th>
                                <th className="lg-slots-sec4-table-th">Platform</th>
                                <th className="lg-slots-sec4-table-th">Level</th>
                                <th className="lg-slots-sec4-table-th">Value in ETH</th>
                            </thead>

                            <tbody className="lg-slots-sec4-table-tbody">

                                {this.state.stats.map((i) => {
                                    return <tr className="lg-slots-sec4-table-tr">
                                        <td className="lg-slots-sec4-table-td">
                                            {this.typerender(i.txntype, i.matrix)}
                                        </td>
                                        <td className="lg-slots-sec4-table-td">{new Date(i.createdAt).toDateString()}</td>
                                        <td className="lg-slots-sec4-table-td">ID-{this.NumberPadding(i.referrerid)}</td>
                                        <td className="lg-slots-sec4-table-td">{this.txnlimiter(i.transactionId)}<img src={linker} alt="linker" className="lg-slots-sec4-img" /> </td>

                                        <td className="lg-slots-sec4-table-td">{i.matrix === '1' ? 'EGR' : 'LZY'}</td>
                                        <td className="lg-slots-sec4-table-td">{i.level}/10</td>

                                        <td className="lg-slots-sec4-table-td-eth">{this.DollarPadding(i.value)} ETH</td>
                                    </tr>
                                })}



                            </tbody>
                        </table>} 
                        { this.state.loadmore ? <div className="load-more" onClick={() => { this.fetchstats(0,  0 , this.state.stats.length, 'normal')}}>Load More . . .</div> : null} 
                        {this.state.stats.length === 0 && <div className="error-anime-flex">
                            <div><img src={error} className="error-anime-img" /></div>
                            <div className="error-anime-text">No Transactions Found !!!</div>
                        </div>}
                    </div>
                </div>
            </div>
        )
    }
}
