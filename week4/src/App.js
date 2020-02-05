import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <form className="form" method="POST">
        <div className="form__title">Sign up</div>
        <p className="form__desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, nostrum? Laudantium molestiae explicabo numquam animi corrupti debitis ratione, accusamus nemo optio eum vero nesciunt facere aperiam! Labore pariatur accusantium exercitationem.
        </p>
        <div className="form__item">
          <label htmlFor="givennames" className="form__label">Given Names</label>
          <input type="text" className="form__input" name="givennames" id="givennames" placeholder="Enter your given name(s)" />
          <span className="form__error">A sample error message</span>
        </div>
        <div className="form__item">
          <label htmlFor="numusers" className="form__label">Number of Users</label>
          <input type="number" className="form__input form__input--small" name="numusers" id="numusers" min="1" max="5" placeholder="How many users? (Max. 5)" />
          <span className="form__error">A sample error message</span>
        </div>
        <div className="form__item">
          <label htmlFor="expirydate" className="form__label">Expiration Date</label>
          <input type="date" className="form__input form__input--small" name="expirydate" id="expirydate" placeholder="Enter an expiration date" />
          <span className="form__error">A sample error message</span>
        </div>
        <div className="form__item">
          <label htmlFor="message" className="form__label">Message</label>
          <textarea maxLength="500" className="form__input" name="message" id="message" placeholder="Enter a detailed message about why you wish to signup. (Max. 500 chars)"></textarea>
          <span className="form__error">A sample error message</span>
        </div>
        <div className="form__item">
          <button className="form__btn" type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default App;
