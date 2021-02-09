import React, { Component } from 'react'
import './Pair1.css'
import Blocks from '../../components/slots/Blocks'


export default class Pair1 extends Component {

   placefilter(place){
       if(this.props.data){
           let k = this.props.data.filter((i) =>i.place === place)
           return k[0]
       }else{
           return null
       }
   }

    render() {
        return (
            <div className="lg-pair1">

                <Blocks data={this.props.data && this.placefilter(1)} place={'1'} type={'egr'}/>
                <Blocks data={this.props.data && this.placefilter(2)} place={'2'} type={'egr'}/>
                <Blocks data={this.props.data && this.placefilter(3)} place={'3'} type={'egr'}/>
                   
             
           
                
            </div>
        )
    }
}
