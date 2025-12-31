import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from './components/RootLayout';
import { AboutUs } from './pages/AboutUs'
import { Services } from './pages/Services';
import { Industries } from './pages/Industries';
import { Portfolio } from './pages/Portfolio';
import { Testimonial } from './pages/Testimonial';
import { ContactUs } from './pages/ContactUs';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <AboutUs />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/industries",
        element: <Industries />
      },
      {
        path: "/portfolio",
        element: <Portfolio />
      },
      {
        path: "/testimonial",
        element: <Testimonial />
      },
      {
        path: "/contactus",
        element: <ContactUs />
      }
    ]
  }
])

function App() {

  return (
    <>
      <RouterProvider router={routes} />
      <Analytics />
      <SpeedInsights />
    </>
  )
}

export default App
