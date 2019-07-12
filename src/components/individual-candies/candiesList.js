import React, { Component } from 'react'

export default class candiesList extends Component{
    render(){
        return (
            <section className="candies">
            {
             this.props.candie.map(candies=>
                <div key={candies.id}>
                <p>{candies.name}</p>
                </div>
             )
            }
            </section>
        )
    }
}