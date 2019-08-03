import React,{Component} from 'react';
import AncestryData from '../data/ancestry.json';




class AncestryList extends Component {

    defaultAncestry = "Select ancestry...";
    defaultHeritage = "Select heritage...";

    constructor(props) {
        super(props);
        this.state = {
            ancestry: this.defaultAncestry,
            heritage: this.defaultHeritage
        };
        this.handleAncestryChange = this.handleAncestryChange.bind(this);
        this.handleHeritageChange = this.handleHeritageChange.bind(this);
    }

    handleAncestryChange(event) {
        this.setState({ancestry: event.target.value});
    }

    handleHeritageChange(event) {
        this.setState({heritage: event.target.value});
    }

    renderHeritageSelect() {
        return (
            <div>
            <select value={this.state.heritage} onChange={this.handleHeritageChange}>
                <option defaultValue>{this.defaultHeritage}</option>
                {AncestryData.map(list => {
                    return list.name === this.state.ancestry ? list.heritages.map(sublist => {
                        return <option value={sublist.name}>{sublist.name}</option>
                    }) : null
                })}
            </select>
            </div>
        )
    }


    render() {
        return (
            <div>
                <select value={this.state.ancestry} onChange={this.handleAncestryChange}>
                    <option defaultValue>{this.defaultAncestry}</option>
                    {AncestryData.map(list => {
                            return <option value={list.name}>{list.name}</option>
                        }
                    )}
                </select>
                {(this.state.ancestry === this.defaultAncestry) ? null : this.renderHeritageSelect()}
            </div>
        )
    }
}


export default AncestryList;
