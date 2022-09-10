const BASE_URL = 'https://auth.nomoreparties.co';

function checkResOk(res) {
  if (res.ok) {
      return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({email, password})
  })
  .then(checkResOk)
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({email, password})
  })
  .then(checkResOk)
  // .then((data) => {
  //   if (data.token) {
  //     localStorage.setItem('token', data.token);
  //     return data;
  //   }
  // })
};

export const getToken = (token) => {
  return fetch (`${BASE_URL}/users/me`, {
    metod: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${token}`
    },
  })
  .then(checkResOk)
};