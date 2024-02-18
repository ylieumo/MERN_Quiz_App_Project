import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import {createBrowserRouter, RouterProvider } from 'react-router-dom'

// import components
import MainCom from './components/MainCom'
import Quiz from './components/Quiz'
import Result from './components/Result'

// react router 
const router = createBrowserRouter([
{
  path : '/',
  element : <MainCom></MainCom>
},
{
  path : '/quiz',
  element : <Quiz></Quiz>
},
{
  path : '/result',
  element : <Result></Result>
},
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App


