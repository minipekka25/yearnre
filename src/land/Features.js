import React, { Component } from 'react'
import ftrimg from '../assets/featuresimg.svg'
import ftrarc from '../assets/featuresarc.svg'
import './Features.css'

export default class Features extends Component {
    render() {
        return (
            <div className="land-ftr-holder-main">
                <div className="land-ftr-main-title-desk">FEATURES -</div>
                
                <div className="land-ftr-main">
                    
                    <div className="land-ftr-main-flex">
                        <div className="land-ftr-img-flex">
                            <img src={ftrarc} alt="ftrimg" className="land-ftr-arc" />
                            <img src={ftrimg} alt="ftrimg" className="land-ftr-img" />

                        </div>
                        <div>
                            <div className="land-ftr-item">
                                <div className="land-ftr-head">- No Risk </div>
                                <div className="land-ftr-data">The platform is powered by a Smart Contract deployed in Ethereum Network. This gives the users No Risk assurance as the contract serves its purpose for the community far until the lifetime of the Ethereum Network. This means the investment of the users is always protected from factors that disrupts earnings in a conventional Network Investments. </div>
                            </div>

                            <div className="land-ftr-item">
                                <div className="land-ftr-head">- Instant Transactions </div>
                                <div className="land-ftr-data">Since this platform is Powered by a Smart Contract, it goes without saying that the payment flow is completely automated and its autonomous where anyone even the deployer of the contract cannot demand the system to reroute tha payments to any other accounts. This means users can expect the payment instantly into their personal wallets.</div>
                            </div>
                            <div className="land-ftr-item">
                                <div className="land-ftr-head">- Anonymous Participation</div>
                                <div className="land-ftr-data">In a conventional Networking system there are many touchpoints where the users are subjected to reveal their identiity for participation. This might be a bad functionality for many participants. This platform provides the users full anonymity, there is no touchpoints in the system that demands users identity. All authorization is done anonymously.</div>
                            </div>
                            <div className="land-ftr-item">
                                <div className="land-ftr-head">- State of the art</div>
                                <div className="land-ftr-data">The system is designed and tested by Blockchain experts who have developed multiple Blockchain products for fortune 500 companies. So the users can be sure that the system is stable and is built upon state of the art algorithms. Also the bytecode of the smart contract can by accessed in the ethereum network. The platform is built with simplicity and functionality in mind.</div>
                            </div>
                            <div className="land-ftr-item">
                                <div className="land-ftr-head">- Growth Potential</div>
                                <div className="land-ftr-data">As the system is in etherium network, the entire system economy is based on Ether Crypto Currency. In recent days the demand for Ether has increased to maximum extent which resulted in the surege of ether price. This platform gives the users to invest in such an asset so that they can hedge their native currency against a crypto currency - ETH.</div>
                            </div>
                            <div className="land-ftr-item">
                                <div className="land-ftr-head">- Autonomous</div>
                                <div className="land-ftr-data">The System is not controlled or managed by any organisation or admin. The system is managed by the community in the etherium network and its completely autonomous. This gives the users extra level of confidence in their investment as the system cannot be tuned by any bad entity for their personal gains since there is no central entity to corrupt.</div>
                            </div>
                        </div>
                    </div>
                    <div className="land-ftr-lines-flex">
                        <div className="land-ftr-lines"></div>
                        <div className="land-ftr-lines"></div>
                        <div className="land-ftr-lines"></div>
                        <div className="land-ftr-lines"></div>
                        <div className="land-ftr-lines"></div>
                        <div className="land-ftr-lines"></div>
                        <div className="land-ftr-lines"></div>
                    </div>
                </div>
            </div>
            
        )
    }
}
