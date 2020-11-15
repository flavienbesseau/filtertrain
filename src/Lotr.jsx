import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Button from './Button';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const SousContainer = styled.div`
  border: 1px solid;
  width: 25%;
`;
const Race = styled.div`
  display: flex;
  justify-content: center;
`;

class Lotr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      raceFilter: 'All',
    };
    this.onClickChangeRace = this.onClickChangeRace.bind(this);
  }

  getCharacters = () => {
    const url = 'https://the-one-api.dev/v2/character';
    axios
      .get(url, { headers: { Authorization: 'Bearer E-OcL-7xY79ZwShqiopv' } })
      .then((response) => response.data)
      .then((response) => response.docs)
      .then((charactersArray) =>
        this.setState({ characters: charactersArray })
      );
  };

  componentDidMount() {
    this.getCharacters();
  }

  onClickChangeRace(race) {
    this.setState({ raceFilter: race });
  }

  render() {
    const { characters } = this.state;
    const races = [
      'Dwarf',
      'Human',
      'Elf',
      'Hobbit',
      'Maiar',
      'Orc',
      'Great Spiders',
      'Uruk-hai',
      'NaN',
      'Ents',
      'All',
    ];
    return (
      <div>
        <Race>
          {races.map((race) => (
            <Button race={race} onClickChangeRace={this.onClickChangeRace} />
          ))}
        </Race>

        <Container>
          {characters
            .filter(
              (item) =>
                item.race === this.state.raceFilter ||
                this.state.raceFilter === 'All'
            )
            .map((item) => (
              <SousContainer>
                <h1>{item.name}</h1>
                <p>{item.race}</p>
                <p>{item.wikiUrl}</p>
              </SousContainer>
            ))}
        </Container>
      </div>
    );
  }
}

export default Lotr;

/*
      const filterRace = characters.filter(
      (character) => character.race === 'Human'
    );
      
          
      */
