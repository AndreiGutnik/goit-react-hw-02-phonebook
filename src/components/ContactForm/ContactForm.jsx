import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import {
  Form,
  Input,
  Button,
  InputWrap,
  IconPhone,
  IconUser,
} from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  labelNameId = nanoid();
  labelNumberId = nanoid();

  onChangeInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSubmitForm = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.onSubmitForm}>
        <div>
          <label htmlFor={this.labelNameId}>Name</label>
          <InputWrap>
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              placeholder="Name"
              required
              value={name}
              id={this.labelNameId}
              onChange={this.onChangeInput}
            />
            <IconUser />
          </InputWrap>
        </div>

        <div>
          <label htmlFor={this.labelNumberId}>Number</label>
          <InputWrap>
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              placeholder="Phone number"
              required
              value={number}
              id={this.labelNumberId}
              onChange={this.onChangeInput}
            />
            <IconPhone />
          </InputWrap>
        </div>

        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}
