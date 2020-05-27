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

import { connect } from 'react-redux';
import { getUser } from '../../../redux/userRedux.js';

const Component = ({ className, title, user }) => {

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

          {user.logged ?
            <>
              <div className={styles.menu}>
                <Button
                  color="inherit"
                  component={NavLink}
                  to="/myPosts"
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
              </div>

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
            </>
            :
            <>
              <div className={styles.menu}>
                <Button color="inherit" href="https://google.com" className={styles.btn}>Login</Button>
              </div>

              <div className={styles.mobileMenu}>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  href="https://google.com"
                  //onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </div>
            </>
          }

        </Toolbar>
      </AppBar>
    </div>

  );

};

Component.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  isLogged: PropTypes.bool,
  user: PropTypes.shape({
    id: PropTypes.string,
    logged: PropTypes.bool,
    author: PropTypes.string,
    mail: PropTypes.string,
  }),
};

Component.defaultProps = {
  posts: [],
  user: {},
};

const mapStateToProps = state => ({
  user: getUser(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const ComponentContainer = connect(mapStateToProps)(Component);


export {
  // Component as NavBar,
  ComponentContainer as NavBar,
  Component as NavBarComponent,
};
