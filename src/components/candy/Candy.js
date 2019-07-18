import React, { Component } from 'react'
import "./Candy.css"

export default class CandyList extends Component{
    render(){
        return (
            <section className="candys">
            {
             this.props.candys.map(candy =>
                <div key={candy.id}>
                <p>{candy.name}</p>
                </div>
             )
            }
            </section>
        )
    }
}