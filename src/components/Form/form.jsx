import { useState } from 'react';
import { nanoid } from 'nanoid'
import { WraperForm, Input, BtnSubmit, Label } from './form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'components/Redux/Contacts/contactsReducer';

const contactsState = state => state.contacts;


const Form = ()=> {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(contactsState);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    if (target.name === 'name') {
      setName(target.value);
    }
    if (target.name === 'number') {
      setNumber(target.value);
    }
  };

  const isContactExsist = newName => {
    if (contacts.length) {
      return contacts.find(({ name }) => name === newName);
    }
  };

  const addNewContact = newContact => {
    isContactExsist(newContact.name)
      ? alert(`${newContact.name} is already in contacts`)
      : dispatch(addContact(newContact));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const id = nanoid(5);
    addNewContact({ id, name, number });
   setName('')
   setNumber('')
  };

  return (
    <form onSubmit={handleSubmit}>
      <WraperForm>
        <Label htmlFor="nameInput" className="lableInputName">
          Name
        </Label>
        <Input
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
        />
        <Label htmlFor="numberInput" className="lableInputNumber">
          Number
        </Label>
        <Input
          type="tel"
          name="number"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number}
        />
        <BtnSubmit type="submit" className="btnSubmit">
          Add contact
        </BtnSubmit>
      </WraperForm>
    </form>
  );
};

export default Form;
