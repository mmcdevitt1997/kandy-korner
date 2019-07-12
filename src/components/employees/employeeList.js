import React, { Component } from 'react'

export default class employeeList extends Component{
    render(){
        return (
            <section className="employee">
            {
             this.props.employee.map(employees =>
                <div key={employees.id}>
                <p>{employeess.name}</p>
                </div>
             )
            }
            </section>
        )
    }
}