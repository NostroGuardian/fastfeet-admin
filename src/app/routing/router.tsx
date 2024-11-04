import { Home } from 'pages/Home';
import { ItemDetails } from 'pages/ItemDetails';
import { NotFound } from 'pages/NotFound';
import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from 'shared/ui';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/item',
				element: <ItemDetails />,
			},
		],
	},
	{
		path: '*',
		element: <NotFound />,
	},
]);
