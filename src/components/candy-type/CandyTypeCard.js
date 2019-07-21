import React, { Component } from "react"
import { Link } from "react-router-dom"


export default class CandyTypeCard extends Component {
    render() {
        return (
            <div key={this.props.candyType.id} className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        {this.props.candyType.name}
                        <Link className="nav-link" to={`/candyTypes/${this.props.candyType.id}`}>Details</Link>

                        <button onClick={() => this.props.deleteCandyType(this.props.candyType.id)}
                         className="card-link">Delete</button>
                    </h5>
                </div>
            </div>
        )
    }
}