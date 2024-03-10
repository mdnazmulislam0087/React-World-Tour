
import { useState } from 'react'
import { useEffect } from 'react';
import Country from '../Country/Country';
import './Countries.css'


const Countries = () => {

    const [countries, setCountries] = useState([]);



    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))

    }, [])

    const [visitedCountries, setVisitedCountries] = useState([]);
    const handleVisitedCountries = country => {
        // console.log('Add this to your visited countries list')
        // console.log(country);
        const totalVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(totalVisitedCountries);
    }

    const [visitedFlags, setVisitedFlags] = useState([]);

    const handleVisitedFlags = (flags) => {
        console.log("Flgs need to add")
        console.log(flags);
        const newVisitedFlags = [...visitedFlags, flags];
        setVisitedFlags(newVisitedFlags);
    }


    // Remove item from an array in a state
    // use filter to select all the elements except the one you want to remove
    


    return (
        <div>
            <h3>Courntries: {countries.length}</h3>

            <div>
                <h5>Visited Countries:{visitedCountries.length} </h5>

                <ul>
                    {
                        visitedCountries.map(visitedCountry => <li key={visitedCountry.cca3}>{visitedCountry.name.common}</li>)
                    }
                </ul>

            </div>

            <div>
                <h3>Add flags: {visitedFlags.length} </h3>
                <div className='flag-container'>
                    {
                        visitedFlags.map((visitedFlag,idx) => <img key={idx} src={visitedFlag.png}></img>)
                    }
                </div>

            </div>


            <div className='country-container'>
                {
                    countries.map(country => <Country key={country.cca3} props={country} handleVisitedCountries={handleVisitedCountries} handleVisitedFlags={handleVisitedFlags}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;