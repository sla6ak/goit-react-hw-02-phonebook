import React from 'react';
import { nanoid } from 'nanoid';
import Forma from './Forma/Forma';
import Title from './Title/Title';
import s from './App.module.css';

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
      <div className={s.conteiner}>
        <Title text={'Phonebook'} />
        <Forma chengeSabmit={this.formSubmitApp} />
        <Title text={'Contacts'} />
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
