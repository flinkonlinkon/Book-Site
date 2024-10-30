import React from 'react'
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';
import Detales from './Detales';

export default function Card({book,datas}) {

    let {bookId,bookName,author,image,review,rating,totalPages,category,tags,publisher,yearOfPublishing} = book
    
    function btn(xdata){
     <Detales xdata={xdata}></Detales>
      console.log(xdata);
      
    }
  return (
    <div>
      <div className="card bg-base-100 w-[374px] shadow-xl">
  <figure className="px-2 pt-2">
    <img
      src={image}
      alt={bookName}
      className="rounded-xl w-[326px] h-[220px] object-cover"/>
  </figure>
  <div className="flex justify-evenly text-[#23BE0A] mt-2">
    {
        tags.map(tag => <p>{tag}</p>)
    }
    
    </div>
    <div className='relative left-0'>
    <p className='text-xl font-customFont font-bold '>{bookName}</p>
    <p>By: {author}</p>
    </div>
    
    <div className="border-t-2 flex justify-between p-2">
     <div><Link to={`/detales/${bookId}`} >{category}</Link></div>
     <div className='flex items-center justify-center'>{rating} <CiStar /> </div>
    </div>
  
</div>
    </div>
  )
}
