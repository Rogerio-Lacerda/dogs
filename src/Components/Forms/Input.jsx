import React from 'react';
import styles from './Input.module.css';

const Input = ({ id, type, label, value, error, onChange, onBlur }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        <input
          type={type}
          id={id}
          name={id}
          value={value}
          className={styles.input}
          onChange={onChange}
          onBlur={onBlur}
        />
        {error ? <span className={styles.error}>{error}</span> : null}
      </div>
    </>
  );
};

export default Input;
