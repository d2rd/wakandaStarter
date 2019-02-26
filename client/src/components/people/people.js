import React, { Component } from 'react';
import './people.css'; // import your component stylesheet here

class People extends Component {
  constructor() {
    super();
    this.state = {
      people: []
    }
  }

  componentDidMount() {
    fetch('/api/people')
      .then(res => res.json())
      .then(people => this.setState({people}, () => console.log('People fetched...', people)));
  }
  render() {
    return (
      <div>
        <h2>People</h2>
        <ul>
          {this.state.people.map(customer =>
            <li key={customer.id}>{ customer.firstName } { customer.lastName }</li>  
          )}
        </ul>
      </div>
    );
  }
}

export default People;
