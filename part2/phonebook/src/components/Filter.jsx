
const Filter = ({searchPerson, handleFilterChange }) => {
   
    return (
        <div>
            <p>filter shown with {''}
                <input 
                    value={searchPerson} 
                    onChange={handleFilterChange}
                />
            </p>
        </div>
    )
}

export default Filter;