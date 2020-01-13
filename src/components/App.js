import React from 'react';
import '../stylesheets/App.css';
import {fetchData}  from '../services/Api.js';
import {fetchSingleId}  from '../services/Api.js';
import CharacterList from './CharacterList';
import Search from './Search';
import SingleCharacter from './SingleCharacter';
import Header from './Header';
import { Route, Switch } from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      allCharacters: [],
      value:'',
      singleCharacter: {}
    }
    this.onChangeHandler=this.onChangeHandler.bind(this)
    this.fetchSingleId=this.fetchSingleId.bind(this)
    this.renderCharacter=this.renderCharacter.bind(this)
  }

  componentDidMount(){
    fetchData()
      .then(data => {
        this.setState({
          allCharacters: data.results
        })
        console.log(this.state.allCharacters);
      });
  }

  fetchSingleId(id){
    const id_num = parseInt(id);
    if (id_num !== this.state.singleCharacter.id){
      fetchSingleId(id)
      .then(data => {
        this.setState({
          singleCharacter: data,
        })
        console.log(this.state.singleCharacter)
      })
    }
  }
  
  onChangeHandler(value){ 
    this.setState({
      value: value
    })  
  }

  renderCharacter(props) {
    console.log(props)
    this.fetchSingleId(props.match.params.id);
    return <SingleCharacter character={this.state.singleCharacter}/>
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" >
            <Header/>
            <Search 
              onChangeHandler={this.onChangeHandler}
            />
            <CharacterList
              allCharacters={this.state.allCharacters} 
              value={this.state.value}
            />
          </Route>  
          <Route path="/character/:id" render={this.renderCharacter}></Route>
        </Switch>  
      </div>
    );
  }
}

export default App;
