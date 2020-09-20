import Luke from '../assets/luke.png';
import DarthVader from '../assets/darth_vader.png';

class AppService {

  _enviromentApi = 'https://swapi.dev/api/people/';
  themes = {
    YELLOW: 'yellow',
    DARK: 'dark'
  };
  enumPersons = {
    LUKA: 1,
    DARTH: 4
  }

  fetchData(param) {

    return fetch(`${this._enviromentApi}${param}/`).then(response => response.json());

  }

  getPersonRandom(persons) {

    let personSelected = persons[Math.floor(Math.random() * persons.length)];

    personSelected.id = personSelected.name === 'Luke Skywalker' ? this.enumPersons.LUKA : this.enumPersons.DARTH;

    return personSelected;

  } 

  factoryThemeByPerson(person) {

    if (person.id === this.enumPersons.LUKA) {
      person.theme =  this.themes.YELLOW;
      person.avatar = Luke;
    } else {

      person.theme =  this.themes.DARK;
      person.avatar = DarthVader;

    }

    return {
      name: person.name,
      avatar: person.avatar,
      theme: person.theme
    };

  }

}

export default AppService;