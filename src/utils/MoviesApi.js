class MoviesApi {
  constructor(baseUrl) {
    this.url = baseUrl;
  }

  getData() {
    return fetch(this.url)
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
      });
  }
}

const Api = new MoviesApi('https://api.nomoreparties.co/beatfilm-movies');
export default Api;
