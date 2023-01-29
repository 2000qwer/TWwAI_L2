import React, {Component} from "react";
import Item from "./Item";


class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
    componentDidMount() {
        fetch("https://rickandmortyapi.com/api/character/")
               .then(res => res.json())
               .then(
                   (result) => {
                       this.setState({
                           isLoaded: true,
                           items: result.results    // Trzeba 
                       });
                   },
    
                   (error) => {
                       this.setState({
                           isLoaded: true,
                           error
                       });
                   }
               )
       }
       render() {
            if (!Array.isArray(this.state.items)) {
            return <div>There was an error loading the data</div>;
            }
        
    
           return (<div className='container'>
                        {this.state.items.map((item, index) => (
                            <Item key={index} item={item}/>
                        ))}
                            </div>
           )
       }
}

export default List;