import React, {Component} from 'react'

export default class extends Component{
    render(){
        const senator = this.props.senator;
        return(
            <div>
                <h3>
                    {senator.person.name} - {senator.senator_rank_label} - {senator.party}
                </h3>
                
            </div>
        )
    }
}