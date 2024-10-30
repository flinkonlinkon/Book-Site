import React from 'react'
import { useLoaderData } from 'react-router-dom';

export default function Detales() {
  let api = useLoaderData()
  let {bookId,bookName,author,image,review,rating,totalPages,category,tags,publisher,yearOfPublishing} = api
    
    
  return (
    <div className='w-11/12 mx-auto md:flex md:justify-between gap-x-5'>
      <div className='bg-[#F3F3F3] rounded-xl p-20 w-1/2'>
        <img className='w-[425px] h-[564] object-cover' src={image} alt="" />
      </div>
      <div className='w-1/2'>
      <div className='border-b-2'>
      <p className='text-5xl font-customFont font-bold flex'>{bookName}</p>
      <p className='text-xl font-bold  mt-3 mb-5 flex'>By: {author}</p>
      </div>
      <div className='border-b-2'>
      <p className='font-medium mt-7 mb-7 flex'>{category}</p>
      </div>

      <div className='border-b-2'>
        <span className='font-bold flex'>Review:</span><p className='text-[#131313] flex'>{review}</p>
        <div className='flex  items-center gap-3 mt-20 mb-7'>
        <span className='font-bold flex'>Tags:</span>{
          tags.map(x=><p className='text-[#23BE0A] p-1 bg-[#F3F3F3] rounded-full px-2'>#{x}</p>)
        }
        </div>
      </div>
      <div>
        <p className='flex gap-x-16'><span className='text-[#595959]'>Number of Pages:</span><span className='font-bold'>{totalPages}</span></p>
        <p className='flex gap-x-32'> <span className='text-[#595959]'>Publisher:</span> <span className='font-bold'>{publisher}</span></p>
        <p className='flex gap-x-16'> <span className='text-[#595959]'>Year of Publishing:</span><span className='font-bold'>{yearOfPublishing}</span></p>
        <p className='flex gap-x-36'> <span className='text-[#595959]'>Rating:</span><span className='font-bold'>{rating}</span></p>
      </div>

      

      

      </div>
      
    </div>
  )
}
