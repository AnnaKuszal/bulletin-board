import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './NotFound.module.scss';
import { settings } from '../../../settings';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>

    <h2>Sorry, the page you`&apos;`re looking for was not found :(</h2>
    <Container maxWidth="lg">
      <img src={settings.notFound} alt="404 error" className={styles.image} />
      <Button href='/' className={styles.btn}>Go to homepage</Button>
    </Container>

  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);


export {
  Component as NotFound,
  // Container as NotFound,
  Component as NotFoundComponent,
};
