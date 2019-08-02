import React,{Component} from 'react';
import ListData from '../data/ancestry.json';




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

    renderAncestrySelect(){
        return (
            <div>
                <p>{this.state.ancestry}</p>
                <select value={this.state.ancestry} onChange={this.handleAncestryChange}>
                    <option defaultValue>{this.defaultAncestry}</option>
                    {ListData.map(list => {
                            return <option value={list.ancestry}>{list.ancestry}</option>
                        }
                    )}
                </select>
                {(this.state.ancestry === this.defaultAncestry) ? null : this.renderHeritageSelect()}
            </div>

        )
    }

    renderHeritageSelect() {
        if (this.state.ancestry === this.defaultAncestry)
            return;
        return (
            <div>
            <select value={this.state.heritage} onChange={this.handleHeritageChange}>
                <option defaultValue>{this.defaultHeritage}</option>
                {ListData.map(list => {
                    return list.ancestry === this.state.ancestry ? list.heritages.map(sublist => {
                        return <option value={sublist.name}>{sublist.name}</option>
                    }) : null
                })}
            </select>
            </div>
        )
    }


    render() {
        return (
        this.renderAncestrySelect()
    )
    }
}


export default AncestryList;
