import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';

import Root, { 
	loader as rootLoader, 
	action as rootAction 
} from "./routes/root";

import Contact, {
	loader as contactLoader
} from "./routes/contact"

import EditContact , {
	action as editAction
} from "./routes/edit"

import {
	action as destroyAction
} from "./routes/destroy"

import Index from './routes/index'

import ErrorPage from "./error-page";

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		loader: rootLoader,
		action: rootAction,
		children: [
			{
				index: true,
				element: <Index />
			},
			{
				path: '/contacts/:contactId',
				element: <Contact />,
				loader: contactLoader,
			},
			{
				path: '/contacts/:contactId/edit',
				element: <EditContact />,
				action: editAction,
				loader: contactLoader,
			},
			{
				path: '/contacts/:contactId/destroy',
				action: destroyAction,
				errorElement: <div> There was an error. </div>
			},
		]
	}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
