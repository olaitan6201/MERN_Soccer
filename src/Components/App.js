import axios from 'axios';
import { Component } from 'react';
import './App.css';
import PlayerForm from './Player/PlayerForm';
import PlayerList from './Player/PlayerList';
import PlayerSingle from './Player/PlayerSingle';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      players: [],
      currentPlayer: null
    }
    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this)
  }

  updateCurrentPlayer = (item) => {
    this.setState({
      currentPlayer: item
    })
  }

  componentDidMount() {
    const url = 'http://localhost:3500/players'

    axios.get(url).then((res) => {
      this.setState({
        players: res.data
      })
    }).catch((err) => console.error(err))
  }

  render() {
    return (
      <div className="container-fluid">
        <div className='row'>
          <div className='col s12'>
            Menu
          </div>
        </div>
        <div className='row'>
          <div className='col s5'>
            <PlayerList 
              players={this.state.players}
              updateCurrentPlayer={this.updateCurrentPlayer}
            />
          </div>
          <div className='col s7'>
            <PlayerSingle />
          </div>
        </div>
        <div className='row'>
          <div className='col s12'>
            <PlayerForm />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
