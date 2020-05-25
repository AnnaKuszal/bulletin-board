import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './PostEdit.module.scss';

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import { connect } from 'react-redux';
import { getAll, updatePost } from '../../../redux/postsRedux.js';


const Component = ({className, posts, match, updatePost}) => {

  const titleProps = {
    minLength: 10,
  };

  const contentProps = {
    minLength: 20,
  };

  const postArray = posts.filter(el => el.id === match.params.id);

  const [post, setPost] = React.useState(postArray[0]);

  const handleChange = async (event, name) => {
    await setPost({
      ...post,
      [name]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updatePost(post);
  };

  return (
    <div className={clsx(className, styles.root)}>

      <h2>Post Editing</h2>

      <Container maxWidth="lg">
        {posts.filter(el => el.id === match.params.id).map(el => (

          <Card key={el.id} className={styles.card}>

            <Typography gutterBottom className={styles.title}>
              Edit post
            </Typography>

            <form className={styles.form} onSubmit={e => handleSubmit(e)}>
              <TextField
                id="title"
                label="Title"
                required
                inputProps={titleProps}
                defaultValue={el.title}
                className={styles.textInput}
                onChange={e => handleChange(e, 'title')}
              />

              <TextField
                variant="outlined"
                multiline
                id="content"
                label="Content"
                placeholder="Text"
                rows="6"
                required
                inputProps={contentProps}
                defaultValue={el.content}
                className={styles.textInput}
                onChange={e => handleChange(e, 'content')}

              />
              <TextField
                id="mail"
                label="E-mail"
                type="email"
                required
                defaultValue={el.mail}
                className={styles.textInput}
                onChange={e => handleChange(e, 'email')}
              />
              <TextField
                id="phone"
                label="Phone number"
                type="string"
                defaultValue={el.phone}
                className={styles.textInput}
                onChange={e => handleChange(e, 'phone')}
              />

              <div>
                <Button type="submit" className={styles.btn}>Save</Button>
                <Button href="/" className={styles.btn}>Return</Button>
              </div>
            </form>
          </Card>
        ))}

      </Container>

    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
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
  updatePost: PropTypes.func,
};

Component.defaultProps = {
  posts: [],
};

const mapStateToProps = state => ({
  posts: getAll(state),
});


const mapDispatchToProps = dispatch => ({
  updatePost: post => dispatch(updatePost(post)),
});

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

const PostEditContainer = connect(mapStateToProps, mapDispatchToProps)(Component);


export {
  //Component as PostEdit,
  PostEditContainer as PostEdit,
  Component as PostEditComponent,
};
