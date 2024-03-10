import CountrData from "../CountryData/CountrData";


const CountryDetail = ({props,handleVisitedFlags,handleVisitedCountries}) => {
    return (
        <div>
            <h4>Country Details</h4>
            <hr />
            <CountrData props ={props}
            handleVisitedFlags={handleVisitedFlags}
            handleVisitedCountries ={handleVisitedCountries}
             >

            </CountrData>
        </div>
    );
};

export default CountryDetail;