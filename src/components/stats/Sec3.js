import React, { Component } from 'react'
import linker from '../../assets/linkb.svg'
import './Sec3.css'

export default class Sec3 extends Component {
    render() {
        return (
            <div className="StsSec4-Table">
                <table>
                    <thead className="StsSec4-Table-Head">
                        <td>Type</td>
                        <td>Date</td>
                        <td>ID</td>
                        <td>Transaction Address</td>
                        <td>Platform</td>
                        <td>Level</td>
                        <td className="StsSec4-Table-head1">Earnings In ETH</td>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="StsSec4-Table-Data1">
                                <div className="StsSec4-Table-Data1-flex">
                                    <div className="StsSec4-Table-Data1-inner">P</div>
                                    <div className="StsSec4-Table-Data1-inner">OD</div>

                                </div>
                            </td>
                            <td className="StsSec4-Table-Data2">11.02.2020 03:23</td>
                            <td className="StsSec4-Table-Data3">ID-0022</td>
                            <td className="StsSec4-Table-Data4">0xjniuscoincqepncoieqncqo <img src={linker} alt="link" className="linkerb-slt-sec4" /></td>
                            <td className="StsSec4-Table-Data5">Eager</td>
                            <td className="StsSec4-Table-Data6">10/10</td>
                            <td className="StsSec4-Table-Data7">0.002 ETH</td>
                        </tr>

                        <tr>
                            <td className="StsSec4-Table-Data1">
                                <div className="StsSec4-Table-Data1-flex">
                                    <div className="StsSec4-Table-Data1-inner">P</div>
                                    <div className="StsSec4-Table-Data1-inner">OD</div>

                                </div>
                            </td>
                            <td className="StsSec4-Table-Data2">11.02.2020 03:23</td>
                            <td className="StsSec4-Table-Data3">ID-0022</td>
                            <td className="StsSec4-Table-Data4">0xjniuscoincqepncoieqncqo <img src={linker} alt="link" className="linkerb-slt-sec4" /></td>
                            <td className="StsSec4-Table-Data5">Eager</td>
                            <td className="StsSec4-Table-Data6">10/10</td>
                            <td className="StsSec4-Table-Data7">0.002 ETH</td>
                        </tr>

                        <tr>
                            <td className="StsSec4-Table-Data1">
                                <div className="StsSec4-Table-Data1-flex">
                                    <div className="StsSec4-Table-Data1-inner">P</div>
                                    <div className="StsSec4-Table-Data1-inner">OD</div>

                                </div>
                            </td>
                            <td className="StsSec4-Table-Data2">11.02.2020 03:23</td>
                            <td className="StsSec4-Table-Data3">ID-0022</td>
                            <td className="StsSec4-Table-Data4">0xjniuscoincqepncoieqncqo <img src={linker} alt="link" className="linkerb-slt-sec4" /></td>
                            <td className="StsSec4-Table-Data5">Eager</td>
                            <td className="StsSec4-Table-Data6">10/10</td>
                            <td className="StsSec4-Table-Data7">0.002 ETH</td>
                        </tr>
                        
                    </tbody>

                </table>

            </div>
        )
    }
}
