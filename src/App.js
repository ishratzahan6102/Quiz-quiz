import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import Main from './Layout/Main';
import Courses from './Components/Courses/Courses';
import Chart from './Components/Chart/Chart';
import Blog from './Components/Blog/Blog';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main> ,
      children : [
        {
          path: '/',
          element: <Home></Home> ,
        },
        {
          path: '/courses',
          element: <Courses></Courses> ,
        },
        {
          path: '/chart',
          element: <Chart></Chart> ,
        },
        {
          path: '/blog',
          element: <Blog></Blog> ,
        }
      ]
    },
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
