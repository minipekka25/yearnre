import React, { Component } from 'react'
import Chart from '../Helpers/Chart'
import './Sec6.css'

export default class Sec6 extends Component {
    render() {
        return (
            <div>
                <div className="Sec6-Title">Lazy Platform</div>
                <div className="Sec6-flex">
                    <div className="Sec6-flex-inner">
                        <div>
                            <div className="Sec6-head">$34</div>
                            <div className="Sec6-data">Expense</div>
                        </div>
                        <div>
                            <Chart />
                            <div className="Sec6-data">Profit vs Spent</div>
                        </div>
                    </div>
                    <div className="Sec6-flex-inner">
                        <div>
                            <div className="Sec6-head">#02</div>
                            <div className="Sec6-data">Active Levels</div>
                        </div>
                        <div>
                            <Chart />
                            <div className="Sec6-data">Active vs Inactive</div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
