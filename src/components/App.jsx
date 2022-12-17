import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import intialContacts from './Contacts.json';
import Section from './Section';
import Filter from './Filter';
import { Wrap } from './App.styled';
class App extends Component {
  state = {
    contacts: intialContacts,
    filter: '',
    name: '',
    number: '',
  };

  addContact = ({ name, number }) => {
    const isInContacts = this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isInContacts) {
      alert(`${name} is already in contacts`);
      return false;
    }
    const contact = {
      id: nanoid(5),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));

    return true;
  };

  onDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  filterContact = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  onFiltredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    return (
      <Wrap>
        <Section title={`Phonebook`}></Section>

        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter filter={this.filter} filterContact={this.filterContact} />
        <ContactList
          contacts={this.onFiltredContacts()}
          onDeleteContact={this.onDeleteContact}
        />
      </Wrap>
    );
  }
}

export default App;
