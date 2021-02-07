import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';

export default function Form({ setInput, setCall, setSend, handleSubmit }) {
  const handleRadio = (event) => {
    setCall(event.target.value);
  };

  return (
    <>
      <div className={styles.form}>
        <div className={styles.searchContainer}>
          <form className={styles.formContainer} onSubmit={handleSubmit}>
            <input
              className={styles.input}
              placeholder='api url goes here'
              onChange={(e) => setInput(e.target.value)}
            />
            <button className={styles.button} type='submit'>
              {' '}
              GO!{' '}
            </button>
          </form>
        </div>
        <div className={styles.buttonContainer}>
          <div className={styles.requestButtons} onChange={handleRadio}>
            <label className={styles.label}>
              <input
                className={styles.radioButton}
                value='get'
                type='radio'
                name='call'
              />
              Get
            </label>
            <label className={styles.label}>
              <input
                className={styles.radioButton}
                value='post'
                type='radio'
                name='call'
              />
              Post
            </label>
            <label className={styles.label}>
              <input
                className={styles.radioButton}
                value='put'
                type='radio'
                name='call'
              />
              Put
            </label>
            <label className={styles.label}>
              <input
                className={styles.radioButton}
                value='delete'
                type='radio'
                name='call'
              />
              Delete
            </label>
          </div>
          <textarea
            className={styles.requestInput}
            onChange={(e) => setSend(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}
Form.propTypes = {
  setInput: PropTypes.func,
  setCall: PropTypes.func,
  setSend: PropTypes.func,
  handleSubmit: PropTypes.func,
};
