import React, { Component } from 'react'
import './Chart.css'

export default class chart extends Component {

    state={width:0}

    componentDidMount(){
        this.calcgreen()
    }
    calcgreen(){
        let sum = this.props.left + this.props.right
        let width = Math.round((this.props.left / sum)*150)
        this.setState({width})
    }

    render() {
        return (
            <div>
                <div className="chartwhite">
                    <div className="chartgreen" style={{width:`${this.state.width}px`}}></div>
                </div>
                
            </div>
        )
    }
}
