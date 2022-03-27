import React from 'react'
import { NavLink } from 'react-router-dom'
import { Apps } from "@material-ui/icons"
import { Avatar } from "@material-ui/core"
import SearchBar from '../components/SearchBar'

const Home = () => {
    return (
        <>
            <div className="flex flex-col h-screen w-full">
                <div className="flex justify-between py-5 px-7 items-center">
                    <div className="flex gap-5">
                        <NavLink className="hover:underline" to="/google-clone/about">About</NavLink>
                        <NavLink className="hover:underline" to="/google-clone/store">Store</NavLink>
                    </div>
                    <div className="flex justify-between gap-1 items-center" style={{ minWidth: '16vw' }}>
                        <NavLink className="hover:underline" to="/google-clone/gmail">Gmail</NavLink>
                        <NavLink className="hover:underline" to="/google-clone/images">Images</NavLink>
                        <div className="hover:bg-gray-100 rounded-full p-2.5 cursor-pointer">
                            <Apps />
                        </div>
                        <Avatar className="cursor-pointer" />
                    </div>
                </div>

                <div className="flex flex-1 flex-col" style={{ marginTop: '10%' }}>
                    <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google Logo" className="mx-auto" />

                    <div>
                        <SearchBar />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home