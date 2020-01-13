import React from 'react';
import '../stylesheets/App.css';
import {fetchData}  from '../services/Api.js';
import CharacterList from './CharacterList';

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.fetchData=this.fetchData.bind(this)
    this.state={
      allCharacters: []
    }
  }
  componentDidMount(){
    fetchData()
      .then(data => {
        this.setState({
          allCharacters: data.results
        })
        console.log(this.state.allCharacters);
      });
    
};

  render() {
    return (
      <div className="App">
        <CharacterList
          allCharacters={this.state.allCharacters} 
        />
      </div>
    );
  }
}

export default App;
