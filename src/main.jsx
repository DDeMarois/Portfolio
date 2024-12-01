import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import './Nav.css';
import './Contact.css';
import './Portfolio.css';
import './Resume.css';
import './About.css';
import './App.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <About />,
            },
            {
                path: 'contact',
                element: <Contact />,
            },
            {
                path: 'portfolio',
                element: <Portfolio />,
            },
            {
                path: 'resume',
                element: <Resume />,
            },
        ],
    },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);

