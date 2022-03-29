import s from './ContactList.module.css';
import React from 'react';
import NotContacts from 'Components/NotContacts/NotContacts';
import propTypes from 'prop-types';
import Filter from './Filter/Filter';
import Contact from './Contact/Contact';

class ContactList extends React.Component {
  state = {};

  render() {
    const list = this.props.contacts();
    return (
      <>
        <Filter filter={this.props.filter} onFinde={this.props.onFinde} />
        {list.length > 0 ? (
          <ul className={s.list}>
            {list.map(el => (
              <li className={s.li} key={el.id}>
                <Contact el={el} deleteEl={this.props.deleteEl} />
              </li>
            ))}
          </ul>
        ) : (
          <NotContacts text={'Nothing found for your request'} />
        )}
      </>
    );
  }
}
ContactList.propTypes = {
  filter: propTypes.string,
  onFinde: propTypes.func,
  deleteEl: propTypes.func,
  contacts: propTypes.func,
};
export default ContactList;
