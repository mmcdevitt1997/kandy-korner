import React, { Component } from 'react'

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