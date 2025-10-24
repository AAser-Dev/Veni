import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './Components/Contact/Contact';
import Products from './Components/Products/Products';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import NotFound from './Components/NotFound/NotFound';

import './App.css';

function App() {
  // إنشاء الروتر داخل الدالة App
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          { path: "products", element: <Products /> },
          { path: "about", element: <About /> },
          { path: "contact", element: <Contact /> },
          { index: true, element: <Home /> },
        ],
        errorElement: <NotFound />,
      },
    ],
    { basename: "/" } // 👈 مهم جداً
  );

  // الـ return داخل الدالة
  return (
    <RouterProvider router={router} />
  );
}

export default App;
