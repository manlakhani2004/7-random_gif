import React from "react";
import  { useEffect, useState } from "react";
import axios from "axios";

const api_key = process.env.REACT_APP_API_KEY;




function useGif(query) {

    //random gif
    let random_api_endpoint = `https://api.giphy.com/v1/gifs/random?api_key=${api_key}`;
    //random search gif
    let Search_api_endpoint = `https://api.giphy.com/v1/gifs/random?api_key=1teQqdZPhAKwjNB1fX78hx267Es1trQD&tag=${query}`;


    const [Gif, setGif] = useState('');
    const [loader, setLoader] = useState(false);


    function FetchGifData() {
        //api call
        try {
            setLoader(true);
            axios.get((query)?(Search_api_endpoint):(random_api_endpoint))
                .then((Response) => {
                    setGif(Response.data.data.images.downsized.url);
                    console.log("gif url", Response.data.data.images.downsized.url)
                    console.log(Response);
                    setLoader(false);
                });
        }
        catch (e) {
            console.log("error is:", e);
        }
    }

    useEffect(() => {
        //api call when first render
        FetchGifData();
    }, []);


    return {Gif,loader,FetchGifData}


}

export default useGif;