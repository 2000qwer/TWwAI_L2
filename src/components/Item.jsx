import React, {Component} from "react";
import { Link } from "react-router-dom";



class Item extends Component {

   render() {
    const {item} = this.props;

       return (
        <div className="card" style={{width: '400px'}}>
        <img src={item.image} className="card-img-top" style={{width: '400px'}} alt="img"/>
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.type}</p>
                <Link to={'/about/'+item.id} className="btn btn-primary">Show details</Link>
           </div>
       </div>

                      
        )
   }
}

export default Item;