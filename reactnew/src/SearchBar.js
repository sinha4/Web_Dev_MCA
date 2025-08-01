
import { useState } from "react"
function SearchBar({onSubmit}){
    const [term,setTerm]=useState('')
    const handleFormSubmit=(event)=>{
        event.preventDefault()
        onSubmit(term)     
        

    }

    const handleChange=(event)=>{
    setTerm(event.target.value);

    }
    
    return(
    <div className="search-bar">
        <form onSubmit={handleFormSubmit}>
            <div className="mb-4 text-blue-900 font-bold text-lg">
            <label>Enter Search Term</label>
            </div>
        <div className="border-green-800">
        <input onChange={handleChange} value={term} />
        </div>
        </form>
    </div>
    )
}
export default SearchBar