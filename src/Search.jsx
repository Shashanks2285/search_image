import React, { useState } from "react";
import Sresult from "./Sresult";
const Search  = ()=>{
    const [search,setsearch]= useState();
    const inputE = (event)=>{
        setsearch(event.target.value);
    }

    return(
        <>
            <div className="searchbar">
            <input 
            type="text" 
            placeholder="Search..."
            value={search}
            onChange={inputE}
            />
            {search ==="" ? null:<Sresult query= {search}/>}
            </div>
        </>
    )
}

export default Search;