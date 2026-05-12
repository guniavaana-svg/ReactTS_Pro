import { useState } from 'react'
import { API_URL } from "../config.ts"
import './App.css'
import Layout from './layouts/Layout/Layout.tsx';

function App() {

  return (
    <> 
      <div className="bg-red-500 text-white p-4">
        Tailwind is working!
      </div>
      <Layout/>
     
    </>
    
  )
}

export default App
