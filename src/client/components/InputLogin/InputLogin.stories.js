import React from 'react';
import InputLogin from './InputLogin.component';
import { action } from '@storybook/addon-actions';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'InputLogin',
  component: InputLogin,
  decorators: [withKnobs]
};

export const Email = () => (
  <InputLogin
    type={text('Input Type','email')} 
    placeholder={text('Input Placeholder Text','Email') }
    onChange={action('email value changed')}
    icon={faUser}
  />
);

export const Paswword = () => (
  <InputLogin
    type={text('Input Type','password')} 
    placeholder={text('Input Placeholder Text','Password')}
    onChange={action('password value changed')}
    icon={faKey}
  />
);
