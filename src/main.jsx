import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import ListedBooks from './components/ListedBooks.jsx';
import PagesToRead from './components/PagesToRead.jsx';
import Detales from './components/Detales.jsx';


const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,

    children:[
      {
        path:'/',
        loader:()=> fetch('/bookData.json'),
        element:<Home></Home>
      },
      {
        path:'/listedbook',
        element:<ListedBooks></ListedBooks>
      },
      {
        path:'/readdata',
        element:<PagesToRead></PagesToRead>
      },
      {
        path:'/detales/:id',
        loader:async({params})=>{
          const datas = await fetch('/bookData.json')
          const daApi = await datas.json()
          
          let filtr = daApi.find((x)=> x.bookId == params.id);
          if (!filtr){
            console.log('No book found with the given id');
      return null;
          }else{
            
            
            return filtr
          }
          
          return daApi
        },
        element:<Detales></Detales>
      }
    ]

  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
