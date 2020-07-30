import API_ENDPOINT from '../config';

const AuthApiService = {
  postLogin(credentials) {
    const baseUrl = 'http://localhost:8000';
    return fetch(`${baseUrl}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
}

export default AuthApiService;