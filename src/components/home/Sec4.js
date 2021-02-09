import React, { Component } from 'react'
import './Sec4.css'
import Chart from '../Helpers/Chart'

export default class Sec4 extends Component {
    render() {
        return (
            <div>
                <div className="Sec4-Title">Eager Platform</div>
                <div className="Sec4-flex">
                    <div className="Sec4-flex-inner">
                        <div>
                            <div className="Sec4-head">$34</div>
                            <div className="Sec4-data">Expense</div>
                        </div>
                        <div>
                            <Chart />
                            <div className="Sec4-data">Profit vs Spent</div>
                        </div>
                    </div>
                    <div className="Sec4-flex-inner">
                        <div>
                            <div className="Sec4-head">#02</div>
                            <div className="Sec4-data">Active Levels</div>
                        </div>
                        <div>
                            <Chart />
                            <div className="Sec4-data">Active vs Inactive</div>
                        </div>
                    </div>
                </div>
          
            </div>
        )
    }
}
