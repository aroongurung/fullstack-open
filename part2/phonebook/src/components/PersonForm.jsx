const PersonForm = ({
    addName, 
    newName, 
    handleNamechange, 
    newNum, 
    handleNumberChange}) => {
    
        return (
        <>
            <form onSubmit={addName}>
            <div>
            name: <input 
                    value={newName} 
                    onChange={handleNamechange} 
                />
            </div>
            <div>
             number: <input 
                        value={newNum} 
                        onChange={handleNumberChange} 
                    />
                </div>          
            <div>
                <button type="submit">add</button>
            </div>
            </form>
        </>
    )
}

export default PersonForm;