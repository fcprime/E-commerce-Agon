import React from 'react';
import styles from './Form.scss';

const Form = () => {
  return (
    <>
      <h2 className="form-title title">Contact Form</h2>
      <form
        className="form contact__form"
        action="#">
        <div className="form__box">
          <input
            type="text"
            className="form__input"
            placeholder="Your name"
          />
          <input
            type="text"
            className="form__input"
            placeholder="Your E-mail address"
          />
        </div>
        <textarea
          className="form__textarea"
          placeholder="Message here"></textarea>
        <button
          className="form__btn"
          type="submit">
          send message
        </button>
      </form>
    </>
  );
};

export default Form;
