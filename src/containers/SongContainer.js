import React, {Component} from 'react'
import SongSelector from '../components/SongSelector';
//import

class SongContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      songs: [],
      currentSong: null
    };

    this.handleSongSelected = this.handleSongSelected.bind(this);
  }



  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'
    fetch(url)
      .then(res => res.json())
      .then(songs => this.setState({songs: songs.feed.entry}))
      .catch(err => console.error)
  }

  handleSongSelected(index){
    const selectedSong = this.state.songs[index]
    selectedSong['position'] = parseInt(index) + 1;
    this.setState({currentSong: selectedSong})
  }

  render(){
    return (
      <div>
        <h2>Song Selector</h2>
        <SongSelector
        songs={this.state.songs}
        onSongSelected={this.handleSongSelected}
        />
      </div>
    )
  }

}

export default SongContainer;
