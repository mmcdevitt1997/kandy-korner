import React, { Component } from "react"
import { Route } from 'react-router-dom'
import employeeHandler from "../api-handlers/employeeHandler"
import storeHandler from "../api-handlers/storeHandler"
import candyHandler from "../api-handlers/candyHandler"
import CandyList from './candy/Candy'
import StoreList from "./store-locations/storeList"
import EmployeeList from "./employees/EmployeeList"



export default class ApplicationViews extends Component {
        state = {
                stores: [],
                candys: [],
                employees: []
        }

        componentDidMount() {
                const newState = {}
                employeeHandler.getAll().then(allEmployees => {
                        this.setState({
                                employees: allEmployees
                        })
                })
                candyHandler.getAll().then(allcandys => {
                        this.setState({
                                candys: allcandys
                        })
                })
                storeHandler.getAll().then(allStores => {
                        this.setState({
                                stores: allStores
                        })
                })

        }
        deleteEmployee = id =>{ employeeHandler.delete(id)
        .then(() => employeeHandler.getAll())
        .then(employees => {
                console.log(employees)
                this.setState({ employees: employees})
        })



        }

        render() {
                return (
                        <React.Fragment>
                                <Route exact path="/" render={(props) => {
                                        return <StoreList stores={this.state.stores} />
                                }} />
                                {/* <Route render={(props)=>{return <CandyType candyTypes= {this.state.candyTypes}/> */}
                                <Route exact path="/candy" render={(props) => {
                                        return <CandyList candys={this.state.candys} />
                                }} />
                                <Route exact path="/employees" render={(props) => {
                                        return < EmployeeList employees={this.state.employees}
                                        deleteEmployee={this.deleteEmployee} />
                                }} />

                        </React.Fragment>

                )
        }

}

