import React from 'react';
import { Route } from 'react-router-dom';

import DesktopLayout from '../components/layouts/DesktopLayout';
import { useMediaQuery } from '@material-ui/core';

const DesktopRoutes = ({ component: Component, ...rest }) => {
	const matches = useMediaQuery('(min-width:600px)');

	return (
		<Route
			{...rest}
			render={(props) => (
				<DesktopLayout>
					<Component {...props} />
				</DesktopLayout>
			)}
		/>
	);
};

export default DesktopRoutes;
