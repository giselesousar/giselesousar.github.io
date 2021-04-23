import { Toolbar, Grid, Typography, Button, Collapse, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Menu } from '@material-ui/icons';
import { Link } from 'react-scroll'
import { useState } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
    navbarCollapse: {
        height: 55,
        display: 'flex',
        justifyContent: 'flex-end',
    },
    collapse: {
        display: 'flex',
    },
    menu: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    item: {
        cursor: 'pointer',
        padding: theme.spacing(1),
    }
}));

const Mobile = () => {
    const classes = useStyles();

    const [menuOpen, setMenuOpen] = useState<boolean>();

    const handleMenu = () => setMenuOpen(!menuOpen);

    return (
        <Toolbar>
            <Grid container>
                <Grid item xs={12} className={classes.navbarCollapse}>
                    <Button onClick={handleMenu}>
                        <Menu />
                    </Button>
                </Grid>
                <Collapse in={menuOpen} className={classes.collapse}>
                    <Grid item className={classes.menu}>
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
                </Collapse>
            </Grid>
        </Toolbar>
    );
}

export default Mobile;