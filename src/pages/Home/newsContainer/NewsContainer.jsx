import { and } from 'firebase/firestore';
import React from 'react';
import { Link } from 'react-router-dom';

const NewsContainer = ({aNews}) => {
    console.log(aNews);
    const {image_url, details, title, _id} = aNews;
    return (
        <div className='space-y-3 mb-6 shadow-lg py-4 border rounded px-3'>
            <h2>{title}</h2>
            <img src={image_url} alt="" />
            {
                details.length > 200 ? <p>{details.slice(0, 210)} <Link to = {`/news-details/${_id}`}><span className='text-blue-600'>Read More...</span></Link></p>:
                <p>{details}</p>
            }
            
        </div>
    );
};

export default NewsContainer;