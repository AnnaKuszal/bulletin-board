import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './PostAdd.module.scss';

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';


const Component = ({className}) => {

  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Submitted');
  };

  return (

    <div className={clsx(className, styles.root)}>
      <h2>Add new post</h2>

      <Container maxWidth="lg">

        <Card className={styles.card}>

          <Typography gutterBottom className={styles.title}>
            Edit post
          </Typography>

          <form className={styles.form} onSubmit={e => handleSubmit(e)}>
            <TextField
              id="title"
              label="Title"
              required
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
              className={styles.textInput}
              onChange={handleChange}

            />
            <TextField
              id="mail"
              label="E-mail"
              type="email"
              required
              className={styles.textInput}
              onChange={handleChange}
            />
            <TextField
              id="phone"
              label="Phone number"
              type="string"
              className={styles.textInput}
              onChange={handleChange}
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
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);


export {
  Component as PostAdd,
  // Container as PostAdd,
  Component as PostAddComponent,
};
