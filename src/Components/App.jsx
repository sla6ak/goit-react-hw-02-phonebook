import React from 'react';
import { nanoid } from 'nanoid';

class App extends React.Component {
  state = {
    contacts: [{ id: 4564, name: 'Vasya', numberTel: '098564372' }],
    name: '',
    number: '',
  };
  //генерируем необходимые ключи
  idGenerator = () => nanoid();
  idName = nanoid();
  idTel = nanoid();

  onCangeInpute = event => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };
  formSubmit = event => {
    event.preventDefault();
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: this.idGenerator(),
            name: this.state.name,
            numberTel: this.state.number,
          },
        ],
      };
    });
    this.reset();
  };
  reset = () => {
    this.setState({ name: '' });
  };
  render() {
    const { contacts } = this.state;
    return (
      <div>
        <div>Phonebook</div>

        <form action="" onSubmit={this.formSubmit}>
          <label htmlFor={this.idName}>your name</label>
          <input
            id={this.idName}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.onCangeInpute}
            value={this.state.name}
          />
          <label htmlFor={this.idTel}>your telephone</label>
          <input
            id={this.idTel}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.onCangeInpute}
          />
          <button type="submit">Submit</button>
        </form>
        <div>Contacts</div>
        <ul>
          {contacts.map(el => (
            <li key={el.id}>
              <div>{el.name}</div>
              <div>{el.numberTel}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
