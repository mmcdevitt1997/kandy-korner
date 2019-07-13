import React, { Component } from "react"
import { Route } from 'react-router-dom'
import CandyList from './candy/Candy'
import StoreList from "./store-locations/storeList"
import EmployeeList from './employees/employeeList'
import CandyType from "./candy/candy-type/CandyType"


export default class ApplicationViews extends Component {

        storeLocationsData = [

                { id: 1, location: "fake address 1" },
                { id: 2, location: "fake address 2" },
                { id: 3, location: "fake address 3 " }

        ]

        employeesData = [

                { id: 1, name: "Alex" },
                { id: 2, name: "Same" },
                { id: 3, name: "Jeff " }

        ]
        candyTypeData = [

                { id: 1, candyType: "candyType 1" },
                { id: 2, candyType: "candyType 2" },
                { id: 3, candyType: "candyType 3 " }

        ]
        candyData = [

                { id: 1, name: "candy 1", CandyTypeID:1},
                { id: 2, name: "candy 2", CandyTypeID:2},
                { id: 3, name: "candy 3", CandyTypeID:3}

        ]
        state = {
                stores: this.storeLocationsData,
                employees: this.employeesData,
                candys: this.candyData,
                candyType: this.candyTypeData
        }

        render() {
                return (
                        <React.Fragment>
                                <Route exact path="/" render={(props)=>{
                                return <StoreList stores={this.state.stores}/>
                                }}/>
                                 {/* <Route render={(props)=>{return <CandyType candyTypes= {this.state.candyTypes}/> */}
                                 <Route exact path="/candy" render={(props)=>{
                                return <CandyList candys={this.state.candys}/>
                                }}/>
                                <Route exact path="/employees" render={(props)=>{
                                return <EmployeeList employees={this.state.employees}/>
                                }}/>

                        </React.Fragment>

                )
        }
}

