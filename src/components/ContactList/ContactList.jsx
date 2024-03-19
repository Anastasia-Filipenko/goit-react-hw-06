import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from '../ContactList/ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  const filters = useSelector(state => state.filters);

  const contact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {contact.map(contact => (
        <li key={contact.id} className={css.item}>
          <Contact
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        </li>
      ))}
    </ul>
  );
}
