import { Item, Button, Paragraf } from './contacts.styled';

const ContactsList = ({ list, onDeleteContact }) => (
    
        <ul>
            {list.map(({ id, name, number }) => (
                <Item key={id} >
                    <Paragraf>{name}: {number}</Paragraf>
                    <Button type="button" onClick={() => onDeleteContact(id)}>DELETE</Button>
                </Item>
            ))}
        </ul>
    )

export default ContactsList