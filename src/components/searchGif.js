import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import useGif from "../hook/useGif";

function SearchGif() {


    const [query, setQuery] = useState('tom and jerry');
    const{Gif,loader,FetchGifData} = useGif(query);


    return (
        <div className="randomgif-container searchGif-container">
            <h1 className="heading"> Search  {query} gif</h1>

            <div>
                { !loader &&
                    <img src={Gif} alt="not found" />
                }
                {
                    loader &&
                    <Loading/>
                }
            </div>
            
            <input type="text" 
            onChange={(event)=>setQuery(event.target.value)} 
            value={query} className="search-query"
            placeholder="SEARCH GIF..." />
            <button className="btn" onClick={()=>FetchGifData()}>GENERATE</button>

        </div>
    )

}

export default SearchGif;


