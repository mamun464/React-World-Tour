
import { useState } from 'react';
import { useEffect } from 'react';
import Country from '../Country/country';
import './Contries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])

    const [visitedContries, steVisitedContries] = useState([])

    const handleVistedContry = (passContry) => {
        console.log(passContry)
        const newList = [...visitedContries, passContry]
        steVisitedContries(newList)
    };

    const [vistedFlags, setVistedFlags] = useState([])

    const handleVistedFlag = (passFlag) => {
        const newFlagList = [...vistedFlags, passFlag]
        setVistedFlags(newFlagList)
    }

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div>
                <h4>Visited Countries: {visitedContries.length}</h4>
                <ul>
                    {
                        visitedContries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>

                <div className="flags-container">
                    {
                        vistedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
                    }
                </div>
            </div>
            <div className='country-container'>
                {
                    countries.map(country =>
                        <Country
                            country={country}
                            key={country.name.common}
                            handleVistedContry={handleVistedContry}
                            handleVistedFlag={handleVistedFlag}
                        ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;