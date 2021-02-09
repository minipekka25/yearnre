import React, { Component } from 'react'
import './Sec3.css'
import {Link} from "react-router-dom";



export default class Sec3 extends Component {

    state={nav:false}

    levref = React.createRef()

    componentDidMount(){
        window.addEventListener("resize", this.checkscroll.bind(this));
        if (this.levref.current && this.levref.current.clientWidth < this.levref.current.scrollWidth){
            this.setState({nav:true})
        }else{
            this.setState({ nav:false })
        }
    }

    checkscroll(){
        if (this.levref && this.levref.current && this.levref.current.clientWidth < this.levref.current.scrollWidth) {
            this.setState({ nav:true })
        } else {
            this.setState({ nav:false })
        }
    }

    
    scrollnow(direction){
            if(direction==="right"){
                this.levref.current.scrollLeft += 100
            }else if(direction==="left"){
                this.levref.current.scrollLeft -= 100
            }
    }

    renderbuttons(i,idx){
   
           if(i){
               return <Link to={{ pathname: `/slots/${this.props.Maindata && this.props.Maindata.address}/${this.props.matrix}/${idx + 1}/latest` }}> <div className="lg-slots-sec3-item">Level {idx + 1}</div></Link>
           }else{
               return <div className="lg-slots-sec3-item-disabled">Level {idx + 1}</div>
           }
               
           

        
    }
    
  

    render() {

        return (
            <div className="lg-slots-sec3-main-flex">
                { this.state.nav ? <button className="lg-slots-sec3-item-left-button" onClick={() => this.scrollnow("left")}> 	&#60; </button> : null}   
            <div className="lg-slots-sec3" ref={this.levref}>
                   
                <div className="lg-slots-sec3-flex">
                        {this.props.Maindata && this.props.Maindata.x3active.map((i,idx) => this.renderbuttons(i,idx)) }
                   
                </div>
                   
            </div>
                {this.state.nav ? <button className="lg-slots-sec3-item-right-button" onClick={() => this.scrollnow("right")}> &#62; </button> : null}  
            </div>
        )
    }
}
