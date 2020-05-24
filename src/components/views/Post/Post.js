import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Post.module.scss';

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';


// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/postsRedux.js';
import { getUser } from '../../../redux/userRedux';

const Component = ({className, posts, match, user}) => (

  <div className={clsx(className, styles.root)}>
    <Container maxWidth="lg">

      <h2>Post details</h2>

      {posts.filter(el => el.id === match.params.id).map(el => (
        <Card key={el.id} className={styles.card}>
          <div className="row">

            <Typography gutterBottom className={styles.title}>
              {el.title}
            </Typography>

            <Typography className={styles.subtitle} gutterBottom>
              Date: {el.date} / Modified: {el.updateDate}
            </Typography>

          </div>

          <div className="row">
            <CardContent className={styles.contentWrapper}>
              <TextField variant="outlined"
                multiline
                rows={4}
                value={el.content}
                className={styles.content} />
              <div className={styles.status}>
                <i>{el.status}</i>
              </div>
              <div className={styles.contact}>
                <h3>Contact details:</h3>
                <p>E-mail: {el.mail}</p>
                {el.phone ? <p>Phone number: {el.phone}</p> : ''}
              </div>
            </CardContent>
          </div>

          {user.logged && user.id === el.userId ?
            <CardActions className={styles.link}>
              <Button href={`/post/${el.id}/edit`} className={styles.btn}>
                Edit
              </Button>
            </CardActions>
            : ''
          }

        </Card>
      ))}

    </Container>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  user: PropTypes.object,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      content: PropTypes.string,
      date: PropTypes.string,
      updateDate: PropTypes.string,
      mail: PropTypes.string,
      status: PropTypes.string,
      userId: PropTypes.string,
    })
  ),
};

Component.defaultProps = {
  posts: [],
};


const mapStateToProps = state => ({
  posts: getAll(state),
  user: getUser(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

const PostContainer = connect(mapStateToProps)(Component);

export {
  // Component as Post,
  PostContainer as Post,
  Component as PostComponent,
};
