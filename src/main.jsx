import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import { CarouselProvider } from './Context/CarouselContext.jsx';
import "slick-carousel/slick/slick.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/main.css';
import './assets/responsive.css';

// Refresh / hard refresh always opens the page at the top (the landing "What If" page on step 01),
// instead of the browser putting the visitor back where they were.
if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
if (!window.location.hash) window.scrollTo(0, 0);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CarouselProvider>
      <RouterProvider router={router} />
    </CarouselProvider>
  </StrictMode>,
)


