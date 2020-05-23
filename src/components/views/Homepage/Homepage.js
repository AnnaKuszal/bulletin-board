import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Homepage.module.scss';

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

//import { settings } from '../../../settings';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';
import { getAll } from '../../../redux/postsRedux.js';


const Component = ({ className, posts }) => (
  <div className={clsx(className, styles.root)}>
    <h2>Homepage</h2>

    <Container maxWidth="lg">
      <Button color="secondary" aria-label="add" className={styles.button}>
        <AddIcon /> Add new
      </Button>

      {posts.map(el => (
        <Card key={el.id} className={styles.card}>
          <CardContent>
            <Typography gutterBottom >
              <Link href="#" className={styles.title}>
                {el.title}
              </Link>
            </Typography>
            <Typography className={styles.subtitle} gutterBottom>
              Date: {el.date} / Modified: {el.updateDate}
            </Typography>
          </CardContent>

        </Card>
      ))}

    </Container>

  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  posts: PropTypes.array,
};

const mapStateToProps = state => ({
  posts: getAll(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

const HomepageContainer = connect(mapStateToProps)(Component);

export {
  //Component as Homepage,
  //Container as Homepage,
  HomepageContainer as Homepage,
  Component as HomepageComponent,
};
