import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/home/Home'
import Slots from './components/slots/Slots'
import Partners from './components/partners/Partners'
import Stats from './components/stats/Stats'
import Invoice from './components/invoice/invoice'

import HomeDesk from './desk/home/HomeDesk'
import SlotDesk from './desk/slots/Slots'
import PartnersDesk from './desk/partners/PartnersDesk'
import StatsDesk from './desk/stats/StatsDesk'


import LandHome from './land/LandHome'
import Auth from './auth/Auth'
import Register from './auth/Register'
import Buynew from './auth/Buynew'
import ChangeBene from './auth/ChangeBene'

import './App.css'
import InvoiceDesk from './desk/invoice/InvoiceDesk';
import View from './auth/View';
import Login from './auth/Login';

import { Provider } from 'react-redux'
import store from './redux/store'


export default class App extends Component {

    state = { width: 0, height:0, orientation: "portrait" };

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth, height : window.innerHeight});
        if (window.matchMedia("(orientation: portrait)").matches) {
            this.setState({ orientation: "portrait" });
        } else {
            this.setState({ orientation: "landscape" });
        }
    };


    render() {
        return (
               <Provider store={store}>
            <div>
     
                {this.state.orientation === "portrait"  ? 
                    
                 
                        <Router forceRefresh={true}>
                        <Switch>
                                <Route exact path="/dashboard/:useraddress" component={Home} />
                                <Route exact path="/slots/:useraddress/:matrix/:level/:reinvest" component={Slots} />
                                <Route exact path="/partners/:useraddress" component={Partners} />
                                <Route exact path="/stats/:useraddress" component={Stats} />
                                <Route exact path="/invoice/:useraddress" component={Invoice} />
                                <Route exact path="/auth" component={Auth} />
                                <Route exact path={"/register/:ref"} component={Register} />
                                <Route exact path={"/upgrade/:useraddress/:matrix/:level"} component={Buynew} />
                                <Route exact path={"/changebene/:useraddress"} component={ChangeBene} />
                                <Route exact path="/view" component={View} />
                                <Route exact path="/login/:use" component={Login} />
                                <Route exact path="/land" component={LandHome} />
                                <Route component={LandHome} />
                        </Switch>
                        </Router>  : 
                  this.state.height > 500 ?
                        <Router>
                            <Switch>
                                    <Route exact path="/dashboard/:useraddress" component={HomeDesk} />
                                    <Route exact path="/slots/:useraddress/:matrix/:level/:reinvest" component={SlotDesk} />
                                    <Route exact path="/partners/:useraddress" component={PartnersDesk} />
                                    <Route exact path="/stats/:useraddress" component={StatsDesk} />
                                    <Route exact path="/invoice/:useraddress" component={InvoiceDesk} />
                                    <Route exact path="/auth" component={Auth} />
                                    <Route exact path={"/register/:ref"} component={Register} />
                                    <Route exact path={"/upgrade/:useraddress/:matrix/:level"} component={Buynew} />
                                    <Route exact path={"/changebene/:useraddress"} component={ChangeBene} />
                                    <Route exact path="/view" component={View} />
                                    <Route exact path="/login/:use" component={Login} />
                                    <Route exact path="/land" component={LandHome} />
                                    <Route component={LandHome} />
                            </Switch>
                        </Router> :
                        <Router>
                            <Route component={LandHome} />
                        </Router>
            }

            


                
            </div>
            </Provider>
        )
    }
}
