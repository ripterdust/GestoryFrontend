import {  useEffect, useState } from "react";

export const useFetch = async ( url : string )  => {

    const [ state, setState] = useState([]);

    useEffect(() => {
        fetch( url )
            .then(response => response.json())
            .then(data => setState(data))
        
    }, [url])
   
    return [ state ];

}