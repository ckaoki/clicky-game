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

  getCharacter = () => {return this.state.characters[0]};
  
  render(){
    {console.log(this.state.characters[0].image)};
    return (
      <Wrapper>
        {/* <Navbar /> */}
        <Wrapper></Wrapper>
        <Wrapper></Wrapper>
        <Wrapper> 
            {this.state.characters.map(character => (
            <CharacterCard id={character.id} key={character.id} name={character.name} image={character.image}/>
            ))}
        </Wrapper>
      </Wrapper>
    )
  }
}

export default App;
