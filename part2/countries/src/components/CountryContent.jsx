import Weather from "./Weather";

const CountryContent = ({country}) => {
    return (
        <div>
           <h1>{country.name.common}</h1>
           <p> Capital:{country.capital} </p>
           <p> Area:{country.area}</p>    

           <h1>Languages</h1>
           <ul>
            {Object.values(country.languages).map((language) => (
                <li key={language}>{language}</li>
            ))}          
            </ul>
            <img 
                src={country.flags.png}
                alt={`Flag of ${country.name.common}`}
                width={100}
            />
            <Weather 
                country={country}
            />
        </div>

    )
}

export default CountryContent;