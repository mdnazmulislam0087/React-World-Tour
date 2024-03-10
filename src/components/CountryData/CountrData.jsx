
const CountrData = ({props}) => {
    console.log(props.capital)
    return (
        <div>
            <h2>Country Data, <small>Capital</small> : {props.capital} </h2>
        </div>
    );
};

export default CountrData;