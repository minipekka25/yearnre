import React, { Component } from 'react'
import stsbg from '../assets/stsbg.svg'
import landhero from '../assets/land-hero.svg'
import { Redirect } from "react-router-dom";

export default class View extends Component {


    state={id:'',address:'',redirect:false,isprocessing:false,isloading:false}

    opendashboard(){
        fetch(`https://mainserve.herokuapp.com/auth/referrer/${this.state.id}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.response === "User Found") {
                  
                    this.setState({ isunknown: false, isprocessing: false,address:data.address,redirect:true });
                } else if (data.response === "User Processing") {
                    this.setState({ isprocessing: true, isloading: false });
                } else if (data.response === "User Not Found") {
                    this.setState({ isunknown: true, isloading: false });
                }
            })
            .catch((e) => {
                this.setState({ error: true, isloading: false });
            });
    }



    render() {
        return (
            <div className="rgr-main">
                {this.state.redirect && <Redirect to={{ pathname: `/dashboard/${this.state.address}` }} />} 
                <div className="rgr-title">YEARN</div>
                <div className="rgr-form-flex">
                    <div className="rgr-form-main">
                        <div className="rgr-form-left">
                            <img src={landhero} alt="stsimg" className="rgr-form-img" />
                        </div>
                        <div className="rgr-form-right-main">
                            <div className="rgr-form-right-head">
                                VIEW - <br></br> EXISTING USERS
                            </div>
                            <div className="rgr-form-right-content">
                                <div className="rgr-form-right-content-flex">
                                    <div className="rgr-form-right-input-holder">
                                        <input placeholder="User ID" className="rgr-form-right-input" value={this.state.id} onChange={(e)=> this.setState({id:e.target.value})}></input>
                                    </div>
                                    <div className="rgr-form-right-button-holder">
                                        <button className="rgr-form-right-button" onClick={()=> this.opendashboard()}>VIEW</button>
                                    </div>
                                </div>
                            </div>
                            {this.state.isprocessing || this.state.isunknown ? <div className="rgr-form-right-instructions">
                                <div className="rgr-form-right-instructions-head">
                                    The Referrer ID is Invalid
                    </div>    </div> : null}   
                        </div>
                    </div>
                </div>
                <img src={stsbg} alt="stsimg" className="rgr-form-bg" />
            </div>
        )
    }
}
