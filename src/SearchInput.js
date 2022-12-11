import React, { useState } from "react";
import useDebounce from "./useDebounce";

const SearchInput = ({value, onChange}) =>{
    const [displayValue, setDisplayValue] = useState(value);
    const debouncedChange = useDebounce(onChange, 500)
    
    function escreveuTexto(event) {
        setDisplayValue(event.target.value)
        debouncedChange(event.target.value);
        
    }
    return(
        <input type="search" 
        value={displayValue} 
        onChange={escreveuTexto}/>
    )

}

export default SearchInput;