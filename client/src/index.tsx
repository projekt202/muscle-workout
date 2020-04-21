import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Routing from './routing'


const client = new ApolloClient({
  uri: process.env.REACT_APP_API,
});

const App = () => (
  <ApolloProvider client={client}>
    <Routing />
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));