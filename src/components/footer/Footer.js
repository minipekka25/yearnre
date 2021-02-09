import React, { Component } from 'react'
import home from '../../assets/home.svg'
import partners from '../../assets/partners.svg'
import stat from '../../assets/stat.svg'
import invoice from '../../assets/invoice.svg'
import './Footer.css'

export default class Footer extends Component {

    state={current:'home'}


    render() {
        return (
            <div className='footer'>
                <div className="footer-placeholder">
                    <div className="footer-icon-placeholder">
                        <img src={home} alt="home" className="footer-icon" onClick={()=>this.setState({current:'home'})}/>
                        {this.state.current === 'home' ? <div className="icon-name">Home</div> : null}
                         
                    </div>
                    <div className="footer-icon-placeholder">
                        <img src={partners} alt="home" className="footer-icon" onClick={() => this.setState({ current: 'partners' })}/>
                        {this.state.current === 'partners' ? <div className="icon-name">Partners</div> : null}
                    </div>
                    <div className="footer-icon-placeholder">
                        <img src={stat} alt="home" className="footer-icon" onClick={() => this.setState({ current: 'stats' })}/>
                        {this.state.current === 'stats' ? <div className="icon-name">stats</div> : null}
                    </div>
                    <div className="footer-icon-placeholder">
                        <img src={invoice} alt="home" className="footer-icon" onClick={() => this.setState({ current: 'invoice' })}/>
                        {this.state.current === 'invoice' ? <div className="icon-name">Invoice</div> : null}
                    </div>
                </div>
            </div>
        )
    }
}
