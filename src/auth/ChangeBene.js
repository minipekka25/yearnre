import React, { Component } from "react";
import stsbg from "../assets/stsbg.svg";
import landhero from "../assets/land-hero.svg";
import loading from '../assets/loading.gif'
import "./Register.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../redux/actions/web3Actions";
import Confetti from "react-dom-confetti";

import Hyper from "../contracts/Hyper.json";
import WalletLink from "walletlink";
import Web3 from "web3";
import DeviceDetector from "device-detector-js";

const APP_NAME = "My Awesome App";
const APP_LOGO_URL =
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fworldvectorlogo.com%2Flogo%2Ftiktok-logo&psig=AOvVaw2NtFJq4O-mld4y8UhCU-3Z&ust=1603630610289000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCOp9yjzewCFQAAAAAdAAAAABAD";
const ETH_JSONRPC_URL =
    "https://ropsten.infura.io/v3/f9d741db28ba4802b253f1cdae45f150";
const CHAIN_ID = 3;

export const walletLink = new WalletLink({
    appName: APP_NAME,
    appLogoUrl: APP_LOGO_URL,
    darkMode: false,
});

const deviceDetector = new DeviceDetector();
const device = deviceDetector.parse(navigator.userAgent);

const mapStateToProps = (state) => {
    return { Web3: state.web3 };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setupweb3: (data) => dispatch(actions.setupweb3(data)),
    };
};

const config = {
    angle: "90",
    spread: "60",
    startVelocity: "20",
    elementCount: "200",
    dragFriction: 0.1,
    duration: "1530",
    stagger: "2",
    width: "6px",
    height: "8px",
    perspective: "754px",
    colors: ["#ffffff", "#d7ff37"],
};

class Register extends Component {
    state = { ref: "",newbene:'', confetti: false, error: false, txnhash: "", cou: true, regloading: false, next: false, counter: 30, receipt: { Registration: { transactionHash: '' } } };

    componentDidMount() {
        this.reviveremote()
    }

