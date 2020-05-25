import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './MyPosts.module.scss';

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

// import { settings } from '../../../settings';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';
import { getAll } from '../../../redux/postsRedux.js';

import { getUser } from '../../../redux/userRedux';


const Component = ({ className, posts, user }) => (

  <div className={clsx(className, styles.root)}>
    <h2>My posts</h2>

    <Container maxWidth="lg">

      {user.logged ?

        <Button href={`/post/add`} aria-label="add" className={styles.button}>
          <AddIcon /> Add new
        </Button>

        : ''
      }

      {posts.filter(el => el.userId === user.id).map(el => (
        <Card key={el.id} className={styles.card}>
          <CardContent>
            <Typography gutterBottom >
              <Link href={`/post/${el.id}`} className={styles.title}>
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
  posts: getAll(state),
  user: getUser(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

const MyPostsContainer = connect(mapStateToProps)(Component);

export {
  //Component as Homepage,
  //Container as Homepage,
  MyPostsContainer as MyPosts,
  Component as MyPostsComponent,
};
