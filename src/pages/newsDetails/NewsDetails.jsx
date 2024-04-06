import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/dist/umd/react-router-dom.development';
import Header from '../Shared/Header/Header';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import Navbar from '../Shared/Navbar/Navbar';

const NewsDetails = () => {
    const [news, setNews] = useState([]);
    const [value, setValue] = useState(false);
    useEffect(() => {
        fetch('/news.json')
            .then(res => res.json())
            .then(data => { setNews(data); setValue(true) })
    }, [])

    const { id } = useParams();
    // console.log(id);

    const singleNews = value && news.find(aNews => aNews._id === id);
    console.log(singleNews);
    const { image_url, details, title } = singleNews;
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className='grid grid-cols-3 mt-6'>
                <div className='space-y-3 col-span-2'>
                    <h2 className='text-xl font-bold'>{title}</h2>
                    <img src={image_url} alt="" />
                    <p>{details}</p>
                </div>
                <RightSideNav></RightSideNav>
            </div>
        </div>
    );
};

export default NewsDetails;