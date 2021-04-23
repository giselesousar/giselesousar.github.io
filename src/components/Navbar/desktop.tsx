import { Toolbar, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-scroll'

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    menu: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    item: {
        cursor: 'pointer',
        '&:hover': {
            color: theme.palette.text.primary,
         },
    }
}));

const Desktop = () => {
    const classes = useStyles();
    return (
        <Toolbar>
            <Grid container className={classes.root}>
                <Grid item md={9}>
                    <Link to="test1" spy={true} smooth={true} duration={500}>
                    </Link>
                </Grid>
                <Grid item md={2} className={classes.menu}>
                    <Link className={classes.item} to="test2" spy={true} smooth={true} duration={500}>
                        <Typography align='center' variant='h5' >Home</Typography>
                    </Link>
                    <Link className={classes.item} to="test2" spy={true} smooth={true} duration={500}>
                        <Typography align='center' variant='h5' >Projects</Typography>
                    </Link>
                    <Link className={classes.item} to="test2" spy={true} smooth={true} duration={500}>
                        <Typography align='center' variant='h5' >Contact</Typography>
                    </Link>
                </Grid>
            </Grid>
        </Toolbar>
    );
}

export default Desktop;