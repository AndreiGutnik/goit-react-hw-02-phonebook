import React from 'react';
import { PhonebookList } from './ContactList.styled';
import { ContactItem } from 'components/ContactItem/ContactItem';

export function ContactList({ contacts, onDelete }) {
  return (
    <PhonebookList>
      <ContactItem contacts={contacts} onDelete={onDelete} />
    </PhonebookList>
  );
}
