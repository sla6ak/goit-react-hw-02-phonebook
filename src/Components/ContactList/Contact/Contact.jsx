import s from './Contact.module.css';
import propTypes from 'prop-types';
import { FiX } from 'react-icons/fi';

const Contact = ({ el, deleteEl }) => {
  return (
    <li className={s.li}>
      {el.name}: {el.numberTel}
      <button onClick={() => deleteEl(el.id)}>
        <FiX className={s.svgFix} />
      </button>
    </li>
  );
};

Contact.propTypes = {
  deleteEl: propTypes.func,
  el: propTypes.object,
};

export default Contact;
