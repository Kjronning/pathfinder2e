import React,{Component} from 'react';
import BackgroundData from '../data/background.json';

class BackgroundList extends Component {
    defaultBackground = "Select Background...";

    constructor(props){
        super(props);
        this.state = {background: this.defaultBackground};
        this.handleBackgroundChange = this.handleBackgroundChange.bind(this);
    }

    handleBackgroundChange(event){
        this.setState({background: event.target.value})
    }

    render(){
        return(
        <div>
            <select value={this.state.background} onChange={this.handleBackgroundChange}>
                <option defaultValue>{this.defaultBackground}</option>
                {BackgroundData.map(list => {
                        return <option value={list.name}>{list.name}</option>
                    }
                )}
            </select>
        </div>
        )
    }
}

export default BackgroundList;