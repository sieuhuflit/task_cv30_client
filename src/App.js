import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Root from './root';

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Root />
    </ApolloProvider>
  );
};

export default App;
