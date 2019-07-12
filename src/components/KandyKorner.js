

storeLocationsData = [
    {
        id: 1, location: "fake address 1",
        id: 2,  location: "fake address 2",
        id: 3,   location: "fake address 3 "
    }
]

EmployeesData = [
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
    employees: EmployeesData ,
    candyTypes: candyTypeData ,
    candies: candiesData
}

render(){
    return(
        <article>
                <h2>Store Locations</h2>
                <LocationList locations={this.state.locations} />
                 <h2>Employees</h2>
                <EmployeeList employees={this.state.employees} />
                <h2>Candy Types</h2>
                <AnimalList animals={this.state.animals}/>
                <h2>candies</h2>
            </article>
    )
}