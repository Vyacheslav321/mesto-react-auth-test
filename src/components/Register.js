import React, { useState }  from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../utils/Api";

const Register = ({onRegister}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.perventDefault();
    onRegister({password, email})
    .then(() => history.push('/sign-in'))
    .catch((err) => {setMessage(err.mesage || 'Что-то пошло не так')})
  }


  return (
    <section className="register">
      <p className="register__welcome">Регистрация</p>
      <form className="register__form" onSubmit={handleSubmit}>
        <label for="email">Email</label>
        <input id="email" name="email" type="email" value={email} onChange={({ target }) => setEmail(target.value)} />
        <label for="password">Пароль</label>
        <input id="password" name="password" type="password" value={password} onChange={({ target }) => setPassword(target.value)} />
        <div className="register__button-container">
          <button className="register__link" type="submit">Зарегистрироваться</button>
        </div>
      </form>
      <div className="register__signin">
        <p>Уже зарегистрированы?</p>
        <Link to="sign-in" className="register__login-link">Войти</Link>
      </div>
    </section>
  );
}

export default Register;
