import React from 'react';
import { ContacItem, Text, Button } from './ContactItem.styled';

export function ContactItem({ contacts, onDelete }) {
  return contacts.map(({ id, name, number }) => (
    <ContacItem key={id}>
      <Text>
        {name}: <span>{number}</span>
      </Text>
      <Button type="button" data-id={id} onClick={onDelete}>
        Delete
      </Button>
    </ContacItem>
  ));
}
