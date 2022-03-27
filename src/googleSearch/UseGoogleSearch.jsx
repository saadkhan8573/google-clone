import { useEffect, useState } from 'react';
import API_KEY from '../key';
import axios from 'axios'

const CONTEXT_KEY = "71f661092f95ce4f2"

const UseGoogleSearch = (term) => {
    const [data, setdata] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
            setdata(response.data)
        }
        fetchData();
    }, [term])

    return { data }
}

export default UseGoogleSearch;