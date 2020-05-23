import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './NavBar.module.scss';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/Menu';
import { NavLink } from 'react-router-dom';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';


const Component = ({ className, title, isLogged }) => {


  //const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (

    <div className={clsx(className, styles.root)}>

      {/* <FormGroup>
        <FormControlLabel
          control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup> */}
      <AppBar position="static">
        <Toolbar>

          <Button color="inherit" className={styles.title} href="/">
            {title}
          </Button>

          {isLogged ?
            <div className={styles.menu}>
              <Button
                color="inherit"
                component={NavLink}
                to="#"
                activeClassName="active"
                variant="text"
                className={styles.btn}>My posts
              </Button>

              <Button color="inherit"
                component={NavLink}
                to="#"
                activeClassName="active"
                variant="text"
                className={styles.btn}>Logout
              </Button>
            </div >
            :
            <div className={styles.menu}>
              <Button color="inherit" href="https://google.com" className={styles.btn}>Login</Button>
            </div>
          }

          {/* {auth && ( */}
          <div className={styles.mobileMenu}>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>

            <MenuList
              id="menu-appbar"
              className={styles.list}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}

            >
              <MenuItem onClick={handleClose}><a href="/myPosts">My posts</a></MenuItem>
              <MenuItem onClick={handleClose}><a href="/">Logout</a></MenuItem>

            </MenuList>

          </div>
          {/* )} */}

        </Toolbar>
      </AppBar>
    </div>

  );

};

Component.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  isLogged: PropTypes.bool,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);


export {
  Component as NavBar,
  // Container as NavBar,
  Component as NavBarComponent,
};
