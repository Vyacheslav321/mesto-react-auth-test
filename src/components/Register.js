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
        history.push("/sign-in")
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
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <label htmlFor="password">Пароль</label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <div className="register__button-container">
          <button className="register__link" type="submit">
            Зарегистрироваться
          </button>
        </div>
      </form>
      <div className="register__signin">
        <p>Уже зарегистрированы?</p>
        <Link to="sign-in" className="register__login-link">
          Войти
        </Link>
      </div>
    </section>
  );
};

export default Register;
