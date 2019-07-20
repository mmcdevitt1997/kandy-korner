import React, { Component } from "react"
import { Route, Redirect } from 'react-router-dom'
import employeeHandler from "../api-handlers/employeeHandler"
import storeHandler from "../api-handlers/storeHandler"
import candyHandler from "../api-handlers/candyHandler"
import candyTypeHandler from "../api-handlers/candyTypeHandler"
import CandyType from "./candy-type/CandyType"
import CandyList from './candy/Candy'
import StoreList from "./store-locations/storeList"
import EmployeeList from "./employees/EmployeeList"
import CandyForm from "./candy/CandyForm"
import CandyDetail from "./candy/CandyDetail"
import CandyEditForm from "./candy/CandyEditForm"
import Login from './authentication/Login'






export default class ApplicationViews extends Component {
        state = {
                stores: [],
                candys: [],
                employees: [],
                candyTypes: []
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
                candyTypeHandler.getAll().then(allCandyTypes => {
                        this.setState({
                                candyTypes: allCandyTypes
                        })
                })
        }
        // delete functions
        deleteEmployee = id => {
                employeeHandler.delete(id)
                        .then(() => employeeHandler.getAll())
                        .then(employees => {
                                console.log(employees)
                                this.setState({ employees: employees })
                        })
        }
        deleteStore = id => {
                storeHandler.delete(id)
                        .then(() => storeHandler.getAll())
                        .then(stores => {
                                console.log(stores)
                                this.setState({ stores: stores })
                        })
        }
        deleteCandy = id => {
                candyHandler.delete(id)
                        .then(() => candyHandler.getAll())
                        .then(candys => {
                                console.log(candys)
                                this.setState({ candys: candys })
                        })
        }
        deleteCandyType = id => {
                candyTypeHandler.delete(id)
                        .then(() => candyTypeHandler.getAll())
                        .then(candyTypes => {
                                console.log(candyTypes)
                                this.setState({ candyTypes: candyTypes })
                        })
        }
        // post functions
        addCandy = candy => candyHandler.post(candy)
                .then(() => candyHandler.getAll())
                .then(candys =>
                        this.setState({
                                candys: candys
                        })
                )
        // put functions
       updateCandy = candy => candyHandler.put(candy)
        .then(() => candyHandler.getAll())
        .then(candys =>{
                this.setState({
                        candys: candys
                })
        })




        // Check if credentials are in local storage
        isAuthenticated = () => sessionStorage.getItem("credentials") !== null


        render() {
                return (
                        <React.Fragment>
                                <Route exact path="/" render={(props) => {
                                        return <StoreList stores={this.state.stores}
                                                deleteStore={this.deleteStore} />
                                }} />
                                <Route exact path="/candyTypes" render={(props) => {
                                        return <CandyType candyTypes={this.state.candyTypes}
                                                deleteCandyType={this.deleteCandyType} />
                                }} />
                                <Route exact path="/candys" render={(props) => {
                                        return <CandyList {...props} candys={this.state.candys}
                                                deleteCandy={this.deleteCandy} />
                                }} />

                                <Route exact path="/employees" render={(props) => {
                                        if (this.isAuthenticated()) {
                                                return < EmployeeList employees={this.state.employees}
                                                        deleteEmployee={this.deleteEmployee} />
                                        } else return <Redirect to="/login" />
                                }} />
                                <Route path="/candys/new" render={(props) => {

                                        return <CandyForm {...props} addCandy={this.addCandy} />
                                }} />
                                <Route exact path="/candys/:candyId(\d+)" render={(props) => {
                                        // Find the animal with the id of the route parameter
                                        let candy = this.state.candys.find(candy =>
                                                candy.id === parseInt(props.match.params.candyId)
                                        )
                                        // If the animal wasn't found, create a default one
                                        if (!candy) {
                                                candy = { id: 404, name: "404" }
                                        }
                                        return <CandyDetail {...props} updateCandy={this.updateCandy}  deleteCandy={this.deleteCandy} candy={candy} />
                                }} />
                                <Route
                                        path="/candys/:candyId(\d+)/edit" render={props => {
                                                return <CandyEditForm {...props} updateCandy={this.updateCandy} />
                                        }}
                                />
                                <Route path="/login" component={Login} />





                        </React.Fragment>

                )
        }

}

