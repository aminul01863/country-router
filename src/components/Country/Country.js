import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css'
const Country = (props) => {
    const { name, population, flag } = props.country
    return (
        <div className="main-container">
            <img src={flag} alt="" />
            <h3>Name:{name}</h3>
            <p>Population:{population}</p>
            <button className="first-btn" ><Link className="main-btn" to={`/about/${name}`}>Add Country</Link></button>
        </div>
    );
};

export default Country;