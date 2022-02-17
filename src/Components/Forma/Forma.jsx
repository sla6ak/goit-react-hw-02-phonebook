import React from 'react';
import { nanoid } from 'nanoid';
import s from './Forma.module.css';

class Forma extends React.Component {
  state = { name: '', number: '' };

  //генерируем необходимые ключи
  idGenerator = () => nanoid();
  idName = nanoid();
  idTel = nanoid();
  // универсальный метод для инпутов
  onCangeInpute = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  //внутрений метод сабмита обрабатывающий событие
  formSubmit = event => {
    event.preventDefault();
    this.props.chengeSabmit(this.state);
    this.reset();
  };
  // очистка формы
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={s.forma} action="" onSubmit={this.formSubmit}>
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
    );
  }
}

export default Forma;
