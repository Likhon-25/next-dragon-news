import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
    {
        _id: "1",
        title: "  Breaking News: Major Event Unfold in the City     ",
    },
    {
        _id: "1",
        title: "  Breaking News: Major Event Unfold in the City     ",
    },
  
  
]

const BreakingNews = () => {
    return (
        <div className='flex justify-between gap-4 items-center bg-gray-200 py-4 px-2 container mx-auto'>
            <button className='btn bg-pink-500 text-white'>Lattest News</button>
            <Marquee pauseOnHover={true}>
                {news.map(n =>{
                  return  <span key={n._id}>{n.title}</span>
                })}
            </Marquee>
        </div>
    );
};

export default BreakingNews;