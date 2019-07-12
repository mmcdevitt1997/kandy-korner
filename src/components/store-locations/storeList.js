import React, { Component } from 'react'

export default class storeList extends Component{
    render(){
        return (
            <section className="store">
            {
             this.props.store.map(stores =>
                <div key={stores.id}>
                <p>{stores.name}</p>
                </div>
             )
            }
            </section>
        )
    }
}