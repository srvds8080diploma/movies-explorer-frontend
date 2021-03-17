class MainAPi {
  constructor(baseUrl) {
    this.headers = { 'Content-Type': 'application/json' };
    this.baseUrl = baseUrl;
  }

  registration(data) {
    return fetch(`${this.baseUrl}signup`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(new Error(res.statusText));
      })
      .then((res) => res);
  }

  authentication(data) {
    return fetch(`${this.baseUrl}signin`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(new Error(res.statusText));
      })
      .then((res) => res);
  }

  tokenCheck(jwt) {
    return fetch(`${this.baseUrl}users/me`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(new Error(res.statusText));
      })
      .then((res) => res);
  }

  setUserData(data) {
    return fetch(`${this.baseUrl}users/me`,
      {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
        body: JSON.stringify(data),
      })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(new Error(res.statusText));
      })
      .then((res) => res);
  }

  addCard(data) {
    return fetch(`${this.baseUrl}movies`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
        body: JSON.stringify(data),
      })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res);
      });
  }

  getCards() {
    return fetch(`${this.baseUrl}movies`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
      })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res);
      });
  }

  deleteCard(idCard) {
    return fetch(`${this.baseUrl}movies/${idCard}`,
      {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
      })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(new Error(res.statusText));
      });
  }
}

// const baseUrl = 'http://api.srvds.students.nomoredomains.monster/';
const baseUrl = 'http://localhost:3000/';
const Api = new MainAPi(baseUrl);
export default Api;
