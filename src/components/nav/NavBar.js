import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom"
import React, { Component } from "react"

 class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light light-blue flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Stores</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/employees">Employees</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/candys">Candy</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/candyTypes">Candy Types</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}
export default NavBar