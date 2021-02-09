import React, { Component } from 'react'
import stsbg from '../assets/stsbg.svg'
import landhero from '../assets/land-hero.svg'
import { connect } from 'react-redux';
import * as actions from '../redux/actions/web3Actions'
import {Link} from "react-router-dom";

import Hyper from "../contracts/Hyper.json";
import WalletLink from 'walletlink'
import Web3 from 'web3'
import DeviceDetector from "device-detector-js";

const APP_NAME = 'My Awesome App'
const APP_LOGO_URL = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fworldvectorlogo.com%2Flogo%2Ftiktok-logo&psig=AOvVaw2NtFJq4O-mld4y8UhCU-3Z&ust=1603630610289000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCOp9yjzewCFQAAAAAdAAAAABAD'
const ETH_JSONRPC_URL = 'https://ropsten.infura.io/v3/f9d741db28ba4802b253f1cdae45f150'
const CHAIN_ID = 3

export const walletLink = new WalletLink({
    appName: APP_NAME,
    appLogoUrl: APP_LOGO_URL,
    darkMode: false
})

const deviceDetector = new DeviceDetector();
const device = deviceDetector.parse(navigator.userAgent);

const mapStateToProps = (state) => {
    return { Web3: state.web3 };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setupweb3: (data) => dispatch(actions.setupweb3(data))
    };
};

class Login extends Component {

    


    intializeWallet(){
        try {

            if (device.device.type === 'desktop' || (device.device.type !== 'desktop' && typeof window.ethereum === 'undefined')) {

                const ethereum = walletLink.makeWeb3Provider(ETH_JSONRPC_URL, CHAIN_ID)
                const web3 = new Web3(ethereum)

                ethereum.send('eth_requestAccounts').then((accounts) => {
                    web3.eth.defaultAccount = accounts[0]
                    accounts = accounts[0]
                    const deployedNetwork = Hyper.networks["3"];
                    const instance = new web3.eth.Contract(
                        Hyper.abi,
                        deployedNetwork.address,
                    );
                    let stateobj = {
                        web3:web3,
                        account:web3.eth.defaultAccount,
                        contract:instance
                    }

                    this.props.setupweb3(stateobj);
                    
                    
                })

            } else {
                const web3 = new Web3(window.ethereum);
                window.ethereum.enable().then((accounts) => {
                    web3.eth.defaultAccount = accounts[0]
                    const deployedNetwork = Hyper.networks["3"];
                    const instance = new web3.eth.Contract(
                        Hyper.abi,
                        deployedNetwork.address,
                    );

                    let stateobj = {
                        web3: web3,
                        account: web3.eth.defaultAccount,
                        contract: instance
                    }

                    this.props.setupweb3(stateobj)

                })
            }
        } catch (error) {
            alert(error);
        }
    }

    cropaddress(data){
        let string = data
        return string.slice(0, 6) + "....." + string.slice(-4)
    }

    signout = () => {
        walletLink.disconnect()
    }

    render() {
    
        return (
            <div className="rgr-main">
                <div className="rgr-title">YEARN</div>
                <div className="rgr-form-flex">
                    <div className="rgr-form-main">
                        <div className="rgr-form-left">
                            <img src={landhero} alt="stsimg" className="rgr-form-img" />
                        </div>
                        <div className="rgr-form-right-main">
                            <div className="rgr-form-right-head">
                                {this.props.match && this.props.match.params.use === 'signup' ? 'SIGN UP' : 'SIGN IN'} - <br></br> {this.props.match && this.props.match.params.use === 'signup' ? 'FRESH' : 'EXISTING'} USER
                            </div>
                            {this.props.Web3.account ? null : <div className="rgr-form-right-content">
                                <div className="rgr-form-right-content-flex">

                                    <div className="rgr-form-right-button-login-holder">
                                        <button className="rgr-form-right-button-login" onClick={() => this.intializeWallet()} >{this.props.match && this.props.match.params.use === 'signup' ? 'SIGN UP' : 'SIGN IN'}</button>
                                    </div>

                                </div>


                            </div>}
                            
                        
                            {this.props.Web3.account ? 
                                <div className="rgr-form-right-content">
                                    <div className="rgr-form-right-content-flex">

                                        <div className="rgr-form-right-button-login-holder">
                                            {this.props.match && this.props.match.params.use === 'signup' ? <Link
                                                to={{
                                                    pathname: `/register`
                                                }}>
                                                <button className="rgr-form-right-button-login">GO TO REGISTER</button>
                                            </Link> : <Link
                                                to={{
                                                    pathname: `/dashboard/0xd83c48C6FfCA9dE3036f1b6d785d54259c3a5496`
                                                }}>
                                                    <button className="rgr-form-right-button-login">GO TO DASHBOARD</button>
                                                </Link>  }  
                                        </div>

                                    </div>
                                    <div className="rgr-form-right-instructions">
                                        <div className="rgr-form-right-instructions-head">Singned in as {this.cropaddress(this.props.Web3.account)} <span className="rgr-form-right-instructions-item" onClick={() => this.signout()}>| SIGN-OUT</span></div>
                                    </div>

                                </div>:null}
                            
                        </div>
                    </div>
                </div>
                <img src={stsbg} alt="stsimg" className="rgr-form-bg" />
            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)