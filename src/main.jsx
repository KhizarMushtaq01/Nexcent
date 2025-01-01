import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
// import Service from './components/Service/Service';
// import Feature from './components/Feature/Feature';
// import Products from './components/Products/Products';
// import Testimonial from './components/Testimonial/Testimonial';
// import FAQ from './components/FAQ/FAQ';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App />} >
    <Route path="" element={<Home />} />
    <Route path="/Home" element={<Home />} />
    {/* <Route path="/Service" element={<Service />} />
    <Route path="/Feature" element={<Feature />} />
    <Route path="/Products" element={<Products />} />
    <Route path="/Testimonial" element={<Testimonial />} />
    <Route path="/FAQ" element={<FAQ />} /> */}
  </Route>
));

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
