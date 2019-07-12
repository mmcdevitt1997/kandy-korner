
import React, { Component } from "react"
import CandyList from './candy-types/candyList'
import StoreList from "./store-locations/storeList"
import EmployeeList from './employees/employeeList'
// import candiesList from "./individual-candies/candiesList"ß

export default class KandyKorner  extends Component {

storeLocationsData = [

        {id: 1, location: "fake address 1"},
        {id: 2,  location: "fake address 2"},
       { id: 3,   location: "fake address 3 "}

]

employeesData = [

        {id: 1, name: "Alex"},
        {id: 2,  name: "Same"},
        {id: 3,   name: "Jeff "}

]
candyTypeData = [

        {id: 1, name: "candyType 1"},
        {id: 2,  name: "candyType 2"},
       { id: 3,   name: "candyType 3 "}

]
candiesData = [

        {id: 1, name: "candiesType 1"},
        {id: 2,  name: "candiesType 2"},
        {id: 3,   name: "candiesType 3 "}

]
state = {
    stores: this.storeLocationsData,
    employees: this.employeesData ,
    candyTypes: this.candyTypeData ,
    candies: this.candiesData
}

render(){
    return(
        <article>
                <h2>Store Location</h2>
                <StoreList stores={this.state.stores}/>
                 <h2>Candy Types</h2>
                <CandyList candy={this.state.candies} />
                <h2>Employee</h2>
                <EmployeeList employees={this.state.employees} />
            </article>
    )
}
}