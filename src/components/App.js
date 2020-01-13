import React from 'react';
import '../stylesheets/App.css';
import {fetchData}  from '../services/Api.js';
import CharacterList from './CharacterList';
import Search from './Search';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeHandler=this.onChangeHandler.bind(this)
    this.state={
      allCharacters: [],
      value:'',
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

  onChangeHandler(patata){ //patata es el dato que me manda mi hijo Search
    this.setState({
      value: patata
    })  
  }

  render() {
    return (
      <div className="App">
        <Search 
          onChangeHandler={this.onChangeHandler}
        />
        <CharacterList
          allCharacters={this.state.allCharacters} 
          value={this.state.value}
        />
      </div>
    );
  }
}

export default App;
