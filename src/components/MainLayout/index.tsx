import { Outlet } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import MainNavbar from '../Navbar';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden',
        width: '100%'
    },
    content: {
        flex: '1',
        height: '100%',
        overflow: 'auto',
    },
});

const MainLayout = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <MainNavbar />
            <div className={classes.content}>
                <Outlet />
            </div>
        </div>
    )
};

export default MainLayout;
