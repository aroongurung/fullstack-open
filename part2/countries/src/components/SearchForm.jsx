const SearchForm = ({searchCountry, handleCountryChange}) => {
    return (
        <div>
            <p>find countries {''}
                <input 
                    type="text"
                    value={searchCountry}
                    onChange={handleCountryChange}
                />           
            </p>
        </div>
    )
}

export default SearchForm;