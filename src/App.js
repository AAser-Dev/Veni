import Contact from './Components/Contact/Contact';
import Products from './Components/Products/Products';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import NotFound from './Components/NotFound/NotFound';

import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
function App() {
  let paths = createBrowserRouter([
    {
      path:"/" , 
      element:<Layout/>, 
      children:[
        {path:"products" , element: <Products/>},
        {path:"about" , element: <About/>},
        {path:"contact" , element: <Contact/>},
        {index:true , element: <Home/>}
      ],
      errorElement: <NotFound />
    }
  ]) 
  return (
<>
      <RouterProvider router={paths}></RouterProvider>
</>
  );
}

export default App;
