import React from 'react';
import './App.css';
import teamNames from './CollegeBasketballTeams (1).json';

interface TeamProps {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

const teams = teamNames.teams;

function Welcome() {
  return (
    <div>
      <h1>College Basketball</h1>
      <h3>
        As you explore this site, you will find that you can find information
        about all of the different college basketball teams this year like where
        they are from, team name and more. I hope you enjoy!
      </h3>
    </div>
  );
}

class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div>
        <br></br>
        <br></br>
        <h2>{oneTeam.school}</h2>
        <h3>Mascot: {oneTeam.name}</h3>
        <h3>
          Location: {oneTeam.city}, {oneTeam.state}
        </h3>
      </div>
    );
  }
}

function DisplayTeam() {
  return (
    <div>
      {teams.map((singleTeam) => (
        <Team key={singleTeam.school} {...singleTeam} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />,
      <DisplayTeam />
    </div>
  );
}

export default App;
