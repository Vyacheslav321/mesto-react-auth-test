import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Register = ({ onRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onRegister({ email, password })
      .then(() => {
        history.push("/sign-in");
      })
      .catch((err) => {
        setMessage("Ошибка " + err.mesage || "Что-то пошло не так");
      });
  };

  return (
    <section className="register">
      <p className="register__welcome">Регистрация</p>
      <p className="register__message">{message}</p>
      <form className="register__form" onSubmit={handleSubmit}>
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
          Пароль
        </span>
        <div className="register__button-container">
          <button className="register__link" type="submit">
            Зарегистрироваться
          </button>
        </div>
      </form>
      <p className="register__signin">
        Уже зарегистрированы?
        <Link to="sign-in" className="register__login-link">
          Войти
        </Link>
      </p>
    </section>
  );
};

export default Register;
