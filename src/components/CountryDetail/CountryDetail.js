import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './CountryDetail.css'
const CountryDetail = () => {
    const { countryName } = useParams();
    const [data, setData] = useState({});
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data[0]))
    }, [])
    return (
        <div className="container">
            <div className="country-detail">
                <img src={data.flag} alt="" />
                <h2>Name:{data.name}</h2>
                <h3>Number Code: {data.numericCode}</h3>
                <h3>Region: {data.region}</h3>
                <h3>Capital: {data.capital}</h3>
                <h3>Population: {data.population}</h3>
            </div>
        </div>
    );
};

export default CountryDetail;