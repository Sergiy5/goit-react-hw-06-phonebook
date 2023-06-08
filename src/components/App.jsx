import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types'
import Form from './Form/form';
import ContactsList from './Contacts/contacts';
import Filter from './Filter/filter';


const App = () => {
  const contacts = useSelector(state => state.contacts);
 
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem('contacts')) ?? []})
  // const [dataFilter, setDataFilter] = useState('');  

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  
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
        <Form />
        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
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