import React from "react";
import {
    makeStyles,
    Grid,
    TextField,
    Button,
    Typography,
    Menu,
    MenuItem,
    IconButton,
    useMediaQuery
} from "@material-ui/core";
import { MoreVert } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    input: {
        width: '100%',
    },
    paper: {
      textAlign: 'center',
        margin: "auto"
    },
    container: {
        padding: '5px',
    }
}));

function HeaderMobile(props){
    const styles = useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Grid container
              direction="row"
              justify="center"
              alignItems={"center"}
              spacing={2}
              className={styles.container}
        >
            <Grid item
                  xs={2}
                  alignContent={"center"}
            >
                <Grid
                    container
                    xs={12}
                    justify={"center"}
                >
                    <Typography
                        variant="h4"
                        component="h4"
                    >
                        CP
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                item
                xs={8}
            >
                <Grid container justify={"center"}>
                    <TextField className={styles.input} id="outlined-basic" label="Search" variant="outlined" />
                </Grid>
            </Grid>
            <Grid
                item
                xs={2}
            >
                <Grid container
                      justify={"center"}
                      spacing={1}
                >
                    {/*<Grid item xl={'auto'}>*/}
                    {/*    <Button variant="contained">Load</Button>*/}
                    {/*</Grid>*/}
                    {/*<Grid item xl={'auto'}>*/}
                    {/*    <Button variant="contained">Save</Button>*/}
                    {/*</Grid>*/}
                    <IconButton color="primary" aria-label="upload picture" component="span"  onClick={handleClick}>
                        <MoreVert />
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default HeaderMobile