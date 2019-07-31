import React from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import Navbar from './components/navbar';
import CharacterCard from './components/CharacterCard';
import characters from './characters.json'

class App extends React.Component {
  state = {
    characters
   };

  randomizeCharacters = () => {let array = [this.state.characters[4],this.state.characters[1]];
    return array.map(character => (
            <CharacterCard id={character.id} key={character.id} name={character.name} image={character.image}/>
    ));            
  }
  
  render(){
    // {console.log(this.state.characters[0].image)};
    let indexes = this.randomize;
    return (
      <Wrapper>
        {/* <Navbar /> */}
        <Wrapper></Wrapper>
        <Wrapper></Wrapper>
        {/* <Wrapper>  */}

        {this.randomizeCharacters()}
  
      </Wrapper>
    )
  }
}

export default App;
