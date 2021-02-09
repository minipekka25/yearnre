import React, { Component } from 'react'
import linker from '../../assets/linkb.svg'
import './Sec2.css'
import error from '../../assets/erroranime.gif'

export default class Sec2 extends Component {

    state = { nav: false ,partners:[],matrix:'egr',refid:'',refaddress:'',level:0,loadmore:true,ref:false}

    levref = React.createRef()

    componentDidMount() {
        window.addEventListener("resize", this.checkscroll.bind(this));
        if (this.levref.current && this.levref.current.clientWidth < this.levref.current.scrollWidth) {
            this.setState({ nav: true })
        } else {
            this.setState({ nav: false })
        }

        this.fetchpartner(0, 0, 0, 0, 0)
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

     fetchpartner(mat,lev,skip,refid,refaddress,load){
         if(refid!==0){
             fetch(`https://mainserve.herokuapp.com/partners/${this.props.address}/?matrix=${mat}&level=${lev}&skip=${skip}&refid=${refid}`)
                 .then(response => response.json())
                 .then(data => {
                     this.setState({ partners: data.partners, loadmore:false,ref:true })


                 }).catch(e => { this.setState({ error: true, isloading: false, loadmore: false }) })
         }else if(refaddress !==0){
             fetch(`https://mainserve.herokuapp.com/partners/${this.props.address}/?matrix=${mat}&level=${lev}&skip=${skip}&refaddress=${refaddress}`)
                 .then(response => response.json())
                 .then(data => {
                     this.setState({ partners: data.partners })


                 }).catch(e => { this.setState({ error: true, isloading: false, ref: true }) })
         }else if(refid===0 && refaddress ===0){
             fetch(`https://mainserve.herokuapp.com/partners/${this.props.address}/?matrix=${mat}&level=${lev}&skip=${skip}&refid=${refid}&refaddress=${refaddress}`)
                 .then(response => response.json())
                 .then(data => {
                     let k 
                    if(this.state.ref){
                            k=[]
                    }else{
                        k = Array.from(this.state.partners) 
                    }
                    
                        data.partners.map((i) => k.push(i))  
                         if (data.partners && data.partners.length < 5) {
                             this.setState({ partners: k, loadmore: false,  ref: false })
                         } else {
                             this.setState({ partners: k, loadmore: true, ref:false })
                         }
                     
                   


                 }).catch(e => { this.setState({ error: true, isloading: false }) })
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
        if(this.state.refaddress !== ''){
            this.fetchpartner(0, 0, 0, 0, this.state.refaddress)
        }else if(this.state.refid !== ''){
            this.fetchpartner(0, 0, 0, this.state.refid, 0)
        } 
    }

    reset(){
        this.setState({refid:'',refaddress:'',ref:true})
        this.fetchpartner(0, 0, 0, 0, 0)
    }




    render() {
        return (
            <div>
                <div className="lg-slots-sec4-title">
                    <div className="lg-slots-sec4-title-main">Partners Table</div>
                    {this.state.nav ? <div><button className="lg-slots-sec3-item-left-button" onClick={() => this.scrollnow("left")}>&#60; </button></div> : null}
                    {this.state.nav ? <div><button className="lg-slots-sec3-item-left-button" onClick={() => this.scrollnow("right")}>&#62; </button></div> : null}
                </div>
                
                <div className="lg-partners-sec2-flex">
                    <div>
                       
                        <input className="lg-partners-sec1-input-1" placeholder="User ID ..." value={this.state.refid} onChange={(e) => this.setState({ refid: e.target.value, refaddress: '' })}></input>
                    </div>

                    <div>
                        
                        <input className="lg-partners-sec1-input" placeholder="User Address ..." value={this.state.refaddress} onChange={(e) => this.setState({ refaddress: e.target.value, refid: '' })}></input>
                    </div>
                    <div>

                        <div className="lg-partners-sec1-button-item"><button className="lg-partners-sec1-button" onClick={()=> this.submit()}>GO</button> </div>
                    </div>
                    <div>

                        <div className="lg-partners-sec1-button-item"><button className="lg-partners-sec1-button" onClick={()=> this.reset()}>RESET</button> </div>
                    </div>
</div>
               
                <div>


                </div>

                <div className="lg-slots-sec4-table-top">
                    <div className="lg-slots-sec4-table" ref={this.levref}>
                        {this.state.partners.length > 0 ? 

                        <table className="lg-slots-sec4-table-main" >
                            <thead className="lg-slots-sec4-table-thead">
                                <th className="lg-slots-sec4-table-th">ID</th>
                                <th className="lg-slots-sec4-table-th">Registered Date</th>
                                <th className="lg-slots-sec4-table-th">User Address</th>
                                <th className="lg-slots-sec4-table-th">EGR</th>
                                <th className="lg-slots-sec4-table-th">LZY</th>
                                <th className="lg-slots-sec4-table-th">Partners</th>
                                <th className="lg-slots-sec4-table-th">Overtook</th>
                                <th className="lg-slots-sec4-table-th">Earnings in ETH</th>
                            </thead>

                            <tbody className="lg-slots-sec4-table-tbody">
                                {this.state.partners.map((i)=>{
                                  return  <tr className="lg-slots-sec4-table-tr">
                                        <td className="lg-slots-sec4-table-td">ID-{this.NumberPadding(i.id,6)}</td>
                                      <td className="lg-slots-sec4-table-td"> {new Date(i.createdAt).toDateString()}</td>

                                        <td className="lg-slots-sec4-table-td">{this.txnlimiter(i.address)} <img src={linker} alt="linker" className="lg-slots-sec4-img" /> </td>
                                        <td className="lg-slots-sec4-table-td">{i.x3count}/10</td>
                                        <td className="lg-slots-sec4-table-td">{i.x6count}/10</td>
                                        <td className="lg-slots-sec4-table-td">{i.partnersCount}</td>
                                        <td className="lg-slots-sec4-table-td">{i.overtook ? 'YES' : 'NO'}</td>
                                      <td className="lg-slots-sec4-table-td-eth">{this.DollarPadding(i.earningsTotal)} ETH</td>
                                    </tr>
                                })}
                                
                                

                                

                            </tbody>
                            </table> : <div className="error-anime-flex">
                                <div><img src={error} className="error-anime-img" /></div>
                                <div className="error-anime-text">No Partners Found !!!</div>
                            </div>}
                        
                        {this.state.refid === '' && this.state.refaddress === '' && this.state.loadmore ? <div className="load-more" onClick={() => { this.fetchpartner(0, 0, this.state.partners.length, 0, 0,1) }}>Load More . . .</div> : null} 

                    </div>
                </div>
            </div>
        )
    }
}
