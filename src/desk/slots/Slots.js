import React, { Component } from 'react'
import Sidebar from '../sidebar/Sidebar'
import Sidepanel from '../sidepanel/Sidepanel'

import Sec1 from '../Sec1'
import Sec2 from './Sec2'
import Sec3 from './Sec3'
import Sec4 from './Sec4'

import loading_anime from '../../assets/loading_anime.gif'
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/sideActions'


const mapStateToProps = (state) => {
    return { Web3: state.web3, side: state.side };
};


const mapDispatchToProps = (dispatch) => {
    return {
        setupsidepanel: (data) => dispatch(actions.setupsidepanel(data)),
        setuptopbar: (data) => dispatch(actions.setuptopbar(data))
    };
};

 class SlotsDesk extends Component {

    state = { isloading: true, isautheticated: false, isuser: false,loadmore:true, isprocessing: false, isunknown: false, error: false, userobj: null, slotobj:null,txnobj:[],matrixobj:null }

    componentDidMount() {
        if (this.props.side.sidebar === null || this.props.side.topbar === null || this.props.side.topbar.address !== this.props.match.params.useraddress) {
            this.initialfetch()
        }
    }

    initialfetch() {
        fetch(`https://mainserve.herokuapp.com/auth/${this.props.match.params.useraddress}`)
            .then(response => response.json())
            .then(data => {
                if (data.response === "User Found") {
                    if (this.props.Web3.account !== this.props.match.params.useraddress) {
                        this.fetchuser()
                        this.fetchdata()
                        this.setState({ isautheticated: true, isuser: true })
                    }
                } else if (data.response === "User Processing") {
                    this.setState({ isprocessing: true, isloading: false })
                } else if (data.response === "User Not Found") {
                    this.setState({ isunknown: true, isloading: false })
                }
            }).catch(e => { this.setState({ error: true, isloading: false }) });

    }

    fetchuser() {
        
        fetch(`https://mainserve.herokuapp.com/slots/${this.props.match.params.useraddress}/${this.props.match.params.matrix}/${this.props.match.params.level}/${this.props.match.params.reinvest}`)
            .then(response => response.json())
            .then(data => {    

                this.setState({ slotobj: data.foundslot, userobj: data.founduser,matrixobj:data.matrixobj, isloading: false})  
            }).catch(e => { this.setState({ error: true, isloading: false }) })

    }

    fetchdata() {
        fetch(`https://mainserve.herokuapp.com/data/sidepanel`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.props.setupsidepanel(data)
                this.fetchtxn(0)
                fetch(`https://mainserve.herokuapp.com/data/topbar/${this.props.match.params.useraddress}`)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        this.props.setuptopbar(data)
                        this.setState({ isloading: false })
                    }).catch(e => { this.setState({ error: true, isloading: false }) })
            }).catch(e => { this.setState({ error: true, isloading: false }) })
    }

    fetchtxn(skip){
        fetch(`https://mainserve.herokuapp.com/txn/${this.props.match.params.useraddress}/${this.props.match.params.matrix}/${this.props.match.params.level}/${skip}`)
            .then(response => response.json())
            .then(data => { 
                let b = Array.from(this.state.txnobj) 
                data.map(i=> b.push(i))  
                if (data.length < 5){
                    this.setState({ txnobj: b ,loadmore:false})
                }else{
                    this.setState({ txnobj: b})
                }
                this.setState({ txnobj:b  })})
            .catch(e => { this.setState({ error: true, isloading: false }) })
    }


    render() {
        return (
            <div>
                { this.state.isloading ? <div className='loading-flex'><img src={loading_anime} alt="loading" className="loading-anime" /></div> : <div className="grid-container-lg">

                    <div className="lg-sidebar">
                        <Sidebar address={this.props.match.params.useraddress} high={'dashboard'}/>
                    </div>
                    <div className="lg-sidepanel">
                        <Sidepanel Maindata={this.props.side}/>
                    </div>

                    <div className="lg-main">
                        <Sec1 Maindata={this.props.side.topbar} ethcost={this.props.side.sidebar && this.props.side.sidebar.ethcost}/>
                        <Sec2 Maindata={this.state.userobj} Slotobj={this.state.slotobj} matrixobj={this.state.matrixobj} level={this.props.match.params.level} matrix={this.props.match.params.matrix} reinvest={this.props.match.params.reinvest}/>
                        <Sec3 Maindata={this.state.userobj} matrix={this.props.match.params.matrix} level={this.props.match.params.level}/>
                        <Sec4 data={this.state.txnobj} matrix={this.props.match.params.matrix}/>
                        {this.state.loadmore ? <div className="load-more" onClick={() => { this.fetchtxn(this.state.txnobj.length) }}>Load More . . .</div> : null} 
                    </div>

                </div>}
            </div>
           
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SlotsDesk)