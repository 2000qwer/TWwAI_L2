import {useParams, Link} from "react-router-dom"
import React, { useState, useEffect } from 'react';


function Details() {
    const { id } = useParams();
    const [item, setItem] = useState({})
    useEffect(() => {

        fetch("https://rickandmortyapi.com/api/character/" + id)
            .then(res => res.json())
            .then(
                (result) => {
                    setItem(result);
                    console.log(result)
                }
            )
    }, [])
    return (
        <div className="card" style={{width: '400px'}}>
            <img src={item.image} className="card-img-top" style={{width: '400px'}} alt="img"/>
             <div className="card-body">
               <h5 className="card-title">{item.name}</h5>
               <p className="card-text">{item.type}</p>
               <Link to={'/'} className="btn btn-primary">Back</Link>
           </div>
       </div>
   )
 
}
export default Details;