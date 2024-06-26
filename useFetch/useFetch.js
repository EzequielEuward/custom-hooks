import { useEffect, useState } from "react"


export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })

    const getFech = async () => {

        setState ({
            ...state,
            isLoading: true,
            
        })
 
        const resp = await fetch(url);
        const data = await resp.json();

        setState({
            data,
            isLoading: false,
            hasError: null
        })

    }

    useEffect(() => {
        getFech();

    }, [url]
    )





    return {
        ...state,
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    };

}

export default useFetch
