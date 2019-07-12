
// import { Route } from 'react-router-dom'
import React, { Component } from "react"
import candyList from './candy-types'
import LocationList from './location/LocationList'
import employeeList from './employee/employeeList'
import candiesList from "./owner/OwnerList"


storeLocationsData = [
    {
        id: 1, location: "fake address 1",
        id: 2,  location: "fake address 2",
        id: 3,   location: "fake address 3 "
    }
]

employeesData = [
    {
        id: 1, name: "Alex",
        id: 2,  name: "Same",
        id: 3,   name: "Jeff "
    }
]
candyTypeData = [
    {
        id: 1, name: "candyType 1",
        id: 2,  name: "candyType 2",
        id: 3,   name: "candyType 3 "
    }
]
candiesData = [
    {
        id: 1, name: "candiesType 1",
        id: 2,  name: "candiesType 2",
        id: 3,   name: "candiesType 3 "
    }
]
state = {
    stores: storeLocationsData,
    employees: employeesData ,
    candyTypes: candyTypeData ,
    candies: candiesData
}

render(){
    return(
        <article>
                <h2>Store Location</h2>
                < LocationLis locations={this.state.locations} />
                 <h2>Candy Types</h2>
                <candiesList candy={this.state.candies} />
                <h2>Employee</h2>
                <employeeList employees={this.state.employees} />
            </article>
    )
}