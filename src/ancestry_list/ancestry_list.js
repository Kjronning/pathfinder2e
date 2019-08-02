import React,{Component} from 'react';
import ListData from '../data/ancestry.json';


class AncestryList extends Component {
    render() {
        const ancestryList = ListData.map(list => {
            return <li>{list.ancestry}</li>
        });

        return (
            <div>
                <ul>
                    {ancestryList}
                </ul>
                {/*{ListData.map((list) => {*/}
                {/*    return <div>*/}
                {/*        <h1>{list.ancestry}</h1>*/}
                {/*        {list.heritages.map((sublist) => {*/}
                {/*            return <div>*/}
                {/*                <p>{sublist.name}</p>*/}
                {/*            </div>*/}
                {/*        })}*/}
                {/*    </div>*/}
                {/*})}*/}
            </div>
        )
    }
}

export default AncestryList;
