import React from 'react';
import { nanoid } from 'nanoid';
import Forma from './Forma/Forma';

class App extends React.Component {
  state = {
    contacts: [{ id: 4564, name: 'Vasya', numberTel: '098564372' }],
  };
  //генерируем необходимые ключи
  idGenerator = () => nanoid();
  formSubmitApp = data => {
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: this.idGenerator(),
            name: data.name,
            numberTel: data.number,
          },
        ],
      };
    });
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <div>Phonebook</div>
        <Forma chengeSabmit={this.formSubmitApp} />

        <div>Contacts</div>
        <ul>
          {contacts.map(el => (
            <li key={el.id}>
              {el.name}: {el.numberTel}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
