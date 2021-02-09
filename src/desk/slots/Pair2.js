import React, { Component } from 'react'
import './Pair1.css'
import Blocks from '../../components/slots/Blocks'

export default class Pair2 extends Component {

    placefilter(place) {
        if (this.props.data) {
            let k = this.props.data.filter((i) => i.place === place)
            return k[0]
        } else {
            return null
        }
    }

    render() {
        return (
            <div className="lg-pair1">
                <div className="lg-pair2-main">
                    <div className="lg-pair2-main-head">
                        <Blocks data={this.props.data && this.placefilter(1)} place={'1'} type={'lzy'}/>
                    </div>
                    <div className="lg-pair2-main-bot">
                        <Blocks data={this.props.data && this.placefilter(3)} place={'3'} type={'lzy'}/>
                        <Blocks data={this.props.data && this.placefilter(4)} place={'4'} type={'lzy'}/>
                    </div>
                </div>

                <div className="lg-pair2-main">
                    <div className="lg-pair2-main-head">
                        <Blocks data={this.props.data && this.placefilter(2)} place={'2'} type={'lzy'}/>
                    </div>
                    <div className="lg-pair2-main-bot">
                        <Blocks data={this.props.data && this.placefilter(5)} place={'5'} type={'lzy'}/>
                        <Blocks data={this.props.data && this.placefilter(6)} place={'6'} type={'lzy'}/>
                    </div>
                </div>
            




            </div>
        )
    }
}
