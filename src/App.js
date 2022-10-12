import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import Main from './Layout/Main';
import Chart from './Components/Chart/Chart';
import Blog from './Components/Blog/Blog';
import NotFound from './Components/NotFound/NotFound';
import CourseDetails from './Components/CourseDetails/CourseDetails';
import Topics from './Components/Topics/Courses';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main> ,
      children : [
        {
          path: '/',
          element: <Topics></Topics> ,
        },
        {
          path: '/topics',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topics></Topics> ,
        },
        {
          path: '/chart',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Chart></Chart> ,
        },
        {
          path: '/blog',
          element: <Blog></Blog> ,
        },
        {
          path:'/course/:courseId',
          loader: async ({params}) => {
            // console.log(params)
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.courseId}`)
          },
          element: <CourseDetails></CourseDetails>
        }
      ]
    },
    {
      path: '*',
      element: <NotFound></NotFound>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
