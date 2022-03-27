import React, { useState } from 'react'
import { Mic, Search } from '@material-ui/icons'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useStateValue } from '../centralState/StateProvider'
import { actionTypes } from '../centralState/reducer'

const SearchBar = ({ hideButtons = false }) => {
    const [input, setInput] = useState("")
    const history = useHistory();

    const [{ }, dispatch] = useStateValue();

    const searchGoogleData = (event) => {
        event.preventDefault()
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })
        history.push("/google-clone/search")
    }
    return (
        <>
            <form onSubmit={searchGoogleData}>
                <div className="search">
                    <div className="flex items-center border border-gray-300 rounded-full h-12 mx-auto mt-10 py-2.5 px-5 max-w-xl" style={{ width: '75%' }}>
                        <Search />
                        <input type="text" name="" className="flex-1 outline-none py-2.5 px-5 text-sm" vlaue={input} onChange={(event) => setInput(event.target.value)} />
                        <Mic />
                    </div>

                    {!hideButtons &&
                        <div className="mt-7 flex justify-center gap-2">
                            <button type="submit" className="py-2 px-4 border border-white text-gray-700 hover:shadow-md hover:border-gray-200 rounded-sm focus:shadow-sm" variant="outlined" style={{ backgroundImage: '-webkit-linear-gradient(top ,#f8f8f8,#f1f1f1)' }}>Google Search</button>
                            <button onClick={""} className="py-2 px-4 border border-white text-gray-700 hover:shadow-md hover:border-gray-200 rounded-sm focus:shadow-sm" variant="outlined" style={{ backgroundImage: '-webkit-linear-gradient(top ,#f8f8f8,#f1f1f1)' }}>I,m Feeling Lucky</button>
                        </div>
                    }

                </div>
            </form>
        </>
    )
}

export default SearchBar