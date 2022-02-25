import { useState } from "react";

export const useFetch = ( url : string ) : Array<object> => {

    const [state, setState] = useState([]);

    const data = fetch(url);
    console.log(data)

    return []
}