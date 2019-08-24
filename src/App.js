import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';

class App extends Component {
  handlerCreate = (data) => {
    console.log(data);
  }

  render() {
    return (
      <PhoneForm
        onCreate={this.handlerCreate}
      />
    );
  }
}

export default App;
