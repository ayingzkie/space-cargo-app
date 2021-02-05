import React from 'react';
import {
	AppBar,
	Button,
	Grid,
	IconButton,
	makeStyles,
	Toolbar,
	Typography,
	useMediaQuery,
} from '@material-ui/core';
import clsx from 'clsx';
import { Menu } from '@material-ui/icons';
import { saveShipments } from '../../redux/Shipments/shipments.actions';
import { connect } from 'react-redux';
import CustomInput from '../commons/CustomInput';

const drawerWidth = 340;

const useStyles = makeStyles((theme) => ({
	toolbar: {
		paddingRight: 24, // keep right padding when drawer closed,
	},
	toolbarIcon: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		...theme.mixins.toolbar,
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	fullWidth: {
		width: '100%',
	},
	appBarLogoMobile: {
		textAlign: 'right',
	},
}));

function Header(props) {
	const matches = useMediaQuery('(min-width:1280px)');

	const classes = useStyles();

	function loadShipments() {
		if (localStorage.getItem('shipments')) {
			window.alert('Shipments already been loaded');
		} else {
			fetch('http://localhost:5000/api/shipments', {
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
			})
				.then((resp) => {
					return resp.json();
				})
				.then(async (json) => {
					props.saveShipments(json)
					await window.alert('Shipments Successfully Loaded!')
				});
		}
	}

	async function onFilterChange(value) {
		if (value.target.value) {
			let filtered = props.shipments.filter((item) => {
				return item.name.toUpperCase().includes(value.target.value.toUpperCase());
			});
			props.saveShipments(filtered);
		} else {
			props.saveShipments(JSON.parse(localStorage.getItem('shipments')));
		}
	}

	async function saveShipments() {
		if (props.shipments.length) {
			localStorage.setItem('shipments', JSON.stringify(props.shipments))
		} else {
			window.alert('No shipments loaded. Please load shipments first.');
		}
	}

	return (
		<AppBar position="absolute" className={classes.appBar}>
			<Toolbar className={classes.toolbar}>
				<Grid container alignItems={'center'}>
					<Grid item xs={12} sm={12} md={12} lg={2}>
						<Grid container alignItems={'center'}>
							<Grid item xs={6} sm={6} md={6} lg={2}>
								<IconButton
									edge="start"
									color="inherit"
									aria-label="open drawer"
									onClick={props.handleOpenCloseDrawer}
									className={clsx(
										classes.menuButton,
										props.open && classes.menuButtonHidden
									)}
								>
									<Menu />
								</IconButton>
							</Grid>
							<Grid item alignItems={'flex-end'} xs={6} sm={6} md={6} lg={10}>
								<Typography
									component="h1"
									variant="h6"
									color="inherit"
									noWrap
									className={clsx(
										classes.title,
										!matches && classes.appBarLogoMobile
									)}
								>
									Cargo Planner
								</Typography>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12} sm={12} md={12} lg={8}>
						<CustomInput
							className={classes.fullWidth}
							label="Search"
							variant="outlined"
							id="custom-css-outlined-input"
							onChange={onFilterChange}
						/>
					</Grid>
					<Grid item xs={12} sm={12} md={12} lg={2}>
						<Grid container justify={'center'}>
							<Button onClick={loadShipments}>Load</Button>
							<Button onClick={saveShipments}>Save</Button>
						</Grid>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	);
}

const mapStateToProps = (state) => {
	return {
		shipments: state.shipments.lists,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		saveShipments: (data) => dispatch(saveShipments(data)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
