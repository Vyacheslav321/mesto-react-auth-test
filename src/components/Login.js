import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.perventDefault();
    onLogin({password, email})
    .then(() => {
      history.push('/')
    })
    .then(() => {
      setEmail('');
      setPassword('');
    })
    .catch((err) => {
      setMessage(err)
    })
  };

  return (
    <section className="register">
      <p className="register__welcome">Вход</p>
      <p className="register__error">{message}</p>
      <form className="register__form" onSubmit={handleSubmit}>
        <label for="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <label for="password">Пароль</label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <div className="register__button-container">
          <button className="register__link" type="submit">
            Войти
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;