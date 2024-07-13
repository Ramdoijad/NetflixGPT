import React from 'react'
import Login from './Login'
import Browse from './Browse.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Body = () => {
    
const appRouter = createBrowserRouter([
    {
       path:"/",
       element:<Login/>
    },
    {
   path:"/browse",
    element:<Browse/>
    },
    {

    }
])
  return (
   <RouterProvider router={appRouter}/>
  )
}

export default Body
