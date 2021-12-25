import logo from './logo.svg';
import './App.css';
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from,} from "@apollo/client";
import React,{ Component } from 'react';
import { onError } from "@apollo/client/link/error";
import GetVehicles from "./components/GetVehicles";
import Form from "./components/Form";
import { Card } from './components/Card';
import { Card1 } from './components/Card1';
//import './Drop.css';

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert('Graphql error ${message}');
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:5000/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

//console.log(Card)
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <div className='cont'>
        <div className="App" >
          <Card />
          <Card1 />
          {<GetVehicles />} {/*display's the card with details*/}
          {<Form />}  {/*inserts a new card */}
        </div>
        </div>
      </ApolloProvider>
    );
  }
}


export default App;

