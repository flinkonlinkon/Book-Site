import React from 'react'
import Card from './Card'
import { useLoaderData } from 'react-router-dom'

export default function Home() {
    let data = useLoaderData()
    console.log(data);
    
    
    
  return (
    <>
    <div className='w-11/12 mx-auto rounded-lg bg-[#F3F3F3] md:flex md:justify-evenly'>
        <div className='w-1/2 p-20 mt-9'>
        <p className='text-5xl font-customFont font-bold'>Books to freshen up your bookshelf</p>
        <button className='btn text-white bg-green-500 mt-16'>View The List</button>

        </div>
        <div className='w-1/2 p-4 flex justify-center items-center'>
        <img className='w-40 rounded-lg' src="https://i.ibb.co.com/98kQ6Qr/jaredd-craig-HH4-WBGNyltc-unsplash.jpg" alt="" /></div>
     
    </div>

    <div className='w-11/12 mx-auto mt-10'>
    <p className='text-4xl font-customFont font-bold'>Books</p>
    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>

        {
            data.map(book => <Card book={book}></Card>)
        }


    </div>
    </div>
    </>
  )
}
