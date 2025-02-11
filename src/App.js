import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import AboutUs from './components/About';
import Error from './components/Error';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';
import Contact from './components/Contact';

const AppLayout = () => {
    return (
        <div className='app'>
            <Header/>
            <Outlet/>
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body></Body>
            },
            {
                path: "/about",
                element: <AboutUs/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },

        ],
        errorElement: <Error/>
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);