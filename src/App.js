import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [{
    'id':1,
    'image':'https://placeimg.com/64/64/1',
    'name':'이태호1',
    'birthday':'780907',
    'gender':'몰라',
    'job':'프로글래머',
  },
  {
    'id':2,
    'image':'https://placeimg.com/64/64/2',
    'name':'이태호2',
    'birthday':'780907',
    'gender':'몰라',
    'job':'프로글래머',
  },
  {
    'id':3,
    'image':'https://placeimg.com/64/64/3',
    'name':'이태호3',
    'birthday':'780907',
    'gender':'몰라',
    'job':'프로글래머',
  }
]

class App extends Component {
  render(){
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer   
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })
        }


      </div>
    )
  }
}

export default App;
