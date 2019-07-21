import React, { Component } from "react"
import { Link } from "react-router-dom"


export default class CandyCard extends Component {
    render() {
        return (
            <div key={this.props.candy.id} className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        {this.props.candy.candyName}
                        <Link className="nav-link" to={`/candys/${this.props.candy.id}`}>Details</Link>

                        <button onClick={() => this.props.deleteCandy(this.props.candy.id)}
                         className="card-link">Delete</button>
                    </h5>
                </div>
            </div>
        )
    }
}