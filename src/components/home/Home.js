import React, { Component } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Sec1 from './Sec1'
import Sec2 from './Sec2'
import Sec3 from './Sec3'
import Sec4 from './Sec4'
import Sec5 from './Sec5'
import Sec6 from './Sec6'
import Sec7 from './Sec7'
import Sec8 from './Sec8'
import Sec9 from './Sec9'

export default class home extends Component {

    state = { isloading: true, isautheticated: false, isuser: false, isprocessing: false, isunknown: false, error: false, sidebarobj: null, topbarobj:null  }


    componentDidMount(){
        this.initialfetch()
    }

    initialfetch() {
        fetch(`https://mainserve.herokuapp.com/auth/${this.props.match.params.useraddress}`)
            .then(response => response.json())
            .then(data => {
                if (data.response === "User Found") {
                
                        this.fetchuser()
                        this.fetchdata()
                        this.setState({ isautheticated: true, isuser: true })
                    
                } else if (data.response === "User Processing") {
                    this.setState({ isprocessing: true, isloading: false })
                } else if (data.response === "User Not Found") {
                    this.setState({ isunknown: true, isloading: false })
                }
            }).catch(e => { this.setState({ error: true, isloading: false }) });

    }

    fetchuser() {

        fetch(`https://mainserve.herokuapp.com/dashboard/userdata/${this.props.match.params.useraddress}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ sidebarobj: data })
            }).catch(e => { this.setState({ error: true, isloading: false }) })

    }

    fetchdata() {
        fetch(`https://mainserve.herokuapp.com/data/sidepanel`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({ sidebarobj: data })
                fetch(`https://mainserve.herokuapp.com/data/topbar/${this.props.match.params.useraddress}`)
                    .then(response => response.json())
                    .then(data => {
                        this.setState({ isloading: false,topbarobj:data })
                    }).catch(e => { this.setState({ error: true, isloading: false }) })
            }).catch(e => { this.setState({ error: true, isloading: false }) })
    }


    render() {
        return (
            <div className='grid-container'>
               
                <div className='main'>
                    <Header/>
                    <Sec1/>
                    <Sec2/>
                    <Sec3/>
                    <Sec4/>
                    <Sec5/>
                    <Sec6/>
                    <Sec7/>
                    <Sec8/>
                    <Sec9/>
                </div>
                <Footer/>
            
            </div>
        )
    }
}
