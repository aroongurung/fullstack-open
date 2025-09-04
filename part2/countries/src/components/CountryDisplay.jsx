const CountryDisplay = ({ countries, ShowSelectCountry }) => {
  return (
    <div>
       {countries.map((country) => (
            <div key={country.name.common}>
            <p>
                {country.name.common} {''}
                <button onClick={() => ShowSelectCountry(country)}>show</button>
            </p>
            </div>
        ))}
    </div>
)
};

export default CountryDisplay;