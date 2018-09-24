import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from 'react-apollo/test-utils';
import Login from '../components/Login';
import Register from '../components/Register';
import LoginMutation from '../grapql/loginMutation';

describe('Login', () => {
  it('Login render without error', () => {
    renderer.create(
      <MockedProvider mocks={[]}>
        <Login />
      </MockedProvider>
    );
  });
  it('Register render without error', () => {
    renderer.create(
      <MockedProvider mocks={[]}>
        <Register />
      </MockedProvider>
    );
  });
});
