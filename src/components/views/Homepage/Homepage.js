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
//import Paper from '@material-ui/core/Paper';

//import { settings } from '../../../settings';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';
import { getAll, fetchFromAPI, getLoadingState } from '../../../redux/postsRedux.js';
import { getUser } from '../../../redux/userRedux';

class Component extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    posts: PropTypes.array,
    user: PropTypes.object,
    loadPosts: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
  };

  static defaultProps = {
    posts: [],
    user: {},
    loading: {},
  };

  render() {

    const { className, posts, user, loading: { active, error } } = this.props;


    if(active || !posts.length){
      return (
        <p>Loading...</p>
      );
    } else if(error) {
      return (
        <div>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </div>
      );
    } else {

      return (

        <div className={clsx(className, styles.root)}>
          <h2>Homepage</h2>

          <Container maxWidth="lg">

            {user.logged ?

              <Button href={`/post/add`} aria-label="add" className={styles.button}>
                <AddIcon /> Add new
              </Button>

              : ''
            }

            {posts.map(el => (
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
    }
  }
}

const mapStateToProps = state => ({
  posts: getAll(state),
  user: getUser(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch, state) => ({
  loadPosts: () => dispatch(fetchFromAPI(state)),
});

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

const HomepageContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Homepage,
  //Container as Homepage,
  HomepageContainer as Homepage,
  Component as HomepageComponent,
};
