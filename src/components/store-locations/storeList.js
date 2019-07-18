import React, { Component } from 'react'
import "./Store.css"

export default class StoreList extends Component{
    render(){
        return (
            <section className="stores">
            {
             this.props.stores.map(store =>
                <div key={store.id}>
                <p>{store.location}</p>
                </div>
             )
            }
            </section>
        )
    }
}