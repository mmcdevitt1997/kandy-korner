import React, { Component } from 'react'
import "./Employee.css"

export default class EmployeeList extends Component{
    render(){
        return (
            <section className="employees">
            {
             this.props.employees.map(employee =>
                <div key={employee.id}>
                <p>{employee.name}</p>

                <button onClick={() => this.props.deleteEmployee(employee.id)}
                 className="card-link">Delete</button>
                </div>
             )
            }
            </section>
        )
    }
}