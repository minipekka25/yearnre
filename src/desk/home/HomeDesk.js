import React, { Component } from 'react'
import Sidebar from '../sidebar/Sidebar'
import Sidepanel from '../sidepanel/Sidepanel'
import loading_anime from '../../assets/loading_anime.gif'
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/sideActions'

import Sec1 from '../Sec1'
import Sec2 from './Sec2'
import Sec3 from './Sec3'
import Sec4 from './Sec4'
import Error from '../Error'


const mapStateToProps = (state) => {
    return { Web3: state.web3, side:state.side };
};


const mapDispatchToProps = (dispatch) => {
    return {
        setupsidepanel: (data) => dispatch(actions.setupsidepanel(data)),
        setuptopbar : (data) => dispatch(actions.setuptopbar(data))
    };
};


class HomeDesk extends Component {

    state={isloading:true,isautheticated:false,isuser:false,isprocessing:false,isunknown:false,error:false,userobj:null}

    componentDidMount(){
        if (this.props.side.sidebar === null || this.props.side.topbar === null || this.props.side.topbar.address !== this.props.match.params.useraddress){
            this.initialfetch()
        }
    }

    initialfetch(){
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
                    this.setState({ isprocessing: true, isloading :false })
                } else if (data.response === "User Not Found") {
                    this.setState({ isunknown: true,isloading:false })
                }
            }).catch(e => { this.setState({ error: true,isloading:false }) });
        
    }

    fetchuser(){

        fetch(`https://mainserve.herokuapp.com/dashboard/userdata/${this.props.match.params.useraddress}`)
            .then(response => response.json())
            .then(data => {
                this.setState({userobj:data})
            }).catch(e => { this.setState({ error: true, isloading: false }) })
        
    }

    fetchdata(){
        fetch(`https://mainserve.herokuapp.com/data/sidepanel`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.props.setupsidepanel(data)
                fetch(`https://mainserve.herokuapp.com/data/topbar/${this.props.match.params.useraddress}`)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        this.props.setuptopbar(data)
                        this.setState({ isloading: false })
                    }).catch(e => { this.setState({ error: true, isloading: false }) })
            }).catch(e => { this.setState({ error: true, isloading: false })})
    }


    render() {

        return (
            <div>
                {
                    this.state.isloading ? <div className='loading-flex'><img src={loading_anime} alt="loading" className="loading-anime"/></div> : 
                      <div>  {
                            (this.state.isunknown || this.state.isprocessing) ? <div><Error message={this.state.isunknown ? 'USER NOT FOUND' : 'REGISTRATION UNDER PROGRESS'}/></div> : <div>
                                <div className="grid-container-lg">
                                    <div className="lg-sidebar">
                                        <Sidebar address={this.props.match.params.useraddress} high={'dashboard'}/>
                                    </div>
                                    <div className="lg-sidepanel">
                                        <Sidepanel Maindata={this.props.side} />
                                    </div>

                                    <div className="lg-main">
                                        <Sec1 Maindata={this.props.side.topbar} ethcost={this.props.side.sidebar && this.props.side.sidebar.ethcost} />
                                        <Sec2 Maindata={this.state.userobj && this.state.userobj} ethcost={this.props.side.sidebar && this.props.side.sidebar.ethcost} />
                                        <Sec3 Maindata={this.state.userobj && this.state.userobj} ethcost={this.props.side.sidebar && this.props.side.sidebar.ethcost} />
                                        <Sec4 Maindata={this.state.userobj && this.state.userobj} contractaddress={this.props.side.sidebar && this.props.side.sidebar.contractAddress} />
                                    </div>

                                </div>
                            </div>}  </div>
                    
                }
            </div>
           
            
        )
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(HomeDesk)