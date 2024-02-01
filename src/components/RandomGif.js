import React, { useEffect, useState } from "react";
// import axios from "axios";
import Loading from "./Loading";
import useGif from "../hook/useGif";

function RandomGif() {

    //get data from useGif custom hook
    const{Gif,loader,FetchGifData} = useGif();

    return (
        <div className="randomgif-container">
            <h1 className="heading">Random gif</h1>

            <div>
                { !loader &&
                    <img src={Gif} alt="not found" />
                }

                {
                    loader &&
                    <Loading/>
                }
            </div>

            <button className="btn" onClick={()=>FetchGifData()}>GENERATE</button>

        </div>
    )

}

export default RandomGif;