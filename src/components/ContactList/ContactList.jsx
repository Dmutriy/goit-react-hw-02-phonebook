import React from 'react';
import PropTypes from 'prop-types';
import { List, Item, Text } from './ContactList.styled';
import Button from '@mui/material/Button';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Text>
            {name}: {number}
          </Text>
          <Button
            variant="outlined"
            size="medium"
            onClick={() => onDeleteContact(id)}
          >
            Del
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;

List.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
};
