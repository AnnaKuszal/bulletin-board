import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import shortid from 'shortid';

import styles from './PostAdd.module.scss';

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux';
import { getAll, addPost } from '../../../redux/postsRedux.js';


const Component = ({className, addPost}) => {

  const titleProps = {
    minLength: 10,
  };

  const contentProps = {
    minLength: 20,
  };

  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();
  const date = day + '.' + month + '.' + year;

  const [post, setPost] = React.useState({
    id: shortid.generate(),
    date: date,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addPost(post);
  };

  const handleChange = async (event, name) => {
    await setPost({
      ...post,
      [name]: event.target.value,
    });
  };


  return (

    <div className={clsx(className, styles.root)}>
      <h2>Add new post</h2>

      <Container maxWidth="lg">

        <Card className={styles.card}>

          <Typography gutterBottom className={styles.title}>
            Add new post
          </Typography>

          <form className={styles.form} onSubmit={e => handleSubmit(e)}>
            <TextField
              id="title"
              label="Title"
              required
              value={post.title}
              inputProps={titleProps}
              className={styles.textInput}
              onChange={e => handleChange(e, 'title')}
            />

            <TextField
              variant="outlined"
              multiline
              id="content"
              inputProps={contentProps}
              label="Content"
              placeholder="Text"
              rows="6"
              required
              value={post.content}
              className={styles.textInput}
              onChange={e => handleChange(e, 'content')}
            />

            <TextField
              id="mail"
              label="E-mail"
              type="email"
              required
              value={post.mail}
              className={styles.textInput}
              onChange={e => handleChange(e, 'mail')}
            />
            <TextField
              id="phone"
              label="Phone number"
              type="string"
              value={post.phone}
              className={styles.textInput}
              onChange={e => handleChange(e, 'phone')}
            />

            <div>
              <Button type="submit" className={styles.btn}>Save</Button>
              <Button href="/" className={styles.btn}>Return</Button>
            </div>
          </form>
        </Card>

      </Container>

    </div>

  );
};

Component.propTypes = {
  className: PropTypes.string,
  addPost: PropTypes.func,
};

const mapStateToProps = state => ({
  posts: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  addPost: post => dispatch(addPost(post)),
});

const PostAddContainer = connect(mapStateToProps, mapDispatchToProps)(Component);


export {
  //Component as PostAdd,
  PostAddContainer as PostAdd,
  Component as PostAddComponent,
};
