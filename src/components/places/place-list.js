import React, { Component } from 'react'
import * as styles from "../../css/items.module.css"
import Place from "./place"
import Title from "../title"

class PlaceList extends Component {
    state = {
        places: [],
        sortedPlaces: [],
    }
    componentDidMount() {
        this.setState({
            places: this.props.places.edges,
            sortedPlaces: this.props.places.edges
        })
    }

    render() {
        console.info('this.props.places', this.props.places)
        return (
            <section className={styles.tours}>
                <Title title="hampi" subtitle="places" />
                <div className={styles.center}>
                    {this.state.sortedPlaces && this.state.sortedPlaces.map(({
                        node }) => {
                        return <Place key={node.contentful_id} place={node} />
                    })}
                </div>
            </section>
        )
    }
}

export default PlaceList