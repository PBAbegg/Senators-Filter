import React from 'react'
import {allSenators, allRepublicans, allDemocrats, utahSenators, senatorRank} from "../filters"
import Senator from './Senator'
import index from '../index.css'

export default class extends React.Component {
    constructor(props) {
        super(props)
    }

    renderAllSenators() {
        return allSenators().map(senator => (
                <Senator
                    senator = {senator}
                />
            )
        )
    }

    renderRepublicans() {
        return allRepublicans().map(senator => (
                <Senator
                    senator = {senator}
                />
            )
        )
    }

    renderDemocrats() {
        return allDemocrats().map(senator => (
                <Senator
                    senator = {senator}
                />
            )
        )
    }

    renderUtahSenators() {
        return utahSenators().map(senator => (
                <Senator
                    senator = {senator}
                />
            )
        )
    }

    renderSenatorRank() {
        return senatorRank().map(senator => (
                <Senator
                    senator = {senator}
                />
            )
        )
    }

    render() {
        const allSenators = this.renderAllSenators()
        const Republicans = this.renderRepublicans()
        const Democrats = this.renderDemocrats()
        const utahSenators = this.renderUtahSenators()
        const senatorRank = this.renderSenatorRank()
        return (
            <div>
                <div>
                    Senators
                    {allSenators}
                </div>
                <div id="republicans">
                    Republicans
                    {Republicans}
                </div>
                <div id={"democrats"}>
                    Democrats
                    {Democrats}
                </div>
                <dif id="utah">
                    Utah Senators
                    {utahSenators}
                </dif>
                <div>
                    Utah Senior Senator
                    {senatorRank}
                </div>
            </div>
        )
    }
}