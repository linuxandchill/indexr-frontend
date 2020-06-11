import React from 'react';
import './App.css';
import Header from './header/header';
import Searchbox from './searchbox/searchbox';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

const client = new ApolloClient({
uri: 'http://localhost:5000/graphql'
})


function App() {
  return (
<React.StrictMode>
<ApolloProvider client={client} >
    <Header />
    <Searchbox />

</ApolloProvider>
</React.StrictMode>
  );
}

export default App;
