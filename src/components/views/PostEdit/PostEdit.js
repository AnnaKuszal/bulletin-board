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
import { getAll } from '../../../redux/postsRedux.js';


const Component = ({className, posts, match}) => {

  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
                defaultValue={el.title}
                className={styles.textInput}
                onChange={handleChange}
              />

              <TextField
                variant="outlined"
                multiline
                id="content"
                label="Content"
                placeholder="Text"
                rows="6"
                required
                defaultValue={el.content}
                className={styles.textInput}
                onChange={handleChange}

              />
              <TextField
                id="mail"
                label="E-mail"
                type="email"
                required
                defaultValue={el.mail}
                className={styles.textInput}
                onChange={handleChange}
              />
              <TextField
                id="phone"
                label="Phone number"
                type="string"
                defaultValue={el.phone}
                className={styles.textInput}
                onChange={handleChange}
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
};

Component.defaultProps = {
  posts: [],
};

const mapStateToProps = state => ({
  posts: getAll(state),
});


// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

const PostEditContainer = connect(mapStateToProps)(Component);


export {
  //Component as PostEdit,
  PostEditContainer as PostEdit,
  Component as PostEditComponent,
};
