
import { useState } from 'react';
import './country.css'
const country = ({ country, handleVistedContry, handleVistedFlag }) => {

    const { name, flags, population, area } = country;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isVisited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!isVisited)
    }
    // console.log(handleVistedContry);
    return (
        <div className={`country ${isVisited ? 'visited' : 'non-visited'}`}>
            <h3>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <button onClick={() => handleVistedContry(country)}>Mark as Visit</button>
            <br />
            <button onClick={() => handleVistedFlag(country.flags.png)}>Flag Add</button>
            <br />
            <button onClick={handleVisited}>{isVisited ? 'Visited' : 'Going'}</button>
            {isVisited ? 'I have visited this country' : 'I Planing to Going'}
        </div>
    );
};

export default country;