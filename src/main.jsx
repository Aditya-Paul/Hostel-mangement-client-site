import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import Router from './Router/Router.jsx';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Authprovider from './Provider/Authprovider.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <div className='max-w-screen-xl mx-auto'>
            <RouterProvider router={Router}>
              <App />
            </RouterProvider>
          </div>
        </HelmetProvider>
      </QueryClientProvider>
    </Authprovider>
  </React.StrictMode>,
)
