import React from 'react'
import { useStateValue } from '../centralState/StateProvider';
import UseGoogleSearch from '../googleSearch/UseGoogleSearch';
import { NavLink } from "react-router-dom";
import SearchBar from '../components/SearchBar';
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import './searchdata.css';

const SearchData = () => {
    const [{ term }, dispatch] = useStateValue();
    const { data } = UseGoogleSearch(term);
    console.log("Response", data)
    return (
        <>
            <div className="searchPage">
                <div className="searchPage__header">
                    <NavLink to="/google-clone/">
                        <img
                            className="searchPage__logo"
                            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                            alt=""
                        />
                    </NavLink>

                    <div className="searchPage__headerbody">
                        <SearchBar hideButtons className="-ml-48" />

                        <div className="searchPage__options">
                            <div className="searchPage__optionsLeft">
                                <div className="searchPage__option">
                                    <SearchIcon />
                                    <NavLink to="/google-clone/all">All</NavLink>
                                </div>
                                <div className="searchPage__option">
                                    <DescriptionIcon />
                                    <NavLink to="/google-clone/news">News</NavLink>
                                </div>
                                <div className="searchPage__option">
                                    <ImageIcon />
                                    <NavLink to="/google-clone/images">Images</NavLink>
                                </div>
                                <div className="searchPage__option">
                                    <LocalOfferIcon />
                                    <NavLink to="/google-clone/shopping">Shopping</NavLink>
                                </div>
                                <div className="searchPage__option">
                                    <RoomIcon />
                                    <NavLink to="/google-clone/maps">maps</NavLink>
                                </div>
                                <div className="searchPage__option">
                                    <MoreVertIcon />
                                    <NavLink to="/google-clone/more">more</NavLink>
                                </div>
                            </div>

                            <div className="searchPage__optionsRight">
                                <div className="searchPage__options">
                                    <NavLink to="/google-clone/settings">Settings</NavLink>
                                </div>
                                <div className="searchPage__option">
                                    <NavLink to="/google-clone/tools">Tools</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {term && (
                    <div className="searchPage__results_section">
                        <p className="searchPage__resultCount">
                            About {data?.searchInformation.formattedTotalResults} results (
                            {data?.searchInformation.formattedSearchTime}seconds) for {term}
                        </p>

                        {data?.items.map((item) => (
                            <div className="searchPage__results ">
                                <a className="searchPage__resultLink" href="item.link">
                                    {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0].src && (
                                        <img className="searchPage__resultImage" src={
                                            item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src
                                        }
                                            alt=""
                                        />
                                    )}
                                    {item.displayLink}</a>
                                <a className="searchPage__resultTitle" href={item.link}>
                                    <h2 className="text-blue-800 text-xl">{item.title}</h2>
                                </a>
                                <p className="searchPage__resultSnippet" dangerouslySetInnerHTML={{ __html: item.htmlSnippet }} />
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </>
    )
}

export default SearchData;