import React from 'react'
import Navbar from '../../components/navbar/Navbar';

import "./home.scss"
import Featured from '../../components/navbar/featured/Featured';
import List from '../../components/list/List'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";


const home = ({type}) => {
    const [lists, setLists] = useState([])
    const [genre, setGenre] = useState(null)

    useEffect(()=>{
        const getRandomLists = async()=>{
            try{
                const res = await axios.get(`lists${type ? "?type="+type:""}${genre ? "&genre="+genre:""}`, {
                    headers:{
                        token:"Bearer "
                    }
                });
                setLists(res.data);
            }catch(err){

            }
        }
        getRandomLists();
    },[type, genre]);

    return (
        <div className='home'>
            <Navbar/>
            <Featured type={type}/>
            {lists.map((list)=>(
                <List list={list} />
            ))}
            <List/>
        </div>
    )
}

export default home
