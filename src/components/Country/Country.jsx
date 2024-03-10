import { useState } from 'react';
import './Country.css'
import CountryDetail from '../CountryDetail/CountryDetail';

const Country = ({props, handleVisitedCountries, handleVisitedFlags}) => {
    // console.log(props)
    // console.log(handleVisitedCountries)
    // console.log(handleVisitedFlags);
    const {name, flags, population, area, cca3} = props

    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(!visited)
    }

    
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited? 'purple' : 'black'}}>Name: {name.common} </h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() => handleVisitedCountries(props)}>Mark visited</button>
            <br />
            <button onClick={handleVisited}>{visited? "Visited" : "Going"}</button>
            {
                visited ? 'I have visited this country' : 'Nop'
            }
            <br />
            <button onClick={()=>handleVisitedFlags(flags)}>Add Flag</button>

            <br />
            <CountryDetail props ={props} 
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags = {handleVisitedFlags}
            >

            </CountryDetail>
        </div>
    );
};

export default Country;