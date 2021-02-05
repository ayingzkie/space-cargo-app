import React, { useEffect } from 'react';
import { ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { saveShipments } from '../../redux/Shipments/shipments.actions';
import { useHistory } from 'react-router';

const Shipments = (props) => {
	const history = useHistory();

	useEffect(() => {
		const checkShipments = async () => {
			if (!localStorage.getItem('shipments')) {
				window.alert('Ooops! No shipments has been loaded. Please load shipments.');
				await history.push('/');
			} else {
				props.saveShipments(JSON.parse(localStorage.getItem('shipments')));
			}
		};

		checkShipments();
	}, []);

	const onItemClick = (id) => {
		history.push(`/${id}`);
	};

	const shipments = props.shipments.filter((item) => {
		return item.name.toUpperCase().includes(props.filter.toUpperCase());
	});

	return (
		<div>
			{shipments.map((item, i) => {
				return (
					<ListItem button key={item.id} onClick={() => onItemClick(item.id)}>
						<ListItemIcon>
							<Typography component={'h4'} variant={'h4'}>
								{i + 1}
							</Typography>
						</ListItemIcon>
						<ListItemText primary={item.name} />
					</ListItem>
				);
			})}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		shipments: state.shipments.lists,
		filter: state.shipments.filter,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		saveShipments: (data) => dispatch(saveShipments(data)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Shipments);
