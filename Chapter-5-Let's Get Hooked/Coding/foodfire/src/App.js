import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from 'react-dom/client'
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import Contact from "./components/Contact";
import Error from './components/Error';
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


// Chunking
// Code Splitting
// Dynamic Bundling
// lazy Loading
// on demand loading
// dynamix imoprt

const Grocery = lazy(() => import("./components/Grocery"));

const About = lazy(() => import("./components/About"));


const AppLayout = () => {

    const [userName, setUserName] = useState();

    //authentication
    useEffect(() => {
        // Make an API call and send username and password
        const data = {
            name: "Abhinav Maharana",
        };
        setUserName(data.name);
    }, []);
    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
                <div className="app">
                    <Header />
                    <Outlet />
                    <Footer />
                </div>
            </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: (
                  <Suspense fallback={<h1>Loading....</h1>}>
                    <About />
                  </Suspense>
                ),
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: "/grocery",
                element: (
                  <Suspense fallback={<h1>Loading....</h1>}>
                    <Grocery />
                  </Suspense>
                ),
            },
            {
                path: '/restaurants/:resId',
                element: <RestaurantMenu />
            },
            {
                path: "/cart",
                element: <Cart />,
              },
        ],
        errorElement: <Error />,
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />)