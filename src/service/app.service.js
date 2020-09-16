class AppService {

  _enviromentApi = 'https://swapi.dev/api/people';
  themes = {
    YELLOW: 'yellow',
    DARK: 'dark'
  };

  fetchData() {

    return fetch(`${this._enviromentApi}/1`);

  }

}

export default AppService;