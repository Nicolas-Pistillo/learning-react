import axios from "axios";
import { useEffect, useState } from "react";

const useRequest = (endpoint) => 
{
    const [data, setData] = useState();

    useEffect(() => {
        // Fetch data or perform side effects here
        axios.get(endpoint).then((response) => 
        {
            /* console.log(response.data); */
            setData(response.data);
        })
        .catch((error) => console.error(error));
    }, []);

    return data;
}

export default useRequest