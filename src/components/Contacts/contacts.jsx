import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'components/Redux/Contacts/contactsReducer';
import { Item, Button, Paragraf } from './contacts.styled';

const ContactsList = () => {
  const contacts = useSelector(state => state.contacts);
  const dataFilter = useSelector(state => state.filter);
  const dispatch = useDispatch();
    
  const onFilteredContacts = () => {
    if (dataFilter) {
      const normalisedContacts = dataFilter.toLowerCase();
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalisedContacts)
      );
    }
    return contacts;
  };
  
  const filteredContacts = onFilteredContacts();
    
  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Paragraf>
            {name}: {number}
          </Paragraf>
          <Button type="button" onClick={() => dispatch(deleteContact(id))}>
            DELETE
          </Button>
        </Item>
      ))}
    </ul>
  );
};

export default ContactsList;
