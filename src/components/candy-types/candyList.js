import React, { Component } from 'react'

export default class candyList extends Component{
    render(){
        return (
            <section className="candy">
            {
             this.props.candy.map(candys =>
                <div key={candys.id}>
                <p>{candys.name}</p>
                </div>
             )
            }
            </section>
        )
    }
}