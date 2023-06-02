import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import Form from './Form/form';
import ContactsList from './Contacts/contacts';
import Filter from './Filter/filter';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? []})
  const [dataFilter, setDataFilter] = useState('');  

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  const ifExsistContact = (newName) => {
    console.log('newName', newName);
    if (contacts.length){ return contacts.find(({ name }) => name === newName);}
  }

  const addContacts = newContact => {
    ifExsistContact(newContact.name)
      ? alert(`${newContact.name} is already in contacts`)
      :
      setContacts(prev => [...prev, newContact]);
  }

  const onFilterChange = e => {
    setDataFilter(e.currentTarget.value);
  }
  
  const onFilteredContacts = () => {
    if(dataFilter){
    const normalisedContacts = dataFilter.toLowerCase();
      return contacts.filter(({ name }) => name.toLowerCase().includes(normalisedContacts))
    }
    return contacts
  }

  const onDeleteContact = (cotactId) => {   
    setContacts(contacts.filter(({ id }) => id !== cotactId))
  }

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <Form onSubmit={addContacts} />
        <h2>Contacts</h2>
        <Filter value={dataFilter} onChange={onFilterChange} />
        <ContactsList
          list={onFilteredContacts()}
          onDeleteContact={onDeleteContact}
        />
      </div>
    );
}

export default App;

App.propTypes = {
  state: PropTypes.exact({
    contacts: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    filter: PropTypes.string,
  }),
}