    intializeWallet() {
        try {
            if (
                device.device.type === "desktop" ||
                (device.device.type !== "desktop" &&
                    typeof window.ethereum === "undefined")
            ) {
                console.log(this.props)
                const ethereum = walletLink.makeWeb3Provider(ETH_JSONRPC_URL, CHAIN_ID);
                const web3 = new Web3(ethereum);

                ethereum.send("eth_requestAccounts").then((accounts) => {
                    web3.eth.defaultAccount = accounts[0];
                    accounts = accounts[0];
                    const deployedNetwork = Hyper.networks["3"];
                    const instance = new web3.eth.Contract(
                        Hyper.abi,
                        deployedNetwork.address
                    );
                    let stateobj = {
                        web3: web3,
                        account: web3.eth.defaultAccount,
                        contract: instance,
                    };

                    this.props.setupweb3(stateobj);
                    this.setState({ stateobj: stateobj, ref: this.props.match.params.ref });



                });
            } else {

                const web3 = new Web3(window.ethereum);
                window.ethereum.enable().then((accounts) => {
                    web3.eth.defaultAccount = accounts[0];
                    const deployedNetwork = Hyper.networks["3"];
                    const instance = new web3.eth.Contract(
                        Hyper.abi,
                        deployedNetwork.address
                    );

                    let stateobj = {
                        web3: web3,
                        account: web3.eth.defaultAccount,
                        contract: instance,
                    };

                    this.props.setupweb3(stateobj);
                    this.setState({ stateobj: stateobj, ref: this.props.match.params.ref });



                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    cropaddress(data) {
        let string = data;
        return string.slice(0, 6) + "....." + string.slice(-4);
    }

    signout = () => {
        walletLink.disconnect();
    };

    register = async () => {
        this.fetro();
        // fetch(`https://mainserve.herokuapp.com/auth/${this.props.Web3.account}`)
        //   .then((response) => response.json())
        //   .then((data) => {
        //     if (data.response) {
        //       fetch(
        //         `https://mainserve.herokuapp.com/auth/${this.props.match.params.useraddress}`
        //       )
        //         .then((response1) => response1.json())
        //         .then((data1) => {
        //           if (
        //             data1.response !== "User Processing" ||
        //             data1.response !== "User Not Found"
        //           ) {
        //             this.fetro();
        //             this.setState({ isautheticated: true, isuser: true });
        //           }
        //         });
        //     } else if (data.response === "User Processing") {
        //       this.setState({ isprocessing: true, isloading: false });
        //     } else if (data.response === "User Not Found") {
        //       this.setState({ isunknown: true, isloading: false });
        //     }
        //   })
        //   .catch((e) => {
        //     this.setState({ error: true, isloading: false });
        //   });
    };

    reviveremote() {
        fetch('https://queuew.herokuapp.com/revive')
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }

    sendpost(events) {
        let data = { events: events }
        fetch('https://queuec1.herokuapp.com/post/events', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                this.setcounter()
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }

    setcounter() {
        this.setState({ cou: false })

        setInterval(() => {
            this.setState({ counter: this.state.counter - 1 })
        }, 1000);


    }

    setconfetti() {
        this.setState({ confetti: true });
    }

    fetro() {
        this.setState({ regloading: true })
        this.state.stateobj.contract.methods
            .changeBeneficiery(this.state.newbene)
            .send({
                from: this.props.Web3.account,
                gas: 2000000
            })
            .on(
                "transactionHash",
                function (hash) {
                    this.setState({ txnhash: hash });
                }.bind(this)
            )
            .on(
                "confirmation",
                function (confirmationNumber, receipt) {
                    if (confirmationNumber || receipt) {
                        this.setconfetti();
                        this.setState({ next: true, regloading: false })

                    }
                }.bind(this)
            )
            .on(
                "receipt",
                function (receipt) {
                    console.log('reciept');
                    console.log(receipt);
                    this.setconfetti();
                    this.sendpost(receipt.events)
                    this.setState({ next: true, regloading: false })
                }.bind(this)
            )
            .on(
                "error",
                function (error, receipt) {
                    console.log(error, receipt);
                    this.setState({ error: true, regloading: false });
                }.bind(this)
            );
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
                                CHANGE - <br></br>YOUR BENEFICIERY
              </div>
                            {this.props.Web3.account ? (
                                <div>
                                    <div className="rgr-form-right-content">
                                        <div className="rgr-form-right-content-flex">
                                            <div className="rgr-form-right-input-holder">
                                                <input
                                                    placeholder="New Beneficiery"
                                                    className="rgr-form-right-input"
                                                    value={this.state.newbene}
                                                    onChange={(e) =>
                                                        this.setState({ newbene: e.target.value })
                                                    }
                                                ></input>
                                            </div>
                                            <div className="rgr-form-right-button-holder">
                                                <button
                                                    className="rgr-form-right-button"
                                                    onClick={() => this.register()}
                                                >
                                                    {this.state.regloading ? <img src={loading} alt="loading" className="rgr-form-right-loading-btn" /> : 'CHANGE NOW'}
                                                </button>
                                                <Confetti
                                                    active={this.state.confetti}
                                                    config={config}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {this.state.next && <div className="rgr-form-right-content">
                                        <div className="rgr-form-right-content-flex">

                                            <div className="rgr-form-right-button-holder">
                                                {this.state.counter <= 0 ? <Link to={{ pathname: `/dashboard/${this.props.Web3.account}` }}> <button
                                                    className="rgr-form-right-button"

                                                >
                                                    GO TO DASHBOARD
                        </button> </Link> : <button
                                                        className="rgr-form-right-button"

                                                    >
                                                        {this.state.cou ? 'CLICK HERE' : `PROCESSING ${this.state.counter} Secs`}

                                                    </button>}

                                            </div>
                                        </div> </div>}

                                    <div className="rgr-form-right-instructions">
                                        {this.state.txnhash !== "" ? (
                                            <div className="rgr-form-right-instructions-head">
                                                Transaction Hash is{" "}
                                                {this.cropaddress(this.state.txnhash)}{" "}
                                                <span
                                                    className="rgr-form-right-instructions-item"
                                                    onClick={() => {
                                                        navigator.clipboard.writeText(this.state.txnhash);
                                                    }}
                                                >
                                                    | COPY HASH
                        </span>
                                            </div>
                                        ) : null}
                                    </div>
                                    <div className="rgr-form-right-instructions">
                                        <div className="rgr-form-right-instructions-head">
                                            Singned in as {this.cropaddress(this.props.Web3.account)}{" "}
                                            <span
                                                className="rgr-form-right-instructions-item"
                                                onClick={() => this.signout()}
                                            >
                                                | SIGN-OUT
                      </span>
                                        </div>
                                    </div>
                                    <div className="rgr-form-right-instructions">
                                        <div className="rgr-form-right-instructions-head">
                                            {" "}
                      HOW TO REGISTER?{" "}
                                            <span className="rgr-form-right-instructions-item">
                                                MOBILE
                      </span>{" "}
                      |{" "}
                                            <span className="rgr-form-right-instructions-item">
                                                PC
                      </span>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                    <div className="rgr-form-right-content">
                                        <div className="rgr-form-right-content-flex">
                                            <div className="rgr-form-right-button-holder">
                                                <button
                                                    className="rgr-form-right-button"
                                                    onClick={() => this.intializeWallet()}
                                                >
                                                    INITIALIZE WALLET
                      </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                        </div>
                    </div>
                </div>
                <img src={stsbg} alt="stsimg" className="rgr-form-bg" />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
