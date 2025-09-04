import CountryContent from "./CountryContent";
import CountryDisplay from "./CountryDisplay";

const Country = ({ countries, searchCountry, ShowSelectCountry }) => {
    
    if (searchCountry.trim() === '') {
        return <p>Enter a country name to search</p>
    }
//Countries more than 10
  if (countries.length > 10) {
    return <p>Too many matches ({countries.length}), specify another filter</p>;
  }
//Countries less/equal but more than one
  if (countries.length <= 10 && countries.length > 1) {
    return <CountryDisplay 
                countries={countries} 
                ShowSelectCountry={ShowSelectCountry} 
            />;
  }

  if (countries.length === 1) {
    return <CountryContent country={countries[0]} />;
  }

  return <p>No matches</p>;
};

export default Country;