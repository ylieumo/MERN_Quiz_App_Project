import './styles/App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

/** import components */
import MainCom from './components/MainCom.jsx';
import Quiz from './components/Quiz.jsx';
import Result from './components/Result.jsx';
import { CheckUserExist } from './helper/helper.jsx';


/** react routes */
const router = createBrowserRouter([
  {
    path : '/',
    element : <MainCom></MainCom>
  },
  {
    path : '/quiz',
    element : <CheckUserExist><Quiz /></CheckUserExist>
  },
  {
    path : '/result',
    element : <CheckUserExist><Result /></CheckUserExist>
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;