import { useState } from 'react';
import { nanoid } from 'nanoid'
import { WraperForm, Input, BtnSubmit, Label } from './form.styled';

const Form = ({onSubmit} )=> {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target }) => {
    if (target.name === 'name') {
      setName(target.value);
    }
    if (target.name === 'number') {
      setNumber(target.value);
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    const id = nanoid(5);
    // const {name, number } = this.state
    onSubmit({ id, name, number });
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
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
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
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
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
