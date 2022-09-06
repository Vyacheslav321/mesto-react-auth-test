import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password })
      .then(() => {
        history.push("/");
      })
      .then(() => {
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        setMessage(err);
      });
  };

  return (
    <section className="register">
      <p className="register__welcome">Вход</p>
      <p className="register__error">{message}</p>
      <form className="register__form" onSubmit={handleSubmit}>
        {/* <label htmlFor="email">Email</label> */}
        <input
          className="register__input"
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <span id="register-email-error" className="error">
          Email
        </span>
        {/* <label htmlFor="password">Пароль</label> */}
        <input
          className="register__input"
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <span id="register-password-error" className="error">
          Email
        </span>
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
