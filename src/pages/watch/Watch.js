import { ArrowBackIosOutlined, ArrowBackOutlined } from '@material-ui/icons';
import React from 'react';
import { useLocation } from 'react-router';
import { Link } from "react-router-dom";
import './watch.scss'

const Watch = () => {
    const Location = useLocation();
    const movie = location.movie;
    return (
        <div className="watch">
            <Link to="/">
                <div className="back">
                    <ArrowBackOutlined/>
                    Home
                </div>
            </Link>
            <video className="video" autoPlay progress controls src={movie.video}/>
        </div>
    )
}

export default Watch
