import React, { Component } from 'react'
import linker from '../../assets/linkb.svg'
import './Sec4.css'

export default class Sec4 extends Component {
    render() {
        return (
            <div>
              <div className="SltSec4-Title">Transactions</div>
              <div className="SltSec4-Table">
                 <table>
                     <thead className="SltSec4-Table-Head">
                         <td>Type</td>
                         <td>Date</td>
                         <td>ID</td>
                         <td>Transaction Address</td>
                            <td className="SltSec4-Table-head1">Earnings In ETH</td>
                     </thead>
                     <tbody>
                            <tr>
                                <td className="SltSec4-Table-Data1">
                                    <div className="SltSec4-Table-Data1-flex">
                                        <div className="SltSec4-Table-Data1-inner">P</div>
                                        <div className="SltSec4-Table-Data1-inner">OD</div>
                                       
                                    </div>
                                </td>
                                <td className="SltSec4-Table-Data2">11.02.2020 03:23</td>
                                <td className="SltSec4-Table-Data3">ID-0022</td>
                                <td className="SltSec4-Table-Data4">0xjniuscoincqepncoieqncqo <img src={linker} alt="link" className="linkerb-slt-sec4"/></td>
                                <td className="SltSec4-Table-Data5">0.002 ETH</td>
                            </tr>

                            <tr>
                                <td className="SltSec4-Table-Data1">
                                    <div className="SltSec4-Table-Data1-flex">
                                        <div className="SltSec4-Table-Data1-inner">P</div>
                                        <div className="SltSec4-Table-Data1-inner">OD</div>

                                    </div>
                                </td>
                                <td className="SltSec4-Table-Data2">11.02.2020 03:23</td>
                                <td className="SltSec4-Table-Data3">ID-0022</td>
                                <td className="SltSec4-Table-Data4">0xjniuscoincqepncoieqncqo <img src={linker} alt="link" className="linkerb-slt-sec4" /></td>
                                <td className="SltSec4-Table-Data5">0.002 ETH</td>
                            </tr>

                            <tr>
                                <td className="SltSec4-Table-Data1">
                                    <div className="SltSec4-Table-Data1-flex">
                                        <div className="SltSec4-Table-Data1-inner">P</div>
                                        <div className="SltSec4-Table-Data1-inner">OD</div>

                                    </div>
                                </td>
                                <td className="SltSec4-Table-Data2">11.02.2020 03:23</td>
                                <td className="SltSec4-Table-Data3">ID-0022</td>
                                <td className="SltSec4-Table-Data4">0xjniuscoincqepncoieqncqo <img src={linker} alt="link" className="linkerb-slt-sec4" /></td>
                                <td className="SltSec4-Table-Data5">0.002 ETH</td>
                            </tr>
                     </tbody>
                     
                 </table>
                    
              </div>
            </div>
        )
    }
}
